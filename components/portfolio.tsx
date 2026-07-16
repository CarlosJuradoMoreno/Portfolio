"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, Braces, Cloud, Code2, Database, Download, Github, Linkedin, Mail, Menu, Network, Sparkles, Terminal, Workflow, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { translate, type Language } from "@/lib/i18n";

const stats = [["8+", "Years experience"], ["20+", "Microservices maintained"], ["20M+", "Database records processed per run"], ["12k+", "PDFs generated / run"], ["2k+", "Internal users"], ["Weekly", "Production releases"]];
const skills = [
  { title: "Backend", icon: Database, items: ["Java", "Spring Boot", "Spring", "Hibernate", "JPA", "REST APIs", "Kafka", "PostgreSQL", "DB2"] },
  { title: "Frontend", icon: Code2, items: ["Angular", "TypeScript", "React", "Next.js", "HTML", "CSS", "Tailwind"] },
  { title: "Cloud & DevOps", icon: Cloud, items: ["Docker", "Kubernetes", "GitLab CI", "Jenkins", "Helm", "Google Cloud", "Grafana"] },
  { title: "Development", icon: Terminal, items: ["Git", "IntelliJ", "Postman", "JUnit", "Mockito", "SonarQube", "GitHub Copilot", "AI-assisted Development"] },
];
const projects = [
  { n: "01", title: "Enterprise Billing Platform", type: "Enterprise systems", desc: "A resilient billing ecosystem designed for high-volume processing, reliable integrations, and weekly production delivery.", tech: ["Java 8 -> Java 21", "Spring Boot", "Wicket", "Angular", "TypeScript", "JPA", "Hibernate", "DB2", "PostgreSQL", "Ansible", "Kubernetes", "CI/CD", "Nexus", "Artifactory"], tone: "from-cyan-400/20 via-slate-400/5 to-transparent" },
];
const values = [
  ["Clean code", "I optimize for clarity first—software should explain itself to the next engineer."],
  ["Scalable architecture", "Pragmatic boundaries, observable systems, and deliberate trade-offs over fashionable complexity."],
  ["Team collaboration", "The best systems emerge from shared context, candid feedback, and collective ownership."],
  ["Mentoring", "I help engineers grow through thoughtful reviews, pairing, and space to make decisions."],
  ["Continuous learning", "Curiosity is part of the job. I keep tools current without chasing every trend."],
  ["AI-assisted development", "I use AI as a precise multiplier for exploration, quality, and delivery—not a substitute for judgment."],
];

const Fade = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => <motion.div className={className} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: .65, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;

function SectionHead({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) { return <Fade className="mb-12 md:mb-16"><div className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[.2em] text-accent"><span className="h-px w-8 bg-accent/60" />{eyebrow}</div><div className="grid gap-5 md:grid-cols-[1fr_.7fr] md:items-end"><h2 className="font-display text-4xl font-semibold tracking-[-.04em] sm:text-5xl md:text-6xl">{title}</h2>{copy && <p className="max-w-xl text-base leading-7 text-muted md:justify-self-end">{copy}</p>}</div></Fade>; }

function Nav({ language, onLanguageChange }: { language: Language; onLanguageChange: (language: Language) => void }) {
  const [open, setOpen] = useState(false);
  const links = [["About", "#about"], ["Work", "#work"], ["Experience", "#experience"], ["Contact", "#contact"]];
  const selector = <div className="flex items-center rounded-full border border-white/10 bg-white/[.035] p-1" aria-label="Language selector">{(["en", "de", "es"] as Language[]).map(item => <button key={item} onClick={() => onLanguageChange(item)} aria-pressed={language === item} className={`rounded-full px-2 py-1 text-[10px] font-semibold uppercase tracking-wider transition ${language === item ? "bg-white text-black" : "text-white/45 hover:text-white"}`}>{item}</button>)}</div>;
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[.06] bg-ink/75 backdrop-blur-xl"><nav className="container-shell flex h-16 items-center justify-between" aria-label="Main navigation"><a href="#top" className="font-display text-sm font-bold tracking-tight"><span className="text-accent">C</span>J<span className="text-white/30">.</span></a><div className="hidden items-center gap-6 md:flex">{links.map(([l, h]) => <a key={l} href={h} className="text-sm text-muted transition hover:text-white">{l}</a>)}{selector}<Button asChild size="default"><a href="mailto:carlos@example.com">Let&apos;s talk <ArrowUpRight className="size-4" /></a></Button></div><div className="flex items-center gap-2 md:hidden">{selector}<button className="rounded-lg p-2 text-muted" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X /> : <Menu />}</button></div></nav>{open && <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="border-t border-white/10 bg-ink p-5 md:hidden">{links.map(([l, h]) => <a key={l} href={h} onClick={() => setOpen(false)} className="block border-b border-white/[.06] py-4 text-muted">{l}</a>)}</motion.div>}</header>;
}

export default function Portfolio() {
  const [language, setLanguage] = useState<Language>("en");
  const pageRef = useRef<HTMLElement>(null);
  const originals = useRef(new WeakMap<Text, string>());
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, .2], [0, 90]);

  useEffect(() => {
    const stored = window.localStorage.getItem("portfolio-language") as Language | null;
    if (stored && ["en", "de", "es"].includes(stored)) setLanguage(stored);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("portfolio-language", language);
    document.documentElement.lang = language;
    const root = pageRef.current;
    if (!root) return;
    const applyTranslations = (scope: Node) => {
      const walker = document.createTreeWalker(scope, NodeFilter.SHOW_TEXT);
      let node: Node | null;
      while ((node = walker.nextNode())) {
        const textNode = node as Text;
        const current = textNode.nodeValue ?? "";
        if (!current.trim()) continue;
        if (!originals.current.has(textNode)) originals.current.set(textNode, current);
        const original = originals.current.get(textNode) ?? current;
        const value = original.trim();
        const translated = translate(value, language);
        textNode.nodeValue = original.replace(value, translated);
      }
    };
    applyTranslations(root);
    const observer = new MutationObserver(records => records.forEach(record => record.addedNodes.forEach(applyTranslations)));
    observer.observe(root, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [language]);

  return <main ref={pageRef} id="top" className="overflow-hidden">
    <div className="noise pointer-events-none fixed inset-0 z-[60]"/><Nav language={language} onLanguageChange={setLanguage} />
    <section className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <div className="grid-bg absolute inset-0"/><motion.div className="absolute -left-24 top-32 size-[450px] rounded-full bg-accent/[.07] blur-[120px]" animate={{ x: [0, 40, 0], y: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 12 }}/>
      <div className="container-shell relative grid items-center gap-12 pb-16 lg:grid-cols-[1.08fr_.92fr] lg:pb-0">
        <Fade><div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.035] px-3 py-1.5 text-xs text-muted"><span className="relative flex size-2"><span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60"/><span className="relative size-2 rounded-full bg-emerald-400"/></span>Open to meaningful opportunities</div><p className="mb-4 text-sm font-medium tracking-wide text-accent">SENIOR SOFTWARE ENGINEER</p><h1 className="text-gradient font-display text-[clamp(3.6rem,8vw,7.4rem)] font-semibold leading-[.88] tracking-[-.065em]">Carlos<br/>Jurado</h1><p className="mt-7 max-w-xl text-lg leading-8 text-muted sm:text-xl">Building scalable backend systems with Java, Spring Boot, and cloud technologies.</p><div className="mt-9 flex flex-wrap gap-3"><Button asChild size="lg"><a href="#work">View projects <ArrowDown className="size-4"/></a></Button><Button asChild variant="secondary" size="lg"><a href="/carlos-jurado-cv.pdf" download>Download CV <Download className="size-4"/></a></Button><Button asChild variant="ghost" size="lg"><a href="#contact">Contact <ArrowUpRight className="size-4"/></a></Button></div></Fade>
        <motion.div style={{ y: heroY }} initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: .25 }} className="relative mx-auto w-full max-w-[520px]"><div className="absolute inset-12 rounded-full bg-accent/10 blur-[90px]"/><div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[.02] p-2 shadow-glow"><Image src="/hero-system.png" alt="Abstract cloud software system sculpture" width={1144} height={1430} priority className="aspect-[4/5] w-full rounded-[25px] object-cover"/><div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-2xl border border-white/10 bg-black/55 p-4 backdrop-blur-md"><div><p className="text-xs text-muted">Currently engineering</p><p className="mt-1 text-sm font-medium">Systems that scale</p></div><Network className="size-5 text-accent"/></div></div></motion.div>
      </div><a href="#about" aria-label="Scroll to about" className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-white/30 lg:block"><ArrowDown className="size-4 animate-bounce"/></a>
    </section>

    <section id="about" className="border-t border-white/[.06] py-24 md:py-36"><div className="container-shell"><SectionHead eyebrow="About" title="Engineering with context."/><Fade><p className="max-w-4xl font-display text-2xl font-medium leading-[1.45] tracking-[-.025em] text-white/90 md:text-4xl">I&apos;m a Senior Software Engineer with more than 8 years of experience building enterprise software, modernizing legacy systems, and designing scalable backend architectures. <span className="text-white/40">I enjoy solving complex technical problems and creating products with real business impact.</span></p></Fade><div className="mt-16 grid grid-cols-2 gap-3 lg:grid-cols-3 xl:grid-cols-6">{stats.map(([n,l],i)=><Fade key={l} delay={i*.06}><div className="card card-hover h-full p-5 md:p-6"><p className="font-display text-3xl font-semibold tracking-tight text-white">{n}</p><p className="mt-3 text-xs leading-5 text-muted">{l}</p></div></Fade>)}</div></div></section>

    <section className="border-y border-white/[.06] bg-white/[.015] py-24 md:py-36"><div className="container-shell"><SectionHead eyebrow="Technical toolkit" title="Depth where it matters." copy="A mature toolkit spanning application code, infrastructure, delivery, and the product surface."/><div className="grid gap-4 md:grid-cols-2">{skills.map((s,i)=><Fade key={s.title} delay={i*.06}><div className="card card-hover p-6 md:p-8"><div className="mb-7 flex items-center gap-3"><div className="grid size-10 place-items-center rounded-xl border border-accent/20 bg-accent/[.07]"><s.icon className="size-5 text-accent"/></div><h3 className="font-display text-xl font-semibold">{s.title}</h3></div><div className="flex flex-wrap gap-2">{s.items.map(x=><span key={x} className="rounded-full border border-white/[.08] bg-black/20 px-3 py-1.5 text-xs text-muted transition hover:border-accent/30 hover:text-accent">{x}</span>)}</div></div></Fade>)}</div></div></section>

    <section id="experience" className="py-24 md:py-36"><div className="container-shell"><SectionHead eyebrow="Experience" title="Built in production." copy="Long-term ownership of business-critical platforms—from architectural decisions to the incidents that sharpen them."/><Fade><div className="grid gap-8 border-l border-white/10 pl-7 md:grid-cols-[.35fr_1fr] md:gap-16 md:pl-12"><div className="relative"><span className="absolute -left-[33px] top-1 size-3 rounded-full border-2 border-ink bg-accent shadow-[0_0_0_4px_rgba(110,231,255,.15)] md:-left-[55px]"/><p className="font-display text-2xl font-semibold">REWE digital</p><p className="mt-2 text-sm text-muted">2017 — Present</p><span className="mt-5 inline-flex rounded-full border border-white/10 px-3 py-1 text-xs text-accent">Senior Software Engineer</span></div><div><h3 className="font-display text-3xl font-semibold tracking-tight">Enterprise platforms,<br/>modern foundations.</h3><p className="mt-5 max-w-2xl leading-7 text-muted">Designing and evolving billing systems that support thousands of internal users—while steadily modernizing Java, delivery infrastructure, and service architecture.</p><div className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2">{["Enterprise billing platform", "Java 8 → 21 migrations", "20+ microservices", "Kubernetes deployments", "Architecture design", "Weekly production releases", "Mentoring engineers", "Incident resolution", "SQL optimization", "Legacy modernization"].map(x=><div key={x} className="flex items-center gap-3 text-sm text-white/75"><span className="size-1 rounded-full bg-accent"/>{x}</div>)}</div></div></div></Fade></div></section>

    <section id="work" className="border-y border-white/[.06] bg-white/[.015] py-24 md:py-36"><div className="container-shell"><SectionHead eyebrow="Selected work" title="Complexity, made useful." copy="Selected product and engineering work. Enterprise examples intentionally omit confidential implementation details."/><div className="grid gap-4 md:grid-cols-2">{projects.map((p,i)=><Fade key={p.title} delay={(i%2)*.06} className={i===0?"md:col-span-2":""}><article className={`card card-hover group overflow-hidden ${i===0?"md:grid md:grid-cols-2":""}`}><div className={`relative min-h-64 overflow-hidden bg-gradient-to-br ${p.tone}`}><div className="absolute inset-0 grid-bg opacity-50"/><span className="absolute left-6 top-6 font-mono text-xs text-white/30">{p.n} / 01</span><div className="absolute inset-0 grid place-items-center"><div className="relative h-28 w-44 rounded-xl border border-white/15 bg-black/40 p-4 shadow-2xl backdrop-blur-sm transition duration-500 group-hover:-translate-y-2 group-hover:rotate-[-2deg]"><div className="flex gap-1"><i className="size-1.5 rounded-full bg-accent"/><i className="size-1.5 rounded-full bg-white/20"/><i className="size-1.5 rounded-full bg-white/20"/></div><div className="mt-5 space-y-2"><i className="block h-1.5 w-3/4 rounded bg-accent/50"/><i className="block h-1.5 w-full rounded bg-white/10"/><i className="block h-1.5 w-2/3 rounded bg-white/10"/></div></div></div></div><div className="p-6 md:p-8"><p className="mb-3 text-xs uppercase tracking-[.16em] text-accent">{p.type}</p><h3 className="font-display text-2xl font-semibold tracking-tight">{p.title}</h3><p className="mt-4 leading-7 text-muted">{p.desc}</p><div className="mt-6 flex flex-wrap gap-2">{p.tech.map(t=><span key={t} className="text-xs text-white/45">#{t.replace(" ","")}</span>)}</div></div></article></Fade>)}</div></div></section>

    <section className="py-24 md:py-36"><div className="container-shell"><SectionHead eyebrow="Open source" title="Code in the open." copy="Repository metadata is ready to connect to the GitHub API once your public username is configured."/><div className="grid gap-4">{[["portfolio", "Design-engineered personal portfolio", "TypeScript"]].map((r,i)=><Fade key={r[0]} delay={i*.06}><a href="https://github.com/CarlosJuradoMoreno" target="_blank" rel="noreferrer" className="card card-hover block p-6"><div className="flex items-start justify-between"><Github className="size-5 text-white/40"/><ArrowUpRight className="size-4 text-white/25"/></div><h3 className="mt-8 font-mono text-sm font-medium">{r[0]}</h3><p className="mt-2 text-sm text-muted">{r[1]}</p><div className="mt-6 flex items-center justify-between text-xs text-white/40"><span className="flex items-center gap-2"><i className={`size-2 rounded-full ${i===2?"bg-amber-300":"bg-blue-400"}`}/>{r[2]}</span><span>Updated recently</span></div></a></Fade>)}</div></div></section>

    <section className="border-y border-white/[.06] bg-white/[.015] py-24 md:py-36"><div className="container-shell"><SectionHead eyebrow="How I work" title="Principles over process."/><div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">{values.map(([t,d],i)=><Fade key={t} delay={(i%3)*.04} className="bg-ink"><div className="group h-full p-7 md:p-8"><span className="font-mono text-xs text-accent/50">0{i+1}</span><h3 className="mt-10 font-display text-xl font-semibold">{t}</h3><p className="mt-3 text-sm leading-6 text-muted">{d}</p></div></Fade>)}</div></div></section>

    <section className="border-y border-white/[.06] bg-white/[.015] py-24 md:py-36"><div className="container-shell"><SectionHead eyebrow="AI playground" title="Exploring the new layer." copy="Practical experiments at the intersection of software craft and modern AI capabilities."/><div className="grid gap-4 md:grid-cols-2"><Fade><div className="card card-hover relative min-h-72 overflow-hidden p-8"><Sparkles className="size-6 text-accent"/><h3 className="mt-20 font-display text-3xl font-semibold">Developer tools</h3><p className="mt-3 max-w-md text-sm leading-6 text-muted">Context-aware helpers for repetitive engineering workflows, code exploration, and faster feedback loops.</p><Braces className="absolute -bottom-6 -right-5 size-40 text-accent/[.045]"/></div></Fade><Fade delay={.06}><div className="grid h-full gap-4 sm:grid-cols-2">{[["Automation",Workflow],["Prompt systems",Terminal],["LLM integrations",Network],["Code generation",Code2]].map(([t,I])=>{const Icon=I as typeof Code2;return <div key={t as string} className="card card-hover p-6"><Icon className="size-5 text-accent"/><p className="mt-10 font-display font-semibold">{t as string}</p><p className="mt-2 text-xs leading-5 text-muted">Prototypes designed around real workflows.</p></div>})}</div></Fade></div></div></section>

    <section id="contact" className="relative py-28 md:py-44"><div className="absolute left-1/2 top-1/2 size-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[.05] blur-[120px]"/><Fade className="container-shell relative text-center"><p className="mb-6 text-xs font-semibold uppercase tracking-[.2em] text-accent">Have a challenge in mind?</p><h2 className="mx-auto max-w-4xl font-display text-5xl font-semibold leading-[1.05] tracking-[-.05em] sm:text-6xl md:text-8xl">Let&apos;s build something together.</h2><p className="mx-auto mt-7 max-w-xl leading-7 text-muted">I&apos;m always open to conversations about thoughtful products, ambitious systems, and strong engineering teams.</p><div className="mt-10 flex flex-wrap justify-center gap-3"><Button asChild size="lg"><a href="mailto:carlos@example.com"><Mail className="size-4"/> Email me</a></Button><Button asChild variant="secondary" size="lg"><a href="https://www.linkedin.com/in/carlos-jurado-moreno-1471b110a" target="_blank" rel="noreferrer"><Linkedin className="size-4"/> LinkedIn</a></Button><Button asChild variant="secondary" size="lg"><a href="https://github.com/CarlosJuradoMoreno" target="_blank" rel="noreferrer"><Github className="size-4"/> GitHub</a></Button></div></Fade></section>
    <footer className="border-t border-white/[.06] py-8"><div className="container-shell flex flex-col gap-3 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} Carlos Jurado</p><p>Built with Next.js, Tailwind CSS & Framer Motion.</p></div></footer>
  </main>;
}
