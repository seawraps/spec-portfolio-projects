"use client";

import Image from "next/image";
import { useState } from "react";

import type { Project } from "@/lib/projects";

type ProjectCardProps = {
  project: Project;
};

const fallbackPreviewSrc = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 720" role="img" aria-label="Project preview unavailable">
  <rect width="1280" height="720" fill="#020617" />
  <rect x="56" y="56" width="1168" height="608" rx="36" fill="#0f172a" stroke="#1e293b" stroke-width="4" />
  <rect x="96" y="96" width="1088" height="44" rx="22" fill="#172033" />
  <circle cx="132" cy="118" r="9" fill="#f87171" />
  <circle cx="162" cy="118" r="9" fill="#fbbf24" />
  <circle cx="192" cy="118" r="9" fill="#4ade80" />
  <rect x="96" y="184" width="1088" height="336" rx="28" fill="#111827" />
  <path d="M354 438l142-170 108 118 90-90 232 142H354z" fill="#1f2937" />
  <circle cx="466" cy="286" r="42" fill="#34d399" fill-opacity="0.6" />
  <text x="640" y="586" fill="#f8fafc" font-family="Verdana, Arial, sans-serif" font-size="42" font-weight="700" text-anchor="middle">Preview unavailable</text>
  <text x="640" y="632" fill="#94a3b8" font-family="Verdana, Arial, sans-serif" font-size="24" text-anchor="middle">Using fallback artwork because the project image is missing.</text>
</svg>
`)}`;

export function ProjectCard({ project }: ProjectCardProps) {
  const [failedImageSources, setFailedImageSources] = useState<string[]>([]);
  const imageSrc = failedImageSources.includes(project.imageSrc)
    ? fallbackPreviewSrc
    : project.imageSrc;

  return (
    <article className="glass-card group flex h-full flex-col overflow-hidden rounded-[1.75rem] hover:-translate-y-1 hover:border-emerald-300/45 hover:shadow-[0_28px_56px_-32px_rgba(2,8,23,0.72)]">
      <div className="relative aspect-video overflow-hidden border-b border-white/10 bg-slate-950/40">
        <Image
          src={imageSrc}
          alt={project.imageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition duration-200 group-hover:scale-[1.02]"
          onError={() => {
            if (!failedImageSources.includes(project.imageSrc)) {
              setFailedImageSources((current) => [...current, project.imageSrc]);
            }
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(2,6,23,0.78),rgba(2,6,23,0.12),transparent)]" />
        <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-slate-950/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-emerald-100">
          {project.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-2xl tracking-tight text-white">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-7 text-slate-300">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.techStack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
            >
              {item}
            </span>
          ))}
        </div>

        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          className="cta-primary mt-6 w-full"
        >
          View live site
        </a>
      </div>
    </article>
  );
}
