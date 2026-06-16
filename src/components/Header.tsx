import React, { useState } from 'react';
import { ActiveScreen } from '../types';
import { Menu, X, ShieldAlert, Sparkles, LogIn, Volume2, VolumeX, Music, Play, Pause } from 'lucide-react';
// @ts-ignore
import margaridaWideImg from '../img/MargaridaWide.png';

interface HeaderProps {
  currentScreen: ActiveScreen;
  setCurrentScreen: (screen: ActiveScreen) => void;
  isAdmin: boolean;
  setIsAdmin: (isAdmin: boolean) => void;
  onOpenCMSPanel: () => void;
  isPlaying: boolean;
  onTogglePlay: () => void;
  onOpenAuth: () => void;
  currentUser: any;
}

export default function Header({
  currentScreen,
  setCurrentScreen,
  isAdmin,
  setIsAdmin,
  onOpenCMSPanel,
  isPlaying,
  onTogglePlay,
  onOpenAuth,
  currentUser
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { label: string; id: ActiveScreen }[] = [
    { label: 'Início', id: 'home' },
    { label: 'Programação', id: 'agenda' },
    { label: 'Convidados', id: 'convidados' },
    { label: 'João Pessoa - PB', id: 'sobre_jp' },
    { label: 'UFPB', id: 'sobre_ufpb' },
    { label: 'Coordenação', id: 'coordenacao' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-black bg-white/95 backdrop-blur-md font-sans">
      {/* Admin Quick Control Banner */}
      {isAdmin && (
        <div className="bg-black text-white border-b border-neutral-900 px-4 py-2.5 text-xs font-medium flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></span>
            <span className="text-neutral-200 font-medium tracking-wide">MODO ADMINISTRADOR ATIVO: Edições Visuais e In-Line Habilitadas!</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenCMSPanel}
              className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 text-[10px] uppercase font-bold transition-all shadow-md shadow-red-600/20 cursor-pointer"
            >
              Abrir Painel Geral do CMS ✦
            </button>
            <span className="text-[10px] text-neutral-400 hidden md:inline">Dica: Clique ou clique-duplo em qualquer texto para editá-lo!</span>
          </div>
        </div>
      )}

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo Brand / Stamps */}
          <div
            onClick={() => setCurrentScreen('home')}
            className="flex items-center gap-3 cursor-pointer select-none group"
          >
            <img 
              src={margaridaWideImg} 
              alt="Margarida Alves" 
              className="object-contain transition-transform group-hover:scale-105 duration-200"
              style={{ width: '139.0781px', height: '64px' }}
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = currentScreen === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => {
                    setCurrentScreen(link.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`px-3 py-1.5 text-xs font-bold uppercase transition-all duration-200 ${
                    isActive
                      ? 'bg-black text-white font-extrabold'
                      : 'text-neutral-700 hover:text-red-600 hover:bg-neutral-100'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}

            {/* Audio Control Menu Item */}
            <button
              onClick={onTogglePlay}
              className={`px-3 py-1.5 text-xs font-bold uppercase transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                isPlaying
                  ? 'text-red-600 hover:bg-red-50'
                  : 'text-neutral-700 hover:text-red-600 hover:bg-neutral-100'
              }`}
              title={isPlaying ? "Desativar player de som" : "Ativar player de som"}
            >
              {isPlaying ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 animate-pulse text-red-600" />
                  <span>TEMA (ON)</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-neutral-400" />
                  <span>TEMA (OFF)</span>
                </>
              )}
            </button>
          </nav>

          {/* Configuration and Mode Switches */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Admin Switch requiring Auth */}
            <div className="flex items-center gap-2 border border-black p-1 bg-neutral-50">
              <span className="text-[10px] font-bold text-neutral-550 uppercase pl-1 text-neutral-600">
                ADMINISTRAR:
              </span>
              <button
                onClick={onOpenAuth}
                className={`px-2.5 py-1 text-[10px] font-bold uppercase transition-all duration-150 flex items-center gap-1 cursor-pointer ${
                  isAdmin
                    ? 'bg-red-600 text-white'
                    : 'bg-white text-black hover:bg-neutral-100 border border-neutral-300'
                }`}
              >
                <Sparkles className="w-3 h-3 text-current" />
                <span>Login</span>
              </button>
            </div>

            {/* Back to intro screen trigger */}
            <button
              onClick={() => setCurrentScreen('abertura')}
              className="px-3 py-1.5 bg-neutral-100 hover:bg-neutral-200 text-black text-xs font-bold border border-black transition-all uppercase flex items-center gap-1 cursor-pointer"
            >
              <LogIn className="w-3 h-3 scale-x-[-1]" />
              <span className="hidden md:inline">Cortina</span>
            </button>
          </div>

          {/* Mobile Hamburguer Menu Trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Red sound play button with white icon */}
            <button
              onClick={onTogglePlay}
              className="p-2 border border-black bg-red-600 text-white hover:bg-red-700 transition-all flex items-center justify-center cursor-pointer shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5"
              title={isPlaying ? "Desativar player de som" : "Ativar player de som"}
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 text-white fill-white" />
              ) : (
                <Play className="w-5 h-5 text-white fill-white" />
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 border border-black bg-white text-black hover:bg-neutral-100"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-black bg-white p-4 flex flex-col gap-2 shadow-inner">
          {navLinks.map((link) => {
            const isActive = currentScreen === link.id;
            return (
              <button
                key={link.id}
                onClick={() => {
                  setCurrentScreen(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full py-2.5 px-4 text-left font-bold text-xs uppercase transition-all ${
                  isActive
                    ? 'bg-red-600 text-white'
                    : 'bg-white text-neutral-700 hover:bg-neutral-100'
                }`}
              >
                {link.label}
              </button>
            );
          })}

          {/* Secure Mobile Admin Entry in Mobile Main Menu Panel */}
          <button
            onClick={() => {
              onOpenAuth();
              setMobileMenuOpen(false);
            }}
            className={`w-full py-2.5 px-4 text-left font-bold text-xs uppercase transition-all flex items-center justify-between border-2 border-black/30 mt-2 ${
              isAdmin
                ? 'bg-red-600 text-white font-extrabold'
                : 'bg-neutral-50 text-neutral-700 hover:bg-neutral-100 font-bold'
            }`}
          >
            <span className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-current" />
              <span>Espaço Administrador</span>
            </span>
            <span className="text-[9px] px-1.5 py-0.5 border border-current font-mono">
              {currentUser ? (isAdmin ? 'ATIVO' : 'RESTRITO') : 'ENTRAR'}
            </span>
          </button>

          {/* Mobil Extra Actions */}
          <div className="mt-2 pt-2 border-t border-black flex flex-col gap-2">
            <button
              onClick={() => {
                setCurrentScreen('abertura');
                setMobileMenuOpen(false);
              }}
              className="w-full py-2 bg-black text-white text-center font-bold text-xs uppercase"
            >
              Reiniciar Tela de Abertura (Cortina)
            </button>
            {isAdmin && (
              <button
                onClick={() => {
                  onOpenCMSPanel();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2 bg-red-600 hover:bg-red-700 text-white font-bold text-center text-xs uppercase shadow-sm"
              >
                Painel Geral de Gerência CMS
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
