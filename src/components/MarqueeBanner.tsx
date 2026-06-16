import React, { useState } from 'react';
import { AlertMarquee } from '../types';
import { Megaphone, Edit3, Check } from 'lucide-react';

interface MarqueeBannerProps {
  marqueeData: AlertMarquee;
  isAdmin: boolean;
  onUpdateMarquee: (text: string) => void;
  onUpdateMarqueeBadge?: (text: string) => void;
  onOpenCMS?: () => void;
}

export default function MarqueeBanner({
  marqueeData,
  isAdmin,
  onUpdateMarquee,
  onUpdateMarqueeBadge,
  onOpenCMS
}: MarqueeBannerProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [tempText, setTempText] = useState(marqueeData.text);
  const [tempBadge, setTempBadge] = useState(marqueeData.badgeText);

  React.useEffect(() => {
    setTempText(marqueeData.text);
  }, [marqueeData.text]);

  React.useEffect(() => {
    setTempBadge(marqueeData.badgeText);
  }, [marqueeData.badgeText]);

  if (!marqueeData.enabled) return null;

  const handleSave = () => {
    onUpdateMarquee(tempText);
    if (onUpdateMarqueeBadge) {
      onUpdateMarqueeBadge(tempBadge);
    }
    setIsEditing(false);
  };

  const getMarqueeText = () => {
    if (marqueeData.items && marqueeData.items.length > 0) {
      return marqueeData.items.map(item => item.text).join(' • ');
    }
    return marqueeData.text;
  };

  const displayText = getMarqueeText();

  return (
    <div className="relative w-full bg-white text-black border-b border-black font-sans select-none flex items-stretch overflow-hidden group">
      
      {/* Static Badge Label Indicator in Red */}
      <div className="bg-red-600 text-white w-11 md:w-auto px-0 md:px-4 py-2.5 flex items-center justify-center md:justify-start gap-2 font-bold text-xs shrink-0 relative tracking-wider uppercase z-10 border-r border-black">
        <Megaphone className="w-4 h-4 md:w-3.5 md:h-3.5 animate-pulse text-white shrink-0" />
        {isEditing ? (
          <input
            type="text"
            className="hidden md:block bg-red-700 text-white font-bold px-1.5 py-0.5 border border-black text-xs uppercase w-32 focus:outline-none"
            value={tempBadge}
            onChange={(e) => setTempBadge(e.target.value)}
          />
        ) : (
          <span className="hidden md:inline">{marqueeData.badgeText}</span>
        )}
      </div>

      {/* Editing State or Ticker Scrolling Output */}
      <div className="relative flex-1 flex items-center px-4 overflow-hidden min-w-0">
        {isEditing ? (
          <div className="w-full flex items-center gap-2 py-1">
            <textarea
              className="bg-white text-black font-medium px-2 py-1 text-xs border border-black w-full resize-none h-10 focus:outline-none focus:ring-1 focus:ring-red-605"
              value={tempText}
              onChange={(e) => setTempText(e.target.value)}
              placeholder="Digite o texto de aviso contínuo que irá correr na tela..."
            />
            <button
              onClick={handleSave}
              className="bg-red-650 bg-red-600 hover:bg-neutral-900 border border-black text-white p-2 self-center shrink-0 cursor-pointer"
              title="Salvar Texto"
            >
              <Check className="w-4 h-4 text-white" />
            </button>
          </div>
        ) : (
          <div className="whitespace-nowrap flex items-center py-2 h-full min-w-full">
            {/* Double copies are run so the animation seamlessly wraps around */}
            <div className="inline-block animate-marquee text-xs font-semibold text-neutral-800 tracking-wide uppercase">
              {displayText} &nbsp;&nbsp;&nbsp;&nbsp; • &nbsp;&nbsp;&nbsp;&nbsp; {displayText} &nbsp;&nbsp;&nbsp;&nbsp; • &nbsp;&nbsp;&nbsp;&nbsp;
            </div>
          </div>
        )}

        {/* Hover overlay edit trigger in admin mode */}
        {isAdmin && !isEditing && (
          <button
            onClick={() => {
              if (onOpenCMS) {
                onOpenCMS();
              } else {
                setTempText(marqueeData.text);
                setTempBadge(marqueeData.badgeText);
                setIsEditing(true);
              }
            }}
            className="absolute inset-y-0 right-0 z-20 bg-neutral-100 text-red-600 border-l border-black px-4 hover:bg-red-600 hover:text-white flex items-center gap-1.5 font-bold text-[10px] uppercase transition-all cursor-pointer"
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>Editar Marquee</span>
          </button>
        )}
      </div>

      {/* Styled ticker movement animation inline definition to be injected */}
      <style>{`
        @keyframes marquee {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
