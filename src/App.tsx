import React, { useState, useEffect } from "react";
import { 
  Heart, 
  Calendar, 
  MapPin, 
  Clock, 
  ChevronRight, 
  ChevronLeft, 
  Music, 
  Sparkles,
  BookOpen
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// Import custom sections
import Countdown from "./components/Countdown";
import Itinerary from "./components/Itinerary";
import ImageChanger from "./components/ImageChanger";

export default function App() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [invitedName, setInvitedName] = useState("");
  const totalSlides = 3;

  const weddingDate = "June 11 Thursday, 2026";
  const weddingTime = "10:30 AM";
  const weddingLocation = "our Home Gaddamanugu";

  // Navigation handlers
  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % totalSlides);
  };

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Keyboard navigation for elegance
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") handleNextSlide();
      if (e.key === "ArrowLeft") handlePrevSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Scroll to top of the page on slide change (crucial for mobile viewports)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeSlide]);

  return (
    <div 
      id="invitation-app-root"
      className="min-h-screen bg-[#F7F6F0] text-slate-800 font-sans flex flex-col justify-between relative overflow-x-hidden selection:bg-amber-100 selection:text-amber-900"
    >
      {/* Decorative floral elegant corners */}
      <div className="absolute top-0 left-0 w-36 h-36 border-t border-l border-amber-300/40 m-6 rounded-tl-3xl pointer-events-none hidden md:block"></div>
      <div className="absolute top-0 right-0 w-36 h-36 border-t border-r border-amber-300/40 m-6 rounded-tr-3xl pointer-events-none hidden md:block"></div>
      <div className="absolute bottom-0 left-0 w-36 h-36 border-b border-l border-amber-300/40 m-6 rounded-bl-3xl pointer-events-none hidden md:block"></div>
      <div className="absolute bottom-0 right-0 w-36 h-36 border-b border-r border-amber-300/40 m-6 rounded-br-3xl pointer-events-none hidden md:block"></div>

      {/* Elegant Header with Christian cross motif */}
      <header 
        id="app-header"
        className="w-full max-w-5xl mx-auto px-6 py-4 md:py-6 flex flex-col md:flex-row items-center justify-between border-b border-amber-200/20 z-10"
      >
        <div className="flex items-center gap-1.5 select-none">
          <span className="p-1.5 bg-amber-50 rounded-full text-amber-700 font-bold border border-amber-200 shadow-sm flex items-center justify-center">
            {/* Elegant Latin cross representations */}
            <svg className="w-5 h-5 text-amber-600 fill-amber-600" viewBox="0 0 24 24">
              <path d="M11 2h2v6h5v2h-5v12h-2v-12H6V8h5z" />
            </svg>
          </span>
          <span className="font-serif italic font-semibold text-sm text-amber-800 tracking-wide">
            💐 Wedding Invitation 💐
          </span>
          <span className="p-1.5 bg-amber-50 rounded-full text-amber-700 font-bold border border-amber-200 shadow-sm flex items-center justify-center">
            {/* Elegant Latin cross representations */}
            <svg className="w-5 h-5 text-amber-600 fill-amber-600" viewBox="0 0 24 24">
              <path d="M11 2h2v6h5v2h-5v12h-2v-12H6V8h5z" />
            </svg>
          </span>
        </div>

        <div className="mt-2.5 md:mt-0 px-4 py-1 bg-amber-50 border border-amber-100 rounded-full text-[11px] font-mono font-medium text-amber-800 flex items-center gap-1.5 shadow-sm">
          <Calendar className="w-3.5 h-3.5" />
          {weddingDate} @ {weddingTime}
        </div>
      </header>

      {/* Main Container */}
      <main 
        id="invitation-main-content"
        className="flex-grow w-full max-w-5xl mx-auto px-4 md:px-6 py-6 md:py-10 flex flex-col items-center justify-center z-10"
      >
        {/* Progress Dots/Tabs Navigation */}
        <div 
          id="slide-indicators-nav"
          className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6 md:mb-8 bg-white/70 backdrop-blur-sm p-1.5 rounded-full border border-slate-200/50 shadow-sm"
        >
          {[
            { id: 0, label: "Invitation Cover", icon: Heart },
            { id: 1, label: "The Couple", icon: Sparkles },
            { id: 2, label: "Ceremony & Location", icon: BookOpen }
          ].map((tab, idx) => {
            const TabIcon = tab.icon;
            return (
              <button
                id={`tab-nav-btn-${tab.id}`}
                key={tab.id}
                onClick={() => setActiveSlide(tab.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-serif font-medium cursor-pointer transition ${
                  activeSlide === tab.id
                    ? "bg-amber-600 text-white shadow-sm"
                    : "text-slate-500 hover:text-amber-800 hover:bg-slate-50"
                }`}
              >
                <TabIcon className="w-3.5 h-3.5 shrink-0" />
                <span className="hidden xs:inline">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Slides Viewport */}
        <div id="deck-viewport" className="w-full flex justify-center items-center">
          <AnimatePresence mode="wait">
            {activeSlide === 0 && (
              <motion.div
                id="slide-0-cover"
                key="slide-cover"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4 }}
                className="w-full flex flex-col items-center text-center self-center"
              >
                {/* Decorative scripture header */}
                <div className="max-w-xl mx-auto px-4">
                  <span className="font-serif text-amber-700 italic text-base block font-medium">
                    "What therefore God hath joined together, let not man put asunder."
                  </span>
                  <span className="font-mono text-[9px] text-slate-400 block uppercase tracking-widest mt-1">
                    Mark 10:9 
                  </span>
                </div>

                {/* Main names display card */}
                <div 
                  id="invitation-namescard"
                  className="mt-8 mb-8 bg-white/80 backdrop-blur-md p-6 md:p-12 rounded-3xl border border-amber-200/35 shadow-xl max-w-2xl w-full select-none"
                >
                  <span className="font-serif leading-none tracking-widest text-slate-400 text-xs md:text-sm uppercase block font-medium mb-3">
                    We Invitation You to Our Wedding
                  </span>
                  
                  <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-950 mt-1 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-5">
                    <span className="text-slate-900">Babu Rao</span>
                    <span className="font-serif text-amber-600 italic font-medium text-3xl md:text-5xl my-1 md:my-0">&amp;</span>
                    <span className="text-slate-900">Deepika</span>
                  </h1>

                  <div className="w-20 h-px bg-amber-400/40 mx-auto my-6 md:my-8 relative">
                    <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-100 absolute left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  </div>

                  {/* Wedding Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-slate-100 pt-6 max-w-md mx-auto">
                    <div className="flex flex-col items-center">
                      <Calendar className="w-4 h-4 text-amber-700 mb-1" />
                      <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400">Date</span>
                      <span className="font-serif text-xs font-bold text-slate-800 mt-1">{weddingDate}</span>
                    </div>
                    
                    <div className="flex flex-col items-center border-y sm:border-y-0 sm:border-x border-slate-100 py-3 sm:py-0">
                      <Clock className="w-4 h-4 text-amber-700 mb-1" />
                      <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400">Time</span>
                      <span className="font-serif text-xs font-bold text-slate-800 mt-1">{weddingTime}</span>
                    </div>

                    <div className="flex flex-col items-center">
                      <MapPin className="w-4 h-4 text-amber-700 mb-1" />
                      <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400">Venue</span>
                      <span className="font-serif text-xs font-bold text-slate-800 mt-1 text-center truncate w-full px-2" title={weddingLocation}>
                        Gaddamanugu
                      </span>
                    </div>
                  </div>
                </div>

                {/* Dynamic Remaining Time Countdown */}
                <div id="countdown-card-wrapper" className="max-w-xl w-full">
                  <Countdown />
                </div>
              </motion.div>
            )}

            {activeSlide === 1 && (
              <motion.div
                id="slide-1-couple"
                key="slide-couple"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4 }}
                className="w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12"
              >
                {/* Left explanation column */}
                <div className="w-full md:w-1/2 max-w-md select-none">
                  <span className="font-mono text-[10px] font-bold tracking-widest text-amber-700 uppercase bg-amber-50 px-2.5 py-1 rounded-full border border-amber-100">
                    The Blessed Couple
                  </span>
                  
                  <h2 className="font-serif text-3xl font-bold text-slate-900 mt-4 leading-tight">
                    Babu Rao <span className="font-serif italic font-medium text-amber-600">&amp;</span> Deepika
                  </h2>
                  
                  <p className="text-sm text-slate-600 font-serif leading-relaxed italic mt-4 border-l-2 border-amber-300 pl-4 bg-white/40 p-3 rounded-r-xl">
                    "Therefore shall a man leave his father and his mother, and shall cleave unto his wife: and they shall be one flesh." <br />
                    <span className="text-[10px] font-mono not-italic uppercase tracking-widest text-slate-400 mt-1 block">
                      Genesis 2:24 • Holy Scripture
                    </span>
                  </p>

                  <p className="text-xs text-slate-500 mt-4 leading-relaxed">
                    With prayerful steps and matching hearts, we invite you to share our joy as we promise enduring love, faith, and companionship under God's abundant grace.
                  </p>
                </div>

                {/* Right interactive gallery column */}
                <div className="w-full md:w-1/2 flex justify-center">
                  <ImageChanger />
                </div>
              </motion.div>
            )}

            {activeSlide === 2 && (
              <motion.div
                id="slide-2-ceremony"
                key="slide-ceremony"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4 }}
                className="w-full flex justify-center"
              >
                <Itinerary />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Carousel Floating Navigators on Left & Right on broad screens */}
        <div id="floating-slide-navigators" className="flex items-center justify-between w-full max-w-sm mt-8 md:mt-10 gap-4">
          <button
            id="prev-slide-button"
            onClick={handlePrevSlide}
            className="flex-1 py-2 px-3 border border-slate-200 bg-white hover:bg-slate-50 rounded-xl font-mono text-[11px] font-medium text-slate-600 hover:text-slate-850 shadow-sm flex items-center justify-center gap-1 transition"
          >
            <ChevronLeft className="w-4 h-4 shrink-0 text-amber-700" />
            Previous
          </button>

          <span className="text-xs font-mono font-medium text-slate-400 select-none">
            {activeSlide + 1} / {totalSlides}
          </span>

          <button
            id="next-slide-button"
            onClick={handleNextSlide}
            className="flex-1 py-2 px-3 border border-slate-200 bg-white hover:bg-slate-50 rounded-xl font-mono text-[11px] font-medium text-slate-600 hover:text-slate-850 shadow-sm flex items-center justify-center gap-1 transition"
          >
            Next
            <ChevronRight className="w-4 h-4 shrink-0 text-amber-700" />
          </button>
        </div>
      </main>

      {/* Elegant Footer Details */}
      <footer 
        id="app-footer-bar"
        className="text-center py-6 border-t border-amber-200/10 text-[10px] font-mono tracking-widest text-slate-400 uppercase select-none z-10"
      >
        <span>© 2026 Babu Rao & Deepika • Wedding e-Invitation App</span>
      </footer>
    </div>
  );
}
