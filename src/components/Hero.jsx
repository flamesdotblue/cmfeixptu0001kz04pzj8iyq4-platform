import React from 'react';
import Spline from '@splinetool/react-spline';
import { Calendar, Clock, MapPin, Ticket, Shield } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[95vh] w-full overflow-hidden" id="hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zks9uYILDPSX-UX6/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-24 pb-16 sm:pt-28 md:pt-32">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
          <Shield size={14} className="text-emerald-400" />
          <span>AlgoUniversity presents</span>
        </div>

        <h1 className="text-center text-4xl font-semibold tracking-tight md:text-6xl">
          AU Hiring Tournament
        </h1>
        <p className="mt-4 max-w-2xl text-center text-base text-white/80 md:text-lg">
          A futuristic, in-person hiring experience. Learn live, compete, and get matched to top jobs — all in one magical afternoon.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-white/80">
          <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
            <Calendar size={16} className="text-sky-400" />
            <span>21 Sept • 12:00 PM</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
            <MapPin size={16} className="text-pink-400" />
            <span>JNTUH, Hyderabad</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
            <Clock size={16} className="text-violet-400" />
            <span>In-person • Limited seats</span>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a href="#cta" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-3 text-black font-semibold hover:from-emerald-400 hover:to-teal-400 transition">
            <Ticket size={18} /> Buy Tickets
          </a>
          <a href="#how" className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-white hover:bg-white/10 transition">
            View Agenda
          </a>
        </div>
      </div>
    </section>
  );
}
