import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-black bg-[#111111] text-neutral-350 font-sans text-left selection:bg-red-650 selection:bg-red-600 selection:text-white select-none">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        
        {/* Core footer Grid info */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10 pb-8 border-b border-neutral-800">
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2 select-none">
              <span className="bg-red-600 text-white font-black text-xs py-1 px-3 border border-black rounded-none">
                XII CIPC
              </span>
              <span className="font-extrabold text-white uppercase text-xs tracking-wider">
                UFPB • JOÃO PESSOA
              </span>
            </div>
            <p className="text-[11px] text-neutral-400 font-sans leading-relaxed text-justify font-light select-text">
              O XII Colóquio Internacional de Políticas Curriculares oportuniza debates e resistências coletivas nas teorias pedagógicas, valorizando saberes alternativos frente às tentativas homogeneizadoras contemporâneas.
            </p>
          </div>

          <div className="md:col-span-4 space-y-4">
            <h4 className="text-red-500 font-bold text-xs uppercase tracking-wider font-display select-none">
              ✦ INFORMAÇÕES & INSCRIÇÃO
            </h4>
            <div className="text-[11px] text-neutral-300 space-y-2 font-mono select-text">
              <p>📍 Campus I - Cidade Universitária, João Pessoa - PB</p>
              <p className="flex flex-wrap gap-1 items-center">
                <span>🔗 Even3: </span>
                <a
                  href="https://www.even3.com.br/xiicipc-647102/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-500 hover:underline break-all"
                >
                  even3.com.br/xiicipc-647102/
                </a>
              </p>
            </div>
          </div>

          {/* Sponsoring stamp entities */}
          <div className="md:col-span-4 space-y-4 select-text">
            <h4 className="text-neutral-400 font-bold text-xs uppercase tracking-wider font-display select-none">
              ✦ ENTIDADES PARCEIRAS & APOIO
            </h4>
            <div className="text-[11.5px] text-neutral-300 space-y-3 font-sans leading-relaxed">
              <p>
                <span className="text-red-500 font-bold uppercase tracking-wider block text-[10px] mb-0.5">Realização:</span>
                UFPB e UEPB
              </p>
              <p>
                <span className="text-red-500 font-bold uppercase tracking-wider block text-[10px] mb-0.5">Organização:</span>
                GEPCEE e GEPPC
              </p>
              <p>
                <span className="text-red-500 font-bold uppercase tracking-wider block text-[10px] mb-0.5">Apoio:</span>
                PPGE UFPB, PPGFP, PPGEDUC, PROPEd e Mestrado em Educação Inclusiva
              </p>
              <p>
                <span className="text-red-500 font-bold uppercase tracking-wider block text-[10px] mb-0.5">Parceirias:</span>
                UNIRIO, ANPAE, ANPED, ABC, Curriculo Latinoamericano e CAFTe
              </p>
              <p>
                <span className="text-red-500 font-bold uppercase tracking-wider block text-[10px] mb-0.5">Patrocinadores:</span>
                GOV PB, FapesqPB, CNPQ e CAPES
              </p>
            </div>
          </div>
        </div>

        {/* Brand copyright notice and metadata */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-neutral-500 uppercase font-sans select-none">
          <p>© 2026 XII Colóquio Internacional de Políticas Curriculares. Todos os direitos reservados.</p>
          <p className="select-text lowercase font-mono">desenvolvido por Philippe Wagner Melo Regis de Araujo lipewmra@gmail.com</p>
        </div>

      </div>
    </footer>
  );
}
