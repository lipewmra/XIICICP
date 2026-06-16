import React, { useState } from 'react';
import { CommitteeMember } from '../types';
import { Sparkles, ShieldCheck, Award, Plus, Trash2, ShieldAlert } from 'lucide-react';

interface CoordenacaoScreenProps {
  committee: CommitteeMember[];
  isAdmin: boolean;
  onUpdateCommittee: (members: CommitteeMember[]) => void;
}

export default function CoordenacaoScreen({
  committee,
  isAdmin,
  onUpdateCommittee
}: CoordenacaoScreenProps) {
  const [isAddingMember, setIsAddingMember] = useState(false);
  const [newName, setNewName] = useState('');
  const [newInst, setNewInst] = useState('');
  const [newRole, setNewRole] = useState<'geral' | 'cientifico' | 'organizador'>('geral');

  // Filter lists by category
  const generalList = committee.filter((m) => m.role === 'geral');
  const scientificList = committee.filter((m) => m.role === 'cientifico');
  const organizingList = committee.filter((m) => m.role === 'organizador');

  const deleteMember = (id: string) => {
    onUpdateCommittee(committee.filter((m) => m.id !== id));
  };

  const addMember = () => {
    if (!newName) {
      alert("Por favor, digite o nome do membro.");
      return;
    }
    const fresh: CommitteeMember = {
      id: `com_${Date.now()}`,
      name: newName,
      institution: newInst || "UFPB",
      role: newRole
    };
    onUpdateCommittee([...committee, fresh]);
    setIsAddingMember(false);
    // clean
    setNewName('');
    setNewInst('');
  };

  const drawList = (list: CommitteeMember[], icon: React.ReactNode, title: string, color: string) => {
    return (
      <div className="bg-white border border-black p-5 rounded-none shadow-sm hover:shadow transition-all flex flex-col justify-between w-full">
        <div>
          <div className="flex items-center gap-1.5 font-bold text-xs uppercase mb-5 pb-2.5 border-b border-black select-none">
            {icon}
            <span className={color}>{title}</span>
          </div>

          {list.length === 0 ? (
            <p className="text-xs text-neutral-450 italic font-sans select-none text-left">Nenhum membro listado.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {list.map((m) => (
                <div key={m.id} className="flex justify-between items-center bg-neutral-50 p-3 border border-neutral-200 rounded-none shadow-sm hover:border-black transition-colors">
                  <div className="text-left select-text font-sans">
                    <p className="text-xs font-bold text-black uppercase leading-snug">{m.name}</p>
                    <p className="text-[10px] text-neutral-500 font-bold uppercase mt-0.5">{m.institution}</p>
                  </div>

                  {isAdmin && (
                    <button
                      onClick={() => {
                        if (confirm(`Remover ${m.name} do comitê?`)) {
                          deleteMember(m.id);
                        }
                      }}
                      className="text-[10px] text-red-600 hover:text-black font-bold uppercase shrink-0 pl-2 transition-colors cursor-pointer select-none"
                      title="Excluir do Comitê"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 font-sans select-none">
      {/* Intro Header */}
      <div className="text-center mb-10 select-text">
        <span className="bg-red-50 text-red-600 border border-red-200 px-3 py-1 text-xs font-bold uppercase tracking-wide inline-block mb-3">
          CONSELHOS E ORGANIZAÇÃO DIRETIVA
        </span>
        <h1 className="text-3xl md:text-5xl font-display font-medium text-black tracking-tight uppercase">
          COMISSÕES DO COLÓQUIO
        </h1>
        <p className="mt-2 text-xs md:text-sm text-neutral-500 uppercase font-light tracking-wide">
          Pesquisadores, cientistas e equipe técnica da organização do XII Colóquio
        </p>
      </div>

      {/* ADMIN CONTROLLER FOR EXECUTIVE DIRECTORS */}
      {isAdmin && (
        <div className="mb-8 border border-black bg-neutral-50 p-6 rounded-none shadow-sm text-left select-text">
          {isAddingMember ? (
            <div className="space-y-3 text-xs font-sans">
              <div className="flex items-center gap-1 text-red-600 uppercase font-bold border-b border-black pb-1.5 mb-2 select-none">
                <ShieldAlert className="w-4 h-4 text-red-600" /> <span>Inserir Novo Integrante de Comissão</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div>
                  <label className="block font-semibold text-neutral-700 mb-1">Nome Completo:</label>
                  <input
                    type="text"
                    className="w-full bg-white border border-neutral-300 p-2.5 text-xs text-black focus:ring-1 focus:ring-red-600 font-bold uppercase"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block font-semibold text-neutral-700 mb-1">Instituição de Origem:</label>
                  <input
                    type="text"
                    className="w-full bg-white border border-neutral-300 p-2.5 text-xs text-black focus:ring-1 focus:ring-red-600 uppercase"
                    value={newInst}
                    onChange={(e) => setNewInst(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block font-semibold text-neutral-700 mb-1">Comissão Correspondente:</label>
                  <select
                    className="w-full bg-white border border-neutral-300 p-2.5 text-xs font-bold uppercase text-neutral-700 focus:ring-1 focus:ring-red-600 cursor-pointer"
                    value={newRole}
                    onChange={(e: any) => setNewRole(e.target.value)}
                  >
                    <option value="geral">Coordenação Geral</option>
                    <option value="cientifico">Comitê Científico</option>
                    <option value="organizador">Comitê de Organização Local</option>
                  </select>
                </div>
              </div>
              <div className="flex gap-2 justify-end pt-2 border-t border-black select-none">
                <button
                  onClick={() => setIsAddingMember(false)}
                  className="bg-neutral-100 text-black border border-neutral-300 font-bold px-3 py-1.5 uppercase text-[10px] cursor-pointer"
                >
                  Voltar
                </button>
                <button
                  onClick={addMember}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold px-3 py-1.5 uppercase text-[10px] shadow-sm cursor-pointer"
                >
                  Publicar Membro
                </button>
              </div>
            </div>
          ) : (
            <button
              onClick={() => setIsAddingMember(true)}
              className="w-full py-2.5 bg-red-50 hover:bg-red-100 border border-red-200 text-red-600 text-[10px] font-bold uppercase flex items-center justify-center gap-1.5 rounded-none transition-colors shadow-sm cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Inserir Novo Membro de Comissão</span>
            </button>
          )}
        </div>
      )}

      {/* THREE STACKED LISTS FOR COMMISSIONS */}
      <div className="select-text w-full space-y-10">
        {drawList(
          generalList,
          <Award className="w-5 h-5 text-red-600" />,
          "Membros da Coordenação Geral",
          "text-neutral-900 font-bold"
        )}

        {drawList(
          scientificList,
          <ShieldCheck className="w-5 h-5 text-red-600" />,
          "Membros do Comitê Científico",
          "text-neutral-900 font-bold"
        )}

        {drawList(
          organizingList,
          <Sparkles className="w-5 h-5 text-red-600" />,
          "Membros do Comitê de Organização Local",
          "text-neutral-900 font-bold"
        )}
      </div>

    </div>
  );
}
