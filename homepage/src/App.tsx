"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, animate, useInView } from "framer-motion";
import { FaReact, FaNodeJs, FaAws, FaDocker } from "react-icons/fa";
import {
  SiSpringboot,
  SiTypescript,
  SiNextdotjs,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiPrisma,
  SiTailwindcss,
  SiVercel,
  SiGraphql,
  SiLangchain,
  SiCloudflare
} from "react-icons/si";
import type { JSX } from "react/jsx-runtime";

const Home: React.FC = () => {
  const whatsapp: string =
    "https://wa.me/918374606752?text=Hi%20Praneeth%2C%20I%20need%20a%20project";

  const techStack: { name: string; icon?: JSX.Element }[] = [
    { name: "Java" },
    { name: "Spring Boot", icon: <SiSpringboot /> },
    { name: "React", icon: <FaReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express" },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Postgres", icon: <SiPostgresql /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "Prisma", icon: <SiPrisma /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: "Vercel", icon: <SiVercel /> },
    { name: "Docker", icon: <FaDocker /> },
    { name: "GraphQL", icon: <SiGraphql /> },
    { name: "LangChain", icon: <SiLangchain /> },
    { name: "AWS", icon: <FaAws /> },
    { name: "Cloudflare", icon: <SiCloudflare /> }
  ];

  const services = [
    {
      title: "Second / backup project",
      desc: "An additional, smaller project so your profile shows more than one serious repo.",
      note: "Good when you are applying to multiple roles or companies."
    },
    {
      title: "Mini full‑stack build",
      desc: "Compact app with CRUD + auth + UI—useful as a mini‑project or internship highlight.",
      note: "We keep the scope small but real so you can recall it easily."
    },
    {
      title: "Documentation bundle",
      desc: "SRS, UML/ER, and report draft aligned with your college format.",
      note: "Shared as editable files so you can adjust with your guide."
    },
    {
      title: "Slides + viva prep",
      desc: "Clean slide deck and a set of expected viva / panel questions.",
      note: "Helps you talk about the project without memorising a script."
    },
    {
      title: "Profile & copy support",
      desc: "Short CV bullets, LinkedIn about/experience lines, and a project post.",
      note: "Focused on sounding like you, not like a template."
    },
    {
      title: "Custom requirements",
      desc: "Anything slightly different—migration of an existing project, refactor, extra features.",
      note: "We'll scope it quickly on WhatsApp before quoting."
    }
  ];

  // Business services cards data
  const businessServices = [
    {
      title: "Website Building",
      desc: "Clean, responsive business websites for small and mid‑range companies that want to look professional online.",
      bullets: [
        "Custom business‑oriented design & UX",
        "SEO‑ready structure and metadata", 
        "Contact forms + basic CMS (blog/news)",
        "Fast hosting (Vercel/Netlify)"
      ],
      icon: "🌐",
      gradient: "from-sky-500 to-cyan-500",
      borderColor: "border-sky-500/20",
      hoverBorder: "hover:border-sky-400/50",
      iconColor: "text-sky-400",
      dotColor: "bg-sky-400",
      shadowColor: "rgb(56 189 248 / 0.4)"
    },
    {
      title: "Web Application Building",
      desc: "End‑to‑end web apps for startups & SMEs: admin dashboards, booking systems, inventory management.",
      bullets: [
        "Full‑stack (React/Node or Next.js + DB)",
        "User authentication & role‑based access",
        "Database design + secure APIs",
        "Production deployment + docs"
      ],
      icon: "⚡",
      gradient: "from-emerald-500 to-sky-500",
      borderColor: "border-emerald-500/20",
      hoverBorder: "hover:border-emerald-400/50",
      iconColor: "text-emerald-400",
      dotColor: "bg-emerald-400",
      shadowColor: "rgb(16 185 129 / 0.4)"
    }
  ];

  // Rolling stat number
  const StatNumber: React.FC<{ value: number }> = ({ value }) => {
    const ref = useRef<HTMLSpanElement | null>(null);
    const isInView = useInView(ref, { amount: 0.5 });
    const [current, setCurrent] = useState(0);

    useEffect(() => {
      if (isInView) {
        const controls = animate(0, value, {
         duration: 1.4,
         onUpdate(latest) {
           setCurrent(Math.floor(latest));
         }
        });
        return () => controls.stop();
      } else {
        setCurrent(0);
      }
    }, [isInView, value]);

    return <span ref={ref}>{current}+</span>;
  };

  return (
    <main className="min-h-screen bg-neutral-900 text-neutral-100 antialiased">
      <div className="mx-auto max-w-6xl px-6 py-16">
        {/* HERO */}
        <header className="grid gap-8 md:grid-cols-[2fr,1.4fr] md:items-center">
         <div>
           <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
             GitHub & LinkedIn project studio
           </p>
           <h1 className="mt-3 text-3xl font-semibold leading-snug sm:text-4xl md:text-[2.6rem]">
             Get <span className="text-sky-400">portfolio‑ready projects</span>{" "}
             before placements hit.
           </h1>
           <p className="mt-4 max-w-xl text-sm text-neutral-300">
             For 3rd and 4th year BTech students who never had time to ship
             good repos: we help you land{" "}
             <strong>realistic full‑stack projects</strong> with clean code,
             live demos, and profiles that do not look empty in interviews.
           </p>

           <div className="mt-6 flex flex-wrap items-center gap-3">
             <motion.a
               whileHover={{
                 y: -2,
                 boxShadow: "0 8px 25px rgba(99,102,241,0.35)"
               }}
               href={whatsapp}
               target="_blank"
               rel="noreferrer"
               className="inline-flex items-center gap-2 rounded-md bg-sky-500 px-4 py-2.5 text-sm font-medium text-black shadow-sm transition-colors duration-150 hover:bg-sky-400"
             >
               Share your current profile
             </motion.a>
             <motion.a
               whileHover={{
                 y: -2,
                 boxShadow: "0 8px 25px rgba(99,102,241,0.35)"
               }}
               href="#packages"
               className="inline-flex items-center gap-2 rounded-md border border-neutral-600 px-4 py-2.5 text-sm text-neutral-200 transition-colors duration-150 hover:border-indigo-400"
             >
               View services
             </motion.a>
             <span className="ml-2 text-xs text-neutral-500">
               First chat & quote: free, no obligation
             </span>
           </div>

           {/* ATS-FRIENDLY RESUME HIGHLIGHT CARD */}
           <motion.div
             initial={{ opacity: 0, y: 8 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.3 }}
             className="mt-5 max-w-xl rounded-xl border border-emerald-500/70 bg-emerald-900/25 p-4 text-xs text-emerald-50 shadow-lg shadow-emerald-500/20"
           >
             <div className="mb-2 flex items-center justify-between gap-3">
               <motion.div
                 animate={{
                   boxShadow: [
                     "0 0 0px rgba(16,185,129,0)",
                     "0 0 20px rgba(16,185,129,0.8)",
                     "0 0 0px rgba(16,185,129,0)"
                   ]
                 }}
                 transition={{
                   duration: 2.2,
                   repeat: Infinity,
                   ease: "easeInOut"
                 }}
                 className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-950"
               >
                 <span>📄</span>
                 <span>ATS friendly resume</span>
               </motion.div>
               <span className="text-[10px] font-medium text-emerald-200/90">
                 New for placements 2026
               </span>
             </div>

             <p className="text-[11px] font-semibold text-emerald-100">
               Make sure your resume actually passes ATS filters before a human
               recruiter sees it.
             </p>
             <p className="mt-1 text-[11px] leading-relaxed text-emerald-100/90">
               Clean, single‑column layout • role‑specific keywords • bullet
               points aligned with your projects so tracking systems can parse
               skills, tech stack, and impact correctly.
             </p>
           </motion.div>
         </div>

         {/* Right-side summary card */}
         <div className="hidden rounded-xl bg-neutral-800/70 p-4 text-sm shadow-sm md:block">
           <p className="font-medium text-neutral-100">
             Built for pre‑placement students:
           </p>
           <ul className="mt-3 space-y-1.5 text-neutral-300">
             <li>• 1–3 solid projects instead of random half‑done repos</li>
             <li>• Tech picked to match your target roles</li>
             <li>• Clean GitHub history and proper README</li>
             <li>• A LinkedIn post that does not feel fake</li>
             <li>• Optional docs to satisfy college rubrics</li>
           </ul>
         </div>
        </header>

        {/* PROBLEM / HIGHLIGHTS */}
        <section className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
         {[
           "Empty or messy GitHub",
           "No story on LinkedIn",
           "College paperwork still needed"
         ].map((title, i) => (
           <motion.div
             key={i}
             whileHover={{
               y: -2,
               boxShadow: "0 8px 25px rgba(99,102,241,0.35)"
             }}
             className="rounded-lg bg-neutral-800 p-4 shadow-sm transition-transform duration-150 hover:shadow-lg"
           >
             <div className="text-sm font-medium text-neutral-200">{title}</div>
             <div className="mt-1 text-xs text-neutral-400">
               {i === 0
                 ? "Most final‑year students have classroom code or cloned repos, not projects they can confidently walk through."
                 : i === 1
                 ? "Recruiters scan your profile in seconds—one good project with a clear summary helps a lot."
                 : "We add SRS, diagrams, and PPT on top so your guide and panel are also satisfied."}
             </div>
           </motion.div>
         ))}
        </section>

        {/* MAIN PACKAGE */}
        <section id="packages" className="mt-14">
         <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
           <div>
             <h2 className="text-xl font-semibold">
               Flagship: Portfolio + Project package
             </h2>
             <p className="mt-1 text-sm text-neutral-400">
               One solid full‑stack project, a clean GitHub repo, and a
               LinkedIn update that actually shows your work.
             </p>
           </div>
           <p className="text-xs text-neutral-500">
             Pricing is customised after a quick look at your profile & topic
           </p>
         </div>

         <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
           <motion.div
             whileHover={{
               y: -3,
               boxShadow: "0 12px 30px rgba(99,102,241,0.35)"
             }}
             className="md:col-span-2 rounded-2xl border border-neutral-800 bg-neutral-875 p-6 shadow-md transition-transform duration-150"
           >
             <h3 className="text-lg font-semibold">
               Portfolio‑ready project (core)
             </h3>
             <p className="mt-2 text-sm text-neutral-300">
               We design and build a project that fits your background and
               target role—something you can actually explain in interviews.
             </p>

             <div className="mt-4 grid gap-2 text-xs text-neutral-200 sm:grid-cols-2">
               <p>✔ Modern stack (React/Node/TS or Java/Spring + DB)</p>
               <p>✔ GitHub repo with clear commits & README</p>
               <p>✔ Deployed demo (Vercel / Render / similar)</p>
               <p>✔ Short walkthrough: features + trade‑offs</p>
               <p>✔ LinkedIn launch post + 1–2 CV bullets</p>
               <p>✔ Basic SRS + UML/ER for college use</p>
             </div>

             <div className="mt-6 flex flex-wrap items-center gap-3">
               <span className="text-xs text-neutral-500">
                 No fixed price shown here to keep it fair for different
                 college requirements.
               </span>
               <motion.a
                 whileHover={{
                   y: -1,
                   boxShadow: "0 8px 25px rgba(99,102,241,0.35)"
                 }}
                 href={whatsapp}
                 target="_blank"
                 rel="noreferrer"
                 className="ml-auto inline-flex items-center justify-center rounded-md bg-sky-500 px-4 py-2 text-sm font-medium text-black transition-colors duration-150 hover:bg-sky-400"
               >
                 Get a custom quote on WhatsApp
               </motion.a>
             </div>
           </motion.div>

           <motion.aside
             whileHover={{
               y: -2,
               boxShadow: "0 8px 25px rgba(99,102,241,0.35)"
             }}
             className="flex flex-col gap-3 rounded-2xl border border-neutral-800 bg-neutral-875 p-4 text-sm shadow-sm"
           >
             <div className="text-xs font-semibold text-neutral-300">
               How pricing works
             </div>
             <ul className="space-y-1 text-xs text-neutral-300">
               <li>• Share your idea, semester, and deadline.</li>
               <li>• We suggest 1–2 project options with effort estimate.</li>
               <li>• You get a clear quote before anything starts.</li>
               <li>• No charge if you decide not to go ahead.</li>
             </ul>
           </motion.aside>
         </div>
        </section>

        {/* SERVICES & ADD‑ONS */}
        <section className="mt-14">
         <h2 className="text-xl font-semibold">Services & add‑ons</h2>
         <p className="mt-1 text-sm text-neutral-400">
           Everything is built around one goal: a stronger GitHub + LinkedIn
           story before placements.
         </p>

         <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
           {services.map((card) => (
             <motion.article
               key={card.title}
               whileHover={{
                 y: -2,
                 boxShadow: "0 8px 25px rgba(99,102,241,0.35)"
               }}
               className="flex flex-col rounded-xl border border-neutral-800 bg-neutral-875 p-5 text-sm shadow-sm transition-transform duration-150"
             >
               <h4 className="font-medium text-neutral-100">{card.title}</h4>
               <p className="mt-2 text-xs text-neutral-300">{card.desc}</p>
               <p className="mt-1 text-[11px] text-neutral-500">{card.note}</p>
               <div className="mt-4 text-xs font-medium text-sky-300">
                 Tap WhatsApp, mention this service, and get a tailored quote.
               </div>
             </motion.article>
           ))}
         </div>
        </section>

        {/* BUSINESS SERVICES - NEW SECTION WITH TWO CARDS SIDE BY SIDE */}
        <section className="mt-14">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold bg-gradient-to-r from-sky-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent text-center mb-4"
          >
            🚀 Business Solutions
          </motion.h2>
          <p className="text-sm text-neutral-400 text-center max-w-2xl mx-auto mb-12">
            Professional websites and custom web applications for small businesses, startups, and SMEs. Get online fast with modern design and full-stack power.
          </p>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {businessServices.map((service, index) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02, 
                  boxShadow: `0 25px 50px -12px ${service.shadowColor}` 
                }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`group rounded-2xl border-2 ${service.borderColor} bg-gradient-to-br from-neutral-900/80 to-neutral-950/50 p-8 text-sm shadow-2xl backdrop-blur-sm ${service.hoverBorder}`}
              >
                <div className={`text-4xl ${service.iconColor} mb-4`}>{service.icon}</div>
                <h3 className={`text-2xl font-bold text-white mb-3 group-hover:${service.iconColor === 'text-sky-400' ? 'text-sky-400' : 'text-emerald-400'} transition-colors`}>
                  {service.title}
                </h3>
                <p className="text-neutral-300 mb-6">{service.desc}</p>
                <ul className="space-y-2 mb-6">
                  {service.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-neutral-200">
                      <div className={`w-2 h-2 ${service.dotColor} rounded-full`} />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center gap-2 rounded-lg bg-gradient-to-r ${service.gradient} px-6 py-3 text-sm font-semibold text-black shadow-lg hover:shadow-${service.iconColor === 'text-sky-400' ? 'sky-500/25' : 'emerald-500/25'} transition-all duration-300`}
                >
                  {service.iconColor === 'text-sky-400' ? 'Get Quote Now →' : 'Start Your App →'}
                </motion.a>
              </motion.article>
            ))}
          </div>
        </section>

        {/* TECH STACK */}
        <section className="mt-14">
         <h2 className="text-xl font-semibold">Stacks we usually work with</h2>
         <p className="mt-1 text-sm text-neutral-400">
           We can align with what your college prefers or what your target
           companies use.
         </p>

         <div className="mt-4 grid grid-cols-3 gap-3 text-xs sm:grid-cols-6">
           {techStack.map((t) => (
             <motion.div
               key={t.name}
               whileHover={{
                 y: -1,
                 boxShadow: "0 8px 25px rgba(99,102,241,0.3)"
               }}
               className="flex flex-col items-center justify-center gap-1 rounded-md border border-neutral-800 bg-neutral-875 px-3 py-2 text-center text-neutral-200 shadow-sm transition-all duration-150 hover:border-indigo-400"
             >
               <div className="text-xl">{t.icon || <div className="h-5 w-5 bg-neutral-700 rounded-sm" />}</div>
               <span className="text-xs">{t.name}</span>
             </motion.div>
           ))}
         </div>
        </section>

        {/* PROJECT DELIVERABLES / STATS */}
        <section className="mt-14">
         <h2 className="text-xl font-semibold">Our Deliverables</h2>
         <p className="mt-1 text-sm text-neutral-400">
           See the impact we've created for pre-placement students so far.
         </p>

         <div className="mt-6 flex overflow-x-auto gap-4 py-4 scrollbar-thin scrollbar-thumb-neutral-700 scrollbar-track-neutral-800">
           {[
             { label: "Projects Delivered", value: 120 },
             { label: "GitHub Repos Updated", value: 95 },
             { label: "LinkedIn Posts", value: 80 },
             { label: "SRS / UMLs Created", value: 110 },
             { label: "Mini Builds", value: 75 }
           ].map((stat, i) => (
             <motion.div
               key={i}
               whileHover={{
                 y: -3,
                 boxShadow: "0 12px 30px rgba(99,102,241,0.35)"
               }}
               className="flex min-w-[180px] flex-col items-center justify-center rounded-2xl border border-neutral-800 bg-neutral-875 p-5 text-center shadow-sm transition-transform duration-150"
             >
               <div className="text-3xl font-bold text-sky-400">
                 <StatNumber value={stat.value} />
               </div>
               <div className="mt-2 text-sm text-neutral-200">{stat.label}</div>
             </motion.div>
           ))}
         </div>
        </section>

        {/* CONTACT */}
        <section className="mt-14 rounded-xl border border-neutral-800 bg-neutral-875 p-6 shadow-sm">
         <h2 className="text-xl font-semibold">Tell me where you are stuck</h2>
         <p className="mt-2 text-sm text-neutral-300">
           Send your current GitHub / LinkedIn links, semester, and placement
           timeline. You'll get suggestions and a quote based on your situation
           — not a random package.
         </p>

         <div className="mt-4 flex flex-col gap-3 text-sm sm:flex-row">
           <motion.a
             whileHover={{
               y: -1,
               boxShadow: "0 8px 25px rgba(99,102,241,0.35)"
             }}
             href={whatsapp}
             target="_blank"
             rel="noreferrer"
             className="inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-sky-500 px-4 py-2.5 text-white transition-colors duration-150 hover:bg-sky-400"
           >
             WhatsApp – get quote
           </motion.a>
           <motion.a
             whileHover={{
               y: -1,
               boxShadow: "0 8px 25px rgba(99,102,241,0.2)"
             }}
             href="mailto:praneethreddy0112@example.com"
             className="inline-flex flex-1 items-center justify-center gap-2 rounded-md border border-neutral-700 px-4 py-2.5 text-neutral-200 transition duration-150 hover:-translate-y-[1px] hover:border-indigo-400"
           >
             Email: (mailto:praneethreddy0112@gmail.com)
           </motion.a>
         </div>

         <p className="mt-4 text-xs text-neutral-500">
           GitHub: <span className="font-mono">github.com/PraneethPW</span>
         </p>
        </section>

        {/* FOOTER */}
        <footer className="mt-10 border-t border-neutral-800 pt-4 text-center text-xs text-neutral-500">
          © {new Date().getFullYear()} Praneeth. 
        </footer>
      </div>
    </main>
  );
};

export default Home;
