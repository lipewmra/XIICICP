import React, { useState } from 'react';
// @ts-ignore
import margStoryImg from '../img/MargStory.png';

interface AberturaScreenProps {
  onEnter: () => void;
}

export default function AberturaScreen({ onEnter }: AberturaScreenProps) {
  const [isOpening, setIsOpening] = useState(false);

  const handleEnterClick = () => {
    setIsOpening(true);
    // Wait for the curtain transition to complete before triggering main layout reveal
    setTimeout(() => {
      onEnter();
    }, 1200); // duration of the slide transition
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black flex items-center justify-center font-sans font-normal selection:bg-red-650 selection:text-white">
      {/* Left Curtain */}
      <div
        className={`absolute top-0 bottom-0 left-0 w-1/2 bg-neutral-950 border-r-2 border-red-600 transition-transform duration-[1200ms] cubic-bezier(0.77, 0, 0.175, 1) transform shadow-2xl flex flex-col justify-between p-6 md:p-12 ${
          isOpening ? '-translate-x-full' : 'translate-x-0'
        }`}
        style={{
          backgroundImage: `linear-gradient(90deg, #000000 0%, #171717 60%, #0a0a0a 100%)`,
        }}
      >
        <div 
          className="text-left select-none opacity-80 text-red-600 font-cordenilo tracking-widest text-xs uppercase font-bold w-[35.609px] h-[33px] sm:w-auto sm:h-auto overflow-hidden flex items-center justify-start whitespace-nowrap"
          style={{ fontSize: '17px', fontFamily: 'Cordenilo, sans-serif' }}
        >
          XII<br /> CIPC
        </div>
      </div>

      {/* Right Curtain */}
      <div
        className={`absolute top-0 bottom-0 right-0 w-1/2 bg-neutral-950 border-l-2 border-red-600 transition-transform duration-[1200ms] cubic-bezier(0.77, 0, 0.175, 1) transform shadow-2xl flex flex-col justify-between p-6 md:p-12 ${
          isOpening ? 'translate-x-full' : 'translate-x-0'
        }`}
        style={{
          backgroundImage: `linear-gradient(270deg, #000000 0%, #171717 60%, #0a0a0a 100%)`,
        }}
      >
        <div 
          className="text-right select-none opacity-80 text-red-600 font-cordenilo tracking-widest text-xs uppercase font-bold"
          style={{ fontSize: '14px', fontFamily: 'Cordenilo, sans-serif' }}
        >
          19, 20 e 21<br />Agosto de 2026
        </div>
      </div>

      {/* Center Grand Theatrical Overlay Content */}
      <div
        className={`relative z-10 flex flex-col items-center justify-center p-4 sm:p-6 text-center transition-all duration-[800ms] max-w-4xl mx-auto ${
          isOpening ? 'scale-90 opacity-0 blur-md pointer-events-none' : 'scale-100 opacity-100'
        }`}
      >
        {/* Academic Geometric Logo Image Replacement */}
        <img
          src={margStoryImg}
          alt="XII CIPC Logo"
          className="mb-4 md:mb-6 object-contain filter drop-shadow-[0_10px_10px_rgba(220,38,38,0.25)]"
          referrerPolicy="no-referrer"
          style={{ height: '168px', width: '300px', marginBottom: '14px' }}
        />

        {/* Theme Title */}
        <p 
          className="text-red-600 font-mono text-[9px] sm:text-xs md:text-sm tracking-widest font-bold uppercase max-w-xl px-2 md:px-4 animate-fade-in mb-2 leading-relaxed"
          style={{
            fontSize: '10px',
            lineHeight: '15.625px',
            borderColor: '#ffffff',
            borderWidth: '0px',
            borderRadius: '3px',
            borderStyle: 'groove',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            marginBottom: '15px',
          }}
        >
          XII COLÓQUIO INTERNACIONAL DE POLÍTICAS CURRICULARES<br />
          VIII SEMINÁRIO NACIONAL DO GRUPO DE PESQUISA<br /> CURRÍCULO E PRÁTICAS EDUCATIVAS<br />
          V SIMPÓSIO DA REGIÃO NORDESTE SOBRE CURRÍCULO
        </p>

        <h1 
          className="mt-2 font-cordenilo tracking-tight text-white font-bold uppercase max-w-4xl"
          style={{
            fontSize: '55px',
            lineHeight: '50px',
            height: '55px',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            fontFamily: 'Cordenilo, sans-serif',
            textAlign: 'center',
            paddingLeft: '0px',
            paddingTop: '0px',
            paddingRight: '0px',
            paddingBottom: '0px',
            marginLeft: '0px',
            marginRight: '0px',
            marginBottom: '0px',
            letterSpacing: '0.15em',
          }}
        >
          DA LUTA EU NÃO FUJO <br />
          <span 
            className="text-white block mt-1 sm:mt-2 leading-tight font-cordenilo"
            style={{
              paddingTop: '8px',
              lineHeight: '28.25px',
              paddingRight: '0px',
              paddingBottom: '0px',
              marginRight: '0px',
              marginBottom: '19px',
              marginTop: '3px',
              marginLeft: '0px',
              fontSize: '24px',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              fontFamily: 'Cordenilo, sans-serif',
              letterSpacing: '0.15em',
            }}
          >
            DISPUTAS EM TERRITÓRIOS CURRICULARES FRENTE AOS AVANÇOS ULTRACONSERVADORES
          </span>
        </h1>



        {/* Enter Button */}
        <div className="mt-6 md:mt-10 group relative">
          <button
            onClick={handleEnterClick}
            id="entrar-coloquio-btn"
            className="px-6 py-3 md:px-10 md:py-4 bg-red-600 hover:bg-red-700 text-white font-sans font-bold text-xs md:text-base uppercase tracking-widest rounded-none border border-red-500/35 flex items-center gap-2 md:gap-3 transition-all shadow-lg shadow-red-600/30 hover:shadow-red-700/40 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            style={{ paddingLeft: '24px', paddingTop: '5px', paddingBottom: '5px', marginLeft: '0px', marginTop: '150px' }}
          >
            <span style={{ fontFamily: 'Cordenilo, sans-serif' }} className="font-cordenilo">ENTRAR</span>
            <svg
              className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>

        {/* Tiny metadata info */}
        <div className="mt-6 md:mt-12 text-neutral-400 font-mono text-[9px] md:text-xs space-y-1 md:space-y-1.5 uppercase tracking-widest">
          <p style={{ fontSize: '13px', backgroundColor: 'rgba(0, 0, 0, 0.5)', fontFamily: 'Cordenilo, sans-serif' }} className="font-cordenilo">📍 UFPB • João Pessoa • Paraíba • Brasil</p>
          <p className="text-red-500 font-bold text-[9px] md:text-[10px] mt-1.5 md:mt-2 tracking-wider px-4 font-corben normal-case" style={{ backgroundColor: '#000000', fontFamily: 'Corben, serif' }}>
            #MargaridaMariaAlves
          </p>
        </div>
      </div>
    </div>
  );
}
