import type { Project } from "@/lib/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const hostname = new URL(project.liveUrl).hostname.replace(/^www\./, "");

  return (
    <article className="flex h-full flex-col rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(2,8,23,0.25)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-300/45 hover:bg-white/[0.07]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-200/85">
            {project.category}
          </p>
          <h3 className="mt-3 font-display text-2xl tracking-tight text-white">
            {project.title}
          </h3>
        </div>
        <span className="rounded-full border border-white/10 bg-slate-950/50 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-slate-300">
          Live
        </span>
      </div>
      <p className="mt-4 text-sm leading-7 text-slate-300">{project.description}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.techStack.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
          >
            {item}
          </span>
        ))}
      </div>
      <div className="mt-8 flex items-center justify-between gap-4 border-t border-white/10 pt-5">
        <span className="text-xs text-slate-400">{hostname}</span>
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center rounded-full bg-emerald-300 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-emerald-200"
        >
          View live site
        </a>
      </div>
    </article>
  );
}
