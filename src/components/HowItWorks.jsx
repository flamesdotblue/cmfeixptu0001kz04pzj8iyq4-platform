import React from 'react';
import { Play, Trophy, Sparkles } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Live Class with MKV',
    desc: 'Kick off with a high-energy, live class by the legendary MKV on a secret topic revealed on stage.',
    icon: Play,
    accent: 'from-sky-500/30 to-cyan-500/5',
  },
  {
    id: 2,
    title: 'Contest on the Topic',
    desc: 'Put your learning to the test in a timed coding contest crafted specifically for the topic.',
    icon: Trophy,
    accent: 'from-violet-500/30 to-fuchsia-500/5',
  },
  {
    id: 3,
    title: 'Match to Right Jobs',
    desc: 'Your performance unlocks precision pairing with roles that fit your strengths at leading companies.',
    icon: Sparkles,
    accent: 'from-emerald-500/30 to-teal-500/5',
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">The New-age Hiring Module</h2>
        <p className="mt-2 max-w-2xl text-white/70">
          Three immersive steps designed to showcase your skills and propel you into roles where you will thrive.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map(({ id, title, desc, icon: Icon, accent }) => (
          <div key={id} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br ${accent}`} />
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
              <Icon className="text-white" size={22} />
            </div>
            <h3 className="relative z-10 mt-4 text-xl font-semibold">{title}</h3>
            <p className="relative z-10 mt-2 text-white/70">{desc}</p>
            <div className="relative z-10 mt-6 h-40 w-full rounded-xl border border-white/10 bg-gradient-to-tr from-white/10 to-white/0" />
          </div>
        ))}
      </div>
    </section>
  );
}
