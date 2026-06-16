import React, { useState } from 'react';
import { QuickActionItem, AnnouncementItem } from '../types';
import * as Icons from 'lucide-react';
import { ShieldAlert, Plus, Edit2, Trash2, X } from 'lucide-react';

interface QuickActionsSidebarProps {
  actions: QuickActionItem[];
  announcements: AnnouncementItem[];
  isAdmin: boolean;
  onUpdateActions: (actions: QuickActionItem[]) => void;
  onUpdateAnnouncements: (announcements: AnnouncementItem[]) => void;
  onSelectAction: (anchor: string) => void;
}

export default function QuickActionsSidebar({
  actions,
  announcements,
  isAdmin,
  onUpdateActions,
  onUpdateAnnouncements,
  onSelectAction
}: QuickActionsSidebarProps) {
  // Image expansion state
  const [isImageExpanded, setIsImageExpanded] = useState(false);

  // Announcements controllers
  const [editingAnnId, setEditingAnnId] = useState<string | null>(null);
  const [annTitle, setAnnTitle] = useState('');
  const [annText, setAnnText] = useState('');
  const [annUrgent, setAnnUrgent] = useState(false);

  // New announcement controller
  const [isAddingAnn, setIsAddingAnn] = useState(false);

  // Quick Action controllers
  const [editingActId, setEditingActId] = useState<string | null>(null);
  const [actTitle, setActTitle] = useState('');
  const [actColor, setActColor] = useState('');
  const [actUrl, setActUrl] = useState('');

  // Dynamic Lucide icon helper
  const renderIcon = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName];
    if (IconComponent) {
      return <IconComponent className="w-4 h-4 text-white" />;
    }
    return <Icons.HelpCircle className="w-4 h-4 text-white" />;
  };

  // Drag and drop for Announcements
  const [draggedAnnIdx, setDraggedAnnIdx] = useState<number | null>(null);

  const handleAnnDragStart = (e: React.DragEvent, idx: number) => {
    setDraggedAnnIdx(idx);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleAnnDragOver = (e: React.DragEvent, idx: number) => {
    e.preventDefault();
  };

  const handleAnnDrop = (e: React.DragEvent, targetIdx: number) => {
    e.preventDefault();
    if (draggedAnnIdx === null) return;
    const reordered = [...announcements];
    const [removed] = reordered.splice(draggedAnnIdx, 1);
    reordered.splice(targetIdx, 0, removed);
    onUpdateAnnouncements(reordered);
    setDraggedAnnIdx(null);
  };

  // Announcement Actions
  const handleEditAnn = (ann: AnnouncementItem) => {
    setEditingAnnId(ann.id);
    setAnnTitle(ann.title);
    setAnnText(ann.text);
    setAnnUrgent(ann.urgent);
  };

  const saveAnnEdit = () => {
    const updated = announcements.map((a) => {
      if (a.id === editingAnnId) {
        return {
          ...a,
          title: annTitle,
          text: annText,
          urgent: annUrgent
        };
      }
      return a;
    });
    onUpdateAnnouncements(updated);
    setEditingAnnId(null);
  };

  const deleteAnn = (id: string) => {
    onUpdateAnnouncements(announcements.filter((a) => a.id !== id));
  };

  const addAnn = () => {
    const fresh: AnnouncementItem = {
      id: `ann_${Date.now()}`,
      date: new Date().toLocaleDateString('pt-BR', { day: 'numeric', month: 'short', year: 'numeric' }),
      title: annTitle || "Novo Informativo Curricular",
      text: annText || "Informações complementares sobre a programação de salas e horários das atividades no Centro de Educação UFPB.",
      urgent: annUrgent
    };
    onUpdateAnnouncements([fresh, ...announcements]); // Insert first
    setIsAddingAnn(false);
    // Reset inputs
    setAnnTitle('');
    setAnnText('');
    setAnnUrgent(false);
  };

  // Quick Actions editors
  const startEditAction = (act: QuickActionItem) => {
    setEditingActId(act.id);
    setActTitle(act.title);
    setActColor(act.color);
    setActUrl(act.url);
  };

  const saveActEdit = () => {
    const updated = actions.map((a) => {
      if (a.id === editingActId) {
        return {
          ...a,
          title: actTitle,
          color: actColor,
          url: actUrl
        };
      }
      return a;
    });
    onUpdateActions(updated);
    setEditingActId(null);
  };

  return (
    <div className="space-y-6 font-sans select-none">
      
      {/* SECTION 1: QUICK ACTIONS has been removed */}

      {/* SECTION 2: AVISOS / NOTAS ÚTEIS (ANNOUNCEMENTS) */}
      <div className="bg-white border border-black p-5 rounded-none shadow-sm text-left relative select-text">
        <h3 className="bg-black text-white px-3 py-1 text-xs font-bold uppercase tracking-wider inline-block mb-4">
          📢 AVISOS GERAIS
        </h3>

        {/* CMS Add announcement */}
        {isAdmin && (
          <div className="mb-4">
            {isAddingAnn ? (
              <div className="bg-red-50/20 border border-black p-3.5 rounded-none space-y-3">
                <div className="text-[10px] font-bold text-red-600 uppercase">Novo Boletim de Evento</div>
                <div>
                  <label className="block text-[10px] font-bold text-neutral-600 mb-0.5">Título do Aviso:</label>
                  <input
                    type="text"
                    className="w-full bg-white border border-neutral-300 p-2 text-xs text-black font-sans"
                    value={annTitle}
                    onChange={(e) => setAnnTitle(e.target.value)}
                    placeholder="ex: Alteração de sala no GT05"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-neutral-600 mb-0.5">Texto Informativo:</label>
                  <textarea
                    className="w-full bg-white border border-neutral-300 p-2 text-xs h-16 resize-none text-black font-sans"
                    value={annText}
                    onChange={(e) => setAnnText(e.target.value)}
                  />
                </div>
                <div className="flex items-center gap-1.5 font-sans">
                  <input
                    type="checkbox"
                    id="is-urgent-check"
                    checked={annUrgent}
                    onChange={(e) => setAnnUrgent(e.target.checked)}
                    className="rounded-none border-neutral-400 text-red-600 focus:ring-red-600"
                  />
                  <label htmlFor="is-urgent-check" className="text-[10px] font-extrabold text-red-600 uppercase cursor-pointer">Aviso Crítico / Urgente</label>
                </div>
                <div className="flex gap-2 justify-end font-sans">
                  <button
                    onClick={() => setIsAddingAnn(false)}
                    className="bg-neutral-100 text-black border border-neutral-300 text-[10px] font-bold px-3 py-1.5 uppercase cursor-pointer"
                  >
                    Voltar
                  </button>
                  <button
                    onClick={addAnn}
                    className="bg-red-600 hover:bg-red-700 text-white text-[10px] font-bold px-3 py-1.5 uppercase shadow-sm cursor-pointer"
                  >
                    Publicar Aviso
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => {
                  setAnnTitle('');
                  setAnnText('');
                  setAnnUrgent(false);
                  setIsAddingAnn(true);
                }}
                className="w-full py-2 bg-red-50 hover:bg-red-100 border border-red-200 text-red-600 text-[10px] font-bold uppercase flex items-center justify-center gap-1.5 rounded-none transition-all shadow-sm cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Inserir Novo Aviso</span>
              </button>
            )}
          </div>
        )}

        {/* Notices list */}
        <div className="space-y-4 max-h-[480px] overflow-y-auto pr-1">
          {announcements.length === 0 ? (
            <p className="text-xs text-neutral-450 font-sans select-none italic text-left">Nenhum informe publicado neste momento.</p>
          ) : (
            announcements.map((ann, idx) => {
              const isEditingAnn = editingAnnId === ann.id;

              return (
                <div
                  key={ann.id}
                  draggable={isAdmin && !isEditingAnn}
                  onDragStart={(e) => handleAnnDragStart(e, idx)}
                  onDragOver={(e) => handleAnnDragOver(e, idx)}
                  onDrop={(e) => handleAnnDrop(e, idx)}
                  className={`bg-white border p-3.5 relative flex flex-col gap-1 transition-all ${
                    ann.urgent ? 'border-red-600 bg-red-50/10' : 'border-neutral-200'
                  } ${isAdmin ? 'border-dashed border-red-400 cursor-move hover:border-black' : ''}`}
                >
                  {/* Handle indicator overlay */}
                  {isAdmin && (
                    <div className="absolute top-1.5 right-2 text-[7px] text-neutral-400 font-bold select-none uppercase tracking-wide">
                      ☰ ORDENAR
                    </div>
                  )}

                  {isEditingAnn ? (
                    <div className="space-y-2 text-xs">
                      <div className="font-bold text-[10px] uppercase text-red-600 leading-none">Editar Detalhes do Aviso</div>
                      <input
                        type="text"
                        className="w-full bg-neutral-150 border border-neutral-300 p-2 text-xs text-black focus:ring-1 focus:ring-red-600"
                        value={annTitle}
                        onChange={(e) => setAnnTitle(e.target.value)}
                      />
                      <textarea
                        className="w-full bg-neutral-150 border border-neutral-300 p-2 text-xs h-20 text-black font-sans focus:ring-1 focus:ring-red-600"
                        value={annText}
                        onChange={(e) => setAnnText(e.target.value)}
                      />
                      <div className="flex gap-2 mt-2 font-sans">
                        <button
                          onClick={saveAnnEdit}
                          className="bg-red-650 bg-red-600 text-white font-bold px-2.5 py-1 rounded-none text-[10px] cursor-pointer"
                        >
                          Salvar
                        </button>
                        <button
                          onClick={() => setEditingAnnId(null)}
                          className="bg-neutral-200 text-black font-bold px-2.5 py-1 rounded-none text-[10px] cursor-pointer"
                        >
                          Sair
                        </button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="flex items-center gap-1.5 flex-wrap text-left">
                        <span className="text-[9px] font-bold text-neutral-400 uppercase font-sans">{ann.date}</span>
                        {ann.urgent && (
                          <span className="bg-red-600 text-white text-[8px] font-bold uppercase px-1.5 py-0.5 rounded-none animate-pulse">
                            URGENTE ✦
                          </span>
                        )}
                      </div>

                      <h4 className="text-xs font-semibold text-black tracking-tight leading-snug text-left select-text">
                        {ann.title}
                      </h4>
                      <p className="text-[11px] font-sans text-neutral-600 leading-relaxed text-justify font-light select-text">
                        {ann.text}
                      </p>

                      {/* Admin micro triggers */}
                      {isAdmin && (
                        <div className="border-t border-neutral-100 mt-2 pt-1.5 flex gap-2 justify-end font-sans">
                          <button
                            onClick={() => handleEditAnn(ann)}
                            className="text-[9px] text-red-650 text-red-600 font-bold hover:underline uppercase flex items-center gap-0.5 pointer-events-auto"
                          >
                            <Edit2 className="w-2.5 h-2.5" /> Editar
                          </button>
                          <button
                            onClick={() => deleteAnn(ann.id)}
                            className="text-[9px] text-red-600 hover:text-black font-bold hover:underline uppercase flex items-center gap-0.5 pointer-events-auto"
                          >
                            <Trash2 className="w-2.5 h-2.5" /> Excluir
                          </button>
                        </div>
                      )}
                    </>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* SECTION 3: HOMENAGEM AMIEL NASSAR (QUADRO DESENHADO) */}
      <div className="bg-white border border-black p-5 rounded-none shadow-sm text-left">
        <h3 className="bg-black text-white px-3 py-1 text-xs font-bold uppercase tracking-wider inline-block mb-4 select-none">
          ✦ ARTE DO COLÓQUIO
        </h3>
        <div 
          onClick={() => setIsImageExpanded(true)}
          className="bg-neutral-50 border border-black p-3.5 rounded-none transition-all duration-300 hover:border-red-650 hover:border-red-600 hover:shadow-md cursor-pointer group"
        >
          <div className="relative w-full bg-white border border-neutral-300 select-none flex items-center justify-center">
            <img 
              src="https://static.even3.com/pagina-evento/AmielNassar.5d1c11d7da0b43288869.jpg" 
              alt="Paraíba Leitora" 
              className="w-full h-auto block object-contain transition-transform duration-300 group-hover:scale-[1.01] filter brightness-100"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-2.5 right-2.5 bg-red-600 text-white border border-black px-2 py-0.5 text-[8px] font-extrabold uppercase tracking-wider rounded-none shadow-sm opacity-90 group-hover:opacity-100 transition-opacity">
              Ampliar 🔍
            </div>
          </div>
          
          <div className="mt-4 text-center select-text">
            <h4 className="text-xs font-display font-bold text-black uppercase tracking-tight">
              Amiel Nassar
            </h4>
            <p className="mt-1 text-[10.5px] font-sans text-neutral-500 font-light select-text">
              Paraíba Leitora – Acrílica sobre tela – 2024
            </p>
          </div>
        </div>
      </div>

      {/* EXPANDED IMAGE LIGHTBOX MODAL */}
      {isImageExpanded && (
        <div 
          onClick={() => setIsImageExpanded(false)}
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[9999] flex items-center justify-center p-2 md:p-4 cursor-zoom-out"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-white border-2 border-black p-2.5 rounded-none max-w-4xl w-full relative flex flex-col shadow-2xl animate-fade-in"
          >
            {/* Top Close indicator */}
            <button 
              onClick={() => setIsImageExpanded(false)}
              className="absolute -top-11 right-0 bg-black hover:bg-neutral-800 text-white font-black text-[9px] uppercase tracking-widest px-3.5 py-2 border border-neutral-800 cursor-pointer flex items-center gap-1.5"
            >
              <X className="w-3.5 h-3.5" />
              <span>Fechar</span>
            </button>

            <div className="bg-white border border-neutral-300 overflow-hidden flex items-center justify-center select-none">
              <img 
                src="https://static.even3.com/pagina-evento/AmielNassar.5d1c11d7da0b43288869.jpg" 
                alt="Paraíba Leitora - Ampliada" 
                className="w-full h-auto max-h-[80vh] object-contain block mx-auto"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="pt-4 pb-1.5 px-3 text-left">
              <h3 className="text-sm md:text-base font-display font-bold text-black uppercase tracking-tight">
                Paraíba Leitora
              </h3>
              <p className="text-[11px] text-neutral-600 font-sans leading-relaxed tracking-wide font-light text-justify mt-1 select-text">
                Obra integrante da exposição da Feira Literária Integrada de Santa Terezinha (FLIST).
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
