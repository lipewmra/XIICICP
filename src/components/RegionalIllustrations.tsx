import React from 'react';

// Estação Cabo Branco - Niemeyer design with spiral ramp
export function EstacaoCaboBrancoIllustration({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 800 450" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      id="svg-estacao-cabo-branco"
    >
      {/* Background paper texture feel */}
      <rect width="800" height="450" fill="white" />
      
      {/* Base horizon ground lines */}
      <path d="M10 380 L790 380" stroke="black" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M10 395 L680 395" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M10 405 L540 405" stroke="black" strokeWidth="1" strokeLinecap="round" />
      
      {/* Main Building Body (Niemeyer block) */}
      {/* Lower supporting base structure */}
      <path d="M166 339 L326 339 L326 380 L166 380 Z" stroke="black" strokeWidth="2" fill="white" />
      <path d="M228 339 L228 380" stroke="black" strokeWidth="1.5" />
      
      {/* Main elevated structure floor slabs */}
      {/* Bottom slab */}
      <path d="M1 316 L488 316 M488 316 L488 305 M488 305 L2 305 Z" fill="black" stroke="black" strokeWidth="2" />
      {/* Top roof slab */}
      <path d="M1 180 L488 180 L488 190 L1 190 Z" stroke="black" strokeWidth="2.5" fill="white" />
      <path d="M1 190 L2 305" stroke="black" strokeWidth="2.5" />
      
      {/* Vertical glass columns and panels grids */}
      <path d="M1 190 L1 305" stroke="black" strokeWidth="2" />
      <path d="M42 190 L42 305" stroke="black" strokeWidth="1" />
      <path d="M83 190 L83 305" stroke="black" strokeWidth="1" />
      <path d="M124 190 L124 305" stroke="black" strokeWidth="1" />
      <path d="M165 190 L165 305" stroke="black" strokeWidth="1.5" />
      <path d="M206 190 L206 305" stroke="black" strokeWidth="1" />
      <path d="M247 190 L247 305" stroke="black" strokeWidth="1" />
      <path d="M288 190 L288 305" stroke="black" strokeWidth="1" />
      <path d="M329 190 L329 305" stroke="black" strokeWidth="1.5" />
      <path d="M370 190 L370 305" stroke="black" strokeWidth="1" />
      <path d="M411 190 L411 305" stroke="black" strokeWidth="1" />
      <path d="M452 190 L452 305" stroke="black" strokeWidth="1" />
      <path d="M488 190 L488 305" stroke="black" strokeWidth="2" />

      {/* Horizontal glass frame divisions */}
      <path d="M1 213 L488 213" stroke="black" strokeWidth="0.8" />
      <path d="M1 236 L488 236" stroke="black" strokeWidth="0.8" />
      <path d="M1 259 L488 259" stroke="black" strokeWidth="0.8" />
      <path d="M1 282 L488 282" stroke="black" strokeWidth="0.8" />
      
      {/* Glass reflections & shadows */}
      <path d="M5 300 L30 215 M50 300 L75 215 M100 300 L125 215" stroke="black" strokeWidth="0.5" strokeDasharray="3 3" />
      <path d="M180 300 L205 215 M220 300 L245 215 M350 300 L375 215" stroke="black" strokeWidth="0.5" strokeDasharray="3 3" />
      
      {/* Dark central structural support block */}
      <path d="M298 213 L366 213 L366 305 L298 305 Z" fill="black" />
      
      {/* Trees / landscaping element silhouettes at the base */}
      <path d="M2 305 C10 290 20 290 30 305 M25 305 C35 285 45 285 55 305 M50 305 C60 295 70 295 80 305 Z" fill="black" stroke="black" strokeWidth="1.5" />
      <path d="M372 265 C380 255 390 255 398 265 M392 265 C402 245 422 245 432 265 M425 265 C435 255 450 255 460 265 Z" fill="black" stroke="black" strokeWidth="1.5" />

      {/* Spiral ramps - Background Tower support */}
      <path d="M518 152 C480 152 480 373 518 373 C556 373 556 152 518 152 Z" stroke="black" strokeWidth="2.5" fill="white" />
      <path d="M518 152 L518 373" stroke="black" strokeWidth="1" strokeDasharray="4 4" />
      
      {/* Central building to tower walkway bridges */}
      <path d="M228 266 L377 241" stroke="black" strokeWidth="2" />
      <path d="M228 276 L377 251" stroke="black" strokeWidth="2" />
      <path d="M312 252 L312 262" stroke="black" strokeWidth="1" />
      <path d="M345 246 L345 256" stroke="black" strokeWidth="1" />

      {/* Double spiral concrete ramps overlay */}
      {/* Top level ramp */}
      <path d="M351 228 C450 144 778 140 778 244 C778 300 680 300 518 300" stroke="black" strokeWidth="4" fill="none" />
      <path d="M351 240 C435 156 766 152 766 244 C766 288 670 288 518 288" stroke="black" strokeWidth="3" fill="none" />
      
      {/* Top level ramp handrails */}
      <path d="M351 228 C450 144 778 140 778 244" stroke="black" strokeWidth="1.5" strokeDasharray="1 4" />
      <path d="M351 240 C435 156 766 152 766 244" stroke="black" strokeWidth="1" strokeDasharray="1 3" />

      {/* Lower level ramp */}
      <path d="M301 297 C450 220 788 220 788 318 C788 374 624 374 534 374" stroke="black" strokeWidth="5" fill="none" />
      <path d="M301 310 C440 232 774 232 774 318 C774 362 610 362 534 362" stroke="black" strokeWidth="3" fill="none" />
      
      {/* Lower level handrail verticals */}
      <path d="M301 297 C450 220 788 220 788 318" stroke="black" strokeWidth="1.5" strokeDasharray="1 4" />
      <path d="M301 310 C440 232 774 232 774 318" stroke="black" strokeWidth="1" strokeDasharray="1 3" />

      {/* Extreme bottom pedestrian approach curves */}
      <path d="M405 348 C410 348 510 338 525 365" stroke="black" strokeWidth="2.5" fill="none" />
      <path d="M405 358 C410 358 495 348 510 380" stroke="black" strokeWidth="1.5" fill="none" />
      <path d="M405 348 L405 358" stroke="black" strokeWidth="2" />
      <path d="M440 344 L440 354" stroke="black" strokeWidth="1.5" />
      <path d="M475 341 L475 351" stroke="black" strokeWidth="1.5" />

      {/* Artistic signature details */}
      <text x="630" y="420" fontStyle="italic" fontSize="13" fontFamily="monospace" fill="black" opacity="0.6">Estação Cabo Branco</text>
    </svg>
  );
}

// Farol do Cabo Branco - Photo of the actual lighthouse as requested
export function FarolCaboBrancoIllustration({ className = "w-full h-full" }: { className?: string }) {
  return (
    <div id="svg-farol-cabo-branco" className={`${className} bg-neutral-100 flex items-center justify-center overflow-hidden h-full min-h-[200px]`}>
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/e/eb/Joao_Pessoa_Paraiba_Farol_do_Cabo_Branco2.jpg"
        alt="Farol do Cabo Branco"
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        referrerPolicy="no-referrer"
      />
    </div>
  );
}

// Pórtico da UFPB - Wave Canopy Gate with circular shield
export function PorticoUfpbIllustration({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 900 500" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      id="svg-portico-ufpb"
    >
      <rect width="900" height="500" fill="white" />
      
      {/* Base ground line */}
      <path d="M20 460 L880 460" stroke="black" strokeWidth="3.2" strokeLinecap="round" />
      <path d="M50 475 L850 475" stroke="black" strokeWidth="1.8" strokeLinecap="round" />
      
      {/* Bottom central security guard houses columns */}
      <rect x="424" y="320" width="85" height="140" fill="black" stroke="black" strokeWidth="2.5" />
      <rect x="522" y="320" width="85" height="140" fill="white" stroke="black" strokeWidth="2.5" />
      
      {/* Glass windows inside columns of guard booths */}
      <rect x="434" y="335" width="65" height="40" fill="white" stroke="black" strokeWidth="1.5" />
      <line x1="466" y1="335" x2="466" y2="375" stroke="black" strokeWidth="1" />
      
      <rect x="532" y="335" width="65" height="40" fill="black" stroke="white" strokeWidth="1.5" />
      
      {/* Horizontal column bars */}
      <line x1="424" y1="410" x2="607" y2="410" stroke="black" strokeWidth="2" />
      <line x1="424" y1="415" x2="607" y2="415" stroke="black" strokeWidth="1" />

      {/* Upper Wave Concrete Gate - Niemeyer style canopy layout */}
      {/* Main Curved Wave */}
      <path 
        d="M26 102 C26 102 380 203 520 280 C660 357 874 250 874 250" 
        stroke="black" 
        strokeWidth="5" 
        strokeLinecap="round"
        fill="none" 
      />
      <path 
        d="M26 114 C26 114 360 215 510 292 C660 369 874 262 874 262" 
        stroke="black" 
        strokeWidth="3" 
        strokeLinecap="round"
        fill="none" 
      />
      
      {/* Connector lines creating double concrete layer block depth */}
      <path d="M26 102 L26 114" stroke="black" strokeWidth="4" />
      <path d="M874 250 L874 262" stroke="black" strokeWidth="3" />

      {/* Supporting framework above the central security booth (under-wave architecture joints) */}
      <rect x="515" y="174" width="98" height="38" fill="white" stroke="black" strokeWidth="2" />
      <line x1="535" y1="174" x2="535" y2="212" stroke="black" strokeWidth="1" />
      <line x1="555" y1="174" x2="555" y2="212" stroke="black" strokeWidth="1.5" />
      <line x1="575" y1="174" x2="575" y2="212" stroke="black" strokeWidth="1" />
      <line x1="595" y1="174" x2="595" y2="212" stroke="black" strokeWidth="1" />

      {/* Circle Medallion Emblem of UFPB inside the curve on the right wave bend */}
      <g transform="translate(685, 275)">
        {/* Outer shield circle */}
        <circle cx="28" cy="28" r="28" fill="white" stroke="black" strokeWidth="3" />
        <circle cx="28" cy="28" r="24" fill="white" stroke="black" strokeWidth="1.2" />
        
        {/* Abstract design of UFPB Shield with fire torches */}
        {/* Book pedestal base */}
        <path d="M12 40 L44 40 L40 43 L16 43 Z" fill="black" />
        
        {/* Shield outline interior */}
        <path d="M16 16 L40 16 L40 34 C40 38 28 42 28 42 C28 42 16 38 16 34 Z" stroke="black" strokeWidth="1.5" fill="none" />
        
        {/* Torches lines (three flaming torches in institutional emblem) */}
        <line x1="22" y1="20" x2="22" y2="34" stroke="black" strokeWidth="1.5" />
        <line x1="28" y1="18" x2="28" y2="34" stroke="black" strokeWidth="2" />
        <line x1="34" y1="20" x2="34" y2="34" stroke="black" strokeWidth="1.5" />
        
        {/* Fires */}
        <circle cx="22" cy="17" r="2" fill="black" />
        <circle cx="28" cy="14" r="2.5" fill="yellow" stroke="black" strokeWidth="1" />
        <circle cx="34" cy="17" r="2" fill="black" />
        
        {/* UFPB acronym circle letters text */}
        <rect x="18" y="44" width="20" height="7" fill="black" rx="1" />
        <text x="28" y="50" fill="white" fontSize="6.2" textAnchor="middle" fontWeight="bold" fontFamily="sans-serif">UFPB</text>
      </g>

      {/* Abstract structural grid texture details behind canopy wave for scale */}
      <path d="M26 114 L200 460 M120 165 L280 460 M250 200 L400 460 M380 230 L500 460" stroke="black" strokeWidth="0.5" strokeDasharray="2 6" />

      {/* Artistic description text */}
      <text x="700" y="440" fontStyle="italic" fontSize="14" fontFamily="monospace" fill="black" opacity="0.6">Pórtico - UFPB</text>
    </svg>
  );
}
