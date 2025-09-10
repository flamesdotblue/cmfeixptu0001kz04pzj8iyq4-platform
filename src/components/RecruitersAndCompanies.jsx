import React, { useEffect, useMemo, useState } from 'react';
import { Building2, ChevronLeft, ChevronRight, Play } from 'lucide-react';

const recruiterVideos = [
  { name: 'Priya Sharma', title: 'Senior Recruiter', company: 'PayWave', color: 'from-pink-500/20 to-purple-500/10' },
  { name: 'Arjun Mehta', title: 'Talent Lead', company: 'NeuroGrid', color: 'from-sky-500/20 to-cyan-500/10' },
  { name: 'Sara Thomas', title: 'HRBP', company: 'CloudNest', color: 'from-emerald-500/20 to-teal-500/10' },
  { name: 'Rahul Jain', title: 'Head of Hiring', company: 'InfinitiSoft', color: 'from-amber-500/20 to-orange-500/10' },
];

const companies = [
  'PayWave','NeuroGrid','CloudNest','InfinitiSoft','CodeCrate','ByteForge','QuantumLeap','DataHarbor','PixelPeak','AlgoNexus','Streamlite','AstraWorks','HelioStack','CosmoWare','NimbusAI'
];

function useAutoAdvance(length, delay = 6000) {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((i) => (i + 1) % length);
  const prev = () => setIndex((i) => (i - 1 + length) % length);

  useEffect(() => {
    const id = setInterval(next, delay);
    return () => clearInterval(id);
  }, [length, delay]);

  return { index, setIndex, next, prev };
}

export default function RecruitersAndCompanies() {
  const { index, setIndex, next, prev } = useAutoAdvance(recruiterVideos.length, 6000);
  const current = useMemo(() => recruiterVideos[index], [index]);

  return (
    <section id="recruiters" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Recruiters are speaking to you</h2>
          <p className="mt-2 max-w-2xl text-white/70">Watch quick vouch videos from hiring teams. Browse and switch between messages, then explore participating companies.</p>
        </div>
        <div className="flex items-center gap-2 text-white/70">
          <Building2 size={18} className="text-white/60" />
          <span>15+ companies scouting talent</span>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-5">
        {/* Carousel */}
        <div className="lg:col-span-3">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
            <div className={`relative h-64 w-full bg-gradient-to-tr ${current.color} md:h-80`}>
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="group inline-flex items-center gap-2 rounded-full bg-white text-black px-4 py-2 text-sm font-semibold shadow">
                  <Play size={16} /> Play message
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between p-4">
              <div className="min-w-0">
                <p className="truncate text-base font-semibold text-white/90">{current.name}</p>
                <p className="truncate text-sm text-white/60">{current.title} • {current.company}</p>
              </div>
              <div className="flex items-center gap-2">
                <button aria-label="Previous" onClick={prev} className="rounded-full border border-white/15 bg-white/5 p-2 hover:bg-white/10">
                  <ChevronLeft size={18} />
                </button>
                <button aria-label="Next" onClick={next} className="rounded-full border border-white/15 bg-white/5 p-2 hover:bg-white/10">
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

            <div className="border-t border-white/10 p-3">
              <div className="flex snap-x items-center gap-2 overflow-x-auto pb-1">
                {recruiterVideos.map((v, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`snap-start whitespace-nowrap rounded-xl border px-3 py-2 text-xs transition ${i === index ? 'border-emerald-400/60 bg-emerald-400/10 text-emerald-200' : 'border-white/10 bg-white/[0.02] text-white/70 hover:bg-white/10'}`}
                    aria-current={i === index}
                  >
                    <span className="font-medium">{v.name}</span>
                    <span className="text-white/50"> • {v.company}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Companies */}
        <div className="lg:col-span-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 h-full">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-semibold">Participating Companies</h3>
              <p className="text-sm text-white/60">Curated for performance-fit roles</p>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {companies.map((c, i) => (
                <div key={i} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10 text-sm font-semibold">
                    {c.slice(0,2).toUpperCase()}
                  </div>
                  <span className="text-white/80 text-sm truncate">{c}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
