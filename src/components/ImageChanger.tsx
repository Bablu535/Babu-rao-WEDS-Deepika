import React, { useState } from "react";
import { Heart } from "lucide-react";

export default function ImageChanger() {
  const captions = [
    "Babu Rao & Deepika - United under God's Grace",
    "Babu Rao & Deepika - A Blessed Lifelong Journey"
  ];

  const unsplashBackups = [
    "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?auto=format&fit=crop&w=800&q=80"
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  
  // Track the attempt state for each card. 
  // We will loop through various formats/methods of finding 'photo1' and 'photo2' 
  // from both the root relative directories and subfolders before falling back to placeholders.
  const [attemptState, setAttemptState] = useState<{ [key: number]: number }>({
    0: 0,
    1: 0
  });

  const getCandidateUrls = (index: number) => {
    const num = index + 1;
    const driveUrl = index === 0 
      ? "https://lh3.googleusercontent.com/d/1XX_Jggr6yp_O7LecSBrLa5TOitHfOzpo" 
      : "https://lh3.googleusercontent.com/d/1gY0qeSVprWKQgyg6s3ETSnmg05Ia6xZB";
    
    const alternativeDriveUrl = index === 0
      ? "https://docs.google.com/uc?export=download&id=1XX_Jggr6yp_O7LecSBrLa5TOitHfOzpo"
      : "https://docs.google.com/uc?export=download&id=1gY0qeSVprWKQgyg6s3ETSnmg05Ia6xZB";

    return [
      driveUrl,
      alternativeDriveUrl,
      // Root-level patterns
      `photo${num}.png`,
      `photo${num}.jpg`,
      `photo${num}.jpeg`,
      `photo${num}.webp`,
      `photo${num}.PNG`,
      `photo${num}.JPG`,
      `photo${num}.JPEG`,
      
      // Asset-level patterns
      `/assets/photo${num}.png`,
      `/assets/photo${num}.jpg`,
      `/assets/photo${num}.jpeg`,
      `/assets/photo${num}.webp`,
      `/assets/photo${num}.PNG`,
      `/assets/photo${num}.JPG`,
      `/assets/photo${num}.JPEG`,

      // Src Asset level patterns
      `/src/assets/photo${num}.png`,
      `/src/assets/photo${num}.jpg`,
      `/src/assets/photo${num}.jpeg`,
      `/src/assets/photo${num}.webp`,
      `/src/assets/photo${num}.PNG`,
      `/src/assets/photo${num}.JPG`,
      `/src/assets/photo${num}.JPEG`,
    ];
  };

  const getImageUrl = (index: number) => {
    const candidates = getCandidateUrls(index);
    const state = attemptState[index] || 0;
    if (state < candidates.length) {
      return candidates[state];
    }
    return unsplashBackups[index];
  };

  const handleImageError = (index: number) => {
    setAttemptState(prev => {
      const current = prev[index] || 0;
      const limit = getCandidateUrls(index).length;
      if (current < limit) {
        return { ...prev, [index]: current + 1 };
      }
      return prev;
    });
  };

  return (
    <div id="image-changer-container" className="flex flex-col items-center w-full max-w-xl mx-auto select-none">
      
      {/* Interactive Active Image Display */}
      <div 
        id="active-couple-frame"
        className="w-full aspect-[4/5] max-w-[320px] bg-white p-3.5 pb-10 rounded-2xl border border-slate-200/80 shadow-md transform rotate-[-1deg] transition duration-500 hover:rotate-0 hover:scale-[1.01] flex flex-col justify-between"
      >
        <div className="relative w-full aspect-[4/5.2] bg-slate-50 rounded-xl overflow-hidden group select-none flex items-center justify-center">
          <img
            src={getImageUrl(activeIndex)}
            alt={`Babu Rao & Deepika - Photo ${activeIndex + 1}`}
            referrerPolicy="no-referrer"
            onError={() => handleImageError(activeIndex)}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent opacity-60"></div>
          
          <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-full text-[10px] font-semibold text-amber-800 tracking-wider flex items-center gap-1 shadow-sm uppercase font-mono border border-amber-100">
            <Heart className="w-2.5 h-2.5 text-rose-500 fill-rose-500" />
            Photo {activeIndex + 1} of 2
          </span>
        </div>

        {/* Polaroid Style Caption */}
        <div className="text-center pt-4 px-1">
          <span className="font-serif italic text-xs font-semibold text-slate-800 tracking-wide block">
            {captions[activeIndex]}
          </span>
          <span className="font-mono text-[8px] uppercase tracking-widest text-slate-400 mt-1.5 block">
            Holy Matrimony • Babu Rao & Deepika
          </span>
        </div>
      </div>

      {/* Slide Navigation Buttons */}
      <div className="flex gap-2.5 mt-5">
        {captions.map((_, idx) => (
          <button
            id={`image-navigation-btn-${idx}`}
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`px-4 py-1.5 rounded-full text-[11px] font-mono border transition cursor-pointer ${
              activeIndex === idx
                ? "bg-amber-600 border-amber-600 text-white shadow-sm"
                : "bg-white border-slate-200 text-slate-500 hover:bg-slate-50"
            }`}
          >
            Photo {idx + 1}
          </button>
        ))}
      </div>

    </div>
  );
}

