import React from 'react';
import { Building2, Play } from 'lucide-react';

const recruiterVideos = [
  { name: 'Priya Sharma', title: 'Senior Recruiter • FinTech Co.', company: 'PayWave', color: 'from-pink-500/20 to-purple-500/10' },
  { name: 'Arjun Mehta', title: 'Talent Lead • AI Startup', company: 'NeuroGrid', color: 'from-sky-500/20 to-cyan-500/10' },
  { name: 'Sara Thomas', title: 'HRBP • SaaS Unicorn', company: 'CloudNest', color: 'from-emerald-500/20 to-teal-500/10' },
  { name: 'Rahul Jain', title: 'Head of Hiring • Enterprise', company: 'InfinitiSoft', color: 'from-amber-500/20 to-orange-500/10' },
];

const companies = [
  'PayWave','NeuroGrid','CloudNest','InfinitiSoft','CodeCrate','ByteForge','QuantumLeap','DataHarbor','PixelPeak','AlgoNexus','Streamlite','AstraWorks','HelioStack','CosmoWare','NimbusAI'
];

export default function RecruitersAndCompanies() {
  return (
    <section id="recruiters" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Recruiters are speaking to you</h2>
          <p className="mt-2 max-w-2xl text-white/70">Hear short, candid messages from hiring teams welcoming AU Hiring Tournament participants.</p>
        </div>
        <div className="flex items-center gap-2 text-white/70">
          <Building2 size={18} className="text-white/60" />
          <span>15+ companies scouting talent</span>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {recruiterVideos.map((v, idx) => (
          <div key={idx} className={`relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-4`}>
            <div className={`relative flex h-40 w-full items-center justify-center rounded-xl border border-white/10 bg-gradient-to-tr ${v.color}`}>
              <button className="group inline-flex items-center gap-2 rounded-full bg-white text-black px-3 py-1.5 text-sm font-semibold shadow">
                <Play size={16} /> Play message
              </button>
            </div>
            <div className="mt-4">
              <p className="text-sm text-white/90 font-medium">{v.name}</p>
              <p className="text-xs text-white/60">{v.title}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-xl font-semibold">Participating Companies</h3>
          <p className="text-sm text-white/60">Curated to match performance with opportunity</p>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
          {companies.map((c, i) => (
            <div key={i} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10 text-sm font-semibold">
                {c.slice(0,2).toUpperCase()}
              </div>
              <span className="text-white/80 text-sm">{c}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
