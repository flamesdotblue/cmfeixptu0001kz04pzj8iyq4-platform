import React from 'react';
import { Sparkles } from 'lucide-react';

const mentors = [
  {
    name: 'MKV',
    title: 'Legendary Teacher • AlgoUniversity',
    highlight: 'Hosting the secret-topic live class',
    color: 'from-emerald-500/20 to-teal-500/10',
  },
  {
    name: 'Aisha Khan',
    title: 'Staff Engineer • HelioStack',
    highlight: 'Systems design & backend performance',
    color: 'from-fuchsia-500/20 to-purple-500/10',
  },
  {
    name: 'Vedant Rao',
    title: 'ML Lead • NimbusAI',
    highlight: 'AI problem solving & evaluations',
    color: 'from-sky-500/20 to-cyan-500/10',
  },
  {
    name: 'Ritika Shah',
    title: 'Product Engineer • CloudNest',
    highlight: 'Front-end craftsmanship & DX',
    color: 'from-amber-500/20 to-orange-500/10',
  },
];

export default function Mentors() {
  return (
    <section id="mentors" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Meet your mentors</h2>
          <p className="mt-2 max-w-2xl text-white/70">Guides who craft the experience, review performances, and help with precision job pairing.</p>
        </div>
        <div className="hidden md:inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
          <Sparkles size={14} className="text-emerald-300" />
          Curated and trustworthy
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {mentors.map((m, i) => (
          <div key={i} className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
            <div className={`h-40 w-full rounded-b-none bg-gradient-to-tr ${m.color} flex items-center justify-center`}>
              <div className="text-center">
                <div className="mx-auto mb-2 h-12 w-12 rounded-full bg-white/20 ring-1 ring-white/30" />
                <p className="text-sm text-white/80">Portrait mockup</p>
              </div>
            </div>
            <div className="p-5">
              <p className="text-base font-semibold">{m.name}</p>
              <p className="text-sm text-white/60">{m.title}</p>
              <p className="mt-3 text-sm text-white/80">{m.highlight}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
