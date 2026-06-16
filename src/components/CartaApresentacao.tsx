import React, { useState } from 'react';
import { LetterOfPresentation } from '../types';
import { FileText, Edit2, Check, X } from 'lucide-react';

interface CartaApresentacaoProps {
  letterData: LetterOfPresentation;
  isAdmin: boolean;
  onUpdateLetter: (updated: LetterOfPresentation) => void;
}

export default function CartaApresentacao({
  letterData,
  isAdmin,
  onUpdateLetter
}: CartaApresentacaoProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(letterData.title);
  const [editSubtitle, setEditSubtitle] = useState(letterData.subtitle);
  const [editParagraphs, setEditParagraphs] = useState<string[]>([...letterData.paragraphs]);

  const handleParaChange = (index: number, val: string) => {
    const updated = [...editParagraphs];
    updated[index] = val;
    setEditParagraphs(updated);
  };

  const handleAddParagraph = () => {
    setEditParagraphs([...editParagraphs, 'Novo parágrafo inserido no editor...']);
  };

  const handleRemoveParagraph = (index: number) => {
    const updated = editParagraphs.filter((_, i) => i !== index);
    setEditParagraphs(updated);
  };

  const handleSave = () => {
    onUpdateLetter({
      title: editTitle,
      subtitle: editSubtitle,
      paragraphs: editParagraphs
    });
    setIsEditing(false);
  };

  return (
    <div className="bg-white border border-black p-6 md:p-8 relative select-text shadow-lg rounded-none font-sans">
      {/* Red & Black Geometric accents */}
      <div className="absolute top-0 left-0 w-3.5 h-3.5 bg-red-650 bg-red-600/10 rounded-none" />
      <div className="absolute top-0 right-0 w-3.5 h-3.5 bg-red-600/10 rounded-none" />
      <div className="absolute bottom-0 left-0 w-3.5 h-3.5 bg-red-600/10 rounded-none" />
      <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-red-600/10 rounded-none" />

      {/* Admin edit button */}
      {isAdmin && !isEditing && (
        <button
          onClick={() => {
            setEditTitle(letterData.title);
            setEditSubtitle(letterData.subtitle);
            setEditParagraphs([...letterData.paragraphs]);
            setIsEditing(true);
          }}
          className="absolute top-4 right-4 bg-red-50 text-red-650 bg-red-50 text-red-600 border border-red-200 font-bold text-[10px] uppercase py-1 px-3 rounded-none hover:bg-red-600 hover:text-white transition-all shadow-sm cursor-pointer"
        >
          <Edit2 className="w-3.5 h-3.5" />
          <span>Editar Carta In-Line</span>
        </button>
      )}

      {isEditing ? (
        <div className="space-y-4">
          <div className="bg-neutral-50 p-3 border border-black rounded-none mb-4 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-red-650 bg-red-600 rounded-full animate-ping"></span>
            <span className="text-[10px] text-black font-bold uppercase tracking-wide">Editor Visual da Carta de Apresentação</span>
          </div>

          <div>
            <label className="block text-[10px] font-bold text-neutral-500 uppercase mb-1">Título Principal:</label>
            <input
              type="text"
              className="w-full bg-neutral-50 text-black border border-neutral-300 p-2.5 font-bold uppercase text-xs focus:outline-none focus:ring-1 focus:ring-red-601"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-[10px] font-bold text-neutral-500 uppercase mb-1">Subtítulo secundário:</label>
            <input
              type="text"
              className="w-full bg-neutral-50 text-black border border-neutral-300 p-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-red-601"
              value={editSubtitle}
              onChange={(e) => setEditSubtitle(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-[10px] font-bold text-neutral-500 uppercase mb-1">Parágrafos da Apresentação:</label>
            <div className="space-y-3 font-sans">
              {editParagraphs.map((para, idx) => (
                <div key={idx} className="flex gap-2 items-start">
                  <span className="bg-neutral-100 border border-neutral-300 text-black px-2.5 py-1 text-xs font-bold shrink-0">
                    P{idx + 1}
                  </span>
                  <textarea
                    className="flex-1 bg-neutral-50 border border-neutral-300 p-2.5 text-xs h-24 focus:outline-none focus:ring-1 focus:ring-red-601 font-sans"
                    value={para}
                    onChange={(e) => handleParaChange(idx, e.target.value)}
                  />
                  <button
                    onClick={() => handleRemoveParagraph(idx)}
                    className="bg-neutral-100 text-red-650 text-red-600 border border-neutral-300 p-1.5 hover:bg-red-600 hover:text-white shrink-0 cursor-pointer"
                    title="Excluir parágrafo"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
            <button
              onClick={handleAddParagraph}
              className="mt-2 bg-neutral-50 hover:bg-neutral-150 text-black border border-black text-[10px] font-bold py-1.5 px-3 uppercase transition-colors cursor-pointer"
            >
              + Adicionar Novo Parágrafo
            </button>
          </div>

          <div className="pt-4 border-t border-black flex justify-end gap-2 font-sans">
            <button
              onClick={() => setIsEditing(false)}
              className="bg-neutral-100 hover:bg-neutral-200 text-black font-bold py-1.5 px-4 text-xs uppercase cursor-pointer"
            >
              Cancelar
            </button>
            <button
              onClick={handleSave}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-1.5 px-4 text-xs uppercase shadow-md cursor-pointer"
            >
              Salvar Edições
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex items-center gap-2 text-red-600 mb-2">
            <FileText className="w-5 h-5 text-red-500" />
            <h3 className="text-xs font-bold tracking-wider uppercase">
              {letterData.title}
            </h3>
          </div>
          
          <h2 className="text-xl md:text-2xl font-display font-medium text-black tracking-tight max-w-2xl leading-snug">
            {letterData.subtitle}
          </h2>

          <div className="mt-6 space-y-4 text-xs md:text-sm font-sans text-neutral-705 text-neutral-600 leading-relaxed max-w-3xl">
            {letterData.paragraphs.map((p, idx) => (
              <p key={idx} className="indent-6 md:indent-8 text-justify">
                {p}
              </p>
            ))}
          </div>

          {/* Quick Signature */}
          <div className="mt-8 pt-6 border-t border-black flex items-center justify-between font-sans select-none">
            <div className="text-left">
              <p className="text-xs font-semibold text-black uppercase">Comissão Organizadora</p>
              <p className="text-[10px] text-neutral-500 uppercase">XII Colóquio Políticas Curriculares - UFPB</p>
            </div>
            
            {/* Stamp decoration */}
            <div className="w-14 h-14 rounded-full border border-dashed border-red-600/40 flex items-center justify-center rotate-12 scale-90 opacity-80">
              <span className="text-[7px] text-red-600 font-bold text-center uppercase tracking-tighter">
                UFPB<br />XII CIPC<br />✦ HOMOLOGADO ✦
              </span>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
