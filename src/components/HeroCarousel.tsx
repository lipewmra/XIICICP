import React, { useState } from 'react';
import { HeroSlide } from '../types';
import { ChevronLeft, ChevronRight, Edit3, Trash2, Plus, CornerDownRight, ArrowRight } from 'lucide-react';

interface HeroCarouselProps {
  slides: HeroSlide[];
  isAdmin: boolean;
  onUpdateSlides: (newSlides: HeroSlide[]) => void;
  onViewDetails: (slide: HeroSlide) => void;
}

export default function HeroCarousel({
  slides,
  isAdmin,
  onUpdateSlides,
  onViewDetails
}: HeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [editingSlideId, setEditingSlideId] = useState<string | null>(null);

  // Edit fields state
  const [editTitle, setEditTitle] = useState('');
  const [editSubtitle, setEditSubtitle] = useState('');
  const [editImage, setEditImage] = useState('');
  const [editDetailsText, setEditDetailsText] = useState('');

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const startEdit = (slide: HeroSlide) => {
    setEditingSlideId(slide.id);
    setEditTitle(slide.title);
    setEditSubtitle(slide.subtitle);
    setEditImage(slide.imageUrl);
    setEditDetailsText(slide.detailsText || '');
  };

  const saveEdit = () => {
    const updated = slides.map((s) => {
      if (s.id === editingSlideId) {
        return {
          ...s,
          title: editTitle,
          subtitle: editSubtitle,
          imageUrl: editImage,
          buttonText: "VER DETALHES",
          buttonLink: "internal",
          detailsText: editDetailsText
        };
      }
      return s;
    });
    onUpdateSlides(updated);
    setEditingSlideId(null);
  };

  const deleteSlide = (id: string) => {
    if (slides.length <= 1) {
      alert("Deve haver ao menos 1 banner no carrossel de exibição.");
      return;
    }
    const filtered = slides.filter((s) => s.id !== id);
    onUpdateSlides(filtered);
    setCurrentIndex(0);
  };

  const addNewSlide = () => {
    const newSlide: HeroSlide = {
      id: `slide_${Date.now()}`,
      imageUrl: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=1200",
      title: "NOVO GRUPO DE TRABALHO CADASTRADO",
      subtitle: "Confira as áreas de discussão curricular e participe ativamente das plenárias no CE.",
      buttonText: "VER DETALHES",
      buttonLink: "internal",
      detailsText: "Insira as informações completas para este novo slide aqui..."
    };
    onUpdateSlides([...slides, newSlide]);
    setCurrentIndex(slides.length); // Point to the new slide
  };

  // Drag and Drop ordering handler
  const [draggedIdx, setDraggedIdx] = useState<number | null>(null);

  const handleDragStart = (e: React.DragEvent, idx: number) => {
    setDraggedIdx(idx);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e: React.DragEvent, idx: number) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent, targetIdx: number) => {
    e.preventDefault();
    if (draggedIdx === null) return;
    const reordered = [...slides];
    const [removed] = reordered.splice(draggedIdx, 1);
    reordered.splice(targetIdx, 0, removed);
    onUpdateSlides(reordered);
    setDraggedIdx(null);
    setCurrentIndex(targetIdx);
  };

  const activeSlide = slides[currentIndex] || slides[0];

  if (!activeSlide) return null;

  return (
    <div className="relative flex flex-col">
      {/* Visual Carousel Stage */}
      <div 
        onClick={() => {
          if (editingSlideId !== activeSlide.id) {
            onViewDetails(activeSlide);
          }
        }}
        className="relative border border-black bg-black overflow-hidden font-sans h-[350px] md:h-[460px] flex flex-col justify-end shadow-xl cursor-pointer group"
      >
        {/* Background Graphic Slide Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-700 brightness-[0.4] group-hover:scale-105 select-none"
          style={{ backgroundImage: `url(${activeSlide.imageUrl})` }}
        />

        {/* Grid Pattern overlay for Geometric scale feel */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,_transparent_1px),_linear-gradient(90deg,_rgba(255,255,255,0.02)_1px,_transparent_1px)] bg-[size:30px_30px] pointer-events-none" />

        {/* Visual Content Section */}
        <div className="relative z-10 p-6 md:p-10 text-left self-start text-white w-full max-w-4xl">
          <div>
            <h2 className="text-xl md:text-3xl font-display font-bold tracking-tight leading-tight uppercase line-clamp-2 md:max-w-xl text-white drop-shadow-md select-text">
              {activeSlide.title}
            </h2>
            <p className="mt-2 text-xs md:text-sm text-neutral-200 uppercase max-w-2xl font-light tracking-wide leading-relaxed select-text">
              {activeSlide.subtitle}
            </p>
            
            {/* Interactive Badge indicating dynamic clickable detail page */}
            <div className="mt-5 inline-flex items-center gap-1 bg-white hover:bg-neutral-150 text-black px-4 py-2 border border-black text-[10px] font-bold uppercase tracking-wider relative group">
              <span>{activeSlide.buttonText || "VER DETALHES DA PÁGINA"}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>

        {/* Carousel Navigation Arrows have been removed */}

        {/* Slide Index Dotted indicators */}
        <div className="absolute bottom-4 right-4 z-20 flex gap-1.5 bg-black/60 p-2.5 border border-neutral-800 rounded-none backdrop-blur-md">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(idx);
              }}
              className={`w-2.5 h-2.5 rounded-full border border-neutral-700 transition-all cursor-pointer ${
                idx === currentIndex ? 'bg-red-600 scale-125' : 'bg-white/60 hover:bg-white'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Slide Edit Block Form: rendered below the carousel, avoiding overlaps or blockers entirely */}
      {editingSlideId === activeSlide.id && (
        <div className="mt-4 bg-white text-black border border-black p-4 text-left select-text shadow-md">
          <div className="flex justify-between items-center border-b border-black pb-2 mb-3">
            <h4 className="font-extrabold text-xs text-red-650 text-red-600 uppercase flex items-center gap-1 select-none">
              <CornerDownRight className="w-4 h-4" /> Painel de Edição do Slide Selecionado
            </h4>
            <span className="text-[10px] font-bold text-neutral-500 uppercase select-none">Slide {currentIndex + 1} de {slides.length}</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block font-semibold text-neutral-700 mb-1">Título Grande:</label>
              <input
                type="text"
                className="w-full bg-neutral-100 text-black border border-neutral-300 p-2.5 focus:ring-1 focus:ring-red-600 font-sans"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
              />
            </div>
            <div>
              <label className="block font-semibold text-neutral-700 mb-1">Subtítulo Descritivo:</label>
              <input
                type="text"
                className="w-full bg-neutral-100 text-black border border-neutral-300 p-2.5 focus:ring-1 focus:ring-red-600 font-sans"
                value={editSubtitle}
                onChange={(e) => setEditSubtitle(e.target.value)}
              />
            </div>
            <div className="md:col-span-2">
              <label className="block font-semibold text-neutral-700 mb-1">Imagem de Fundo URL:</label>
              <input
                type="text"
                className="w-full bg-neutral-100 text-black border border-neutral-300 p-2.5 text-[10px] focus:ring-1 focus:ring-red-600 font-mono"
                value={editImage}
                onChange={(e) => setEditImage(e.target.value)}
              />
            </div>
            <div className="md:col-span-2">
              <div className="bg-red-50/40 p-3.5 border border-dashed border-red-300 rounded-none mb-3 select-none">
                <span className="font-extrabold text-red-600 text-[10px] uppercase tracking-wider block mb-1">✦ PÁGINA INTERNA AUTOGERADA</span>
                <p className="text-[11px] text-neutral-700 font-sans leading-relaxed">
                  Em consonância com as diretrizes do colóquio, este banner funciona como um link interativo direto. Ao clicar em qualquer parte do banner, o visitante é redirecionado para uma <strong>página interna exclusiva</strong> contendo o texto informativo completo digitado abaixo.
                </p>
              </div>
              <label className="block font-semibold text-neutral-700 mb-1 uppercase tracking-wide text-red-600">Conteúdo de Detalhes da Página Interna (Informações completas):</label>
              <textarea
                rows={6}
                className="w-full bg-neutral-50 text-black border border-neutral-400 p-2.5 focus:outline-none focus:ring-1 focus:ring-red-600 font-sans text-xs leading-relaxed"
                value={editDetailsText}
                onChange={(e) => setEditDetailsText(e.target.value)}
                placeholder="Escreva as informações detalhadas sobre este banner. Parágrafos de texto serão exibidos na página interna quando os participantes clicarem no slide..."
              />
            </div>
          </div>
          
          <div className="flex gap-2 mt-4 justify-end font-sans select-none">
            <button
              onClick={() => setEditingSlideId(null)}
              className="bg-neutral-100 text-neutral-700 font-bold py-1.5 px-3 border border-neutral-300 hover:bg-neutral-250 text-xs transition-colors cursor-pointer"
            >
              Cancelar
            </button>
            <button
              onClick={saveEdit}
              className="bg-red-600 text-white font-bold py-1.5 px-4 border border-red-700 hover:bg-red-700 text-xs transition-colors shadow-sm cursor-pointer"
            >
              Salvar Alterações
            </button>
          </div>
        </div>
      )}

      {/* ADMIN CONTROL TAB IN CAROUSEL CONTAINER: Rendered responsively inside a block below on mobile or absolute overlay on desktop */}
      {isAdmin && (
        <div className="relative mt-4 w-full md:absolute md:top-4 md:right-4 md:z-30 md:mt-0 md:max-w-[280px] bg-white p-3 border border-black shadow-xl rounded-none">
          <div className="w-full text-[9px] font-bold text-black uppercase flex justify-between border-b border-black pb-1.5 mb-1 select-none">
            <span>GERENCIADOR DO CARROSSEL:</span>
            <span>Arrastável ☰</span>
          </div>
          
          <div className="flex gap-2 w-full mt-1.5 select-none">
            <button
              onClick={() => startEdit(activeSlide)}
              className="flex-1 bg-neutral-100 text-black hover:bg-red-600 hover:text-white text-[10px] font-bold px-2 py-1.5 uppercase flex items-center justify-center gap-1 rounded-none border border-black transition-all cursor-pointer"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>Editar</span>
            </button>
            
            <button
              onClick={() => deleteSlide(activeSlide.id)}
              className="bg-black text-white hover:bg-red-650 hover:bg-red-600 text-[10px] font-bold px-2 py-1.5 uppercase flex items-center justify-center gap-1 rounded-none border border-black transition-all cursor-pointer"
              title="Deletar este slide"
            >
              <Trash2 className="w-3.5 h-3.5 text-red-600" />
              <span>Deletar</span>
            </button>
            
            <button
              onClick={addNewSlide}
              className="bg-red-650 bg-red-600 text-white hover:bg-red-700 text-[10px] font-bold px-2 py-1.5 uppercase flex items-center justify-center gap-1 rounded-none border border-black transition-all cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Inserir</span>
            </button>
          </div>

          {/* Quick drag & drop sorting preview triggers */}
          <div className="w-full mt-3 pt-1.5 border-t border-black flex flex-col gap-1 select-none">
            <span className="text-[8px] font-bold text-neutral-500 uppercase block text-left">Arrastar p/ Ordenar:</span>
            <div className="flex gap-1 flex-wrap">
              {slides.map((s, idx) => (
                <div
                  key={s.id}
                  draggable
                  onDragStart={(e) => handleDragStart(e, idx)}
                  onDragOver={(e) => handleDragOver(e, idx)}
                  onDrop={(e) => handleDrop(e, idx)}
                  onClick={() => setCurrentIndex(idx)}
                  className={`px-1.5 py-1 text-[9px] font-bold leading-none cursor-move border transition-all ${
                    idx === currentIndex
                      ? 'bg-red-650 bg-red-600 text-white border-black font-extrabold shadow-sm'
                      : 'bg-neutral-100 text-black border-neutral-300 hover:border-black'
                  }`}
                  title="Clique para ir ao slide ou arraste para ordenar"
                >
                  ☰ S{idx + 1}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
