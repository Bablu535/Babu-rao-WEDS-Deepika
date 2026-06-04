import React from "react";
import { BookOpen, MapPin, Milestone, Music, Heart, Sparkles, ExternalLink } from "lucide-react";
import { ScheduleItem } from "../types";

export default function Itinerary() {
  const schedule: ScheduleItem[] = [
    {
      time: "10:30 AM",
      title: "Prelude & Congregational Praise",
      description: "Welcoming prayer, opening hymn of worship, and special instrumental prelude.",
      iconName: "music",
    },
    {
      time: "11:00 AM",
      title: "Holy Matrimony Service",
      description: "Sharing the Word of God on Union, exchanging the sacred vows of Covenant before God and witnesses.",
      iconName: "book",
    },
    {
      time: "11:30 AM",
      title: "Exchange of Rings & Blessings",
      description: "Blessing and exchange of marriage rings, lighting the unity candle, and solemn signature.",
      iconName: "heart",
    },
    {
      time: "12:00 PM",
      title: "Recessional & Photo Memories",
      description: "Declaring the couple as husband and wife! Congregational and family photo snapshots.",
      iconName: "sparkles",
    },
    {
      time: "12:30 PM",
      title: "Wedding luncheon & Reception",
      description: "Sharing a joyful Christian tradition feast and lunch together at our home compound.",
      iconName: "cake",
    },
  ];

  // Map icon strings to Lucide components
  const getIcon = (name: string) => {
    switch (name) {
      case "music":
        return <Music className="w-4 h-4 text-amber-700" />;
      case "book":
        return <BookOpen className="w-4 h-4 text-emerald-700" />;
      case "heart":
        return <Heart className="w-4 h-4 text-rose-600 fill-rose-100" />;
      case "sparkles":
        return <Sparkles className="w-4 h-4 text-sky-600" />;
      default:
        return <Milestone className="w-4 h-4 text-amber-700" />;
    }
  };

  return (
    <div id="itinerary-module" className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full max-w-4xl">
      {/* Schedule Timeline */}
      <div 
        id="timeline-container"
        className="md:col-span-6 bg-white/85 backdrop-blur-md p-5 rounded-2xl border border-slate-200/80 shadow-sm"
      >
        <h4 className="font-serif text-lg font-bold text-slate-800 border-b border-slate-100 pb-2 mb-4">
          Order of the Sacred Service
        </h4>
        
        <div className="relative border-l border-amber-200/60 ml-2.5 space-y-5">
          {schedule.map((item, index) => (
            <div
              id={`timeline-item-${index}`}
              key={index}
              className="relative pl-6 transition duration-300 hover:translate-x-1"
            >
              {/* Bullet icon container */}
              <span className="absolute -left-3.5 top-0.5 bg-amber-50 p-1.5 rounded-full border border-amber-200 shadow-sm flex items-center justify-center">
                {getIcon(item.iconName)}
              </span>
              
              <div>
                <span className="font-mono text-[10px] font-bold tracking-wider text-amber-700 uppercase bg-amber-50 border border-amber-100 px-2 py-0.5 rounded-md">
                  {item.time}
                </span>
                <h5 className="font-serif text-sm font-bold text-slate-800 mt-1.5">
                  {item.title}
                </h5>
                <p className="text-xs text-slate-500 mt-1 leading-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Location Card */}
      <div 
        id="location-container"
        className="md:col-span-6 bg-white/70 backdrop-blur-md p-5 rounded-2xl border border-slate-200/50 shadow-sm flex flex-col justify-between"
      >
        <div>
          <h4 className="font-serif text-lg font-bold text-slate-800 border-b border-slate-100 pb-2 mb-4">
            Wedding Venue
          </h4>

          <div className="bg-slate-50 rounded-xl p-4 border border-slate-150 mb-4">
            <div className="flex items-start gap-3">
              <span className="p-2.5 bg-amber-100 rounded-xl text-amber-800 shrink-0 mt-0.5 shadow-sm">
                <MapPin className="w-5 h-5 fill-amber-100" />
              </span>
              <div>
                <h5 className="font-serif text-sm font-bold text-slate-800">Our Home, Gaddamanugu</h5>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Gaddamanugu Village, G.Konduru Mandal, NTR District, Andhra Pradesh, India.
                </p>
                <div className="mt-2.5 flex items-center gap-1.5 font-mono text-[10px] text-slate-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  Gaddamanugu Location Coordinate Locked
                </div>
              </div>
            </div>
          </div>

          {/* Aesthetic Mock Street Map Visualizer */}
          <div 
            id="mock-map-visualizer"
            className="w-full h-36 bg-amber-100/30 rounded-xl border border-amber-200/40 relative overflow-hidden flex flex-col items-center justify-center text-center p-4 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"
          >
            <div className="absolute top-2 right-2 bg-white/80 px-2 py-0.5 rounded text-[9px] font-mono border text-slate-400">
              MAP VIEW
            </div>
            <div className="p-3 bg-white rounded-full shadow-md text-amber-700 animate-bounce">
              <MapPin className="w-6 h-6 fill-amber-50" />
            </div>
            <h6 className="font-serif text-xs font-semibold text-slate-800 mt-2">Gaddamanugu Compound</h6>
            <p className="text-[10px] text-slate-400 font-mono mt-0.5">Latitude: 16.6668° N, Longitude: 80.5284° E</p>

            <div className="absolute inset-0 bg-gradient-to-t from-white/20 sorted-t to-transparent pointer-events-none"></div>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100">
          <a
            id="google-maps-link"
            href="https://maps.app.goo.gl/g2vajWg5pCExJ5Wn7"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2 px-4 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-xs font-serif font-medium tracking-wide shadow-md flex items-center justify-center gap-2 transition duration-200 text-center"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Open & Navigate with Google Maps
          </a>
        </div>
      </div>
    </div>
  );
}
