import React from 'react';
import { BookOpen, MapPin, Award, Compass, Lightbulb, Play, Landmark, Calendar } from 'lucide-react';

interface SobreUfpbScreenProps {
  venues?: any[];
  services?: any[];
  isAdmin?: boolean;
  onUpdateVenues?: (venues: any[]) => void;
  onUpdateServices?: (services: any[]) => void;
}

export default function SobreUfpbScreen({
  venues,
  services,
  isAdmin,
  onUpdateVenues,
  onUpdateServices
}: SobreUfpbScreenProps) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 font-sans select-none">
      {/* Page Title header */}
      <div className="text-center mb-10 select-text">
        <span className="bg-red-50 text-red-600 border border-red-200 px-3 py-1 text-xs font-bold uppercase tracking-wide inline-block mb-3">
          Guia do Congressista
        </span>
        <h1 className="text-3xl md:text-5xl font-display font-medium text-black tracking-tight uppercase">
          UNIVERSIDADE FEDERAL DA PARAÍBA
        </h1>
        <p className="mt-2 text-xs md:text-sm text-neutral-500 uppercase font-light tracking-wide">
          Conheça o ecossistema acadêmico, infraestrutura e centros de ensino do Campus I
        </p>
      </div>

      {/* Main Grid: Info + Video */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 select-text items-stretch">
        
        {/* Welcome Text block */}
        <div className="lg:col-span-7 bg-white border-2 border-black p-6 md:p-8 relative shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between text-left">
          <div>
            <span className="bg-neutral-900 text-white text-[9px] px-2.5 py-0.5 font-bold uppercase tracking-wider mb-4 inline-block">
              ✦ Boas-vindas à UFPB
            </span>
            <p className="text-sm md:text-base text-black leading-relaxed font-normal">
              Sejam muito bem-vindos à <strong>Universidade Federal da Paraíba (UFPB)</strong>! Para ajudar vocês a se localizarem e aproveitarem ao máximo o evento, preparamos um guia rápido com tudo o que precisam saber sobre a instituição e o Campus I, onde estarão hospedados academicamente.
            </p>
          </div>
          <div className="mt-8 pt-4 border-t border-neutral-100 flex items-center justify-between text-[10px] text-neutral-400 font-mono select-none">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              COLÓQUIO INTERNACIONAL 2026
            </span>
            <span>JOÃO PESSOA - PB</span>
          </div>
        </div>

        {/* Video Embedding block */}
        <div className="lg:col-span-5 bg-white border-2 border-black p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between text-left">
          <div>
            <span className="bg-red-50 text-red-600 border border-red-100 text-[10px] px-2.5 py-0.5 font-bold uppercase tracking-wide mb-3 inline-block flex items-center gap-1.5 w-fit">
              <Play className="w-3 h-3 fill-red-600" /> VÍDEO INSTITUCIONAL
            </span>
            <h3 className="text-sm font-display font-bold text-black uppercase tracking-tight mb-3">
              Tour pelo Campus da UFPB
            </h3>
            <div className="relative aspect-video w-full border-2 border-black bg-neutral-950 overflow-hidden">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/TFRSRhK0LzU?rel=0"
                title="Vídeo UFPB"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <p className="mt-3 text-[11px] font-sans text-neutral-500 leading-normal font-light">
            Assista ao vídeo e faça um passeio aéreo pelas instalações estruturais e florestais do Campus I da instituição.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 select-text text-left">
        {/* Section 1: Sobre a UFPB */}
        <div className="bg-white border-2 border-black p-6 md:p-8 relative shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="text-lg md:text-xl font-display font-medium text-black tracking-tight mb-4 flex items-center gap-2 uppercase border-b-2 border-black pb-2.5">
            <Landmark className="w-5 h-5 text-red-600 shrink-0" />
            <span>Sobre a UFPB: Uma Visão Geral</span>
          </h2>
          <div className="space-y-4 text-xs md:text-sm font-sans text-neutral-700 leading-relaxed font-light">
            <p>
              Fundada institucionalmente em 1955, a UFPB é a principal e maior instituição de ensino superior da Paraíba, destacando-se nacionalmente pela excelência em pesquisa, extensão e inovação tecnológica.
            </p>
            <p className="font-semibold text-black mt-2">
              A universidade possui uma estrutura multicampi, dividida em quatro regiões:
            </p>
            <ul className="space-y-2.5 pl-1.5 mt-2">
              <li className="flex items-start gap-2">
                <span className="text-red-655 font-bold select-none text-red-600">▪</span>
                <span><strong>Campus I (Sede):</strong> João Pessoa (onde ocorre o evento)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-255 font-bold select-none text-red-400">▪</span>
                <span><strong>Campus II:</strong> Areia (focado em Ciências Agrárias)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-255 font-bold select-none text-red-400">▪</span>
                <span><strong>Campus III:</strong> Bananeiras (Sistemas de Produção e Agroindústria)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-255 font-bold select-none text-red-400">▪</span>
                <span><strong>Campus IV:</strong> Litoral Norte - Rio Tinto e Mamanguape (Sistemas de Informação, Design e Humanas)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Section 2: O Campus I */}
        <div className="bg-white border-2 border-black p-6 md:p-8 relative shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="text-lg md:text-xl font-display font-medium text-black tracking-tight mb-4 flex items-center gap-2 uppercase border-b-2 border-black pb-2.5">
            <BookOpen className="w-5 h-5 text-red-600 shrink-0" />
            <span>O Campus I (Sede) – João Pessoa</span>
          </h2>
          <div className="space-y-4 text-xs md:text-sm font-sans text-neutral-700 leading-relaxed font-light">
            <p>
              O Campus I fica localizado no bairro da <strong>Cidade Universitária</strong> (zona sul de João Pessoa). Uma das suas características mais marcantes é a <strong>intensa área verde</strong>. O campus é abraçado pela Mata Atlântica e cortado pela Reserva do Timbó, o que garante um clima super agradável e uma paisagem arborizada única.
            </p>
            <p className="text-justify">
              O local oferece um ecossistema natural vibrante que serve tanto para discussões acadêmicas quanto para momentos de descontração e tranquilidade sob as sombras das árvores nativas paraibanas.
            </p>
          </div>
        </div>
      </div>

      {/* Section 3: Como se locomover */}
      <div className="bg-white border-2 border-black p-6 md:p-8 mb-12 relative shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-left select-text">
        <h2 className="text-lg md:text-xl font-display font-medium text-black tracking-tight mb-6 flex items-center gap-2 uppercase border-b-2 border-black pb-2.5">
          <Compass className="w-5 h-5 text-red-600 shrink-0" />
          <span>Como se locomover no Campus I</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans">
          
          {/* Card Locomocao 1 */}
          <div className="border border-black p-4 bg-neutral-50 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold text-red-600 uppercase tracking-widest block mb-1">
                Estrutura Viária
              </span>
              <h4 className="text-xs font-bold uppercase text-black mb-2 flex items-center gap-1.5 pb-2 border-b border-neutral-200">
                Os "Anéis" Viários
              </h4>
              <p className="text-xs text-neutral-600 leading-relaxed text-justify font-light select-text">
                O campus é estruturado em torno de vias circulares (Anel Externo e Anel Interno). É muito comum as pessoas usarem essas expressões para dar direções ("fica lá no anel externo").
              </p>
            </div>
            <div className="mt-4 pt-2 border-t border-neutral-100 flex items-center gap-1 text-[9px] text-neutral-400 font-mono">
              <MapPin className="w-3 h-3 text-neutral-400 shrink-0" /> TRÂNSITO CIRCULAR
            </div>
          </div>

          {/* Card Locomocao 2 */}
          <div className="border border-black p-4 bg-neutral-50 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold text-red-600 uppercase tracking-widest block mb-1">
                Convivência
              </span>
              <h4 className="text-xs font-bold uppercase text-black mb-2 flex items-center gap-1.5 pb-2 border-b border-neutral-200">
                Centro de Vivência
              </h4>
              <p className="text-xs text-neutral-600 leading-relaxed text-justify font-light select-text">
                É o coração social da UFPB. Lá vocês encontram agências bancárias, lanchonetes, livrarias e os Correios. Geralmente é o ponto de encontro clássico para quem vem de fora.
              </p>
            </div>
            <div className="mt-4 pt-2 border-t border-neutral-100 flex items-center gap-1 text-[9px] text-neutral-400 font-mono">
              <MapPin className="w-3 h-3 text-neutral-400 shrink-0" /> PONTO CENTRAL DE ENCONTRO
            </div>
          </div>

          {/* Card Locomocao 3 */}
          <div className="border border-black p-4 bg-neutral-50 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold text-red-600 uppercase tracking-widest block mb-1">
                Administração
              </span>
              <h4 className="text-xs font-bold uppercase text-black mb-2 flex items-center gap-1.5 pb-2 border-b border-neutral-200">
                A Reitoria
              </h4>
              <p className="text-xs text-neutral-600 leading-relaxed text-justify font-light select-text">
                Um edifício imponente, facilmente identificável pela sua arquitetura, onde se concentram os órgãos de decisão administrativa e o principal auditório da universidade (Auditório Reitor João Balby).
              </p>
            </div>
            <div className="mt-4 pt-2 border-t border-neutral-100 flex items-center gap-1 text-[9px] text-neutral-400 font-mono">
              <MapPin className="w-3 h-3 text-neutral-400 shrink-0" /> AUDITÓRIO PRINCIPAL
            </div>
          </div>

        </div>
      </div>

      {/* Section 4: Centros de Ensino */}
      <div className="bg-white border-2 border-black p-6 md:p-8 mb-12 relative shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-left select-text">
        <h2 className="text-lg md:text-xl font-display font-medium text-black tracking-tight mb-4 flex items-center gap-2 uppercase border-b-2 border-black pb-2.5">
          <Award className="w-5 h-5 text-red-600 shrink-0" />
          <span>Principais Centros de Ensino do Campus I</span>
        </h2>
        
        <p className="text-xs md:text-sm text-neutral-700 leading-relaxed font-light mb-6">
          A UFPB se organiza em <strong>Centros de Ensino</strong>, que funcionam quase como minicampus temáticos dentro da própria Cidade Universitária. Caso o seu evento ocorra em algum deles, aqui está o mapa mental de como eles se dividem:
        </p>

        {/* Responsive Table */}
        <div className="overflow-x-auto border-2 border-black select-text shadow-sm rounded-none">
          <table className="w-full text-left border-collapse min-w-[600px] font-sans text-xs">
            <thead>
              <tr className="bg-black text-white font-bold uppercase tracking-wider border-b border-black text-[10px]">
                <th className="p-3.5 border-r border-black/20">Centro</th>
                <th className="p-3.5 border-r border-black/20 text-center w-24">Sigla</th>
                <th className="p-3.5">Áreas Principais</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/10 select-text">
              <tr className="bg-white hover:bg-neutral-50 transition-colors">
                <td className="p-3 border-r border-black/10 font-bold text-black">Ciências Exatas e da Natureza</td>
                <td className="p-3 border-r border-black/10 font-mono text-center font-bold text-red-600 bg-red-50/20">CCEN</td>
                <td className="p-3 text-neutral-600 font-light">Matemática, Física, Química, Biologia e Informática.</td>
              </tr>
              <tr className="bg-neutral-50/50 hover:bg-neutral-50 transition-colors">
                <td className="p-3 border-r border-black/10 font-bold text-black">Ciências Humanas, Letras e Artes</td>
                <td className="p-3 border-r border-black/10 font-mono text-center font-bold text-red-600 bg-red-50/20">CCHLA</td>
                <td className="p-3 text-neutral-600 font-light">História, Ciências Sociais, Filosofia, Psicologia e Idiomas.</td>
              </tr>
              <tr className="bg-white hover:bg-neutral-50 transition-colors">
                <td className="p-3 border-r border-black/10 font-bold text-black">Tecnologia</td>
                <td className="p-3 border-r border-black/10 font-mono text-center font-bold text-red-600 bg-red-50/20">CT</td>
                <td className="p-3 text-neutral-600 font-light">Engenharias (Civil, Mecânica, Produção, Elétrica, Química, etc.).</td>
              </tr>
              <tr className="bg-neutral-50/50 hover:bg-neutral-50 transition-colors">
                <td className="p-3 border-r border-black/10 font-bold text-black">Ciências Sociais Aplicadas</td>
                <td className="p-3 border-r border-black/10 font-mono text-center font-bold text-red-600 bg-red-50/20">CCSA</td>
                <td className="p-3 text-neutral-600 font-light">Administração, Economia, Contabilidade, Direito e Turismo.</td>
              </tr>
              <tr className="bg-white hover:bg-neutral-50 transition-colors">
                <td className="p-3 border-r border-black/10 font-bold text-black">Ciências da Saúde</td>
                <td className="p-3 border-r border-black/10 font-mono text-center font-bold text-red-600 bg-red-50/20">CCS</td>
                <td className="p-3 text-neutral-600 font-light">Enfermagem, Farmácia, Nutrição e Educação Física.</td>
              </tr>
              <tr className="bg-neutral-50/50 hover:bg-neutral-50 transition-colors">
                <td className="p-3 border-r border-black/10 font-bold text-black">Ciências Médicas</td>
                <td className="p-3 border-r border-black/10 font-mono text-center font-bold text-red-600 bg-red-50/20">CCM</td>
                <td className="p-3 text-neutral-600 font-light">Curso de Medicina e Laboratórios Médicos vinculados ao Hospital Universitário Lauro Wanderley (HULW).</td>
              </tr>
              <tr className="bg-white hover:bg-neutral-50 transition-colors">
                <td className="p-3 border-r border-black/10 font-bold text-black">Educação</td>
                <td className="p-3 border-r border-black/10 font-mono text-center font-bold text-red-600 bg-red-50/20">CE</td>
                <td className="p-3 text-neutral-600 font-light">Pedagogia e Políticas Educacionais.</td>
              </tr>
              <tr className="bg-neutral-50/50 hover:bg-neutral-50 transition-colors">
                <td className="p-3 border-r border-black/10 font-bold text-black">Tecnologia e Desenvolvimento Regional</td>
                <td className="p-3 border-r border-black/10 font-mono text-center font-bold text-red-600 bg-red-50/20">CTDR</td>
                <td className="p-3 text-neutral-600 font-light">Tecnologia em Alimentos e Gestão Pública.</td>
              </tr>
              <tr className="bg-white hover:bg-neutral-50 transition-colors">
                <td className="p-3 border-r border-black/10 font-bold text-black">Comunicação, Turismo e Artes</td>
                <td className="p-3 border-r border-black/10 font-mono text-center font-bold text-red-600 bg-red-50/20">CCTA</td>
                <td className="p-3 text-neutral-600 font-light">Jornalismo, Rádio e TV, RP, Música, Teatro e Artes Visuais.</td>
              </tr>
              <tr className="bg-neutral-50/50 hover:bg-neutral-50 transition-colors">
                <td className="p-3 border-r border-black/10 font-bold text-black">Energias Renováveis</td>
                <td className="p-3 border-r border-black/10 font-mono text-center font-bold text-red-600 bg-red-50/20">CEAR</td>
                <td className="p-3 text-neutral-600 font-light font-sans">Engenharia de Energias Renováveis e Engenharia Elétrica.</td>
              </tr>
              <tr className="bg-white hover:bg-neutral-50 transition-colors">
                <td className="p-3 border-r border-black/10 font-bold text-black">Ciências Jurídicas</td>
                <td className="p-3 border-r border-black/10 font-mono text-center font-bold text-red-600 bg-red-50/20">CCJ</td>
                <td className="p-3 text-neutral-600 font-light">Graduação e Pós-Graduação em Direito.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Section 5: Golden Tip Blockquote */}
      <div className="bg-yellow-50 border-2 border-yellow-400 p-6 relative font-sans text-left mb-12 select-text shadow-[4px_4px_0px_0px_#facc15]">
        <div className="flex gap-3.5 items-start">
          <div className="bg-yellow-400 text-black p-2 rounded-none border border-black select-none shrink-0">
            <Lightbulb className="w-5 h-5 text-black shrink-0" />
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-yellow-800 mb-1 select-none">
              Dica de Ouro para o Visitante
            </h4>
            <p className="text-xs md:text-sm text-yellow-950 leading-relaxed font-normal text-justify">
              Como o campus é muito grande e arborizado, as distâncias entre um centro e outro podem ser longas para caminhar sob o sol do Nordeste. Venham com roupas leves, sapatos confortáveis e usem aplicativos de mobilidade urbana (ou as linhas de ônibus internas) se precisarem transitar entre centros distantes.
            </p>
          </div>
        </div>
      </div>

      {/* Friendly concluding message */}
      <div className="text-center font-sans select-text max-w-xl mx-auto py-4 border-t border-black/10">
        <p className="text-xs md:text-sm text-neutral-600 italic font-light">
          Aproveitem o evento e desfrutem da hospitalidade paraibana e do ecossistema vibrante da UFPB!
        </p>
      </div>

    </div>
  );
}
