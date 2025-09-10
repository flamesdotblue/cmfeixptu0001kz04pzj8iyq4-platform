import React, { useEffect, useMemo, useState } from 'react';
import { Star, CheckCircle, Ticket } from 'lucide-react';

function useCountdown(hoursFromNow = 48) {
  const deadline = useMemo(() => Date.now() + hoursFromNow * 60 * 60 * 1000, [hoursFromNow]);
  const [remaining, setRemaining] = useState(deadline - Date.now());

  useEffect(() => {
    const timer = setInterval(() => setRemaining(Math.max(0, deadline - Date.now())), 1000);
    return () => clearInterval(timer);
  }, [deadline]);

  const totalSeconds = Math.floor(remaining / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { days, hours, minutes, seconds, done: remaining <= 0 };
}

const videoTestimonials = [
  { name: 'Neha', role: 'SWE, CloudNest', color: 'from-fuchsia-500/20 to-purple-500/10' },
  { name: 'Rohit', role: 'ML Eng, NimbusAI', color: 'from-sky-500/20 to-cyan-500/10' },
  { name: 'Ananya', role: 'SDE, PayWave', color: 'from-emerald-500/20 to-teal-500/10' },
];

const textTestimonials = [
  {
    name: 'Vikram',
    role: 'Placed via AU',
    quote: 'The format is brilliant. You learn, compete, and recruiters already know what you can do.',
  },
  {
    name: 'Sneha',
    role: 'Contest Top 10',
    quote: 'MKV’s session was electric. The contest aligned perfectly and the job pairing felt on point.',
  },
  {
    name: 'Kabir',
    role: 'Backend Engineer',
    quote: 'Best in-person tech event I’ve attended. Seamless and truly merit-based.',
  },
];

export default function TestimonialsAndCTA() {
  const { days, hours, minutes, seconds, done } = useCountdown(48);

  return (
    <section id="cta" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">What participants say</h2>
        <p className="mt-2 max-w-2xl text-white/70">Real voices from previous cohorts and early signups.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="grid gap-6 sm:grid-cols-2 lg:col-span-2">
          {videoTestimonials.map((v, i) => (
            <div key={i} className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
              <div className={`h-44 w-full bg-gradient-to-tr ${v.color} flex items-center justify-center`}>
                <button className="rounded-full bg-white/90 px-3 py-1.5 text-black text-sm font-semibold shadow">Play testimonial</button>
              </div>
              <div className="p-4">
                <p className="text-sm font-medium text-white/90">{v.name}</p>
                <p className="text-xs text-white/60">{v.role}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          {textTestimonials.map((t, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <div className="mb-2 flex items-center gap-2 text-amber-300">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
              </div>
              <p className="text-white/90">“{t.quote}”</p>
              <p className="mt-3 text-sm text-white/60">— {t.name}, {t.role}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-transparent p-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
              <CheckCircle size={14} /> Early Bird ends soon
            </div>
            <h3 className="mt-3 text-2xl font-semibold">Reserve your seat for AU Hiring Tournament</h3>
            <p className="mt-1 text-white/70">21 Sept, 12:00 PM • JNTUH, Hyderabad • In-person only</p>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-right">
              <div className="text-xs uppercase tracking-wide text-white/60">Early Bird (48 hrs)</div>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="text-3xl font-semibold">₹399</span>
                <span className="text-sm text-white/60 line-through">₹899</span>
              </div>
              <div className="mt-2 text-sm text-white/70">
                {done ? (
                  <span>Offer ended</span>
                ) : (
                  <CountdownDisplay days={days} hours={hours} minutes={minutes} seconds={seconds} />
                )}
              </div>
            </div>
            <a href="#buy" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-3 text-black font-semibold hover:from-emerald-400 hover:to-teal-400 transition">
              <Ticket size={18} /> Buy Tickets
            </a>
          </div>
        </div>
      </div>

      <div id="buy" className="sr-only" aria-hidden>
        Ticket purchase form integration point
      </div>
    </section>
  );
}

function CountdownDisplay({ days, hours, minutes, seconds }) {
  const Unit = ({ label, value }) => (
    <div className="flex flex-col items-center">
      <div className="rounded-md bg-white/10 px-2 py-1 text-center tabular-nums">{String(value).padStart(2, '0')}</div>
      <div className="mt-1 text-[10px] uppercase tracking-wide text-white/60">{label}</div>
    </div>
  );

  return (
    <div className="flex items-center gap-2">
      <Unit label="D" value={days} />
      <span className="text-white/40">:</span>
      <Unit label="H" value={hours} />
      <span className="text-white/40">:</span>
      <Unit label="M" value={minutes} />
      <span className="text-white/40">:</span>
      <Unit label="S" value={seconds} />
    </div>
  );
}
