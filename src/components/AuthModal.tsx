import React, { useState, useEffect } from 'react';
import { 
  signInWithPopup, 
  GoogleAuthProvider, 
  signOut
} from 'firebase/auth';
import { auth, db } from '../firebase';
import { X, ShieldAlert, Sparkles, Lock, Chrome, Info, Shield, Plus, Trash2 } from 'lucide-react';
import { doc, setDoc, collection, onSnapshot, deleteDoc } from 'firebase/firestore';
import { handleFirestoreError, OperationType } from '../firebase';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  isAdmin: boolean;
  currentUser: any;
}

export default function AuthModal({ isOpen, onClose, isAdmin, currentUser }: AuthModalProps) {
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [loading, setLoading] = useState(false);

  // States for other administrator emails
  const [adminEmails, setAdminEmails] = useState<{ id: string; email: string }[]>([]);
  const [newAdminEmail, setNewAdminEmail] = useState('');
  const [adminActionLoading, setAdminActionLoading] = useState(false);

  // Subscribe to pre-authorized administrator emails
  useEffect(() => {
    if (!isOpen || !currentUser || !isAdmin) return;

    const q = collection(db, 'admin_emails');
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const list: { id: string; email: string }[] = [];
      snapshot.forEach((doc) => {
        list.push({ id: doc.id, email: doc.data().email || doc.id });
      });
      setAdminEmails(list);
    }, (error) => {
      console.error("Erro ao escutar emails administrativos:", error);
      handleFirestoreError(error, OperationType.GET, 'admin_emails');
    });

    return () => unsubscribe();
  }, [isOpen, currentUser, isAdmin]);

  if (!isOpen) return null;

  const handleAddAdminEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    const emailToInvite = newAdminEmail.trim().toLowerCase();
    if (!emailToInvite) return;

    if (!emailToInvite.includes('@')) {
      setErrorMsg('Por favor, informe um e-mail válido (ex: exemplo@gmail.com).');
      return;
    }

    setAdminActionLoading(true);
    setErrorMsg('');
    setSuccessMsg('');

    try {
      const docRef = doc(db, 'admin_emails', emailToInvite);
      await setDoc(docRef, {
        email: emailToInvite,
        role: 'geral',
        invitedAt: new Date().toISOString()
      });
      setSuccessMsg(`O e-mail ${emailToInvite} agora é um administrador pré-autorizado!`);
      setNewAdminEmail('');
    } catch (error) {
      console.error("Erro ao adicionar co-administrador:", error);
      try {
        handleFirestoreError(error, OperationType.WRITE, `admin_emails/${emailToInvite}`);
      } catch (mappedError: any) {
        setErrorMsg('Erro ao salvar administrador no Firestore.');
      }
    } finally {
      setAdminActionLoading(false);
    }
  };

  const handleRemoveAdminEmail = async (emailToRemove: string) => {
    if (emailToRemove === 'lipewmra@gmail.com') {
      setErrorMsg('Não é permitido remover o administrador principal desenvolvedor.');
      return;
    }
    if (currentUser && currentUser.email?.toLowerCase() === emailToRemove) {
      setErrorMsg('Você não pode remover o seu próprio acesso de administrador.');
      return;
    }

    if (!confirm(`Tem certeza que deseja remover o acesso administrativo de ${emailToRemove}?`)) {
      return;
    }

    setAdminActionLoading(true);
    setErrorMsg('');
    setSuccessMsg('');

    try {
      const docRef = doc(db, 'admin_emails', emailToRemove);
      await deleteDoc(docRef);
      setSuccessMsg(`Acesso de ${emailToRemove} revogado com sucesso.`);
    } catch (error) {
      console.error("Erro ao remover co-administrador:", error);
      try {
        handleFirestoreError(error, OperationType.DELETE, `admin_emails/${emailToRemove}`);
      } catch (mappedError: any) {
        setErrorMsg('Erro ao revogar acesso administrativo no Firestore.');
      }
    } finally {
      setAdminActionLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    setErrorMsg('');
    setSuccessMsg('');
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      
      // If the email is lipewmra@gmail.com, immediately register/confirm in Firestore admins collection
      if (result.user.email === 'lipewmra@gmail.com') {
        const adminRef = doc(db, 'admins', result.user.uid);
        await setDoc(adminRef, {
          email: result.user.email,
          role: 'geral'
        }, { merge: true });
      }

      setSuccessMsg('Conectado com sucesso através do Google OAuth!');
      setTimeout(() => {
        onClose();
        setSuccessMsg('');
      }, 1500);
    } catch (err: any) {
      console.error(err);
      setErrorMsg(err.message || 'Erro ao realizar login with Google.');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    setLoading(true);
    try {
      await signOut(auth);
      setSuccessMsg('Desconectado do ambiente administrativo.');
      setTimeout(() => {
        onClose();
        setSuccessMsg('');
      }, 1200);
    } catch (err: any) {
      setErrorMsg('Erro ao tentar sair.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        id="auth-modal-card"
        className="relative w-full max-w-md bg-white border-2 border-black p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-left"
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-1 border border-black hover:bg-neutral-100 transition-all cursor-pointer"
          title="Fechar"
        >
          <X className="w-5 h-5 text-black" />
        </button>

        {/* Title Header */}
        <div className="flex items-center gap-3 mb-6 border-b-2 border-black pb-4">
          <Lock className="w-6 h-6 text-red-600" />
          <div>
            <h2 className="text-lg font-black uppercase tracking-wider font-sans text-black">
              AMBIENTE ADMIN
            </h2>
            <p className="text-[10px] text-neutral-500 font-mono uppercase tracking-widest mt-0.5">
              Portal de Segurança e Edição
            </p>
          </div>
        </div>

        {/* Success / Error Alerts */}
        {errorMsg && (
          <div className="mb-4 bg-red-50 border-l-4 border-red-600 p-3 text-xs text-red-800 font-medium flex items-start gap-2">
            <ShieldAlert className="w-4 h-4 mt-0.5 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}
        {successMsg && (
          <div className="mb-4 bg-green-50 border-l-4 border-green-600 p-3 text-xs text-green-800 font-medium flex items-start gap-2">
            <Sparkles className="w-4 h-4 mt-0.5 shrink-0 text-green-600" />
            <span>{successMsg}</span>
          </div>
        )}

        {/* Logged In Status & Actions */}
        {currentUser ? (
          <div className="space-y-6">
            <div className="border border-neutral-300 p-4 bg-neutral-50 space-y-3">
              <p className="text-xs text-neutral-600 font-mono">
                LOGADO COMO: <span className="text-black font-bold block mt-1">{currentUser.email}</span>
              </p>
              
              <div className="flex items-center gap-2 mt-2">
                <span className={`w-2.5 h-2.5 rounded-full ${isAdmin ? 'bg-green-650 bg-green-550' : 'bg-yellow-450'}`} style={{ backgroundColor: isAdmin ? '#16a34a' : '#d97706' }}></span>
                <span className="text-xs font-bold uppercase tracking-wider">
                  {isAdmin ? 'ADMINISTRADOR AUTORIZADO' : 'AGUARDANDO LIBERAÇÃO'}
                </span>
              </div>

              {!isAdmin && (
                <div className="bg-yellow-50 border border-yellow-300 p-2 text-[10px] text-yellow-800 flex gap-1.5 items-start">
                  <Info className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                  <span>Seu usuário está registrado, porém ainda sem cargo administrativo. Solicite liberação na coordenação para o e-mail inserido.</span>
                </div>
              )}
            </div>

            {isAdmin && (
              <div className="border border-neutral-300 p-4 bg-white space-y-4">
                <div className="flex items-center gap-1.5 border-b border-neutral-200 pb-2 select-none">
                  <Shield className="w-4 h-4 text-red-600" />
                  <span className="text-[10px] font-extrabold uppercase tracking-wide text-black">Conceder Acesso Administrativo</span>
                </div>

                <form onSubmit={handleAddAdminEmail} className="space-y-2">
                  <p className="text-[10px] text-neutral-500 leading-relaxed uppercase">
                    Adicione o e-mail @gmail.com de novos administradores:
                  </p>
                  <div className="flex gap-2">
                    <input
                      type="email"
                      value={newAdminEmail}
                      onChange={(e) => setNewAdminEmail(e.target.value)}
                      placeholder="novo-admin@gmail.com"
                      className="flex-1 bg-white border border-neutral-400 p-2 text-xs text-black placeholder:text-neutral-400 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-650"
                      required
                    />
                    <button
                      type="submit"
                      disabled={adminActionLoading}
                      className="bg-black hover:bg-neutral-800 text-white font-bold text-[10px] uppercase px-3 flex items-center gap-1 transition-colors border border-black cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>{adminActionLoading ? '...' : 'Adicionar'}</span>
                    </button>
                  </div>
                </form>

                {/* List of current administrators */}
                <div className="space-y-1.5 pt-1">
                  <p className="text-[10px] font-extrabold text-neutral-600 uppercase tracking-wider block">
                    Administradores Cadastrados ({adminEmails.length})
                  </p>
                  <div className="max-h-28 overflow-y-auto space-y-1 pr-1 border border-neutral-200 bg-neutral-50 p-1.5">
                    {adminEmails.length === 0 ? (
                      <p className="text-[10px] text-neutral-400 italic">Nenhum outro administrador cadastrado.</p>
                    ) : (
                      adminEmails.map((adm) => (
                        <div key={adm.id} className="flex justify-between items-center bg-white p-2 border border-neutral-250 shadow-sm text-xs">
                          <span className="text-[10.5px] font-mono text-black truncate pr-2 select-text">{adm.email}</span>
                          {adm.email !== 'lipewmra@gmail.com' && adm.email !== currentUser?.email?.toLowerCase() ? (
                            <button
                              type="button"
                              onClick={() => handleRemoveAdminEmail(adm.email)}
                              disabled={adminActionLoading}
                              className="text-red-600 hover:text-black hover:bg-neutral-50 p-1 transition-colors border border-neutral-200 cursor-pointer"
                              title="Revogar Acesso"
                            >
                              <Trash2 className="w-3 h-3" />
                            </button>
                          ) : (
                            <span className="text-[8px] px-1.5 py-0.5 bg-neutral-100 border border-neutral-200 text-neutral-500 font-bold uppercase select-none rounded">
                              Sistema
                            </span>
                          )}
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            )}

            <div className="flex flex-col gap-2">
              {isAdmin && (
                <button
                  onClick={onClose}
                  className="w-full py-2.5 bg-black text-white hover:bg-neutral-800 text-xs font-bold uppercase border-2 border-black transition-all cursor-pointer text-center"
                >
                  Continuar Editando
                </button>
              )}
              <button
                onClick={handleLogout}
                disabled={loading}
                className="w-full py-2.5 bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer text-center"
              >
                {loading ? 'Saindo...' : 'Desconectar Conta (Sair)'}
              </button>
            </div>
          </div>
        ) : (
          /* Authentication Forms */
          <div className="space-y-5">
            <p className="text-xs text-neutral-600 leading-relaxed text-justify">
              Autentique-se com sua conta Google para gerenciar as programações, banners do carrossel, avisos de urgência e textos de apresentação.
            </p>

            {/* Google OAuth Login Button */}
            <button
              onClick={handleGoogleSignIn}
              disabled={loading}
              className="w-full py-3.5 border-2 border-black bg-white hover:bg-neutral-50 flex items-center justify-center gap-3 text-xs font-bold uppercase cursor-pointer transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5"
            >
              <Chrome className="w-4 h-4 text-red-600 shrink-0" />
              <span>{loading ? 'Conectando...' : 'Entrar com o Google'}</span>
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
