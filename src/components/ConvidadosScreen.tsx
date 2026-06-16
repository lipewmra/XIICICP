import React, { useState } from 'react';
import { GuestSpeaker } from '../types';
import { Search, Globe, Award, BookOpen, Plus, Trash2, ShieldAlert } from 'lucide-react';

interface ConvidadosScreenProps {
  speakers: GuestSpeaker[];
  isAdmin: boolean;
  onUpdateSpeakers: (newSpeakers: GuestSpeaker[]) => void;
}

export default function ConvidadosScreen({
  speakers,
  isAdmin,
  onUpdateSpeakers
}: ConvidadosScreenProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState<'todos' | 'nacional' | 'internacional'>('todos');

  // New guest edit dialogs
  const [isAddingGuest, setIsAddingGuest] = useState(false);
  const [newName, setNewName] = useState('');
  const [newOrigin, setNewOrigin] = useState<'nacional' | 'internacional'>('nacional');
  const [newInstitution, setNewInstitution] = useState('');
  const [newTopic, setNewTopic] = useState('');
  const [newBio, setNewBio] = useState('');
  const [newImg, setNewImg] = useState('');
  const [newLattes, setNewLattes] = useState('');
  const [newPub, setNewPub] = useState('');

  // Drag and Drop ordering handler
  const [draggedIdx, setDraggedIdx] = useState<number | null>(null);

  const handleDragStart = (e: React.DragEvent, index: number) => {
    setDraggedIdx(index);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent, targetIndex: number) => {
    e.preventDefault();
    if (draggedIdx === null) return;
    const reordered = [...speakers];
    const [movedItem] = reordered.splice(draggedIdx, 1);
    reordered.splice(targetIndex, 0, movedItem);
    onUpdateSpeakers(reordered);
    setDraggedIdx(null);
  };

  const deleteSpeaker = (id: string) => {
    onUpdateSpeakers(speakers.filter((s) => s.id !== id));
  };

  const addSpeaker = () => {
    if (!newName) {
      alert("Por favor, digite o nome do palestrante.");
      return;
    }
    const fresh: GuestSpeaker = {
      id: `sp_${Date.now()}`,
      name: newName,
      type: newOrigin,
      institution: newInstitution || "UFPB",
      topic: newTopic || "Currículo e Saberes Acadêmicos",
      bio: newBio || "Docente renomado com pesquisas nas teorias de emancipação.",
      imageUrl: newImg || "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300",
      lattesUrl: newLattes || undefined,
      publications: newPub ? newPub.split(',').map((p) => p.trim()) : undefined
    };

    onUpdateSpeakers([...speakers, fresh]);
    setIsAddingGuest(false);
    // clean
    setNewName('');
    setNewInstitution('');
    setNewTopic('');
    setNewBio('');
    setNewImg('');
    setNewLattes('');
    setNewPub('');
  };

  // Filter & Search computation
  const filteredSpeakers = speakers.filter((sp) => {
    const matchesSearch =
      sp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sp.institution.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sp.topic.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesType =
      activeFilter === 'todos' ? true : sp.type === activeFilter;

    return matchesSearch && matchesType;
  });

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 font-sans select-none">
      {/* Header section stamp */}
      <div className="text-center mb-10 select-text">
        <span className="bg-red-50 text-red-600 border border-red-200 px-3 py-1 text-xs font-bold uppercase tracking-wider inline-block mb-3">
          ESPECIALISTAS CONVIDADOS
        </span>
        <h1 className="text-3xl md:text-5xl font-display font-medium text-black tracking-tight uppercase">
          PALESTRANTES CONFIRMADOS
        </h1>
        <p className="mt-2 text-xs md:text-sm text-neutral-500 uppercase font-light tracking-wide">
          Intelectuais nacionais e globais que tecerão debates e diálogos de resistência curricular
        </p>
      </div>

      {/* Grid Controller: Filters & Search bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 mb-8 bg-neutral-50 border border-black p-3 rounded-none shadow-sm font-sans">
        {/* Search Input Box */}
        <div className="flex-1 min-w-0 relative flex items-center">
          <Search className="w-4 h-4 absolute left-3.5 text-neutral-400 pointer-events-none" />
          <input
            type="text"
            className="w-full bg-white border border-neutral-300 py-2.5 pl-10 pr-4 text-xs focus:outline-none focus:ring-1 focus:ring-red-650 focus:ring-red-600 text-black placeholder:text-neutral-400 uppercase font-bold"
            placeholder="Pesquisar por nome, temas ou universidade..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Categories Tab buttons */}
        <div className="flex border border-black p-0.5 bg-neutral-150 rounded-none shrink-0 flex-wrap select-none">
          {(['todos', 'nacional', 'internacional'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-1.5 text-[10px] font-bold uppercase transition-all cursor-pointer ${
                activeFilter === cat
                  ? 'bg-red-600 text-white border border-black font-extrabold'
                  : 'text-neutral-600 hover:text-black'
              }`}
            >
              {cat === 'todos' ? 'TODOS' : cat === 'nacional' ? 'NACIONAIS' : 'INTERNACIONAIS'}
            </button>
          ))}
        </div>
      </div>

      {/* ADMIN CONTROL FOR GUESTS */}
      {isAdmin && (
        <div className="mb-8 border border-black bg-neutral-50 p-6 shadow-sm text-left select-text">
          {isAddingGuest ? (
            <div className="space-y-4 text-xs">
              <div className="flex items-center gap-2 border-b border-black pb-2 select-none">
                <ShieldAlert className="w-5 h-5 text-red-600" />
                <h4 className="font-bold text-xs text-black uppercase tracking-wide">Cadastrar Novo Palestrante Curricular</h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-sans">
                <div>
                  <label className="block font-bold text-neutral-600 mb-1 uppercase">Nome Completo:</label>
                  <input
                    type="text"
                    className="w-full bg-white border border-neutral-300 p-2.5 focus:ring-1 focus:ring-red-601 focus:ring-red-650 text-black font-bold uppercase"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    placeholder="ex: Dr. António Nóvoa"
                  />
                </div>
                <div>
                  <label className="block font-bold text-neutral-600 mb-1 uppercase">Instituição de Origem:</label>
                  <input
                    type="text"
                    className="w-full bg-white border border-neutral-300 p-2.5 focus:ring-1 focus:ring-red-601 focus:ring-red-650 text-black uppercase"
                    value={newInstitution}
                    onChange={(e) => setNewInstitution(e.target.value)}
                    placeholder="ex: Univ. de Lisboa (Portugal)"
                  />
                </div>
                <div>
                  <label className="block font-bold text-neutral-600 mb-1 uppercase">Abrangência:</label>
                  <select
                    className="w-full bg-white border border-neutral-300 p-2.5 focus:ring-1 focus:ring-red-601 focus:ring-red-650 font-bold uppercase text-neutral-700 cursor-pointer"
                    value={newOrigin}
                    onChange={(e: any) => setNewOrigin(e.target.value)}
                  >
                    <option value="nacional">Nacional (Brasil)</option>
                    <option value="internacional">Internacional (Ibero-América / Outros)</option>
                  </select>
                </div>
                <div className="md:col-span-3 font-sans">
                  <label className="block font-bold text-neutral-600 mb-1 uppercase">Tema / Tópico da Conferência:</label>
                  <input
                    type="text"
                    className="w-full bg-white border border-neutral-300 p-2.5 text-xs focus:ring-1 focus:ring-red-601 focus:ring-red-650 text-black uppercase"
                    value={newTopic}
                    onChange={(e) => setNewTopic(e.target.value)}
                    placeholder="ex: Políticas Curriculares em Redes..."
                  />
                </div>
                <div className="md:col-span-3">
                  <label className="block font-bold text-neutral-600 mb-1 uppercase">Bibliografia / Publicações Principais (Separadas por vírgula):</label>
                  <input
                    type="text"
                    className="w-full bg-white border border-neutral-300 p-2.5 text-xs focus:ring-1 focus:ring-red-601 focus:ring-red-650 text-black uppercase"
                    value={newPub}
                    onChange={(e) => setNewPub(e.target.value)}
                    placeholder="ex: Currículo e Liberdade (2021), O Espaço Escolar (2023)"
                  />
                </div>
                <div className="md:col-span-3">
                  <label className="block font-bold text-neutral-600 mb-1 uppercase">Foto de Avatar URL:</label>
                  <input
                    type="text"
                    className="w-full bg-white border border-neutral-300 p-2.5 text-[10px] focus:ring-1 focus:ring-red-601 focus:ring-red-650 text-black font-mono"
                    value={newImg}
                    onChange={(e) => setNewImg(e.target.value)}
                    placeholder="Link da foto..."
                  />
                </div>
                <div className="md:col-span-3 font-sans">
                  <label className="block font-bold text-neutral-600 mb-1 uppercase">URL do Currículo Lattes / CV profissional:</label>
                  <input
                    type="text"
                    className="w-full bg-white border border-neutral-300 p-2.5 text-xs focus:ring-1 focus:ring-red-601 focus:ring-red-650 text-black font-mono"
                    value={newLattes}
                    onChange={(e) => setNewLattes(e.target.value)}
                    placeholder="ex: http://lattes.cnpq.br/..."
                  />
                </div>
                <div className="md:col-span-3">
                  <label className="block font-bold text-neutral-600 mb-1 uppercase">Breve Biografia Acadêmica:</label>
                  <textarea
                    className="w-full bg-white border border-neutral-300 p-2.5 text-xs h-20 resize-y focus:ring-1 focus:ring-red-601 focus:ring-red-650 text-black font-sans"
                    value={newBio}
                    onChange={(e) => setNewBio(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex gap-2 justify-end pt-2 border-t border-black font-sans select-none">
                <button
                  onClick={() => setIsAddingGuest(false)}
                  className="bg-neutral-100 text-black border border-neutral-300 font-bold py-1.5 px-4 text-xs uppercase hover:bg-neutral-200 cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  onClick={addSpeaker}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-1.5 px-4 text-xs uppercase shadow-sm cursor-pointer"
                >
                  Confirmar Cadastro
                </button>
              </div>
            </div>
          ) : (
            <button
              onClick={() => setIsAddingGuest(true)}
              className="w-full py-3 bg-red-50 hover:bg-red-100 border border-red-200 text-red-600 text-xs font-bold uppercase flex items-center justify-center gap-2 rounded-none transition-all shadow-sm cursor-pointer"
            >
              <Plus className="w-5 h-5" />
              <span>Inserir Novo Palestrante Convidado no Catálogo</span>
            </button>
          )}
        </div>
      )}

      {/* GEOMETRIC GRID OF SPEAKERS WITH HOVER EFFECT */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 select-text">
        {filteredSpeakers.length === 0 ? (
          <div className="col-span-full bg-white border border-black p-8 text-center uppercase text-neutral-400 select-none">
            Nenhum palestrante corresponde à pesquisa ou filtro correspondente.
          </div>
        ) : (
          filteredSpeakers.map((sp, idx) => (
            <div
              key={sp.id}
              draggable={isAdmin}
              onDragStart={(e) => handleDragStart(e, idx)}
              onDragOver={(e) => handleDragOver(e, idx)}
              onDrop={(e) => handleDrop(e, idx)}
              className={`bg-white border border-black rounded-none flex flex-col relative overflow-hidden group shadow-sm hover:shadow transition-all ${
                isAdmin ? 'cursor-move border-dashed border-red-400 bg-neutral-50/20' : ''
              }`}
            >
              {/* Drag/Arraste Overlay indicator */}
              {isAdmin && (
                <div className="absolute top-2 left-2 z-30 bg-red-600 text-white border border-black text-[8px] font-bold uppercase py-0.5 px-1.5 rounded-none shadow-sm select-none pointer-events-none">
                  ☰ ORDENAR
                </div>
              )}

              {/* Photo Box container */}
              <div className="relative h-64 border-b border-black bg-neutral-100 overflow-hidden shrink-0 select-none">
                <img
                  src={sp.imageUrl}
                  alt={sp.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 duration-500 transition-all filter brightness-[0.98]"
                />

                {/* Subtle overlay on Hover */}
                <div className="absolute inset-0 bg-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none mix-blend-multiply" />

                {/* Dynamic Stamp Badge Category */}
                <span className={`absolute bottom-3 right-3 border px-2.5 py-0.5 text-[8px] font-bold uppercase rounded-none shadow-sm ${
                  sp.type === 'internacional' ? 'bg-black text-white border-black' : 'bg-red-600 text-white border-red-700'
                }`}>
                  ✦ {sp.type}
                </span>
              </div>

              {/* Text Card Body content */}
              <div className="p-5 flex-1 flex flex-col justify-between text-left">
                <div>
                  <h3 className="text-sm md:text-base font-display font-black text-black tracking-tight leading-snug uppercase">
                    {sp.name}
                  </h3>
                  <p className="text-[10px] font-bold text-red-600 uppercase mt-0.5">
                    {sp.institution}
                  </p>

                  <div className="mt-4 border-t border-black pt-3 space-y-1.5">
                    <p className="text-[10px] font-bold uppercase text-neutral-400 flex items-center gap-1 select-none">
                      <Award className="w-3.5 h-3.5 text-neutral-400" />
                      <span>Conferência de Eixo:</span>
                    </p>
                    <p className="text-[11px] font-sans text-neutral-900 font-medium leading-relaxed uppercase">
                      &quot;{sp.topic}&quot;
                    </p>
                  </div>

                  {sp.publications && sp.publications.length > 0 && (
                    <div className="mt-4 space-y-1">
                      <p className="text-[9px] font-bold uppercase text-neutral-400 flex items-center gap-1 select-none">
                        <BookOpen className="w-3 h-3 text-neutral-400" />
                        <span>Principais Obras:</span>
                      </p>
                      <ul className="text-[10px] text-neutral-600 list-disc list-inside space-y-0.5 font-sans uppercase">
                        {sp.publications.slice(0, 2).map((pub, i) => (
                          <li key={i} className="truncate">{pub}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Speaker Short Bio */}
                  <p className="mt-4 text-[11px] font-sans text-neutral-700 leading-relaxed text-justify font-light select-text">
                    {sp.bio}
                  </p>
                </div>

                {/* Bottom external resources link (Lattes CV) */}
                <div className="mt-6 pt-3 border-t border-black flex items-center justify-between font-sans select-none">
                  {sp.lattesUrl ? (
                    <a
                      href={sp.lattesUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] font-bold text-neutral-700 hover:text-red-600 uppercase hover:underline flex items-center gap-1 transition-colors"
                    >
                      <Globe className="w-3.5 h-3.5 shrink-0 text-neutral-400" />
                      <span>Currículo Lattes ↗</span>
                    </a>
                  ) : (
                    <span className="text-[10px] text-neutral-450 font-bold uppercase italic select-none">Sem link lattes</span>
                  )}

                  {/* Admin Delete trigger */}
                  {isAdmin && (
                    <button
                      onClick={() => {
                        if (confirm(`Confirmar remoção de ${sp.name} do catálogo?`)) {
                          deleteSpeaker(sp.id);
                        }
                      }}
                      className="text-[10px] text-red-600 hover:text-black font-bold uppercase flex items-center gap-0.5 transition-colors cursor-pointer"
                      title="Remover Convidado"
                    >
                      <Trash2 className="w-3 h-3 text-red-600" />
                      <span>Excluir</span>
                    </button>
                  )}
                </div>

              </div>
            </div>
          ))
        )}
      </div>

    </div>
  );
}
