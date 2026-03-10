"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { useState } from "react";

import { projectThemes, type Project } from "@/lib/projects";

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
  const theme = projectThemes[project.theme];
  const cardStyle = {
    animationDelay: `${160 + index * 90}ms`,
    "--project-accent": theme.accent,
    "--project-accent-soft": theme.accentSoft,
    "--project-accent-surface": theme.accentSurface,
    "--project-accent-strong": theme.accentStrong,
    "--project-accent-glow": theme.accentGlow,
    "--project-overlay-mid": theme.overlayMid,
    "--project-overlay-end": theme.overlayEnd,
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
          <div className="project-preview-shell relative overflow-hidden rounded-[1.5rem] bg-slate-950/70">
            <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between border-b border-white/10 bg-slate-950/[0.65] px-4 py-3 backdrop-blur-md">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-300/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-200/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/80" />
              </div>
              <span className="rounded-full border border-white/[0.14] bg-slate-950/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-100">
                Open live site
              </span>
            </div>

            <div className="relative aspect-[16/10] overflow-hidden">
              <div className="absolute left-4 top-[4.35rem] z-20 flex flex-wrap gap-2">
                <span className="project-chip rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em]">
                  {project.category}
                </span>
                <span className="rounded-full border border-white/10 bg-slate-950/65 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-200">
                  {project.identity}
                </span>
              </div>
              <Image
                src={imageSrc}
                alt={project.imageAlt}
                fill
                priority={index < 3}
                sizes="(min-width: 1280px) 30vw, (min-width: 768px) 50vw, 100vw"
                className="project-image object-cover object-top transition duration-700 ease-out group-hover:scale-[1.04] group-hover:-translate-y-1"
                style={{ objectPosition: project.previewPosition }}
                onError={() => {
                  if (!failedImageSources.includes(project.imageSrc)) {
                    setFailedImageSources((current) => [
                      ...current,
                      project.imageSrc,
                    ]);
                  }
                }}
              />
              <div className="project-preview-overlay absolute inset-0" />
              <div className="absolute inset-x-0 bottom-0 z-10 p-5">
                <p className="project-kicker text-[11px] font-semibold uppercase tracking-[0.28em]">
                  {project.highlight}
                </p>
                <div className="mt-3 flex items-end justify-between gap-4">
                  <div>
                    <h3 className="font-display text-[1.65rem] leading-none tracking-tight text-white sm:text-[1.75rem]">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-200/90">
                      {project.identity}
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

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <div className="rounded-[1.25rem] border border-white/10 bg-white/[0.03] p-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-500">
                Card lens
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-100">
                {project.identity}
              </p>
            </div>
            <div className="rounded-[1.25rem] border border-white/10 bg-white/[0.03] p-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-500">
                Best demonstrated by
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-100">
                {project.focus}
              </p>
            </div>
          </div>

          <div className="mt-auto flex items-center justify-between gap-4 border-t border-white/10 pt-5">
            <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
              Live build, responsive, production-ready
            </p>
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
