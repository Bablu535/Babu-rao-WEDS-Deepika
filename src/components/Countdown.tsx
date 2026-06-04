import React, { useState, useEffect } from "react";
import { Calendar, Clock, Heart } from "lucide-react";

export default function Countdown() {
  const targetDate = new Date("2026-06-11T10:30:00").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isOver: false,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isOver: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds, isOver: false });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeBlocks = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Mins", value: timeLeft.minutes },
    { label: "Secs", value: timeLeft.seconds },
  ];

  if (timeLeft.isOver) {
    return (
      <div 
        id="wedding-celebration-banner"
        className="flex flex-col items-center justify-center p-6 bg-amber-50/75 rounded-2xl border border-amber-200/50 text-center shadow-sm"
      >
        <span className="p-3 bg-rose-100 rounded-full text-rose-600 mb-2 animate-bounce">
          <Heart className="w-6 h-6 fill-rose-600" />
        </span>
        <h4 className="font-serif text-xl font-semibold text-slate-800">The Wedding Day is Here!</h4>
        <p className="text-sm text-slate-500 mt-1 max-w-sm">
          Join us in celebrating the holy matrimony of Babu Rao and Deepika today at 10:30 AM!
        </p>
      </div>
    );
  }

  return (
    <div id="wedding-countdown-container" className="flex flex-col items-center">
      <div className="flex items-center gap-2 mb-4 bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-100">
        <Clock className="w-3.5 h-3.5 text-amber-700 animate-spin-slow" />
        <span className="text-xs font-medium font-serif tracking-wide text-amber-800 uppercase">
          Countdown to Holy Matrimony
        </span>
      </div>

      <div className="grid grid-cols-4 gap-3 md:gap-5 w-full max-w-sm px-2">
        {timeBlocks.map((block) => (
          <div
            id={`countdown-block-${block.label.toLowerCase()}`}
            key={block.label}
            className="flex flex-col items-center bg-white/70 backdrop-blur-sm p-3 md:p-4 rounded-xl border border-slate-200/60 shadow-sm hover:border-amber-300/60 transition duration-300"
          >
            <span className="font-serif text-2xl md:text-3xl font-bold text-slate-800 tracking-tight">
              {String(block.value).padStart(2, "0")}
            </span>
            <span className="text-[10px] md:text-xs font-mono uppercase tracking-wider text-slate-400 mt-1">
              {block.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
