"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { useState } from "react";

import type { Project } from "@/lib/projects";

type ProjectCardProps = {
  project: Project;
  index: number;
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

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [failedImageSources, setFailedImageSources] = useState<string[]>([]);
  const imageSrc = failedImageSources.includes(project.imageSrc)
    ? fallbackPreviewSrc
    : project.imageSrc;
  const cardStyle = {
    animationDelay: `${160 + index * 90}ms`,
  } as CSSProperties;

  return (
    <a
      href={project.liveUrl}
      target="_blank"
      rel="noreferrer"
      className="reveal-up group block h-full focus-visible:outline-none"
      style={cardStyle}
    >
      <article className="glass-card project-card flex h-full flex-col overflow-hidden rounded-[1.9rem]">
        <div className="p-3">
          <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/70 shadow-[0_24px_60px_-40px_rgba(15,23,42,0.92)]">
            <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between border-b border-white/10 bg-slate-950/[0.65] px-4 py-3 backdrop-blur-md">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-300/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-200/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/80" />
              </div>
              <span className="rounded-full border border-white/[0.12] bg-white/[0.06] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-100">
                Open live site
              </span>
            </div>

            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={imageSrc}
                alt={project.imageAlt}
                fill
                priority={index < 3}
                sizes="(min-width: 1280px) 30vw, (min-width: 768px) 50vw, 100vw"
                className="project-image object-cover object-top transition duration-700 ease-out group-hover:scale-[1.04] group-hover:-translate-y-1"
                onError={() => {
                  if (!failedImageSources.includes(project.imageSrc)) {
                    setFailedImageSources((current) => [
                      ...current,
                      project.imageSrc,
                    ]);
                  }
                }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.08),rgba(2,6,23,0)_34%,rgba(2,6,23,0.2)_56%,rgba(2,6,23,0.92)_100%)]" />
              <div className="absolute inset-x-0 bottom-0 z-10 p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-emerald-100/90">
                  {project.highlight}
                </p>
                <div className="mt-3 flex items-end justify-between gap-4">
                  <div>
                    <h3 className="font-display text-[1.75rem] leading-none tracking-tight text-white">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-xs uppercase tracking-[0.28em] text-slate-300">
                      {project.category}
                    </p>
                  </div>
                  <span className="font-display text-4xl leading-none text-white/[0.38]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col px-6 pb-6">
          <p className="text-sm leading-7 text-slate-300">
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

          <div className="mt-auto flex items-end justify-between gap-4 border-t border-white/10 pt-5">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">
                Best demonstrated by
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-100">
                {project.focus}
              </p>
            </div>
            <span className="project-link inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/[0.08] px-4 py-2 text-sm font-semibold text-emerald-100">
              Visit site
              <span
                aria-hidden="true"
                className="transition duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5"
              >
                ↗
              </span>
            </span>
          </div>
        </div>
      </article>
    </a>
  );
}
