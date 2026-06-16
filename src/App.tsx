import React, { useState, useEffect } from 'react';
import { ActiveScreen, ColoquioDataState, HeroSlide } from './types';
import { INITIAL_COLOQUIO_DATA } from './data';
import { doc, getDoc, setDoc, onSnapshot, collection, deleteDoc } from 'firebase/firestore';
import { auth, db, handleFirestoreError, OperationType } from './firebase';
import AuthModal from './components/AuthModal';

// @ts-ignore
import temaMusic from './components/tema.mp3';

// Component Imports
import AberturaScreen from './components/AberturaScreen';
import Header from './components/Header';
import MarqueeBanner from './components/MarqueeBanner';
import HeroCarousel from './components/HeroCarousel';
import CartaApresentacao from './components/CartaApresentacao';
import QuickActionsSidebar from './components/QuickActionsSidebar';
import AgendaScreen from './components/AgendaScreen';
import ConvidadosScreen from './components/ConvidadosScreen';
import SobreJoaoPessoaScreen from './components/SobreJoaoPessoaScreen';
import SobreUfpbScreen from './components/SobreUFPBScreen';
import CoordenacaoScreen from './components/CoordenacaoScreen';
import VisualEditorPanel from './components/VisualEditorPanel';
import Footer from './components/Footer';

// Lucide icon helper imports
import { Sparkles, ShieldCheck, Eye, Save, RotateCcw, ShieldAlert, Mail, Plus, Trash2 } from 'lucide-react';

const STORAGE_KEY = 'coloquio_data_state_v1';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ActiveScreen>('abertura');
  const [isAdmin, setIsAdmin] = useState(false);
  const [isCMSOpen, setIsCMSOpen] = useState(false);
  const [cmsTab, setCmsTab] = useState<'textos' | 'marquee' | 'config'>('textos');
  const [dataState, setDataState] = useState<ColoquioDataState | null>(null);
  const [selectedSlide, setSelectedSlide] = useState<HeroSlide | null>(null);

  // Audio Player State & Controls
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  // Firebase Auth and UI State
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [showAuthModal, setShowAuthModal] = useState(false);

  // States and operations for bottom co-administrator management
  const [adminEmails, setAdminEmails] = useState<{ id: string; email: string }[]>([]);
  const [newAdminEmail, setNewAdminEmail] = useState('');
  const [adminActionLoading, setAdminActionLoading] = useState(false);
  const [adminSuccessMsg, setAdminSuccessMsg] = useState('');
  const [adminErrorMsg, setAdminErrorMsg] = useState('');

  // Real-time listener for admin emails for the bottom manager
  useEffect(() => {
    if (!isAdmin || !currentUser) {
      setAdminEmails([]);
      return;
    }

    const q = collection(db, 'admin_emails');
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const list: { id: string; email: string }[] = [];
      snapshot.forEach((doc) => {
        list.push({ id: doc.id, email: doc.data().email || doc.id });
      });
      setAdminEmails(list);
    }, (error) => {
      console.error("Erro ao escutar emails administrativos na base:", error);
    });

    return () => unsubscribe();
  }, [isAdmin, currentUser]);

  const handleAddAdminEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    const emailToInvite = newAdminEmail.trim().toLowerCase();
    if (!emailToInvite) return;

    if (!emailToInvite.includes('@')) {
      setAdminErrorMsg('Por favor, informe um e-mail válido (ex: exemplo@gmail.com).');
      return;
    }

    setAdminActionLoading(true);
    setAdminErrorMsg('');
    setAdminSuccessMsg('');

    try {
      const docRef = doc(db, 'admin_emails', emailToInvite);
      await setDoc(docRef, {
        email: emailToInvite,
        role: 'geral',
        invitedAt: new Date().toISOString()
      });
      setAdminSuccessMsg(`O e-mail ${emailToInvite} agora é um administrador pré-autorizado!`);
      setNewAdminEmail('');
      setTimeout(() => setAdminSuccessMsg(''), 4000);
    } catch (error) {
      console.error("Erro ao adicionar co-administrador:", error);
      setAdminErrorMsg('Erro ao salvar administrador no Firestore. Verifique suas permissões.');
    } finally {
      setAdminActionLoading(false);
    }
  };

  const handleRemoveAdminEmail = async (emailToRemove: string) => {
    if (emailToRemove === 'lipewmra@gmail.com') {
      setAdminErrorMsg('Não é permitido remover o administrador principal desenvolvedor.');
      return;
    }
    if (currentUser && currentUser.email?.toLowerCase() === emailToRemove) {
      setAdminErrorMsg('Você não pode remover o seu próprio acesso de administrador.');
      return;
    }

    if (!confirm(`Tem certeza que deseja remover o acesso administrativo de ${emailToRemove}?`)) {
      return;
    }

    setAdminActionLoading(true);
    setAdminErrorMsg('');
    setAdminSuccessMsg('');

    try {
      const docRef = doc(db, 'admin_emails', emailToRemove);
      await deleteDoc(docRef);
      setAdminSuccessMsg(`Acesso de ${emailToRemove} revogado com sucesso.`);
      setTimeout(() => setAdminSuccessMsg(''), 4000);
    } catch (error) {
      console.error("Erro ao remover co-administrador:", error);
      setAdminErrorMsg('Erro ao revogar acesso administrativo no Firestore.');
    } finally {
      setAdminActionLoading(false);
    }
  };

  // Monitor Authentication and Admin privileges
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      setCurrentUser(user);
      if (user) {
        const userEmail = user.email?.toLowerCase() || '';
        if (userEmail === 'lipewmra@gmail.com') {
          setIsAdmin(true);
        } else {
          try {
            const adminDoc = await getDoc(doc(db, 'admins', user.uid));
            if (adminDoc.exists()) {
              setIsAdmin(true);
            } else if (userEmail) {
              const emailDoc = await getDoc(doc(db, 'admin_emails', userEmail));
              if (emailDoc.exists()) {
                setIsAdmin(true);
                // Sync to admins/uid for fast, reliable rules access
                await setDoc(doc(db, 'admins', user.uid), {
                  email: userEmail,
                  role: 'geral'
                });
              } else {
                setIsAdmin(false);
              }
            } else {
              setIsAdmin(false);
            }
          } catch (error) {
            console.error("Erro ao ler admins da coleção:", error);
            setIsAdmin(false);
          }
        }
      } else {
        setIsAdmin(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.log("Autoplay bloqueado ou aguardando interação do usuário para tocar tema.mp3.", err);
        });
    }
  };

  const pauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      pauseAudio();
    } else {
      playAudio();
    }
  };

  // Highly aggressive autoplay and gesture-unblock hook
  useEffect(() => {
    if (currentScreen === 'abertura') {
      // 1. Try playing immediately
      playAudio();

      // 2. Play when the audio file is ready / cached
      const handleCanPlay = () => {
        playAudio();
      };
      if (audioRef.current) {
        audioRef.current.addEventListener('canplay', handleCanPlay);
        audioRef.current.addEventListener('loadeddata', handleCanPlay);
      }

      // 3. Play on any initial user gesture anywhere on the screen
      const handleUserInteraction = () => {
        playAudio();
        cleanupListeners();
      };

      const cleanupListeners = () => {
        window.removeEventListener('click', handleUserInteraction);
        window.removeEventListener('keydown', handleUserInteraction);
        window.removeEventListener('touchstart', handleUserInteraction);
        window.removeEventListener('mousedown', handleUserInteraction);
        window.removeEventListener('pointerdown', handleUserInteraction);
        window.removeEventListener('mousemove', handleUserInteraction);
        window.removeEventListener('scroll', handleUserInteraction);
      };

      window.addEventListener('click', handleUserInteraction);
      window.addEventListener('keydown', handleUserInteraction);
      window.addEventListener('touchstart', handleUserInteraction);
      window.addEventListener('mousedown', handleUserInteraction);
      window.addEventListener('pointerdown', handleUserInteraction);
      window.addEventListener('mousemove', handleUserInteraction);
      window.addEventListener('scroll', handleUserInteraction);

      // 4. Periodic retry interval to continuously try playing as soon as browser allows it
      const intervalId = setInterval(() => {
        if (audioRef.current && audioRef.current.paused) {
          playAudio();
        } else if (audioRef.current && !audioRef.current.paused) {
          setIsPlaying(true);
          clearInterval(intervalId);
        }
      }, 300);

      return () => {
        cleanupListeners();
        clearInterval(intervalId);
        if (audioRef.current) {
          audioRef.current.removeEventListener('canplay', handleCanPlay);
          audioRef.current.removeEventListener('loadeddata', handleCanPlay);
        }
      };
    }
  }, [currentScreen]);

  const openCMSPanel = (tab: 'textos' | 'marquee' | 'config' = 'textos') => {
    setCmsTab(tab);
    setIsCMSOpen(true);
  };

  // Real-time Collaborative Persistence with Firestore
  useEffect(() => {
    const docRef = doc(db, 'coloquio_data', 'state');
    const unsubscribe = onSnapshot(docRef, (snapshot) => {
      if (snapshot.exists()) {
        const remoteData = snapshot.data() as ColoquioDataState;
        // Auto-migration check: If the Firestore payload contains outdated mock committees, speakers, or old placeholders, upgrade automatically.
        const hasOutdatedData = 
          !remoteData.committee || 
          remoteData.committee.length < 15 || 
          remoteData.committee.some(m => m.name.includes("Eduardo Jorge")) || 
          !remoteData.speakers || 
          remoteData.speakers.some(s => s.name.includes("Michael Apple") || s.name.includes("Stephen Ball")) ||
          remoteData.speakers.length < 10 ||
          remoteData.speakers.some(s => s.name === "Ana Cláudia da Silva Rodrigues" && s.imageUrl.includes("drive.google.com/drive/folders/")) ||
          !remoteData.spots ||
          remoteData.spots.length < 5 ||
          remoteData.spots.some(s => s.imageUrl.includes("unsplash.com"));
        if (hasOutdatedData) {
          setDataState(INITIAL_COLOQUIO_DATA);
          if (isAdmin) {
            setDoc(docRef, INITIAL_COLOQUIO_DATA)
              .catch((err) => {
                console.error("Erro ao migrar dados desatualizados no Firestore:", err);
              });
          }
        } else {
          setDataState(remoteData);
        }
      } else {
        // Fallback to local default data immediately
        setDataState(INITIAL_COLOQUIO_DATA);
        // Seeding database with original setup only if we have active admin privileges
        if (isAdmin) {
          setDoc(docRef, INITIAL_COLOQUIO_DATA)
            .catch((err) => {
              console.error("Erro ao tentar semear o banco do colóquio no Firestore:", err);
            });
        }
      }
    }, (error) => {
      handleFirestoreError(error, OperationType.GET, 'coloquio_data/state');
    });

    return () => unsubscribe();
  }, [isAdmin]);

  // Sync state helper to save modifications to Firestore
  const updateDataState = async (updated: ColoquioDataState) => {
    setDataState(updated);
    try {
      const docRef = doc(db, 'coloquio_data', 'state');
      await setDoc(docRef, updated);
    } catch (err) {
      handleFirestoreError(err, OperationType.WRITE, 'coloquio_data/state');
    }
  };

  const handleResetDefaults = async () => {
    setDataState(INITIAL_COLOQUIO_DATA);
    try {
      const docRef = doc(db, 'coloquio_data', 'state');
      await setDoc(docRef, INITIAL_COLOQUIO_DATA);
    } catch (err) {
      handleFirestoreError(err, OperationType.WRITE, 'coloquio_data/state');
    }
  };

  if (!dataState) {
    return (
      <div className="flex h-screen w-screen items-center justify-center bg-neutral-950 text-white font-mono uppercase text-xs">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin" />
          <span>Iniciando Banco de Dados Local...</span>
        </div>
      </div>
    );
  }

  // Render single-view or splash
  return (
    <>
      {/* Ambient Loop Audio Element - Persistent across all screens to avoid restarts */}
      <audio 
        ref={audioRef} 
        src={temaMusic} 
        loop 
        preload="auto"
        autoPlay
      />

      {currentScreen === 'abertura' ? (
        <AberturaScreen 
          onEnter={() => setCurrentScreen('home')} 
        />
      ) : (
        <div className="min-h-screen bg-[#F3F3F2] flex flex-col justify-between selection:bg-yellow-400 selection:text-black">
          
          {/* 1. Portal Navigation Header */}
          <Header
            currentScreen={currentScreen}
            setCurrentScreen={setCurrentScreen}
            isAdmin={isAdmin}
            setIsAdmin={setIsAdmin}
            onOpenCMSPanel={() => openCMSPanel('textos')}
            isPlaying={isPlaying}
            onTogglePlay={togglePlay}
            onOpenAuth={() => setShowAuthModal(true)}
            currentUser={currentUser}
          />

      {/* 2. Top Marquee ticker bar */}
      <MarqueeBanner
        marqueeData={dataState.marquee}
        isAdmin={isAdmin}
        onUpdateMarquee={(txt) => {
          const updated = { ...dataState, marquee: { ...dataState.marquee, text: txt } };
          updateDataState(updated);
        }}
        onUpdateMarqueeBadge={(badge) => {
          const updated = { ...dataState, marquee: { ...dataState.marquee, badgeText: badge } };
          updateDataState(updated);
        }}
        onOpenCMS={() => openCMSPanel('marquee')}
      />

      {/* Secondary Admin Warning bar only during visual editing */}
      {isAdmin && (
        <div className="bg-neutral-900 text-white px-4 py-2 text-[10px] font-mono border-b border-black flex gap-3 justify-center items-center flex-wrap select-none">
          <span className="text-yellow-400 font-extrabold flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5" /> EDITOR ATIVO:
          </span>
          <span>Sinta-se à vontade para reordenar via drag-and-drop, deletar e acrescentar itens em qualquer tela.</span>
          <button
            onClick={() => openCMSPanel('textos')}
            className="bg-red-700 hover:bg-red-800 text-white border-2 border-black px-2 py-0.5 tracking-wider font-black uppercase text-[9px] transition-transform active:translate-y-0.5"
          >
            Abrir Painel Lateral CMS
          </button>
        </div>
      )}

      {/* 3. Main Viewport switch */}
      <main className="flex-1">
        {currentScreen === 'home' && (
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column (Hero Carousel + Carta de Apresentacao) */}
              <div className="lg:col-span-8 space-y-8 text-left">
                {/* Visual Promotional Slide Gallery */}
                <HeroCarousel
                  slides={dataState.heroSlides}
                  isAdmin={isAdmin}
                  onUpdateSlides={(slides) => {
                    updateDataState({ ...dataState, heroSlides: slides });
                  }}
                  onViewDetails={(slide) => {
                    setSelectedSlide(slide);
                    setCurrentScreen('slide_details');
                  }}
                />

                {/* Narrative Presentation letter text editors */}
                <CartaApresentacao
                  letterData={dataState.letter}
                  isAdmin={isAdmin}
                  onUpdateLetter={(letter) => {
                    updateDataState({ ...dataState, letter });
                  }}
                />
              </div>

              {/* Right Column (Sidebar Quick buttons & notifications) */}
              <div className="lg:col-span-4">
                <QuickActionsSidebar
                  actions={dataState.quickActions}
                  announcements={dataState.announcements}
                  isAdmin={isAdmin}
                  onUpdateActions={(actions) => {
                    updateDataState({ ...dataState, quickActions: actions });
                  }}
                  onUpdateAnnouncements={(ann) => {
                    updateDataState({ ...dataState, announcements: ann });
                  }}
                  onSelectAction={(anchor) => {
                    // Route matches anchors
                    if (anchor === 'agenda') {
                      setCurrentScreen('agenda');
                    } else if (anchor === 'local') {
                      setCurrentScreen('sobre_jp');
                    }
                  }}
                />
              </div>

            </div>
          </div>
        )}

        {currentScreen === 'agenda' && (
          <AgendaScreen
            schedule={dataState.schedule}
            isAdmin={isAdmin}
            onUpdateSchedule={(schedule) => {
              updateDataState({ ...dataState, schedule });
            }}
          />
        )}

        {currentScreen === 'convidados' && (
          <ConvidadosScreen
            speakers={dataState.speakers}
            isAdmin={isAdmin}
            onUpdateSpeakers={(speakers) => {
              updateDataState({ ...dataState, speakers });
            }}
          />
        )}

        {currentScreen === 'sobre_jp' && (
          <SobreJoaoPessoaScreen
            spots={dataState.spots}
            isAdmin={isAdmin}
            onUpdateSpots={(spots) => {
              updateDataState({ ...dataState, spots });
            }}
          />
        )}

        {currentScreen === 'sobre_ufpb' && (
          <SobreUfpbScreen
            venues={dataState.venues}
            services={dataState.services}
            isAdmin={isAdmin}
            onUpdateVenues={(venues) => {
              updateDataState({ ...dataState, venues });
            }}
            onUpdateServices={(services) => {
              updateDataState({ ...dataState, services });
            }}
          />
        )}

        {currentScreen === 'coordenacao' && (
          <CoordenacaoScreen
            committee={dataState.committee}
            isAdmin={isAdmin}
            onUpdateCommittee={(committee) => {
              updateDataState({ ...dataState, committee });
            }}
          />
        )}

        {currentScreen === 'slide_details' && selectedSlide && (
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8 text-left select-text">
            {/* Breadcrumbs and back button */}
            <div className="mb-6 flex items-center justify-between">
              <button
                onClick={() => setCurrentScreen('home')}
                className="inline-flex items-center gap-1.5 bg-black hover:bg-neutral-800 text-white font-bold text-[10px] uppercase px-3 py-1.5 border border-black shadow-sm transition-colors cursor-pointer"
              >
                ← Voltar para o Início
              </button>
              <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider">Espaço do Participante</span>
            </div>

            {/* Poster Header */}
            <div className="relative border border-black h-[220px] md:h-[350px] bg-black overflow-hidden flex flex-col justify-end p-6 md:p-8 shadow-md">
              <div 
                className="absolute inset-0 bg-cover bg-center brightness-[0.35]" 
                style={{ backgroundImage: `url(${selectedSlide.imageUrl})` }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,_transparent_1px),_linear-gradient(90deg,_rgba(255,255,255,0.015)_1px,_transparent_1px)] bg-[size:25px_25px] pointer-events-none" />
              <div className="relative z-10 text-white">
                <h1 className="text-xl md:text-3xl font-display font-black uppercase text-white drop-shadow">
                  {selectedSlide.title}
                </h1>
                <p className="mt-2 text-xs md:text-sm text-neutral-300 font-medium uppercase tracking-wide">
                  {selectedSlide.subtitle}
                </p>
              </div>
            </div>

            {/* Rich Content Details / Text */}
            <div className="bg-white border-x border-b border-black p-6 md:p-10 space-y-6 shadow-sm min-h-[250px]">
              <div className="border-l-4 border-red-650 border-red-600 pl-4 py-1.5 select-none">
                <h3 className="text-xs font-black uppercase text-black tracking-wide">Informações Gerais</h3>
              </div>
              
              <div className="prose max-w-none text-neutral-700 text-xs md:text-sm font-sans leading-relaxed space-y-4">
                {selectedSlide.detailsText ? (
                  selectedSlide.detailsText.split('\n').map((paragraph: string, idx: number) => {
                    const trimmed = paragraph.trim();
                    if (!trimmed) return null;
                    return (
                      <p key={idx} className="whitespace-pre-wrap font-light first-letter:text-neutral-900 first-letter:font-semibold">
                        {trimmed}
                      </p>
                    );
                  })
                ) : (
                  <p className="italic text-neutral-400">Nenhum detalhe adicional foi inserido para este aviso do carrossel.</p>
                )}
              </div>
            </div>

            {/* Bottom Footer Back button */}
            <div className="mt-8 flex justify-center border-t border-dashed border-neutral-300 pt-6">
              <button
                onClick={() => setCurrentScreen('home')}
                className="px-6 py-2.5 bg-neutral-100 hover:bg-neutral-200 text-black border border-black font-extrabold text-[11px] uppercase tracking-wider transition-all shadow-md active:translate-y-0.5 pointer-events-auto"
              >
                Retornar ao Portal Principal
              </button>
            </div>
          </div>
        )}
      </main>

      {/* 4. Unified Footer and sponsors info */}
      {isAdmin && (
        <div className="bg-neutral-100 border-t border-black py-8 select-text">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="border border-black p-6 md:p-8 bg-white relative rounded-none shadow-md">
              <div className="absolute top-0 right-0 w-3 h-3 bg-red-600" />
              
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                {/* Information Callout */}
                <div className="md:col-span-12 lg:col-span-5 space-y-2 text-left">
                  <div className="flex items-center gap-1.5 text-red-600 font-bold text-xs uppercase tracking-wide">
                    <ShieldCheck className="w-5 h-5 text-red-600 shrink-0" />
                    <span>Gerenciamento de Co-Administradores</span>
                  </div>
                  <h3 className="text-base md:text-lg font-display font-medium uppercase tracking-tight text-black">
                    Adicionar Novos Gestores
                  </h3>
                  <p className="text-xs text-neutral-500 leading-relaxed font-sans font-light">
                    Como administrador ativo, você pode delegar privilégios de escrita em tempo real para outros membros da coordenação acadêmica do colóquio. Insira o e-mail Gmail deles para autorizar.
                  </p>
                </div>

                {/* Insertion Form and list */}
                <div className="md:col-span-12 lg:col-span-7 space-y-4">
                  {adminSuccessMsg && (
                    <div className="bg-green-50 border-l-4 border-green-600 p-2.5 text-xs text-green-800 font-bold uppercase tracking-wide animate-fade-in">
                      ✦ {adminSuccessMsg}
                    </div>
                  )}
                  {adminErrorMsg && (
                    <div className="bg-red-50 border-l-4 border-red-600 p-2.5 text-xs text-red-800 font-bold uppercase tracking-wide animate-fade-in">
                      ⚡ {adminErrorMsg}
                    </div>
                  )}

                  <form onSubmit={handleAddAdminEmail} className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="email"
                      value={newAdminEmail}
                      onChange={(e) => setNewAdminEmail(e.target.value)}
                      placeholder="e-mail-do-gestor@gmail.com"
                      className="flex-1 bg-white border border-neutral-400 p-2 text-xs text-black font-semibold placeholder:text-neutral-400 focus:outline-none focus:ring-1 focus:ring-red-600 lowercase"
                      required
                      disabled={adminActionLoading}
                    />
                    <button
                      type="submit"
                      disabled={adminActionLoading}
                      className="bg-red-600 hover:bg-red-700 text-white border border-black font-extrabold text-xs uppercase px-5 py-2 transition-transform active:translate-y-0.5 cursor-pointer flex items-center justify-center gap-1 shrink-0"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>{adminActionLoading ? '...' : 'Autorizar e-mail'}</span>
                    </button>
                  </form>

                  <div className="space-y-1.5 pt-1 text-left">
                    <span className="text-[9px] font-extrabold text-neutral-500 uppercase tracking-widest block">
                      Lista de E-mails Autorizados Atualmente ({adminEmails.length})
                    </span>
                    <div className="flex flex-wrap gap-2 max-h-36 overflow-y-auto p-1.5 bg-neutral-50 border border-neutral-300">
                      {adminEmails.length === 0 ? (
                        <span className="text-xs italic text-neutral-400 p-1">Nenhum outro co-administrador autorizado.</span>
                      ) : (
                        adminEmails.map((adm) => (
                          <div 
                            key={adm.id} 
                            className="bg-white border border-neutral-300 py-1 px-2.5 flex items-center gap-2 text-xs font-mono shadow-sm hover:border-black transition-colors"
                          >
                            <span className="text-black font-semibold lowercase">{adm.email}</span>
                            {adm.email !== 'lipewmra@gmail.com' && (!currentUser || currentUser.email?.toLowerCase() !== adm.email) ? (
                              <button
                                type="button"
                                onClick={() => handleRemoveAdminEmail(adm.email)}
                                disabled={adminActionLoading}
                                className="text-red-600 hover:text-black border-l border-neutral-300 pl-1.5 cursor-pointer flex items-center"
                                title="Revogar acesso"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            ) : (
                              <span className="text-[8px] bg-neutral-100 text-neutral-500 px-1 py-0.5 font-bold uppercase ml-1 border border-neutral-200">Sistema</span>
                            )}
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />

      {/* 5. Draw Visual Editor panel drawer */}
      <VisualEditorPanel
        isOpen={isCMSOpen}
        onClose={() => setIsCMSOpen(false)}
        initialTab={cmsTab}
        data={dataState}
        onSaveAll={(updated) => updateDataState(updated)}
        onResetDefaults={handleResetDefaults}
      />

      {/* 6. Admin Authentication Portal */}
      <AuthModal 
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        isAdmin={isAdmin}
        currentUser={currentUser}
      />

        </div>
      )}
    </>
  );
}
