import React, { useState } from 'react';
import { ScheduleEvent } from '../types';
import { Clock, MapPin, User, Plus, Edit2, Trash2, ShieldAlert } from 'lucide-react';

interface AgendaScreenProps {
  schedule: ScheduleEvent[];
  isAdmin: boolean;
  onUpdateSchedule: (newSchedule: ScheduleEvent[]) => void;
}

export default function AgendaScreen({
  schedule,
  isAdmin,
  onUpdateSchedule
}: AgendaScreenProps) {
  const [activeDay, setActiveDay] = useState<1 | 2 | 3>(1);
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);

  // New Event controllers
  const [isAddingEvent, setIsAddingEvent] = useState(false);
  const [newTime, setNewTime] = useState('08:30 - 10:00');
  const [newTitle, setNewTitle] = useState('');
  const [newSpeaker, setNewSpeaker] = useState('');
  const [newRoom, setNewRoom] = useState('Auditório Central CE');
  const [newType, setNewType] = useState<'lecture' | 'panel' | 'break' | 'cultural' | 'workshop'>('lecture');
  const [newDesc, setNewDesc] = useState('');

  // Filter schedules to retrieve only the selected day
  const dailyEvents = schedule.filter((evt) => evt.day === activeDay);

  // Drag and Drop ordering handler inside active day
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

    // We can map back the indices in the main schedule safely
    const currentDayEvents = [...dailyEvents];
    const [movedItem] = currentDayEvents.splice(draggedIdx, 1);
    currentDayEvents.splice(targetIndex, 0, movedItem);

    // Reassemble full array with updated order for this specific day
    const otherDaysEvents = schedule.filter((evt) => evt.day !== activeDay);
    onUpdateSchedule([...otherDaysEvents, ...currentDayEvents]);
    setDraggedIdx(null);
  };

  const handleSaveAddEvent = () => {
    if (!newTitle) {
      alert("Por favor, digite o título da atividade.");
      return;
    }
    const fresh: ScheduleEvent = {
       id: `evt_${Date.now()}`,
       day: activeDay,
       time: newTime,
       title: newTitle,
       speaker: newSpeaker || undefined,
       roomString: newRoom,
       type: newType,
       description: newDesc || undefined
    };
    onUpdateSchedule([...schedule, fresh]);
    setIsAddingEvent(false);
    // clean
    setNewTitle('');
    setNewSpeaker('');
    setNewDesc('');
  };

  const deleteEvent = (id: string) => {
    onUpdateSchedule(schedule.filter((e) => e.id !== id));
  };

  // Type theme styling using Red, Black, and White
  const getTypeBadge = (type: string) => {
    switch (type) {
      case 'lecture': return { bg: 'bg-red-600 text-white border-black', label: 'Conferência Geral' };
      case 'panel': return { bg: 'bg-black text-white border-black', label: 'Mesa-Redonda' };
      case 'break': return { bg: 'bg-neutral-100 text-neutral-800 border-neutral-300', label: 'Intervalo / Almoço' };
      case 'cultural': return { bg: 'bg-red-50 text-red-650 text-red-600 border-red-200', label: 'Atividade Cultural' };
      case 'workshop': return { bg: 'bg-neutral-900 text-white border-black', label: 'Linhas GT / Comunicação' };
      default: return { bg: 'bg-neutral-100 text-black border-neutral-400', label: 'Outros' };
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 font-sans select-none">
      {/* Page Title Stamp */}
      <div className="text-center mb-10 select-text">
        <span className="bg-red-50 text-red-600 border border-red-200 px-3 tracking-wide py-1 text-xs font-bold uppercase rounded-none inline-block mb-3">
          CRONOGRAMA CIENTÍFICO E ADMINISTRATIVO
        </span>
        <h1 className="text-3xl md:text-5xl font-display font-medium text-black tracking-tight uppercase">
          PROGRAMAÇÃO COMPLETA
        </h1>
        <p className="mt-2 text-xs md:text-sm text-neutral-500 uppercase font-light tracking-wider">
          Navegue pelas conferências de {activeDay === 1 ? 'Quarta (19/08)' : activeDay === 2 ? 'Quinta (20/08)' : 'Sexta (21/08)'} do XII Colóquio
        </p>
      </div>

      {/* Days Tabs controller */}
      <div className="flex border border-black bg-neutral-100 text-black mb-8 p-1 rounded-none shadow-sm">
        {([1, 2, 3] as const).map((day) => (
          <button
            key={day}
            onClick={() => {
              setActiveDay(day);
              setIsAddingEvent(false);
              setSelectedEventId(null);
            }}
            className={`flex-1 py-3 md:py-3.5 text-xs uppercase font-bold tracking-wider transition-all rounded-none text-center cursor-pointer ${
              activeDay === day
                ? 'bg-red-600 text-white font-extrabold border border-black shadow'
                : 'border-transparent text-neutral-700 hover:text-black hover:bg-neutral-200'
            }`}
          >
            DIA 0{day} — {day === 1 ? '19 Ago' : day === 2 ? '20 Ago' : '21 Ago'}
          </button>
        ))}
      </div>

      {/* ADMIN PANEL TO INSERT AGENDA ELEMENT */}
      {isAdmin && (
        <div className="mb-8 border border-black bg-neutral-50 p-6 shadow-md rounded-none text-left select-text">
          {isAddingEvent ? (
            <div className="space-y-4">
              <div className="flex items-center gap-2 border-b border-black pb-2 select-none">
                <ShieldAlert className="w-5 h-5 text-red-600 shrink-0" />
                <h4 className="font-bold text-xs text-black uppercase tracking-wide">Formulário de Nova Atividade (Dia {activeDay})</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-sans">
                <div>
                  <label className="block font-semibold text-neutral-700 uppercase mb-1">Horário (Timeframe):</label>
                  <input
                    type="text"
                    className="w-full bg-white border border-neutral-300 p-2.5 focus:ring-1 focus:ring-red-600 text-black"
                    value={newTime}
                    onChange={(e) => setNewTime(e.target.value)}
                    placeholder="ex: 14:00 - 16:30"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-neutral-700 uppercase mb-1">Unidade / Sala (Room):</label>
                  <input
                    type="text"
                    className="w-full bg-white border border-neutral-300 p-2.5 focus:ring-1 focus:ring-red-600 text-black"
                    value={newRoom}
                    onChange={(e) => setNewRoom(e.target.value)}
                    placeholder="ex: Auditório da Reitoria"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-neutral-700 uppercase mb-1">Categoria:</label>
                  <select
                    className="w-full bg-white border border-neutral-300 p-2.5 focus:ring-1 focus:ring-red-600 font-bold uppercase text-neutral-700 cursor-pointer"
                    value={newType}
                    onChange={(e: any) => setNewType(e.target.value)}
                  >
                    <option value="lecture">Conferência (Lecture)</option>
                    <option value="panel">Mesa-Redonda (Panel)</option>
                    <option value="break">Intervalo (Break)</option>
                    <option value="cultural">Ação Cultural (Cultural)</option>
                    <option value="workshop">GT / Comunicação (Workshop)</option>
                  </select>
                </div>
                <div className="md:col-span-3">
                  <label className="block font-semibold text-neutral-700 uppercase mb-1">Título da Atividade:</label>
                  <input
                    type="text"
                    className="w-full bg-white border border-neutral-300 p-2.5 text-xs focus:ring-1 focus:ring-red-600 text-black font-sans"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="ex: Currículo e Globalização..."
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block font-semibold text-neutral-700 uppercase mb-1">Palestrantes / Debatedores:</label>
                  <input
                    type="text"
                    className="w-full bg-white border border-neutral-300 p-2.5 text-xs focus:ring-1 focus:ring-red-600 text-black font-sans"
                    value={newSpeaker}
                    onChange={(e) => setNewSpeaker(e.target.value)}
                    placeholder="ex: Dr. Carlos Maciel (UFRJ)"
                  />
                </div>
                <div className="md:col-span-3">
                  <label className="block font-semibold text-neutral-700 uppercase mb-1">Descrição Curricular Detalhada (Opcional):</label>
                  <textarea
                    className="w-full bg-white border border-neutral-300 p-2.5 text-xs h-20 resize-y focus:ring-1 focus:ring-red-600 text-black font-sans"
                    value={newDesc}
                    onChange={(e) => setNewDesc(e.target.value)}
                    placeholder="Escreva as ideias centrais ou o resumo da discussão..."
                  />
                </div>
              </div>
              <div className="flex gap-2 justify-end pt-2 border-t border-black font-sans select-none">
                <button
                  onClick={() => setIsAddingEvent(false)}
                  className="bg-neutral-150 text-neutral-800 border border-neutral-300 font-bold py-1.5 px-4 text-xs uppercase hover:bg-neutral-200 transition-colors cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  onClick={handleSaveAddEvent}
                  className="bg-red-600 border border-red-700 hover:bg-red-700 text-white font-bold py-1.5 px-4 text-xs uppercase transition-colors shadow-sm cursor-pointer"
                >
                  Confirmar e Exibir
                </button>
              </div>
            </div>
          ) : (
            <button
              onClick={() => setIsAddingEvent(true)}
              className="w-full py-3 bg-red-50 hover:bg-red-100 border border-red-200 text-red-600 text-xs font-bold uppercase flex items-center justify-center gap-2 rounded-none transition-all shadow-sm cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Inserir Atividade na Grade da Tabela do Dia 0{activeDay}</span>
            </button>
          )}
        </div>
      )}

      {/* Main Schedule Timeline Cards Grid */}
      <div className="space-y-4 select-text">
        {dailyEvents.length === 0 ? (
          <div className="bg-white border border-black p-8 text-center uppercase text-neutral-400 select-none">
            Nenhuma atividade cadastrada para este dia ainda.
          </div>
        ) : (
          dailyEvents.map((evt, idx) => {
            const styleProps = getTypeBadge(evt.type);
            const isSelected = selectedEventId === evt.id;

            return (
              <div
                key={evt.id}
                draggable={isAdmin}
                onDragStart={(e) => handleDragStart(e, idx)}
                onDragOver={(e) => handleDragOver(e, idx)}
                onDrop={(e) => handleDrop(e, idx)}
                className={`group relative bg-white border border-black p-5 flex flex-col md:flex-row md:items-start justify-between gap-4 transition-all shadow-sm ${
                  isAdmin ? 'cursor-move border-dashed border-red-400 bg-neutral-50/20' : ''
                } ${isSelected ? 'ring-2 ring-red-600' : ''}`}
              >
                {/* Drag Indicator Label */}
                {isAdmin && (
                  <div className="absolute top-1.5 right-2 text-[8px] bg-red-50 text-red-600 px-1.5 py-0.5 font-bold uppercase select-none border border-red-200 shadow-sm pointer-events-none">
                    Arrastar p/ Ordenar
                  </div>
                )}

                {/* Left Side: Time and Event Type Stamp */}
                <div className="flex flex-col md:w-52 shrink-0 gap-2 items-start text-left select-none">
                  <div className="flex items-center gap-1.5 text-black font-extrabold text-xs uppercase bg-neutral-100 p-1 px-2.5 border border-black">
                    <Clock className="w-3.5 h-3.5 text-red-650 text-red-600" />
                    <span>{evt.time}</span>
                  </div>
                  <span className={`inline-block text-[9px] md:text-[10px] font-bold uppercase px-2.5 py-0.5 border ${styleProps.bg}`}>
                    {styleProps.label}
                  </span>
                </div>

                {/* Center Side: Event Content details */}
                <div className="flex-1 flex flex-col gap-2 text-left">
                  <h3 className="text-sm md:text-base font-display font-bold text-black uppercase tracking-tight">
                    {evt.title}
                  </h3>

                  {evt.speaker && (
                    <div className="flex items-start gap-1.5 text-xs text-neutral-800 font-semibold uppercase">
                      <User className="w-3.5 h-3.5 text-neutral-500 mt-0.5 shrink-0" />
                      <span>{evt.speaker}</span>
                    </div>
                  )}

                  <div className="flex items-center gap-1.5 text-xs text-neutral-600">
                    <MapPin className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
                    <span>{evt.roomString}</span>
                  </div>

                  {/* Expandable description block */}
                  {(evt.description || isAdmin) && isSelected && (
                    <div className="mt-3 p-3 bg-neutral-50 border border-black rounded-none font-sans text-xs text-neutral-850 leading-relaxed max-w-2xl text-justify shadow-inner">
                      {evt.description || "Nenhuma descrição informada."}
                    </div>
                  )}

                  {/* Toggle button description */}
                  {evt.description && (
                    <button
                      onClick={() => setSelectedEventId(isSelected ? null : evt.id)}
                      className="mt-2 self-start text-[10px] font-bold uppercase text-red-600 hover:text-red-750 hover:underline flex items-center gap-1 cursor-pointer select-none"
                    >
                      <span>{isSelected ? 'Ocultar Ementa ▲' : 'Ler Detalhes Ementa / GTs ▼'}</span>
                    </button>
                  )}
                </div>

                {/* Right Side: Quick CMS Operations */}
                {isAdmin && (
                  <div className="flex md:flex-col gap-2 shrink-0 justify-end md:self-stretch md:justify-center border-t md:border-t-0 md:border-l border-neutral-200 pt-2 md:pt-0 md:pl-4 font-sans select-none">
                    <button
                      onClick={() => {
                        const newTitleVal = prompt("Editar Título da Atividade:", evt.title);
                        if (newTitleVal !== null) {
                          const updated = schedule.map((item) => {
                            if (item.id === evt.id) {
                              return { ...item, title: newTitleVal };
                            }
                            return item;
                          });
                          onUpdateSchedule(updated);
                        }
                      }}
                      className="bg-neutral-100 text-black hover:bg-red-650 hover:bg-red-600 hover:text-white border border-black p-2 text-xs font-bold uppercase flex items-center gap-1 transition-all cursor-pointer"
                      title="Editar Rápido Título"
                    >
                      <Edit2 className="w-3.5 h-3.5" />
                      <span className="md:hidden lg:inline text-[9px]">Editar</span>
                    </button>
                    <button
                      onClick={() => {
                        if (confirm("Confirmar exclusão desta atividade da grade curricular?")) {
                          deleteEvent(evt.id);
                        }
                      }}
                      className="bg-black text-white hover:bg-red-650 hover:bg-red-600 border border-black p-2 text-xs font-bold uppercase flex items-center gap-1 transition-all cursor-pointer"
                      title="Excluir Atividade"
                    >
                      <Trash2 className="w-3.5 h-3.5 text-red-500" />
                      <span className="md:hidden lg:inline text-[9px]">Excluir</span>
                    </button>
                  </div>
                )}

              </div>
            );
          })
        )}
      </div>

      {/* Auxiliary Help Notice */}
      <div className="mt-12 bg-white border border-black p-5 text-left leading-normal flex flex-col md:flex-row items-center gap-4 shadow-sm select-text">
        <div className="p-3 py-1.5 bg-red-600 text-white font-extrabold text-xs uppercase tracking-wider select-none shrink-0 border border-black">
          MAPA INTERNO
        </div>
        <p className="text-xs text-neutral-600 font-sans leading-relaxed">
          Toda a programação acadêmica de <strong>Comunicação Oral (GTs)</strong> está concentrada no <strong>Centro de Educação (CE) - Bloco A e Bloco B</strong>. As mesas principais e palestras solenes e culturais ocorrem no <strong>Auditório Principal da Reitoria da UFPB</strong>. Ambos os prédios contam com rampa e elevador de acessibilidade.
        </p>
      </div>
    </div>
  );
}
