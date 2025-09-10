import React from 'react';
import { Play, Trophy, Sparkles, Calendar, MapPin, Shield, Users, Clock } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Live Class with MKV',
    subtitle: 'Secret topic revealed on stage',
    desc: 'Kick off with a high-energy, live class by the legendary MKV. Learn core ideas and insider patterns that give you a contest edge.',
    icon: Play,
    accent: 'from-sky-500/30 to-cyan-500/10',
    bullets: ['Concepts and patterns', 'Live Q&A', 'Cheat-sheet pointers'],
  },
  {
    id: 2,
    title: 'Contest on the Topic',
    subtitle: 'Apply what you learned—immediately',
    desc: 'A timed, fair, merit-first contest crafted for the topic. Scoreboards and integrity checks ensure credible results.',
    icon: Trophy,
    accent: 'from-violet-500/30 to-fuchsia-500/10',
    bullets: ['Calibrated difficulty', 'Real-time scoreboard', 'Anti-cheat systems'],
  },
  {
    id: 3,
    title: 'Matched to the Right Jobs',
    subtitle: 'Precision pairing based on performance',
    desc: 'Your signals—speed, accuracy, approach—map to roles at leading companies. Mentors guide next steps and intros.',
    icon: Sparkles,
    accent: 'from-emerald-500/30 to-teal-500/10',
    bullets: ['Skill graph & fit score', 'Mentor feedback', 'Priority recruiter intros'],
  },
];

const agenda = [
  { time: '12:00 PM', label: 'Check-in & badges', note: 'Networking + setup' },
  { time: '12:30 PM', label: 'MKV Live Class', note: 'Secret topic revealed' },
  { time: '01:30 PM', label: 'Contest Briefing', note: 'Rules + examples' },
  { time: '01:45 PM', label: 'Coding Contest', note: 'Timed round' },
  { time: '03:15 PM', label: 'Break', note: 'Snacks + recruiter booth' },
  { time: '03:45 PM', label: 'Mentor Office Hours', note: 'Feedback + guidance' },
  { time: '04:30 PM', label: 'Results & Pairing', note: 'Shortlist + matches' },
];

export default function HowItWorks() {
  return (
    <section id="how" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">The New-age Hiring Module</h2>
          <p className="mt-2 max-w-2xl text-white/70">
            Three immersive steps designed to showcase your skills and propel you into roles where you will thrive.
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-xs text-white/70">
            <span className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-3 py-1"><Shield size={14} className="text-emerald-300"/> Integrity-first</span>
            <span className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-3 py-1"><Users size={14} className="text-sky-300"/> Mentor guided</span>
            <span className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-3 py-1"><Clock size={14} className="text-violet-300"/> Time-boxed signals</span>
          </div>
        </div>
        <a href="#cta" className="inline-flex items-center gap-2 rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-200 hover:bg-emerald-400/15">
          Get Early Bird
        </a>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map(({ id, title, subtitle, desc, icon: Icon, accent, bullets }) => (
          <div key={id} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br ${accent}`} />
            <div className="relative z-10 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                <Icon className="text-white" size={22} />
              </div>
              <h3 className="mt-4 text-xl font-semibold">{title}</h3>
              <p className="text-sm text-white/60">{subtitle}</p>
              <p className="mt-3 text-white/80">{desc}</p>
              <ul className="mt-4 grid gap-2 text-sm text-white/75">
                {bullets.map((b, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/40" /> {b}
                  </li>
                ))}
              </ul>
              <div className="mt-6 h-36 w-full rounded-xl border border-white/10 bg-gradient-to-tr from-white/10 to-transparent" />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
        <div className="flex items-center justify-between border-b border-white/10 p-4">
          <h3 className="text-lg font-semibold">Event Agenda</h3>
          <div className="text-xs text-white/60 flex items-center gap-2"><Calendar size={14} className="text-white/50"/> 21 Sept • 12:00 PM onwards • <MapPin size={14} className="text-white/50"/> JNTUH, Hyderabad</div>
        </div>
        <div className="grid gap-0 p-4 sm:grid-cols-2 lg:grid-cols-3">
          {agenda.map((a, i) => (
            <div key={i} className="flex items-start gap-3 rounded-xl p-3 hover:bg-white/[0.04]">
              <div className="mt-1 rounded-md bg-white/10 px-2 py-1 text-xs tabular-nums">{a.time}</div>
              <div>
                <p className="text-sm font-medium text-white/90">{a.label}</p>
                <p className="text-xs text-white/60">{a.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
