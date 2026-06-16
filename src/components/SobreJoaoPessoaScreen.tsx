import React from 'react';
import { 
  Compass, MapPin, Award, Shield, Landmark, Navigation, 
  Map, Plane, Hotel, Utensils, Star, ShoppingBag, 
  Sparkles, ShieldAlert, PhoneCall, Info, Camera, Sun, Trees, Check, Activity
} from 'lucide-react';

interface SobreJoaoPessoaScreenProps {
  spots?: any[];
  isAdmin?: boolean;
  onUpdateSpots?: (newSpots: any[]) => void;
}

export default function SobreJoaoPessoaScreen({
  spots,
  isAdmin,
  onUpdateSpots
}: SobreJoaoPessoaScreenProps) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 font-sans select-none">
      
      {/* Intro Header Stamp */}
      <div className="text-center mb-10 select-text">
        <span className="bg-red-50 text-red-650 text-red-600 border border-red-200 px-3 py-1 text-xs font-bold uppercase tracking-wide inline-block mb-3">
          Guia do Visitante & Turista
        </span>
        <h1 className="text-3xl md:text-5xl font-display font-medium text-black tracking-tight uppercase">
          JOÃO PESSOA — PARAÍBA
        </h1>
      </div>

      {/* Main City Presentation Hero */}
      <div className="flex flex-col lg:flex-row gap-8 mb-12 items-stretch justify-between select-text">
        <div 
          className="border-2 border-black bg-neutral-900 relative min-h-[360px] rounded-none overflow-hidden flex flex-col justify-end p-6 md:p-10 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
          style={{ height: "362px", width: "825px", maxWidth: "100%" }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center brightness-[0.45] select-none scale-102"
            style={{ 
              backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/e/ec/Portico_da_UFPB_-_Campus_I.jpg')",
              width: "100%",
              height: "100%"
            }}
          />
          <div className="relative z-10 text-left text-white max-w-2xl">
            <span className="bg-red-650 bg-red-600 border-2 border-black text-white font-extrabold text-[9px] px-2.5 py-0.5 uppercase tracking-wider mb-3.5 inline-block select-none animate-pulse">
              ✦ ONDE O SOL NASCE PRIMEIRO
            </span>
            <h2 className="text-2xl md:text-4xl font-display font-bold leading-tight text-white tracking-tight uppercase mb-3">
              Bem-vindos à Capital Paraibana
            </h2>
            <p className="text-xs md:text-sm text-neutral-200 font-sans leading-relaxed text-justify font-normal select-text">
              Este é um guia completo sobre a cidade de <strong>João Pessoa (PB)</strong>, desenvolvido especificamente para orientar e acolher os visitantes e turistas que vêm para o evento na UFPB.
            </p>
          </div>
        </div>

        {/* Quick Intro Graphic box */}
        <div 
          className="border-2 border-black bg-white p-6 rounded-none shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between text-left"
          style={{ width: "359px", height: "362px", maxWidth: "100%" }}
        >
          <div>
            <div className="flex items-center gap-1.5 text-red-600 font-bold text-sm uppercase mb-4 border-b-2 border-black pb-2.5 select-none">
              <Sun className="w-5 h-5 shrink-0" />
              <span>Destaque Geográfico</span>
            </div>
            <p className="text-xs text-neutral-600 leading-relaxed font-light text-justify select-text">
              João Pessoa abriga o ponto mais oriental das Américas: a <strong>Ponta do Seixas</strong>. Com uma das orlas urbanas mais preservadas do país e temperatura média de 27°C, a capital paraibana encanta pela calorosa receptividade, tranquilidade e riqueza cultural.
            </p>
            <div className="mt-5 space-y-2 text-[11px] font-mono select-none">
              <div className="flex justify-between border-b border-neutral-100 pb-1">
                <span className="text-neutral-400">ESTADO:</span>
                <span className="font-bold text-black">Paraíba (PB)</span>
              </div>
              <div className="flex justify-between border-b border-neutral-100 pb-1">
                <span className="text-neutral-400">FUNDAÇÃO:</span>
                <span className="font-bold text-black">1585 (3ª mais antiga)</span>
              </div>
              <div className="flex justify-between border-b border-neutral-100 pb-1">
                <span className="text-neutral-400">LITORAL:</span>
                <span className="font-bold text-black">Coqueirinho, Tambaú, Cabo Branco</span>
              </div>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-neutral-200 select-none text-[10px] text-neutral-400 font-mono">
            ✦ GUIA ACADÊMICO DE JOÃO PESSOA
          </div>
        </div>
      </div>

      {/* 🌟 Qualidade de Vida e Indicadores Urbanos */}
      <div className="bg-white border-2 border-black p-6 md:p-8 mb-12 relative shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-left select-text">
        <h2 className="text-lg md:text-2xl font-display font-medium text-black tracking-tight mb-6 flex items-center gap-2 uppercase border-b-2 border-black pb-2.5">
          <Award className="w-5 h-5 text-red-605 text-red-600 shrink-0" />
          <span>🌟 Qualidade de Vida e Indicadores Urbanos</span>
        </h2>
        
        <p className="text-xs md:text-sm text-neutral-700 leading-relaxed font-light mb-6 select-text">
          João Pessoa é conhecida nacionalmente por equilibrar o ritmo de uma capital com a tranquilidade de uma cidade litorânea.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 select-text">
          {/* Card Indicador 1 */}
          <div className="border border-black p-4 bg-neutral-50 flex flex-col justify-between">
            <div>
              <div className="bg-red-50 text-red-600 border border-red-200 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider mb-2.5 inline-block select-none">
                IPS BRASIL
              </div>
              <h3 className="text-xs font-bold text-black uppercase mb-2">Melhor do Nordeste</h3>
              <p className="text-[11px] text-neutral-600 leading-relaxed font-light text-justify">
                No prestigiado ranking <strong>IPS Brasil (Índice de Progresso Social)</strong>, João Pessoa ocupa a <strong>9ª posição nacional</strong> e a liderança absoluta na Região Nordeste, destacando-se fortemente em infraestrutura urbana, sustentabilidade ambiental, saneamento e bem-estar cotidiano.
              </p>
            </div>
          </div>

          {/* Card Indicador 2 */}
          <div className="border border-black p-4 bg-neutral-50 flex flex-col justify-between">
            <div>
              <div className="bg-neutral-900 text-white px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider mb-2.5 inline-block select-none">
                IDHM
              </div>
              <h3 className="text-xs font-bold text-black uppercase mb-2">IDH Elevado</h3>
              <p className="text-[11px] text-neutral-600 leading-relaxed font-light text-justify">
                Possui um Índice de Desenvolvimento Humano de <strong>0,763</strong>, considerado <strong>alto</strong>, refletindo ótimas condições de escolaridade, expectativa de vida robusta e equilíbrio de renda média municipal.
              </p>
            </div>
          </div>

          {/* Card Indicador 3 */}
          <div className="border border-black p-4 bg-neutral-50 flex flex-col justify-between">
            <div>
              <div className="bg-green-50 text-green-700 border border-green-200 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider mb-2.5 inline-block select-none">
                MEIO AMBIENTE
              </div>
              <h3 className="text-xs font-bold text-black uppercase mb-2">Cidade Verde</h3>
              <p className="text-[11px] text-neutral-600 leading-relaxed font-light text-justify">
                É reconhecida como uma das capitais mais arborizadas do mundo. Um de seus marcos é a <em>Mata do Buraquinho</em>, uma imensa reserva de Mata Atlântica encravada bem no coração da área urbana.
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-neutral-100 flex items-center gap-1 text-[9px] text-neutral-400 font-mono">
              <Trees className="w-3.5 h-3.5 text-green-650" /> PRESERVAÇÃO URBANA
            </div>
          </div>

          {/* Card Indicador 4 */}
          <div className="border border-black p-4 bg-neutral-50 flex flex-col justify-between">
            <div>
              <div className="bg-red-50 text-red-655 border border-red-200 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider mb-2.5 inline-block select-none text-red-600">
                PLANEJAMENTO
              </div>
              <h3 className="text-xs font-bold text-black uppercase mb-2">Legislação da Orla</h3>
              <p className="text-[11px] text-neutral-600 leading-relaxed font-light text-justify">
                Uma lei rígida impede a construção de prédios altos na faixa da praia (máximo de 3 a 4 andares), o que garante ventilação constante, praias sem sombras artificiais à tarde e uma das orlas mais bonitas do país.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ✈️ Mobilidade e Como Chegar à UFPB */}
      <div className="bg-white border-2 border-black p-6 md:p-8 mb-12 relative shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-left select-text">
        <h2 className="text-lg md:text-2xl font-display font-medium text-black tracking-tight mb-6 flex items-center gap-2 uppercase border-b-2 border-black pb-2.5">
          <Plane className="w-5 h-5 text-red-600 shrink-0" />
          <span>✈️ Mobilidade e Como Chegar à UFPB</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Pontos de Chegada */}
          <div className="lg:col-span-6 space-y-4 font-sans text-xs select-text">
            <h3 className="text-xs font-bold uppercase tracking-wider text-black flex items-center gap-1.5 pb-2 border-b border-neutral-200">
              <MapPin className="w-4 h-4 text-red-600 shrink-0" /> Pontos de Chegada Principais
            </h3>
            
            <div className="bg-neutral-50 p-4 border border-neutral-200 space-y-2">
              <span className="bg-black text-[9px] text-white px-2 py-0.5 font-mono uppercase font-bold tracking-widest inline-block select-none">
                01. AEROPORTO INTERNACIONAL
              </span>
              <h4 className="text-xs font-bold text-black uppercase">Aeroporto Internacional Presidente Castro Pinto</h4>
              <p className="text-neutral-600 font-light leading-relaxed text-justify">
                Localizado no município vizinho de Bayeux, fica a cerca de 12 km do centro e a <strong>15 km da UFPB</strong> (cerca de 20-25 minutos de carro/aplicativo via BR-230).
              </p>
            </div>

            <div className="bg-neutral-50 p-4 border border-neutral-200 space-y-2">
              <span className="bg-neutral-900 text-white text-[9px] px-2 py-0.5 font-mono uppercase font-bold tracking-widest inline-block select-none">
                02. RODOVIÁRIA
              </span>
              <h4 className="text-xs font-bold text-black uppercase">Terminal Rodoviário de João Pessoa</h4>
              <p className="text-neutral-600 font-light leading-relaxed text-justify">
                Fica no bairro do Varadouro (próximo ao Centro Histórico), a cerca de <strong>8 km da UFPB</strong>.
              </p>
            </div>
          </div>

          {/* Rotas de Onibus */}
          <div className="lg:col-span-6 space-y-4 font-sans text-xs select-text">
            <h3 className="text-xs font-bold uppercase tracking-wider text-black flex items-center gap-1.5 pb-2 border-b border-neutral-200">
              <Navigation className="w-4 h-4 text-red-600 shrink-0" /> 🚌 Rotas de Ônibus para a UFPB (Campus I)
            </h3>
            <p className="text-neutral-500 font-light leading-relaxed select-text">
              A universidade é muito bem servida pelo transporte público, contando com um terminal de integração próprio dentro do campus. As principais linhas que conectam pontos turísticos e de mobilidade à UFPB são:
            </p>

            <div className="space-y-3 font-sans selection:bg-red-100">
              <div className="border border-neutral-200 p-3 bg-white flex items-start gap-3">
                <div className="bg-red-50 text-red-600 font-mono text-[11px] font-bold p-1.5 w-14 text-center shrink-0 border border-red-200 select-none">
                  TRONCAL
                </div>
                <div>
                  <h4 className="text-xs font-bold text-black uppercase">Da Rodoviária / Centro para a UFPB</h4>
                  <p className="text-[11px] text-neutral-600 font-light leading-normal mt-0.5">
                    Linhas <strong>301</strong>, <strong>302</strong>, <strong>303</strong> e <strong>304</strong> (via Av. D. Pedro II).
                  </p>
                </div>
              </div>

              <div className="border border-neutral-200 p-3 bg-white flex items-start gap-3">
                <div className="bg-red-50 text-red-600 font-mono text-[11px] font-bold p-1.5 w-14 text-center shrink-0 border border-red-200 select-none">
                  ORLA
                </div>
                <div>
                  <h4 className="text-xs font-bold text-black uppercase">Da Orla (Manaíra/Tambaú/Cabo Branco) para a UFPB</h4>
                  <p className="text-[11px] text-neutral-600 font-light leading-normal mt-0.5">
                    Linha <strong>518</strong> (Bessa/UFPB), <strong>510</strong> (Tambaú - descer no Shopping Sul para integrar) ou a linha <strong>1519</strong> (interliga bairros da zona sul e praias).
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 p-3 text-[11px] text-yellow-950 flex items-start gap-2 rounded-none">
              <span className="text-yellow-600 font-bold">💡 Dica comercial:</span>
              <p className="font-light leading-relaxed">
                Os aplicativos de mapas em tempo real (como Google Maps ou Cittamobi) funcionam muito bem para prever os horários exatos e paradas dos ônibus em João Pessoa.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* 🏨 Onde se Hospedar (Opções Selecionadas) */}
      <div className="bg-white border-2 border-black p-6 md:p-8 mb-12 relative shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-left select-text">
        <h2 className="text-lg md:text-2xl font-display font-medium text-black tracking-tight mb-6 flex items-center gap-2 uppercase border-b-2 border-black pb-2.5">
          <Hotel className="w-5 h-5 text-red-600 shrink-0" />
          <span>🏨 Onde se Hospedar (Opções Selecionadas)</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch select-text">
          
          {/* Categoria 1 */}
          <div className="border border-black p-5 bg-white flex flex-col justify-between">
            <div>
              <span className="bg-neutral-900 text-white text-[9px] px-2.5 py-0.5 font-bold uppercase tracking-wider mb-3 inline-block select-none">
                👑 ALTO PADRÃO
              </span>
              <h3 className="text-xs font-bold text-black uppercase mb-4 border-b border-black pb-2">
                1. Hotéis de Alto Padrão (Orla)
              </h3>
              
              <ul className="space-y-3 text-xs font-sans text-neutral-700 leading-normal font-light">
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <strong>Ba'ra Hotel (Cabo Branco):</strong>
                    <p className="text-[10px] text-neutral-500 mt-0.5">Hotel boutique com arquitetura biofílica contemporânea e rooftop.</p>
                  </div>
                </li>
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <strong>Nord Luxxor Cabo Branco:</strong>
                    <p className="text-[10px] text-neutral-500 mt-0.5">À beira-mar com estrutura refinada e excelente piscina panorâmica.</p>
                  </div>
                </li>
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <strong>Verdegreen Hotel (Manaíra):</strong>
                    <p className="text-[10px] text-neutral-500 mt-0.5">Referência em sustentabilidade ecológica e conforto contemporâneo.</p>
                  </div>
                </li>
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <strong>Oceana Atlântico Hotel (Bessa):</strong>
                    <p className="text-[10px] text-neutral-500 mt-0.5">Resort urbano pé na areia com piscinas de borda infinita de alto nível.</p>
                  </div>
                </li>
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <strong>Radisson Hotel Maior (Tambaú):</strong>
                    <p className="text-[10px] text-neutral-500 mt-0.5">Garantia internacional de conforto e localização central privilegiada.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="mt-4 pt-2 border-t border-neutral-100 flex items-center justify-between text-[10px] text-amber-500 font-mono">
              <span className="flex"><Star className="w-3 h-3 fill-amber-400 text-amber-500" /><Star className="w-3 h-3 fill-amber-400 text-amber-500" /><Star className="w-3 h-3 fill-amber-400 text-amber-500" /><Star className="w-3 h-3 fill-amber-400 text-amber-500" /><Star className="w-3 h-3 fill-amber-400 text-amber-500" /></span>
              <span>SERVIÇO PREMIUM</span>
            </div>
          </div>

          {/* Categoria 2 */}
          <div className="border border-black p-5 bg-white flex flex-col justify-between">
            <div>
              <span className="bg-red-50 text-red-600 border border-red-100 text-[9px] px-2.5 py-0.5 font-bold uppercase tracking-wider mb-3 inline-block select-none">
                🏫 PROXIMIDADE
              </span>
              <h3 className="text-xs font-bold text-black uppercase mb-4 border-b border-black pb-2">
                2. Hotéis Mais Próximos à UFPB
              </h3>

              <ul className="space-y-3 text-xs font-sans text-neutral-700 leading-normal font-light">
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <strong>Hardman Praia Hotel:</strong>
                    <p className="text-[10px] text-neutral-500 mt-0.5">Rápido acesso ao Campus I da UFPB pelas direções da BR-230.</p>
                  </div>
                </li>
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <strong>Nord Easy Green Sunset (Cabo Branco):</strong>
                    <p className="text-[10px] text-neutral-505 mt-0.5">Próximo ao Altiplano, agilizando trânsito de carro corporativo.</p>
                  </div>
                </li>
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <strong>Ibis João Pessoa (Cabo Branco):</strong>
                    <p className="text-[10px] text-neutral-500 mt-0.5">Ótimo custo-benefício de rede hoteleira, próximo a saídas cruciais.</p>
                  </div>
                </li>
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <strong>Flat Executivo nos Bancários:</strong>
                    <p className="text-[10px] text-neutral-500 mt-0.5">No bairro vizinho ao campus. Pode ir ao evento até caminhando.</p>
                  </div>
                </li>
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <strong>Hotel JR (Centro):</strong>
                    <p className="text-[10px] text-neutral-500 mt-0.5">Tradicional, muito prático para ônibus diretos expresso da UFPB.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="mt-4 pt-2 border-t border-neutral-100 flex items-center justify-between text-[10px] text-neutral-400 font-mono">
              <span>BANCÁRIOS / ORLA / CENTRO</span>
              <span>10 A 15 MIN DE CARRO</span>
            </div>
          </div>

          {/* Categoria 3 */}
          <div className="border border-black p-5 bg-white flex flex-col justify-between">
            <div>
              <span className="bg-neutral-100 text-black border border-neutral-300 text-[9px] px-2.5 py-0.5 font-bold uppercase tracking-wider mb-3 inline-block select-none">
                💰 ECONÔMICOS
              </span>
              <h3 className="text-xs font-bold text-black uppercase mb-4 border-b border-black pb-2">
                3. Hospedagem Acessível
              </h3>

              <ul className="space-y-3 text-xs font-sans text-neutral-700 leading-normal font-light">
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <strong>Slow Hostel (Tambaú):</strong>
                    <p className="text-[10px] text-neutral-500 mt-0.5">Ambiente acolhedor, mochileiro e acadêmico a metros do mar.</p>
                  </div>
                </li>
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <strong>Espaço Vivam Hostels (Cabo Branco):</strong>
                    <p className="text-[10px] text-neutral-500 mt-0.5">Opção econômica de alta pontuação, excelente integração social.</p>
                  </div>
                </li>
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <strong>Hotel Pousada Atlântica (Tambaú):</strong>
                    <p className="text-[10px] text-neutral-500 mt-0.5">Aconchegante, familiar e focada em conveniência turística central.</p>
                  </div>
                </li>
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <strong>Rede Nord Easy (Tambaú / Bessa):</strong>
                    <p className="text-[10px] text-neutral-500 mt-0.5">Padrão hoteleiro simplificado, confiável e com tarifas enxutas.</p>
                  </div>
                </li>
                <li className="flex gap-2">
                  <Check className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <strong>Pousada Tambaú Praia:</strong>
                    <p className="text-[10px] text-neutral-505 mt-0.5">Excelente localização de orla, próximo de feirinhas de comércio.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="mt-4 pt-2 border-t border-neutral-100 flex items-center justify-between text-[10px] text-neutral-400 font-mono">
              <span>ALBERGUES & POUSADAS</span>
              <span>CUSTO-BENEFÍCIO</span>
            </div>
          </div>

        </div>
      </div>

      {/* 🍽️ Onde Comer - Restaurantes Recomendados */}
      <div className="bg-white border-2 border-black p-6 md:p-8 mb-8 relative shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-left select-text">
        <h2 className="text-lg md:text-2xl font-display font-medium text-black tracking-tight mb-6 flex items-center gap-2 uppercase border-b-2 border-black pb-2.5">
          <Utensils className="w-5 h-5 text-red-655 text-red-600 shrink-0" />
          <span>🍽️ Onde Comer — Restaurantes Recomendados</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Restaurante 1 */}
          <div className="border border-neutral-200 p-4 bg-neutral-50 flex items-start gap-3">
            <div className="bg-red-50 text-red-600 border border-red-200 text-[10px] font-bold p-1.5 w-24 text-center shrink-0 uppercase select-none">
              TÍPICO
            </div>
            <div>
              <h4 className="font-bold text-black uppercase text-xs">Mangai (Manaíra)</h4>
              <p className="text-[11px] text-neutral-600 mt-1 leading-relaxed text-justify font-light">
                <strong>Parada obrigatória!</strong> O buffet de comida típica nordestina mais famoso e prestigiado do estado, servido em um ambiente sertanejo finamente planejado.
              </p>
            </div>
          </div>

          {/* Restaurante 2 */}
          <div className="border border-neutral-200 p-4 bg-neutral-50 flex items-start gap-3">
            <div className="bg-red-50 text-red-600 border border-red-200 text-[10px] font-bold p-1.5 w-24 text-center shrink-0 uppercase select-none">
              SOFISTICADO
            </div>
            <div>
              <h4 className="font-bold text-black uppercase text-xs">Nau Frutos do Mar (Manaíra)</h4>
              <p className="text-[11px] text-neutral-600 mt-1 leading-relaxed text-justify font-light">
                Do mesmo grupo gastronômico do Mangai, porém com menu de filiações contemporâneas focadas em de frutos do mar sofisticados e arquitetura premiada.
              </p>
            </div>
          </div>

          {/* Restaurante 3 */}
          <div className="border border-neutral-200 p-4 bg-neutral-50 flex items-start gap-3">
            <div className="bg-red-50 text-red-600 border border-red-200 text-[10px] font-bold p-1.5 w-24 text-center shrink-0 uppercase select-none">
              CARNES
            </div>
            <div>
              <h4 className="font-bold text-black uppercase text-xs">Tábua de Carne (Cabo Branco)</h4>
              <p className="text-[11px] text-neutral-600 mt-1 leading-relaxed text-justify font-light">
                Tradicionalíssimo restaurante especializado em carne de sol de primeira qualidade, picados típicos e acompanhamentos sertanejos de frente para o mar.
              </p>
            </div>
          </div>

          {/* Restaurante 4 */}
          <div className="border border-neutral-200 p-4 bg-neutral-50 flex items-start gap-3">
            <div className="bg-red-50 text-red-600 border border-red-200 text-[10px] font-bold p-1.5 w-24 text-center shrink-0 uppercase select-none">
              PASSEIO
            </div>
            <div>
              <h4 className="font-bold text-black uppercase text-xs">Canyon Coqueirinho (Litoral Sul)</h4>
              <p className="text-[11px] text-neutral-600 mt-1 leading-relaxed text-justify font-light">
                Se tiverem uma tarde ou final de semana livre, vale a pena ir a esse restaurante paradisíaco encravado entre falésias e praias virgens no sul da PB.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 🛍️ Guia de Shoppings e Compras */}
      <div className="bg-white border-2 border-black p-6 md:p-8 mb-12 relative shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-left select-text">
        <h2 className="text-lg md:text-2xl font-display font-medium text-black tracking-tight mb-4 flex items-center gap-2 uppercase border-b-2 border-black pb-2.5">
          <ShoppingBag className="w-5 h-5 text-red-600 shrink-0" />
          <span>🛍️ Guia de Shoppings e Compras</span>
        </h2>

        <p className="text-xs md:text-sm text-neutral-600 leading-relaxed font-light mb-8 select-text">
          João Pessoa conta com excelentes opções de shoppings centers, que variam desde os megaempreendimentos com centenas de lojas até shoppings de perfil executivo, de bairro ou charmosos centros de compras à beira-mar.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Categoria 1: Os Grandes Shoppings */}
          <div className="border border-black p-5 bg-neutral-50 flex flex-col justify-between">
            <div>
              <div className="mb-3.5">
                <span className="bg-black text-[9px] text-white px-2.5 py-0.5 font-mono uppercase font-bold tracking-widest inline-block select-none">
                  🏢 GRANDES SHOPPINGS
                </span>
              </div>
              <h3 className="text-xs font-bold text-black uppercase mb-4 border-b border-neutral-200 pb-2">
                Os Grandes Shoppings (Completos e de Grande Porte)
              </h3>
              
              <div className="space-y-4 font-sans text-xs">
                <div>
                  <h4 className="font-bold text-red-605 text-red-600 uppercase">Manaíra Shopping</h4>
                  <p className="text-[11px] text-neutral-600 mt-1 leading-relaxed text-justify font-light">
                    É o maior shopping do estado e um dos maiores do Nordeste. Localizado no bairro de Manaíra, possui um mix gigantesco de lojas (âncoras nacionais e internacionais), uma enorme praça de alimentação, área de jogos (Game Station), a casa de shows <em>Domus Hall</em>, uma vasta área de serviços e clínicas médicas, além de um grande complexo de cinema da rede Cinépolis.
                  </p>
                </div>
                <div className="pt-3 border-t border-neutral-200/60">
                  <h4 className="font-bold text-red-605 text-red-600 uppercase">Mangabeira Shopping</h4>
                  <p className="text-[11px] text-neutral-600 mt-1 leading-relaxed text-justify font-light">
                    Localizado na Zona Sul (bairro de Mangabeira, de fácil acesso para quem está na BR-230 ou arredores da UFPB), é um shopping moderno e amplo. Pertence ao mesmo grupo do Manaíra Shopping e conta com uma excelente estrutura de lazer, incluindo pistas de boliche, parque de diversões, cinema Cinépolis, além de uma ampla praça de alimentação com restaurantes de destaque.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Categoria 2: Shoppings de Charme */}
          <div className="border border-black p-5 bg-neutral-50 flex flex-col justify-between">
            <div>
              <div className="mb-3.5">
                <span className="bg-neutral-900 text-white text-[9px] px-2.5 py-0.5 font-mono uppercase font-bold tracking-widest inline-block select-none animate-pulse">
                  🌊 ORLA & ESTILO
                </span>
              </div>
              <h3 className="text-xs font-bold text-black uppercase mb-4 border-b border-neutral-200 pb-2">
                Shoppings de Charme e de Estilo &quot;Mall&quot;
              </h3>

              <div className="space-y-4 font-sans text-xs">
                <div>
                  <h4 className="font-bold text-red-605 text-red-600 uppercase">MAG Shopping</h4>
                  <p className="text-[11px] text-neutral-600 mt-1 leading-relaxed text-justify font-light">
                    Localizado à beira-mar, na Praia de Manaíra. Seu grande diferencial é a arquitetura náutica e a <strong>praça de alimentação e cinema com vista panorâmica para o oceano</strong>. É um shopping muito agradável, focado em lazer, marcas selecionadas e serviços.
                  </p>
                </div>
                <div className="pt-3 border-t border-neutral-200/60">
                  <h4 className="font-bold text-red-605 text-red-600 uppercase">Liv Mall Shopping</h4>
                  <p className="text-[11px] text-neutral-600 mt-1 leading-relaxed text-justify font-light">
                    Situado na movimentada Avenida Governador Flávio Ribeiro Coutinho (conhecida como Retão de Manaíra), é um empreendimento de alto padrão e com conceito contemporâneo. Reúne marcas de moda famosas, excelentes opções de cafés, restaurantes temáticos e espaço infantil integrado a uma torre comercial/empresarial.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Categoria 3: Bairro e Proximidade */}
          <div className="border border-black p-5 bg-neutral-50 flex flex-col justify-between">
            <div>
              <div className="mb-3.5">
                <span className="bg-red-50 text-red-600 border border-red-200 text-[9px] px-2.5 py-0.5 font-mono uppercase font-bold tracking-widest inline-block select-none">
                  🏫 PROXIMIDADE UFPB
                </span>
              </div>
              <h3 className="text-xs font-bold text-black uppercase mb-4 border-b border-neutral-200 pb-2">
                Shoppings de Bairro e Proximidade (Práticos)
              </h3>

              <div className="space-y-4 font-sans text-xs">
                <div>
                  <h4 className="font-bold text-red-605 text-red-600 uppercase flex items-center gap-1.5">
                    Shopping Sul <span className="text-[9px] bg-red-600 text-white font-mono px-1">MAIS PRÓXIMO ✦</span>
                  </h4>
                  <p className="text-[11px] text-neutral-600 mt-1 leading-relaxed text-justify font-normal bg-red-50/45 p-2.5 border-l-2 border-red-600">
                    Fica localizado no bairro dos <strong>Bancários</strong>, sendo <strong>o shopping mais próximo da UFPB (Campus I)</strong>. É um centro comercial muito tradicional na região, excelente para quem precisa resolver coisas rápidas do dia a dia, almoçar na praça de alimentação, comprar em lojas de departamentos ou usar serviços bancários e lotéricos sem precisar se deslocar para a orla.
                  </p>
                </div>
                <div className="pt-3 border-t border-neutral-200/60">
                  <h4 className="font-bold text-red-605 text-red-600 uppercase">Shopping Pátio Altiplano</h4>
                  <p className="text-[11px] text-neutral-600 mt-1 leading-relaxed text-justify font-light">
                    Localizado no bairro nobre do Altiplano Cabo Branco. É um shopping de conveniência moderno, muito focado em serviços (como clínicas, academias, petshops e lavanderias), pequenas lojas e gastronomia rápida.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Categoria 4: Shoppings Centrais e Tradicionais */}
          <div className="border border-black p-5 bg-neutral-50 flex flex-col justify-between">
            <div>
              <div className="mb-3.5">
                <span className="bg-neutral-100 text-black border border-neutral-300 text-[9px] px-2.5 py-0.5 font-mono uppercase font-bold tracking-widest inline-block select-none">
                  🏙️ HISTÓRICO & NEGÓCIOS
                </span>
              </div>
              <h3 className="text-xs font-bold text-black uppercase mb-4 border-b border-neutral-205 pb-2 border-neutral-200">
                Shoppings Centrais e Tradicionais
              </h3>

              <div className="space-y-4 font-sans text-xs">
                <div>
                  <h4 className="font-bold text-red-605 text-red-600 uppercase">Shopping Tambiá</h4>
                  <p className="text-[11px] text-neutral-600 mt-1 leading-relaxed text-justify font-light">
                    Localizado bem no coração de João Pessoa, no bairro de Tambiá (próximo ao Parque Solon de Lucena/Lagoa). É um shopping bastante movimentado, focado no comércio popular e tradicional da cidade, contando com praça de alimentação, lojas de moda, calçados e salas de cinema.
                  </p>
                </div>
                <div className="pt-3 border-t border-neutral-200/60">
                  <h4 className="font-bold text-red-605 text-red-600 uppercase">Shopping Sebrae</h4>
                  <p className="text-[11px] text-neutral-600 mt-1 leading-relaxed text-justify font-light">
                    Situado no Bairro dos Estados. É um espaço comercial menor e de perfil mais corporativo/empresarial, ideal para quem busca serviços rápidos, consultórios e restaurantes informais na região central da cidade.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Categoria 5: Centros Populares de Compras */}
        <div className="mt-8 border border-black p-5 bg-neutral-50 flex flex-col lg:flex-row gap-6 items-start justify-between select-text">
          <div className="max-w-xl">
            <span className="bg-neutral-900 text-white text-[9px] px-2.5 py-0.5 font-mono uppercase font-bold tracking-widest inline-block select-none mb-3">
              🎒 COMPRAS POPULARES
            </span>
            <h3 className="text-xs font-bold text-black uppercase mb-2">
              Centros Populares de Compras (Centro Histórico)
            </h3>
            <p className="text-[11px] text-neutral-600 leading-relaxed font-light text-justify select-text">
              Se os visitantes estiverem procurando por comércio popular focado em eletrônicos, vestuário em grande escala e acessórios em geral na região do Centro Histórico/Varadouro, destacam-se:
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0 select-none">
            <div className="border border-black bg-white p-3 text-xs font-bold uppercase text-black flex items-center gap-2">
              <Check className="w-4 h-4 text-red-600 shrink-0" />
              <span>Shopping Centro Terceirão</span>
            </div>
            <div className="border border-black bg-white p-3 text-xs font-bold uppercase text-black flex items-center gap-2">
              <Check className="w-4 h-4 text-red-600 shrink-0" />
              <span>Shopping 4&amp;400</span>
            </div>
          </div>
        </div>

        {/* Dica de transporte para o seu evento */}
        <div className="mt-8 bg-yellow-50 border-2 border-yellow-400 p-6 relative font-sans text-left shadow-[4px_4px_0px_0px_#facc15] select-text">
          <div className="flex gap-3.5 items-start">
            <div className="bg-yellow-400 text-black px-2.5 py-1 rounded-none border border-black select-none shrink-0 font-mono text-xs font-extrabold text-[10px]">
              LOGÍSTICA
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-yellow-850 text-yellow-800 mb-1 select-none">
                📍 Dica de transporte para o seu evento
              </h4>
              <p className="text-xs text-yellow-950 leading-relaxed font-normal text-justify">
                Para quem sai da <strong>UFPB</strong>, o <strong>Shopping Sul</strong> é acessível em poucos minutos de caminhada ou transporte público. Já o <strong>Mangabeira Shopping</strong> fica a uma corrida bem curta de carro ou ônibus via Av. Hilton Souto Maior. Para ir aos shoppings da orla (Manaíra, MAG e Liv Mall), o acesso se dá de forma rápida utilizando a BR-230.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* 🏥 Serviços de Saúde e Emergência */}
      <div className="bg-white border-2 border-black p-6 md:p-8 mb-12 relative shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-left select-text">
        <h2 className="text-lg md:text-2xl font-display font-medium text-black tracking-tight mb-6 flex items-center gap-2 uppercase border-b-2 border-black pb-2.5">
          <Activity className="w-5 h-5 text-red-600 shrink-0" />
          <span>🏥 Serviços de Saúde e Emergência</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans text-xs select-text">
          
          {/* Publico */}
          <div className="border border-black p-4 bg-red-50/10 rounded-none relative">
            <h4 className="font-bold text-black uppercase mb-3 flex items-center gap-1 border-b border-black/20 pb-1.5">
              <ShieldAlert className="w-4 h-4 text-red-650 text-red-600 shrink-0" /> públicos (SUS)
            </h4>
            <ul className="space-y-3.5 leading-normal font-light text-neutral-700">
              <li>
                <strong>HULW (Hospital Universitário):</strong>
                <p className="text-[10px] text-neutral-500 mt-0.5">Dentro do próprio Campus I da UFPB. Atendimento focado no serviço ambulatorial/médico acadêmico.</p>
              </li>
              <li>
                <strong>Hospital de Trauma Senador Humberto Lucena:</strong>
                <p className="text-[10px] text-neutral-500 mt-0.5">Referência estadual para emergências cirúrgicas ou de trânsito (localizado às margens da BR-230).</p>
              </li>
              <li>
                <strong>UPA Oceania (Manaíra):</strong>
                <p className="text-[10px] text-neutral-500 mt-0.5">Unidade de Pronto Atendimento 24h mais recomendada aos que estão na zona turística da orla.</p>
              </li>
              <li>
                <strong>UPA Bancários:</strong>
                <p className="text-[10px] text-neutral-500 mt-0.5">Prontidão médica 24h localizada extremamente próxima ao campus central da UFPB.</p>
              </li>
            </ul>
          </div>

          {/* Privados */}
          <div className="border border-black p-4 bg-white rounded-none">
            <h4 className="font-bold text-black uppercase mb-3 flex items-center gap-1 border-b border-neutral-200 pb-1.5">
              <Shield className="w-4 h-4 text-neutral-600 shrink-0" /> privados / planos
            </h4>
            <ul className="space-y-3.5 leading-normal font-light text-neutral-700">
              <li>
                <strong>Hospital Unimed João Pessoa:</strong>
                <p className="text-[10px] text-neutral-500 mt-0.5">Localizado no bairro da Torre, uma das maiores e mais completas infraestruturas médicas privadas do estado.</p>
              </li>
              <li>
                <strong>Hospital Memorial São Francisco:</strong>
                <p className="text-[10px] text-neutral-500 mt-0.5">Unidade privada de alta credibilidade técnica na zona central / Torre.</p>
              </li>
              <li>
                <strong>Hospital Nossa Senhora das Neves (HNSN):</strong>
                <p className="text-[10px] text-neutral-500 mt-0.5">Hospital de alta complexidade médica e hotelaria hospitalar de referência no Nordeste.</p>
              </li>
            </ul>
          </div>

          {/* Farmacias */}
          <div className="border border-black p-4 bg-white rounded-none flex flex-col justify-between">
            <div>
              <h4 className="font-bold text-black uppercase mb-3 flex items-center gap-1 border-b border-neutral-200 pb-1.5">
                <PhoneCall className="w-4 h-4 text-neutral-600 shrink-0" /> Farmácias 24h
              </h4>
              <p className="text-[11px] text-neutral-600 leading-relaxed text-justify font-light mb-4">
                As grandes redes de farmácias nacionais possuem amplas unidades com operação ininterrupta de 24 horas espalhadas preferencialmente pelas principais avenidas comerciais de trânsito rápido em direção à orla.
              </p>

              <div className="space-y-2 text-[10px] font-mono">
                <div className="flex gap-2 items-center bg-neutral-50 p-2 border border-neutral-100">
                  <span className="bg-red-650 bg-red-600 rounded-full w-2 h-2 text-red-600" />
                  <strong>DROGARIA SÃO PAULO</strong> (Principais Avenidas)
                </div>
                <div className="flex gap-2 items-center bg-neutral-50 p-2 border border-neutral-100">
                  <span className="bg-red-650 bg-red-600 rounded-full w-2 h-2 text-red-600" />
                  <strong>PAGUE MENOS / DROGASIL</strong> (Av. Epitácio Pessoa e Av. Ruy Carneiro)
                </div>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 p-2.5 text-[10px] text-red-850 text-red-700 font-bold tracking-wide text-center uppercase select-none mt-4">
              Emergência Médica: Disque 192 (SAMU)
            </div>
          </div>

        </div>
      </div>

      {/* 📸 Roteiro Turístico e Pontos Históricos */}
      <div className="bg-white border-2 border-black p-6 md:p-8 mb-12 relative shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-left select-text">
        <h2 className="text-lg md:text-2xl font-display font-medium text-black tracking-tight mb-6 flex items-center gap-2 uppercase border-b-2 border-black pb-2.5">
          <Camera className="w-5 h-5 text-red-600 shrink-0" />
          <span>📸 Roteiro Turístico e Pontos Históricos</span>
        </h2>

        {/* Real-World Representative Pictures Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-8 select-text">
          
          {/* Card Passeio 1 */}
          <div className="border border-black bg-white overflow-hidden group">
            <div className="aspect-video relative overflow-hidden border-b border-black bg-neutral-150">
              <img
                src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&q=80&w=800"
                alt="Praias de João Pessoa"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 duration-500 transition-all scale-102"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-2.5 left-2.5 bg-black text-white px-2 py-0.5 text-[9px] font-mono font-bold tracking-widest uppercase">
                FOTO REAL - ORLA
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-bold text-black uppercase mb-3 flex items-center gap-1.5 text-sm">
                <Sun className="w-4 h-4 text-red-600" /> Passeios & Natureza
              </h3>
              
              <ul className="space-y-3.5 text-xs font-sans text-neutral-600 leading-relaxed font-light text-justify">
                <li>
                  <strong>Ponta do Seixas e Farol do Cabo Branco:</strong> O ponto mais oriental das Américas (onde o sol nasce primeiro no continente). O Farol possui uma vista deslumbrante das falésias esculpidas pelo Atlântico.
                </li>
                <li>
                  <strong>Pôr do Sol na Praia do Jacaré:</strong> (Bairro vizinho em Cabedelo). Espetáculo inesquecível onde Jurandy do Sax executa o tradicionalíssimo Bolero de Ravel à deriva no rio enquanto o sol se põe.
                </li>
                <li>
                  <strong>Piscinas Naturais de Picãozinho ou Seixas:</strong> Passeios matinais de catamarã levam turistas até as formações de corais na maré baixa para nadar em águas cristalinas com cardumes multicoloridos.
                </li>
              </ul>
            </div>
          </div>

          {/* Card Passeio 2 */}
          <div className="border border-black bg-white overflow-hidden group">
            <div className="aspect-video relative overflow-hidden border-b border-black bg-neutral-150">
              <img
                src="https://images.unsplash.com/photo-1599946347371-68eb71b16afc?auto=format&fit=crop&q=80&w=800"
                alt="Histórico João Pessoa"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 duration-500 transition-all scale-102"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-2.5 left-2.5 bg-black text-white px-2 py-0.5 text-[9px] font-mono font-bold tracking-widest uppercase">
                FOTO REAL - CENTRO HISTÓRICO
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-bold text-black uppercase mb-3 flex items-center gap-1.5 text-sm">
                <Landmark className="w-4 h-4 text-red-600" /> Centro de João Pessoa (História)
              </h3>
              
              <p className="text-xs text-neutral-700 leading-normal mb-3 font-normal">
                João Pessoa é a <strong>terceira capital mais antiga do Brasil</strong> (fundada em 1585), guardando um tesouro arquitetônico barroco impressionante:
              </p>

              <ul className="space-y-3 text-xs font-sans text-neutral-600 leading-relaxed font-light text-justify">
                <li>
                  <strong>Centro Cultural São Francisco:</strong> Complexo barroco importantíssimo do século XVI. A arquitetura da igreja, o pátio central, os azulejos portugueses pintados à mão e o Museu de Arte Sacra são espetaculares.
                </li>
                <li>
                  <strong>Praça Antenor Navarro e Casarões:</strong> Mergulho nostálgico no charme do início do século XX com sobrados de azulejos multicoloridos vibrantes e efervescência cultural à noite.
                </li>
                <li>
                  <strong>Hotel Globo:</strong> Localizado no Varadouro, oferece vista poética extraordinária para o Rio Sanhauá, onde surgiu a história urbana do estado.
                </li>
                <li>
                  <strong>Parque Solon de Lucena (Lagoa):</strong> Cartão-postal do centro da cidade com palmeiras imperiais imponentes e águas ornamentadas por uma formosa fonte luminosa.
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* GOOGLE MAPS DESIGN FOR GEOLOCATION */}
        <div className="border border-black bg-neutral-50 p-4 font-sans select-none">
          <span className="text-[10px] font-bold text-neutral-400 font-mono uppercase tracking-widest block mb-2">
            ✈️ INTEGRADO DE GEOLOCALIZAÇÃO — JOÃO PESSOA (PB)
          </span>
          <div className="border border-black bg-neutral-900 overflow-hidden min-h-[360px] h-[360px] w-full">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31668.618057285514!2d-34.869275086202425!3d-7.1171801869854745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7acc2dd129eff67%3A0xb36ef55cba44c66e!2sJo%C3%A3o%20Pessoa%2C%20PB!5e0!3m2!1spt-BR!2sbr!4v1781458920192!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps - João Pessoa PB"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Friendly concluding message */}
      <div className="text-center font-sans select-text max-w-xl mx-auto py-5 border-t border-black/10">
        <p className="text-xs md:text-sm text-neutral-600 italic font-light">
          Desejamos que todos os participantes tenham um excelente evento científico na UFPB e levem as melhores memórias possíveis de João Pessoa!
        </p>
      </div>

    </div>
  );
}
