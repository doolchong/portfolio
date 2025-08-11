import { PropsWithChildren } from "react";

export default function Section({
  title,
  subtitle,
  children,
}: PropsWithChildren<{ title: string; subtitle?: string }>) {
  return (
    <section id={title.toLowerCase()} className="mt-10">
      <div className="mb-4">
        <h2 className="text-xl md:text-2xl font-bold">{title}</h2>
        {subtitle && <p className="text-zinc-400 mt-1">{subtitle}</p>}
      </div>
      {children}
    </section>
  );
}
