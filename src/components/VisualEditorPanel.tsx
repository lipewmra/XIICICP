import React, { useState, useEffect } from 'react';
import { ColoquioDataState, AlertMarqueeItem } from '../types';
import { ShieldCheck, Sparkles, RefreshCcw, Save, X, Plus, Trash2, ChevronUp, ChevronDown } from 'lucide-react';

interface VisualEditorPanelProps {
  isOpen: boolean;
  onClose: () => void;
  data: ColoquioDataState;
  onSaveAll: (updated: ColoquioDataState) => void;
  onResetDefaults: () => void;
  initialTab?: 'textos' | 'marquee' | 'config';
}

export default function VisualEditorPanel({
  isOpen,
  onClose,
  data,
  onSaveAll,
  onResetDefaults,
  initialTab
}: VisualEditorPanelProps) {
  const [temporaryData, setTemporaryData] = useState<ColoquioDataState>({ ...data });
  const [activeSubTab, setActiveSubTab] = useState<'textos' | 'marquee' | 'config'>('textos');
  const [newMarqueeText, setNewMarqueeText] = useState('');

  useEffect(() => {
    if (isOpen) {
      setTemporaryData({ ...data });
    }
  }, [isOpen, data]);

  useEffect(() => {
    if (isOpen && initialTab) {
      setActiveSubTab(initialTab);
    }
  }, [isOpen, initialTab]);

  const getMarqueeItems = (marquee: any): AlertMarqueeItem[] => {
    if (marquee?.items && Array.isArray(marquee.items)) {
      return marquee.items;
    }
    if (marquee?.text) {
      return marquee.text
        .split(' • ')
        .filter((t: string) => t.trim().length > 0)
        .map((t: string, idx: number) => ({
          id: `msg_auto_${idx}_${Date.now()}`,
          text: t.trim()
        }));
    }
    return [];
  };

  const marqueeItems = getMarqueeItems(temporaryData.marquee);

  const handleUpdateItems = (newItems: AlertMarqueeItem[]) => {
    const compiledText = newItems.map(item => item.text.trim()).filter(Boolean).join(' • ');
    setTemporaryData(prev => ({
      ...prev,
      marquee: {
        ...prev.marquee,
        items: newItems,
        text: compiledText
      }
    }));
  };

  const handleAddMarqueeItem = () => {
    if (!newMarqueeText.trim()) return;
    const newItem: AlertMarqueeItem = {
      id: `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      text: newMarqueeText.trim()
    };
    handleUpdateItems([...marqueeItems, newItem]);
    setNewMarqueeText('');
  };

  const handleDeleteMarqueeItem = (id: string) => {
    handleUpdateItems(marqueeItems.filter(item => item.id !== id));
  };

  const handleEditMarqueeItem = (id: string, newText: string) => {
    handleUpdateItems(marqueeItems.map(item => item.id === id ? { ...item, text: newText } : item));
  };

  const handleMoveMarqueeItem = (index: number, direction: 'up' | 'down') => {
    if (direction === 'up' && index === 0) return;
    if (direction === 'down' && index === marqueeItems.length - 1) return;

    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    const updatedItems = [...marqueeItems];
    const temp = updatedItems[index];
    updatedItems[index] = updatedItems[targetIndex];
    updatedItems[targetIndex] = temp;

    handleUpdateItems(updatedItems);
  };

  const handleUpdateMarqueeText = (txt: string) => {
    setTemporaryData((prev) => ({
      ...prev,
      marquee: { ...prev.marquee, text: txt }
    }));
  };

  const handleUpdateMarqueeBadge = (badge: string) => {
    setTemporaryData((prev) => ({
      ...prev,
      marquee: { ...prev.marquee, badgeText: badge }
    }));
  };

  const handleUpdatePresentationTitle = (title: string) => {
    setTemporaryData((prev) => ({
      ...prev,
      letter: { ...prev.letter, title }
    }));
  };

  const handleUpdatePresentationSubtitle = (subtitle: string) => {
    setTemporaryData((prev) => ({
      ...prev,
      letter: { ...prev.letter, subtitle }
    }));
  };

  const handleConfirmPublish = () => {
    onSaveAll(temporaryData);
    alert("Alterações do CMS publicadas com sucesso! Seu público agora verá este visual na hora.");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden font-sans flex items-stretch justify-end">
      
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-neutral-900/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Editor Drawer container */}
      <div className="relative w-full max-w-lg bg-white border-l border-black text-black shadow-2xl flex flex-col justify-between z-10 py-6 px-6 h-full animate-slide-in rounded-none select-none">
        
        {/* Editor Panel Header */}
        <div className="border-b border-black pb-4 mb-4 font-sans">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="bg-red-50 p-2 border border-red-200 shrink-0">
                <Sparkles className="w-4 h-4 text-red-650 text-red-600" />
              </div>
              <div className="text-left">
                <h2 className="text-xs font-bold uppercase text-black tracking-wider">CMS Painel Geral</h2>
                <p className="text-[10px] text-neutral-400 uppercase mt-0.5">Editor de Conteúdo e Identidade</p>
              </div>
            </div>
            
            <button 
              onClick={onClose}
              className="bg-neutral-100 hover:bg-neutral-200 p-1.5 text-black border border-neutral-300 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick system status */}
          <div className="mt-3 bg-black text-white p-2.5 border border-black text-[10px] font-bold flex items-center gap-1.5 justify-start uppercase">
            <ShieldCheck className="w-4 h-4 text-red-600 shrink-0" />
            <span>SISTEMA ATIVO: Sincronização em Tempo Real (Local State)</span>
          </div>
        </div>

        {/* Categories Tab selector */}
        <div className="flex border border-black p-0.5 bg-neutral-100 mb-4 font-bold text-[10px] uppercase rounded-none">
          <button
            onClick={() => setActiveSubTab('textos')}
            className={`flex-1 py-1.5 text-center transition-all cursor-pointer ${activeSubTab === 'textos' ? 'bg-red-600 text-white font-extrabold border-black border' : 'text-neutral-500 hover:text-black'}`}
          >
            Apresentação
          </button>
          <button
            onClick={() => setActiveSubTab('marquee')}
            className={`flex-1 py-1.5 text-center transition-all cursor-pointer ${activeSubTab === 'marquee' ? 'bg-red-600 text-white font-extrabold border-black border' : 'text-neutral-500 hover:text-black'}`}
          >
            Avisos Ticker
          </button>
          <button
            onClick={() => setActiveSubTab('config')}
            className={`flex-1 py-1.5 text-center transition-all cursor-pointer ${activeSubTab === 'config' ? 'bg-red-600 text-white font-extrabold border-black border' : 'text-neutral-500 hover:text-black'}`}
          >
            Controles DB
          </button>
        </div>

        {/* Tab Body contents */}
        <div className="flex-1 overflow-y-auto pr-1 text-left select-text">
          {activeSubTab === 'textos' && (
            <div className="space-y-4 font-sans">
              <div className="space-y-1">
                <label className="block text-[10px] font-bold uppercase text-neutral-500">Título Boas-Vindas:</label>
                <input
                  type="text"
                  className="w-full bg-neutral-50 border border-neutral-300 p-2.5 text-xs text-black uppercase font-bold focus:ring-1 focus:ring-red-600"
                  value={temporaryData.letter.title}
                  onChange={(e) => handleUpdatePresentationTitle(e.target.value)}
                />
              </div>

              <div className="space-y-1">
                <label className="block text-[10px] font-bold uppercase text-neutral-500">Subtítulo Boas-Vindas:</label>
                <input
                  type="text"
                  className="w-full bg-neutral-50 border border-neutral-300 p-2.5 text-xs text-black font-medium focus:ring-1 focus:ring-red-600"
                  value={temporaryData.letter.subtitle}
                  onChange={(e) => handleUpdatePresentationSubtitle(e.target.value)}
                />
              </div>

              <div className="bg-neutral-50 p-4 border border-neutral-200 rounded-none text-left">
                <h4 className="text-[10px] font-bold uppercase text-red-600 mb-1">💡 Dica de Edição Visual Inline:</h4>
                <p className="text-[11px] font-sans text-neutral-600 leading-relaxed font-light">
                  Você não precisa editar tudo por este painel! No site geral, quando o <strong>Modo Administrador</strong> está ativo, você pode editar títulos e programações diretamente clicando ou dando clique duplo nos elementos correspondentes das telas.
                </p>
              </div>
            </div>
          )}

          {activeSubTab === 'marquee' && (
            <div className="space-y-4 font-sans">
              <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
                <span className="text-xs font-bold uppercase text-black">Mostrar Ticker de Avisos:</span>
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded-none text-red-600 focus:ring-red-600 border border-black cursor-pointer"
                  checked={temporaryData.marquee.enabled}
                  onChange={(e) => setTemporaryData({
                    ...temporaryData,
                    marquee: { ...temporaryData.marquee, enabled: e.target.checked }
                  })}
                />
              </div>

              <div className="space-y-1">
                <label className="block text-[10px] font-bold uppercase text-neutral-500">Rótulo / Badge do Ticker:</label>
                <input
                  type="text"
                  className="w-full bg-neutral-50 border border-neutral-300 p-2.5 font-bold uppercase text-xs text-black focus:outline-none focus:ring-1 focus:ring-red-600"
                  value={temporaryData.marquee.badgeText}
                  onChange={(e) => handleUpdateMarqueeBadge(e.target.value)}
                />
              </div>

              {/* Section list of entries */}
              <div className="pt-3">
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-[10px] font-bold uppercase text-neutral-500">Avisos Individuais ({marqueeItems.length}):</label>
                </div>

                {marqueeItems.length === 0 ? (
                  <div className="p-4 bg-neutral-50 border border-dashed border-neutral-300 text-center text-xs text-neutral-400">
                    Nenhum aviso cadastrado. Adicione um aviso abaixo!
                  </div>
                ) : (
                  <div className="space-y-3 max-h-80 overflow-y-auto pr-1">
                    {marqueeItems.map((item, idx) => (
                      <div key={item.id} className="p-3 bg-neutral-50 border border-neutral-300 flex flex-col gap-2 relative">
                        {/* Notice input */}
                        <textarea
                          rows={2}
                          className="w-full bg-white border border-neutral-200 p-2 text-xs text-black font-sans leading-relaxed resize-none focus:outline-none focus:ring-1 focus:ring-red-600"
                          value={item.text}
                          onChange={(e) => handleEditMarqueeItem(item.id, e.target.value)}
                          placeholder="Digite a mensagem do aviso..."
                        />

                        {/* Reorder & delete buttons bar */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <button
                              onClick={() => handleMoveMarqueeItem(idx, 'up')}
                              disabled={idx === 0}
                              title="Mover para cima"
                              className="p-1 px-2 border border-neutral-200 bg-white hover:bg-neutral-100 text-neutral-600 disabled:opacity-40 disabled:hover:bg-white cursor-pointer transition-colors"
                            >
                              <ChevronUp className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => handleMoveMarqueeItem(idx, 'down')}
                              disabled={idx === marqueeItems.length - 1}
                              title="Mover para baixo"
                              className="p-1 px-2 border border-neutral-200 bg-white hover:bg-neutral-100 text-neutral-600 disabled:opacity-40 disabled:hover:bg-white cursor-pointer transition-colors"
                            >
                              <ChevronDown className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          <button
                            onClick={() => handleDeleteMarqueeItem(item.id)}
                            title="Excluir aviso"
                            className="p-1 px-2 border border-red-200 bg-red-50 text-red-650 text-red-600 hover:bg-red-600 hover:text-white cursor-pointer transition-colors flex items-center gap-1 text-[10px] font-bold uppercase"
                          >
                            <Trash2 className="w-3 h-3" />
                            <span>Excluir</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Add item section */}
              <div className="pt-3 border-t border-dashed border-neutral-300 space-y-2">
                <label className="block text-[10px] font-bold uppercase text-neutral-500">Adicionar Novo Aviso:</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newMarqueeText}
                    onChange={(e) => setNewMarqueeText(e.target.value)}
                    placeholder="Submissão prorrogada..."
                    className="flex-1 bg-neutral-50 border border-neutral-300 p-2.5 text-xs text-black focus:outline-none focus:ring-1 focus:ring-red-600"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        handleAddMarqueeItem();
                      }
                    }}
                  />
                  <button
                    onClick={handleAddMarqueeItem}
                    className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase px-4 border border-black transition-colors shrink-0 flex items-center gap-1 cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Adicionar</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeSubTab === 'config' && (
            <div className="space-y-6 font-sans">
              <div className="bg-white border border-black p-4 rounded-none space-y-3 shadow-sm text-left">
                <h4 className="text-xs font-bold uppercase text-black flex items-center gap-1.5 border-b border-black pb-2 select-none">
                  <RefreshCcw className="w-4 h-4 text-red-650 text-red-600 shrink-0" />
                  <span>Restaurar Dados Iniciais</span>
                </h4>
                <p className="text-[11px] font-sans text-neutral-600 leading-relaxed font-light">
                  Caso queira desfazer todas as modificações, inserções, exclusões e ordenações efetuadas e restaurar os dados originais do convite acadêmico da UFPB, clique no botão vermelho abaixo.
                </p>
                <button
                  onClick={() => {
                    if (confirm("Deseja apagar todas as modificações salvas e voltar ao padrão acadêmico?")) {
                      onResetDefaults();
                      onClose();
                    }
                  }}
                  className="w-full py-2 bg-red-50 text-red-650 text-red-600 hover:bg-red-600 hover:text-white font-bold text-[10px] border border-red-200 rounded-none uppercase text-center transition-colors cursor-pointer"
                >
                  Restaurar Banco de Dados Local ↺
                </button>
              </div>

              <div className="bg-neutral-50 p-4 border border-neutral-200 rounded-none">
                <p className="text-[11.5px] font-sans text-neutral-600 leading-relaxed font-light text-left">
                  Todas as suas atualizações de carrossel, de palestras e de eixos são armazenadas localmente no navegador (<strong>LocalStorage</strong>), o que garante permanência de seção perfeita.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer controls */}
        <div className="border-t border-black pt-4 mt-4 flex gap-2 font-sans select-none">
          <button
            onClick={onClose}
            className="flex-1 py-3 bg-neutral-100 hover:bg-neutral-200 text-black text-xs font-bold uppercase transition-colors border border-neutral-300 cursor-pointer"
          >
            Fechar Painel
          </button>
          
          <button
            onClick={handleConfirmPublish}
            className="flex-1 py-3 bg-red-650 bg-red-600 border border-red-700 hover:bg-red-700 text-white text-xs font-bold uppercase flex items-center justify-center gap-1.5 transition-all shadow-md cursor-pointer"
          >
            <Save className="w-4 h-4 shrink-0" />
            <span>Publicar Salvo ✓</span>
          </button>
        </div>

      </div>

      <style>{`
        .animate-slide-in {
          animation: slideIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
