import React, { useEffect, useRef, useState } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform
} from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BookOpenCheck,
  BriefcaseBusiness,
  Check,
  Code2,
  FileText,
  Github,
  Globe2,
  Layers3,
  Linkedin,
  MessageCircle,
  Move3d,
  Play,
  Rocket,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Waypoints,
  Zap
} from "lucide-react";
import { FaAws, FaDocker, FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiCloudflare,
  SiGraphql,
  SiLangchain,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiOpenai,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiPytorch,
  SiScikitlearn,
  SiSpringboot,
  SiTailwindcss,
  SiTensorflow,
  SiTypescript,
  SiVercel
} from "react-icons/si";
import type { IconType } from "react-icons";

type TechItem = {
  name: string;
  icon?: IconType;
};

type Tone = "ember" | "gold" | "copper" | "smoke" | "ash" | "sun";

type ServiceCard = {
  title: string;
  desc: string;
  note: string;
  icon: React.ElementType;
  tone: Tone;
};

const whatsapp =
  "https://wa.me/917396704622?text=Hi%20Praneeth%2C%20I%20need%20a%20project";

const toneStyles: Record<
  Tone,
  {
    badge: string;
    accent: string;
    glow: string;
    button: string;
  }
> = {
  ember: {
    badge: "border-orange-300/20 bg-orange-300/10 text-orange-100",
    accent: "from-orange-400/22 via-transparent to-transparent",
    glow: "shadow-orange-500/20",
    button: "from-orange-400 via-amber-300 to-yellow-200"
  },
  gold: {
    badge: "border-amber-300/20 bg-amber-300/10 text-amber-100",
    accent: "from-amber-300/22 via-transparent to-transparent",
    glow: "shadow-amber-500/20",
    button: "from-amber-300 via-orange-200 to-rose-200"
  },
  copper: {
    badge: "border-rose-300/20 bg-rose-300/10 text-rose-100",
    accent: "from-rose-300/22 via-transparent to-transparent",
    glow: "shadow-rose-500/20",
    button: "from-rose-300 via-orange-200 to-amber-200"
  },
  smoke: {
    badge: "border-white/10 bg-white/5 text-white/75",
    accent: "from-white/10 via-transparent to-transparent",
    glow: "shadow-black/35",
    button: "from-neutral-300 via-white to-orange-100"
  },
  ash: {
    badge: "border-white/10 bg-white/6 text-white/72",
    accent: "from-white/8 via-transparent to-transparent",
    glow: "shadow-black/30",
    button: "from-white via-orange-100 to-amber-100"
  },
  sun: {
    badge: "border-orange-300/18 bg-orange-300/8 text-orange-50",
    accent: "from-orange-200/18 via-transparent to-transparent",
    glow: "shadow-orange-400/15",
    button: "from-orange-500 via-amber-400 to-orange-200"
  }
};

const techStack: TechItem[] = [
  { name: "Java" },
  { name: "Python", icon: SiPython },
  { name: "Spring Boot", icon: SiSpringboot },
  { name: "React", icon: FaReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Express" },
  { name: "TypeScript", icon: SiTypescript },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Postgres", icon: SiPostgresql },
  { name: "MySQL", icon: SiMysql },
  { name: "Prisma", icon: SiPrisma },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "Vercel", icon: SiVercel },
  { name: "Docker", icon: FaDocker },
  { name: "GraphQL", icon: SiGraphql },
  { name: "LangChain", icon: SiLangchain },
  { name: "AI", icon: SiOpenai },
  { name: "ML", icon: SiScikitlearn },
  { name: "TensorFlow", icon: SiTensorflow },
  { name: "PyTorch", icon: SiPytorch },
  { name: "AWS", icon: FaAws },
  { name: "Cloudflare", icon: SiCloudflare }
];

const services: ServiceCard[] = [
  {
    title: "Second / backup project",
    desc: "A compact, credible repo that gives your profile more than one serious proof point.",
    note: "Useful when you are applying to multiple roles or companies.",
    icon: Layers3,
    tone: "ember"
  },
  {
    title: "Mini full-stack build",
    desc: "A focused app with auth, CRUD, UI states, and a deployable demo.",
    note: "Small enough to explain, real enough to defend.",
    icon: Code2,
    tone: "gold"
  },
  {
    title: "Documentation bundle",
    desc: "SRS, UML/ER diagrams, report draft, and project notes aligned to your college format.",
    note: "Delivered as editable files for guide feedback.",
    icon: FileText,
    tone: "copper"
  },
  {
    title: "Slides + viva prep",
    desc: "A clean slide deck plus expected viva and panel questions.",
    note: "Helps you talk naturally instead of memorising a script.",
    icon: BookOpenCheck,
    tone: "smoke"
  },
  {
    title: "Profile copy support",
    desc: "CV bullets, LinkedIn experience lines, and a launch post for your finished project.",
    note: "Written to sound like your work, not a template.",
    icon: Linkedin,
    tone: "ash"
  },
  {
    title: "Custom requirements",
    desc: "Existing project refactors, extra features, migrations, or college-specific changes.",
    note: "Scoped quickly on WhatsApp before quoting.",
    icon: Waypoints,
    tone: "sun"
  }
];

const businessServices: ServiceCard[] = [
  {
    title: "Business Websites",
    desc: "Responsive, sharp websites for local businesses, founders, and service teams that need a trustworthy online presence.",
    note: "Custom UI and conversion flow, SEO-ready structure, contact forms, and fast launch.",
    icon: Globe2,
    tone: "sun"
  },
  {
    title: "Web Applications",
    desc: "Full-stack systems for teams that need dashboards, booking flows, inventory tools, internal portals, or admin panels.",
    note: "Auth, secure APIs, admin workflows, deployment docs, and handoff support.",
    icon: BriefcaseBusiness,
    tone: "ember"
  }
];

const stats = [
  { label: "Projects Delivered", value: 120 },
  { label: "GitHub Repos Updated", value: 95 },
  { label: "LinkedIn Posts", value: 80 },
  { label: "SRS / UMLs Created", value: 110 },
  { label: "Mini Builds", value: 75 }
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08
    }
  }
};

const SectionLabel: React.FC<{ tone?: Tone; children: React.ReactNode }> = ({
  tone = "ember",
  children
}) => (
  <div
    className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-[0.22em] ${toneStyles[tone].badge}`}
  >
    <Sparkles className="h-3.5 w-3.5" />
    {children}
  </div>
);

const BlinkDot: React.FC<{
  className?: string;
  tone?: "orange" | "amber" | "white";
  delay?: number;
}> = ({ className = "", tone = "orange", delay = 0 }) => {
  const toneClass =
    tone === "white"
      ? "bg-white shadow-[0_0_18px_rgba(255,255,255,0.65)]"
      : tone === "amber"
      ? "bg-amber-200 shadow-[0_0_18px_rgba(252,211,77,0.65)]"
      : "bg-orange-300 shadow-[0_0_18px_rgba(251,146,60,0.65)]";

  return (
    <motion.span
      aria-hidden
      animate={{ opacity: [0.25, 1, 0.35, 1, 0.2], scale: [0.82, 1.1, 0.9, 1.08, 0.82] }}
      transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut", delay }}
      className={`inline-block h-2 w-2 rounded-full ${toneClass} ${className}`}
    />
  );
};

const CardFrame: React.FC<{
  tone: Tone;
  children: React.ReactNode;
  className?: string;
}> = ({ tone, children, className = "" }) => (
  <motion.article
    whileHover={{ y: -10, scale: 1.015, rotateX: 6, rotateY: -5 }}
    whileTap={{ scale: 0.995 }}
    transition={{ type: "spring", stiffness: 260, damping: 18 }}
    className={`group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.055] shadow-2xl backdrop-blur-2xl transform-gpu ${toneStyles[tone].glow} ${className}`}
  >
    <div
      className={`absolute inset-0 bg-gradient-to-br ${toneStyles[tone].accent} opacity-0 transition duration-300 group-hover:opacity-100`}
    />
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent opacity-50" />
    <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-white/35 to-transparent opacity-40" />
    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.11),transparent_24%,transparent_76%,rgba(255,255,255,0.08))] opacity-0 transition duration-300 group-hover:opacity-100" />
    <motion.div
      animate={{ opacity: [0.16, 0.88, 0.22, 0.9, 0.18], scale: [0.92, 1.18, 0.96, 1.12, 0.92] }}
      transition={{ duration: 2.1, repeat: Infinity, ease: "easeInOut" }}
      className="absolute right-4 top-4 h-2.5 w-2.5 rounded-full bg-orange-300 shadow-[0_0_18px_rgba(251,146,60,0.75)]"
    />
    <motion.div
      animate={{ x: ["-20%", "120%", "-20%"], opacity: [0, 0.85, 0] }}
      transition={{ duration: 4.3, repeat: Infinity, ease: "easeInOut" }}
      className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent"
    />
    <motion.div
      animate={{ opacity: [0, 0.7, 0], y: [0, 6, 0] }}
      transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
      className="absolute inset-x-4 bottom-4 h-10 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,167,76,0.12),transparent_72%)]"
    />
    <div className="relative">{children}</div>
  </motion.article>
);

const StatNumber: React.FC<{ value: number }> = ({ value }) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { amount: 0.6, once: true });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, value, {
      duration: 1.35,
      ease: "easeOut",
      onUpdate(latest) {
        setCurrent(Math.floor(latest));
      }
    });
    return () => controls.stop();
  }, [isInView, value]);

  return <span ref={ref}>{current}+</span>;
};

const contributionCells = Array.from({ length: 91 }, (_, index) => {
  const column = index % 13;
  const row = Math.floor(index / 13);
  const active =
    (column * 3 + row * 5) % 11 === 0 ||
    (column > 5 && row > 1 && (column + row) % 4 === 0) ||
    (column > 8 && row < 6 && (column * row) % 7 === 0);

  if (!active) return 0;
  return ((column + row * 2) % 4) + 1;
});

const ContributionBackdrop: React.FC = () => (
  <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden rounded-[30px]">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_15%,rgba(249,115,22,0.08),transparent_28%),radial-gradient(circle_at_78%_18%,rgba(34,197,94,0.12),transparent_32%)]" />
    <motion.div
      animate={{ opacity: [0.18, 0.34, 0.22], y: [0, -5, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      className="absolute left-1/2 top-5 w-[92%] max-w-[42rem] -translate-x-1/2 rounded-[24px] border border-emerald-200/10 bg-black/20 p-3 shadow-[0_0_70px_rgba(34,197,94,0.1)] backdrop-blur-2xl sm:left-auto sm:right-6 sm:top-5 sm:w-[38rem] sm:translate-x-0 sm:p-4"
    >
      <div className="mb-3 flex items-center justify-between gap-4">
        <div className="h-2 w-24 rounded-full bg-white/10 sm:w-32" />
        <div className="hidden gap-1 sm:flex">
          {[0, 1, 2, 3].map((item) => (
            <span key={item} className="h-2 w-8 rounded-full bg-emerald-300/10" />
          ))}
        </div>
      </div>
      <div className="grid grid-flow-col grid-rows-7 gap-1 [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)] sm:[mask-image:none]">
        {contributionCells.map((level, index) => (
          <motion.span
            key={index}
            animate={
              level
                ? { opacity: [0.48, 0.95, 0.58], scale: [1, 1.08, 1] }
                : { opacity: [0.18, 0.26, 0.18] }
            }
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: (index % 13) * 0.035 }}
            className={`h-2.5 w-2.5 rounded-[4px] border border-white/5 sm:h-3 sm:w-3 ${
              [
                "bg-white/[0.035]",
                "bg-emerald-900/70 shadow-[0_0_10px_rgba(22,163,74,0.25)]",
                "bg-emerald-700/70 shadow-[0_0_12px_rgba(34,197,94,0.32)]",
                "bg-emerald-500/75 shadow-[0_0_16px_rgba(34,197,94,0.42)]",
                "bg-lime-400/80 shadow-[0_0_18px_rgba(132,204,22,0.45)]"
              ][level]
            }`}
          />
        ))}
      </div>
      <div className="mt-3 hidden items-center justify-end gap-1 text-[10px] uppercase tracking-[0.2em] text-white/28 sm:flex">
        <span>less</span>
        {[1, 2, 3, 4].map((level) => (
          <span
            key={level}
            className={`h-2.5 w-2.5 rounded-[3px] ${
              ["bg-emerald-900/70", "bg-emerald-700/70", "bg-emerald-500/75", "bg-lime-400/80"][level - 1]
            }`}
          />
        ))}
        <span>more</span>
      </div>
    </motion.div>
    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.08),rgba(5,5,5,0.76)_48%,rgba(5,5,5,0.34)),linear-gradient(90deg,rgba(5,5,5,0.22),rgba(5,5,5,0.62)_72%)] sm:bg-[linear-gradient(90deg,rgba(5,5,5,0.08),rgba(5,5,5,0.56)_70%),linear-gradient(180deg,rgba(5,5,5,0.08),rgba(5,5,5,0.22))]" />
  </div>
);

const ScrollStage: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const reduceMotion = useReducedMotion();

  const driftLeft = useTransform(scrollYProgress, [0, 1], [0, -220]);
  const driftRight = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const driftCenter = useTransform(scrollYProgress, [0, 1], [0, -320]);
  const tiltLeft = useTransform(scrollYProgress, [0, 1], [-12, 7]);
  const tiltRight = useTransform(scrollYProgress, [0, 1], [10, -8]);
  const tiltCenter = useTransform(scrollYProgress, [0, 1], [2, -4]);
  const spineGlow = useTransform(scrollYProgress, [0, 1], [0.18, 0.42]);
  const ribbon = useTransform(scrollYProgress, [0, 1], [0, -220]);
  const pulse = useTransform(scrollYProgress, [0, 1], [0.28, 0.68]);
  const sideProgress = useTransform(scrollYProgress, [0, 1], [0.08, 1]);
  const leftScout = useTransform(scrollYProgress, [0, 1], ["8vh", "82vh"]);
  const rightScout = useTransform(scrollYProgress, [0, 1], ["84vh", "12vh"]);
  const scanShift = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const levelGlow = useTransform(scrollYProgress, [0, 0.45, 1], [0.2, 0.72, 0.38]);
  const sideFlash = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0.22, 0.58, 0.34, 0.62, 0.42]);

  if (reduceMotion) {
    return <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden scene-grid opacity-24" />;
  }

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[#050505]" />
      <div className="absolute inset-0 scene-grid opacity-18" />
      <motion.div
        style={{ opacity: pulse }}
        className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-orange-300/10 to-transparent"
      />
      <div className="absolute inset-y-0 left-0 z-20 hidden w-40 overflow-hidden mix-blend-screen lg:block">
        <motion.div
          style={{ opacity: sideFlash }}
          animate={{ x: [-18, 0, -18] }}
          transition={{ duration: 2.1, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-y-0 left-0 w-32 bg-[radial-gradient(circle_at_28%_50%,rgba(251,146,60,0.46),transparent_56%)] blur-2xl"
        />
        <motion.div
          animate={{ opacity: [0.08, 0.48, 0.12, 0.42, 0.08], y: ["90vh", "-18vh"] }}
          transition={{ duration: 3.6, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 h-40 w-28 bg-gradient-to-b from-transparent via-amber-100/42 to-transparent blur-xl"
        />
        <div className="absolute inset-y-0 left-8 w-[2px] bg-gradient-to-b from-transparent via-white/24 to-transparent" />
        <motion.div
          style={{ scaleY: sideProgress }}
          className="absolute bottom-[8vh] left-8 h-[74vh] w-[3px] origin-bottom rounded-full bg-gradient-to-t from-orange-500 via-amber-200 to-white shadow-[0_0_18px_rgba(251,191,36,0.82),0_0_52px_rgba(249,115,22,0.56),0_0_100px_rgba(249,115,22,0.3)]"
        />
        <motion.div
          style={{ scaleY: sideProgress, opacity: sideFlash }}
          className="absolute bottom-[8vh] left-[1.5rem] h-[74vh] w-6 origin-bottom rounded-full bg-orange-300/35 blur-lg"
        />
        <motion.div
          style={{ top: leftScout }}
          animate={{
            boxShadow: [
              "0 0 14px rgba(251,146,60,0.58), 0 0 34px rgba(251,146,60,0.38)",
              "0 0 24px rgba(255,237,213,0.66), 0 0 58px rgba(251,191,36,0.58)",
              "0 0 14px rgba(251,146,60,0.58), 0 0 34px rgba(251,146,60,0.38)"
            ],
            scale: [0.96, 1.1, 0.96]
          }}
          transition={{ duration: 2.1, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[1.16rem] h-7 w-7 -translate-y-1/2 rotate-45 rounded-[9px] border border-orange-50/80 bg-orange-300/38 backdrop-blur-xl"
        />
        <motion.div
          style={{ y: scanShift, opacity: levelGlow }}
          className="absolute left-14 top-[12vh] h-[64vh] w-12"
        >
          {["01", "02", "03", "04", "05"].map((level, index) => (
            <div
              key={level}
              className="absolute left-0 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-orange-100/70 drop-shadow-[0_0_10px_rgba(251,191,36,0.9)]"
              style={{ top: `${index * 24}%` }}
            >
              <span className="h-[2px] w-6 rounded-full bg-orange-200 shadow-[0_0_14px_rgba(251,191,36,0.9)]" />
              {level}
            </div>
          ))}
        </motion.div>
      </div>
      <div className="absolute inset-y-0 right-0 z-20 hidden w-44 overflow-hidden mix-blend-screen lg:block">
        <motion.div
          style={{ opacity: sideFlash }}
          animate={{ x: [18, 0, 18] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-y-0 right-0 w-36 bg-[radial-gradient(circle_at_72%_50%,rgba(251,191,36,0.48),transparent_56%)] blur-2xl"
        />
        <motion.div
          animate={{ opacity: [0.1, 0.5, 0.14, 0.44, 0.1], y: ["-18vh", "90vh"] }}
          transition={{ duration: 3.3, repeat: Infinity, ease: "linear", delay: 0.35 }}
          className="absolute right-0 h-40 w-32 bg-gradient-to-b from-transparent via-amber-100/44 to-transparent blur-xl"
        />
        <div className="absolute inset-y-0 right-8 w-[2px] bg-gradient-to-b from-transparent via-amber-100/24 to-transparent" />
        <motion.div
          style={{ scaleY: sideProgress }}
          className="absolute right-8 top-[8vh] h-[74vh] w-[3px] origin-top rounded-full bg-gradient-to-b from-white via-amber-200 to-orange-500 shadow-[0_0_18px_rgba(251,191,36,0.82),0_0_54px_rgba(249,115,22,0.56),0_0_105px_rgba(249,115,22,0.3)]"
        />
        <motion.div
          style={{ scaleY: sideProgress, opacity: sideFlash }}
          className="absolute right-[1.5rem] top-[8vh] h-[74vh] w-6 origin-top rounded-full bg-amber-200/36 blur-lg"
        />
        <motion.div
          style={{ top: rightScout }}
          animate={{
            rotate: [0, 180, 360],
            opacity: [0.9, 1, 0.9],
            boxShadow: [
              "0 0 16px rgba(251,191,36,0.55), 0 0 38px rgba(249,115,22,0.34)",
              "0 0 24px rgba(255,237,213,0.66), 0 0 58px rgba(251,191,36,0.58)",
              "0 0 16px rgba(251,191,36,0.55), 0 0 38px rgba(249,115,22,0.34)"
            ]
          }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "linear" }}
          className="absolute right-[1rem] h-8 w-8 -translate-y-1/2 rounded-xl border border-amber-50/80 bg-amber-200/32 backdrop-blur-xl"
        >
          <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-50 shadow-[0_0_14px_rgba(251,191,36,0.8)]" />
        </motion.div>
        <motion.div
          style={{ y: scanShift }}
          className="absolute right-12 top-[16vh] flex h-[58vh] flex-col justify-between"
        >
          {[0, 1, 2, 3, 4].map((item) => (
            <motion.span
              key={item}
              animate={{ opacity: [0.2, 0.72, 0.2], x: [0, -9, 0] }}
              transition={{ duration: 2.1, repeat: Infinity, ease: "easeInOut", delay: item * 0.18 }}
              className="block h-[2px] w-12 rounded-full bg-gradient-to-l from-amber-100 via-amber-200 to-transparent shadow-[0_0_12px_rgba(251,191,36,0.62)]"
            />
          ))}
        </motion.div>
      </div>
      <div className="absolute inset-y-0 left-0 z-20 w-20 overflow-hidden md:hidden">
        <motion.div
          style={{ opacity: sideFlash }}
          className="absolute inset-y-0 left-0 w-16 bg-[radial-gradient(circle_at_18%_50%,rgba(251,146,60,0.62),transparent_64%)] blur-xl"
        />
        <motion.div
          animate={{ opacity: [0.1, 0.56, 0.1], y: ["92vh", "-14vh"] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 h-32 w-16 bg-gradient-to-b from-transparent via-amber-100/48 to-transparent blur-lg"
        />
        <motion.div
          style={{ scaleY: sideProgress }}
          className="absolute bottom-[10vh] left-5 h-[62vh] w-[3px] origin-bottom rounded-full bg-gradient-to-t from-orange-500 via-amber-200 to-white shadow-[0_0_20px_rgba(251,191,36,0.92),0_0_58px_rgba(249,115,22,0.58)]"
        />
        <motion.div
          style={{ scaleY: sideProgress, opacity: sideFlash }}
          className="absolute bottom-[10vh] left-3 h-[62vh] w-7 origin-bottom rounded-full bg-orange-300/42 blur-md"
        />
        <motion.div
          style={{ top: leftScout }}
          animate={{ scale: [0.94, 1.14, 0.94], opacity: [0.82, 1, 0.82] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-3 h-7 w-7 -translate-y-1/2 rotate-45 rounded-[9px] border border-orange-50 bg-orange-300/58 shadow-[0_0_30px_rgba(251,146,60,0.9)]"
        />
      </div>
      <div className="absolute inset-y-0 right-0 z-20 w-20 overflow-hidden md:hidden">
        <motion.div
          style={{ opacity: sideFlash }}
          className="absolute inset-y-0 right-0 w-16 bg-[radial-gradient(circle_at_82%_50%,rgba(251,191,36,0.62),transparent_64%)] blur-xl"
        />
        <motion.div
          animate={{ opacity: [0.1, 0.56, 0.1], y: ["-14vh", "92vh"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 0.3 }}
          className="absolute right-0 h-32 w-16 bg-gradient-to-b from-transparent via-amber-100/48 to-transparent blur-lg"
        />
        <motion.div
          style={{ scaleY: sideProgress }}
          className="absolute right-5 top-[12vh] h-[58vh] w-[3px] origin-top rounded-full bg-gradient-to-b from-white via-amber-200 to-orange-500 shadow-[0_0_20px_rgba(251,191,36,0.92),0_0_58px_rgba(249,115,22,0.58)]"
        />
        <motion.div
          style={{ scaleY: sideProgress, opacity: sideFlash }}
          className="absolute right-3 top-[12vh] h-[58vh] w-7 origin-top rounded-full bg-amber-200/42 blur-md"
        />
        <motion.div
          style={{ top: rightScout }}
          animate={{ scale: [0.94, 1.14, 0.94], opacity: [0.82, 1, 0.82] }}
          transition={{ duration: 1.9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-3 h-7 w-7 -translate-y-1/2 rounded-[9px] border border-amber-50 bg-amber-200/58 shadow-[0_0_30px_rgba(251,191,36,0.92)]"
        />
      </div>
      <motion.div
        animate={{ opacity: [0.05, 0.35, 0.08, 0.4, 0.05] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[6vw] top-[16vh] h-[1px] w-[30vw] bg-gradient-to-r from-transparent via-orange-200/70 to-transparent"
      />
      <motion.div
        style={{ x: driftLeft, y: driftCenter, rotate: tiltLeft }}
        animate={{ opacity: [0.35, 0.65, 0.35], scale: [0.98, 1.03, 0.98] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[-12vw] top-[10vh] hidden h-[40rem] w-[48vw] rounded-[3rem] border border-orange-200/10 bg-[linear-gradient(135deg,rgba(255,132,46,0.12),rgba(255,255,255,0.05)_44%,rgba(255,255,255,0.02))] shadow-[0_0_120px_rgba(255,132,46,0.12)] backdrop-blur-3xl md:block"
      />
      <motion.div
        style={{ x: driftRight, y: driftLeft, rotate: tiltRight }}
        animate={{ opacity: [0.2, 0.42, 0.2], scale: [0.96, 1.05, 0.96] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[-10vw] top-[16vh] hidden h-[34rem] w-[28vw] rounded-[3rem] border border-amber-200/10 bg-[linear-gradient(215deg,rgba(255,185,88,0.12),rgba(255,255,255,0.05)_40%,rgba(255,133,55,0.05))] shadow-[0_0_110px_rgba(255,171,77,0.12)] backdrop-blur-3xl lg:block"
      />
      <motion.div
        style={{ y: ribbon, rotate: tiltCenter, opacity: spineGlow }}
        className="absolute left-1/2 top-[8vh] h-[84vh] w-[1px] -translate-x-1/2 bg-gradient-to-b from-transparent via-white/20 to-transparent"
      />
      <div className="absolute inset-x-0 top-[8vh] md:hidden">
        <motion.div
          style={{ x: driftLeft, y: driftCenter, rotate: tiltLeft }}
          animate={{ opacity: [0.28, 0.56, 0.28], scale: [0.96, 1.03, 0.96] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[-16vw] top-0 h-[15rem] w-[72vw] rounded-[2rem] border border-orange-200/10 bg-[linear-gradient(135deg,rgba(255,132,46,0.14),rgba(255,255,255,0.05)_44%,rgba(255,255,255,0.02))] shadow-[0_0_80px_rgba(255,132,46,0.12)] backdrop-blur-3xl"
        />
        <motion.div
          style={{ x: driftRight, y: driftLeft, rotate: tiltRight }}
          animate={{ opacity: [0.18, 0.42, 0.18], scale: [0.95, 1.04, 0.95] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[-18vw] top-[8rem] h-[13rem] w-[58vw] rounded-[2rem] border border-amber-200/10 bg-[linear-gradient(215deg,rgba(255,185,88,0.12),rgba(255,255,255,0.05)_40%,rgba(255,133,55,0.05))] shadow-[0_0_70px_rgba(255,171,77,0.12)] backdrop-blur-3xl"
        />
        <motion.div
          style={{ y: ribbon, rotate: tiltCenter }}
          className="absolute left-1/2 top-[9rem] h-[18rem] w-[82vw] -translate-x-1/2 rounded-[2rem] border border-white/8 bg-white/[0.03] backdrop-blur-3xl"
        >
          <div className="absolute inset-0 depth-bars opacity-12" />
          <div className="absolute inset-x-4 top-4 h-px bg-gradient-to-r from-transparent via-white/45 to-transparent" />
          <div className="absolute inset-x-4 bottom-4 h-px bg-gradient-to-r from-transparent via-orange-200/35 to-transparent" />
        </motion.div>
        <motion.div
          animate={{ opacity: [0.12, 0.7, 0.15, 0.8, 0.12], scale: [0.88, 1.14, 0.92, 1.08, 0.88] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-4 top-8"
        >
          <BlinkDot tone="orange" />
        </motion.div>
        <motion.div
          animate={{ opacity: [0.1, 0.6, 0.12, 0.7, 0.1], scale: [0.88, 1.12, 0.9, 1.06, 0.88] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          className="absolute right-5 top-[11rem]"
        >
          <BlinkDot tone="amber" />
        </motion.div>
      </div>
      <motion.div
        style={{ y: driftCenter, rotate: tiltCenter }}
        className="absolute left-1/2 top-[10vh] hidden h-[72vh] w-[34vw] -translate-x-1/2 rounded-[2.8rem] border border-white/8 bg-white/[0.035] backdrop-blur-3xl lg:block"
      >
        <div className="absolute inset-0 depth-bars opacity-16" />
        <div className="absolute inset-x-6 top-6 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
        <div className="absolute inset-x-6 bottom-6 h-px bg-gradient-to-r from-transparent via-orange-200/40 to-transparent" />
      </motion.div>
      <motion.div
        animate={{ opacity: [0.15, 0.9, 0.2, 0.85, 0.15], scale: [0.88, 1.12, 0.95, 1.06, 0.88] }}
        transition={{ duration: 1.9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[9vw] top-[25vh]"
      >
        <BlinkDot tone="orange" />
      </motion.div>
      <motion.div
        animate={{ opacity: [0.12, 0.7, 0.15, 0.82, 0.12], scale: [0.88, 1.1, 0.92, 1.05, 0.88] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.35 }}
        className="absolute right-[10vw] top-[58vh]"
      >
        <BlinkDot tone="amber" />
      </motion.div>
      <motion.div
        animate={{ opacity: [0.08, 0.45, 0.12, 0.48, 0.08], x: [0, 10, 0] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-[18vh] left-1/2 h-px w-[52vw] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent"
      />
      <motion.div
        animate={{ opacity: [0.12, 0.65, 0.18, 0.7, 0.12] }}
        transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        className="absolute left-4 top-[16vh] h-[1px] w-[18vw] bg-gradient-to-r from-orange-300/0 via-orange-300/60 to-orange-300/0 md:hidden"
      />
      <motion.div
        animate={{ opacity: [0.1, 0.7, 0.15, 0.6, 0.1], x: [0, 8, 0] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.25 }}
        className="absolute right-3 top-[22vh] h-[26rem] w-[1px] bg-gradient-to-b from-transparent via-orange-200/60 to-transparent md:hidden"
      />
      <motion.div
        style={{ y: ribbon }}
        className="absolute left-[13vw] top-[10vh] hidden h-[28rem] w-[24vw] rounded-[2.4rem] border border-white/10 bg-white/[0.045] backdrop-blur-2xl xl:block"
      >
        <div className="absolute inset-0 depth-bars opacity-20" />
        <div className="absolute inset-x-6 top-6 h-px bg-gradient-to-r from-transparent via-white/45 to-transparent" />
      </motion.div>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.92),rgba(5,5,5,0.82)_24%,rgba(5,5,5,0.9)_72%,rgba(5,5,5,0.98))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_8%,rgba(255,167,76,0.08),transparent_22%),radial-gradient(circle_at_50%_100%,rgba(255,255,255,0.04),transparent_24%)]" />
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/40 to-transparent md:hidden" />
    </div>
  );
};

const HeroReel: React.FC = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const smoothX = useSpring(x, { stiffness: 120, damping: 18 });
  const smoothY = useSpring(y, { stiffness: 120, damping: 18 });
  const rotateX = useTransform(smoothY, [-90, 90], [10, -10]);
  const rotateY = useTransform(smoothX, [-90, 90], [-12, 12]);
  const { scrollYProgress } = useScroll();
  const scrollLift = useTransform(scrollYProgress, [0, 1], [0, -18]);
  const scrollRail = useTransform(scrollYProgress, [0, 0.5, 1], [0.18, 1, 0.55]);
  const scrollGlow = useTransform(scrollYProgress, [0, 1], [0.45, 0.9]);

  return (
    <motion.div
      style={{ rotateX, rotateY, y: scrollLift, perspective: 1800 }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        x.set(event.clientX - rect.left - rect.width / 2);
        y.set(event.clientY - rect.top - rect.height / 2);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className="relative hidden min-h-[680px] overflow-hidden rounded-[32px] border border-white/12 bg-white/[0.06] p-5 shadow-2xl shadow-black/35 backdrop-blur-3xl transform-gpu lg:block"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,149,58,0.18),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02)_30%,rgba(255,255,255,0.06))]" />
      <div className="absolute inset-0 film-noise" />
      <motion.div
        style={{ opacity: scrollGlow }}
        className="absolute inset-x-6 top-6 h-px bg-gradient-to-r from-transparent via-orange-200/60 to-transparent"
      />
      <div className="relative z-10 flex h-full flex-col gap-4">
        <div className="rounded-[28px] border border-orange-200/14 bg-[radial-gradient(circle_at_50%_18%,rgba(255,148,53,0.3),rgba(255,148,53,0.08)_34%,rgba(0,0,0,0.18)_70%)] p-5">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-orange-100/80">
                <BlinkDot tone="amber" />
                motion reel
              </span>
              <h3 className="mt-3 text-2xl font-semibold text-white">Project flow</h3>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-white/58">
                Desktop gets a clearer build lane: the video layer, the delivery checklist, and the launch cues each live in their own block.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-black/25 px-3 py-2 text-[10px] uppercase tracking-[0.22em] text-white/55">
              <ScanLine className="h-4 w-4 text-orange-300" />
              Scroll driven
            </div>
          </div>

          <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/8">
            <motion.div
              style={{ scaleX: scrollRail }}
              className="h-full origin-left rounded-full bg-gradient-to-r from-orange-300 via-amber-200 to-rose-200"
            />
          </div>

          <div className="mt-5 grid gap-4 xl:grid-cols-[1.18fr_0.82fr]">
            <div className="rounded-[26px] border border-white/12 bg-black/22 p-4">
              <div className="relative overflow-hidden rounded-[22px] border border-white/12 aspect-[16/10] bg-[linear-gradient(135deg,rgba(255,255,255,0.12),rgba(255,145,65,0.08)_28%,rgba(0,0,0,0.25)_72%)]">
                <motion.div
                  animate={{ backgroundPositionX: ["0%", "100%"] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.02)_0%,rgba(255,255,255,0.12)_18%,rgba(255,145,65,0.05)_34%,rgba(255,255,255,0.02)_56%,rgba(255,255,255,0.1)_78%,rgba(255,255,255,0.02)_100%)] bg-[length:220%_220%] opacity-55"
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(255,145,65,0.32),transparent_24%),radial-gradient(circle_at_50%_70%,rgba(255,255,255,0.1),transparent_20%)]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.05, 1], opacity: [0.88, 1, 0.88] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="flex h-16 w-16 items-center justify-center rounded-full border border-white/18 bg-black/35 shadow-[0_0_50px_rgba(255,145,65,0.28)] backdrop-blur-xl"
                  >
                    <Play className="h-6 w-6 fill-white text-white" />
                  </motion.div>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[10px] uppercase tracking-[0.24em] text-white/55">
                  <span>video layer</span>
                  <span>looping light</span>
                </div>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {["README", "Deploy", "Viva"].map((item, index) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-black/25 p-3">
                    <div className="mb-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${58 + index * 10}%` }}
                        transition={{ duration: 1.4, delay: 0.18 + index * 0.12 }}
                        className="h-full rounded-full bg-gradient-to-r from-orange-300 via-amber-200 to-rose-200"
                      />
                    </div>
                    <p className="text-sm font-semibold text-white">{item}</p>
                    <p className="mt-1 text-xs text-white/45">ready</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              <motion.div
                animate={{ opacity: [0.82, 1, 0.82], y: [0, -4, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="rounded-[26px] border border-white/12 bg-black/25 p-4 backdrop-blur-2xl"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-semibold uppercase tracking-[0.22em] text-white/55">
                    Launch sequence
                  </h4>
                  <Move3d className="h-4 w-4 text-orange-200" />
                </div>
                <div className="mt-4 space-y-3">
                  {["Brief", "Build", "Launch"].map((item, index) => (
                    <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.03] p-3">
                      <BlinkDot tone={index === 1 ? "amber" : "orange"} delay={index * 0.2} />
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-3">
                          <p className="text-sm font-semibold text-white">{item}</p>
                          <span className="text-[10px] uppercase tracking-[0.22em] text-white/40">
                            phase 0{index + 1}
                          </span>
                        </div>
                        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/8">
                          <motion.div
                            style={{ scaleX: scrollRail }}
                            className="h-full origin-left rounded-full bg-gradient-to-r from-orange-300 via-amber-200 to-rose-200"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                animate={{ opacity: [0.86, 1, 0.86] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
                className="rounded-[26px] border border-orange-300/18 bg-[linear-gradient(180deg,rgba(255,167,76,0.1),rgba(255,255,255,0.03))] p-4"
              >
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.22em] text-orange-100/72">
                  <span>placement ready</span>
                  <span>scroll to reveal</span>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/8">
                    <motion.div
                      style={{ scaleX: scrollRail }}
                      className="h-full origin-left rounded-full bg-gradient-to-r from-orange-300 via-amber-200 to-rose-200"
                    />
                  </div>
                  <div className="text-xs text-white/45">GitHub / LinkedIn / Docs</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const MobileHeroReel: React.FC = () => {
  const launchSteps = [
    {
      title: "Share the brief",
      desc: "Your idea, timeline, and college or client requirements."
    },
    {
      title: "Build the stack",
      desc: "UI, logic, README, deployment, and clean project files."
    },
    {
      title: "Launch polished",
      desc: "GitHub, LinkedIn, and viva-ready delivery material."
    }
  ];
  const { scrollYProgress } = useScroll();
  const scrollRail = useTransform(scrollYProgress, [0, 0.5, 1], [0.14, 1, 0.46]);
  const scrollDrift = useTransform(scrollYProgress, [0, 1], [0, -10]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      style={{ y: scrollDrift }}
      className="mx-auto mt-8 w-full max-w-[36rem] overflow-hidden rounded-[28px] border border-white/12 bg-white/[0.06] p-4 shadow-2xl shadow-black/35 backdrop-blur-3xl lg:hidden"
    >
      <div className="rounded-[22px] border border-orange-200/12 bg-[radial-gradient(circle_at_50%_14%,rgba(255,148,53,0.28),rgba(255,148,53,0.08)_28%,rgba(0,0,0,0.22)_72%)] p-4 sm:p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="max-w-[18rem]">
            <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.24em] text-orange-100/75">
              <BlinkDot tone="amber" />
              project path
            </div>
            <h3 className="mt-3 text-xl font-semibold text-white">Idea to launch</h3>
            <p className="mt-2 text-sm leading-6 text-white/58">
              We turn a rough brief into a clean repo, sharp UI, polished docs, and a profile-ready launch.
            </p>
          </div>
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/12 bg-black/28 text-orange-200">
            <Rocket className="h-5 w-5" />
          </div>
        </div>

        <div className="mt-5 rounded-[20px] border border-white/12 bg-black/25 p-3">
          <div className="flex items-center justify-between gap-3 text-[10px] uppercase tracking-[0.22em] text-white/55">
            <BlinkDot tone="amber" />
            <span>launch stack</span>
            <span className="text-orange-100/80">GitHub / LinkedIn / Docs</span>
          </div>

          <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/8">
            <motion.div
              style={{ scaleX: scrollRail }}
              className="h-full origin-left rounded-full bg-gradient-to-r from-orange-300 via-amber-200 to-rose-200"
            />
          </div>
        </div>

        <div className="mt-4 grid gap-3">
          <div className="grid gap-3 sm:grid-cols-3">
            {launchSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.12 + index * 0.08 }}
                className="rounded-2xl border border-white/10 bg-black/22 p-3"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-orange-100/70">
                    0{index + 1}
                  </span>
                  <ArrowRight className="h-3.5 w-3.5 text-orange-200/70" />
                </div>
                <p className="mt-3 text-sm font-semibold text-white">{step.title}</p>
                <p className="mt-1 text-xs leading-5 text-white/48">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="relative overflow-hidden rounded-[20px] border border-white/12 bg-[linear-gradient(135deg,rgba(255,255,255,0.12),rgba(255,145,65,0.08)_32%,rgba(0,0,0,0.25)_72%)] aspect-[16/10]">
            <motion.div
              animate={{ backgroundPositionX: ["0%", "100%"] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.02)_0%,rgba(255,255,255,0.12)_18%,rgba(255,145,65,0.05)_34%,rgba(255,255,255,0.02)_56%,rgba(255,255,255,0.1)_78%,rgba(255,255,255,0.02)_100%)] bg-[length:220%_220%] opacity-60"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(255,145,65,0.32),transparent_24%),radial-gradient(circle_at_50%_70%,rgba(255,255,255,0.1),transparent_20%)]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/18 bg-black/35 shadow-[0_0_50px_rgba(255,145,65,0.28)] backdrop-blur-xl">
                <Play className="h-6 w-6 fill-white text-white" />
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] uppercase tracking-[0.24em] text-white/55">
              <span>repo preview</span>
              <span>launch ready</span>
            </div>
          </div>

          <div className="grid gap-2 sm:grid-cols-3">
            {["README", "Deploy", "Viva"].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-black/25 p-3">
                <div className="mb-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    style={{ scaleX: scrollRail }}
                    className="h-full origin-left rounded-full bg-gradient-to-r from-orange-300 via-amber-200 to-rose-200"
                  />
                </div>
                <p className="text-xs font-semibold text-white">{item}</p>
                <p className="mt-1 text-[10px] text-white/45">ready</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProfileLaunchBackdrop: React.FC = () => (
  <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
    <motion.div
      animate={{ opacity: [0.18, 0.32, 0.2], y: [0, -8, 0], rotate: [-5, -4, -5] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -right-16 top-8 hidden w-[31rem] rounded-[28px] border border-white/10 bg-black/22 p-5 shadow-[0_0_90px_rgba(255,145,65,0.1)] backdrop-blur-2xl lg:block"
    >
      <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/12 bg-white/8 text-orange-200">
            <Github className="h-5 w-5" />
          </div>
          <div>
            <div className="h-2.5 w-36 rounded-full bg-white/22" />
            <div className="mt-2 h-2 w-24 rounded-full bg-white/10" />
          </div>
        </div>
        <div className="rounded-full border border-emerald-300/18 bg-emerald-300/8 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-emerald-100/70">
          repo ready
        </div>
      </div>
      <div className="space-y-4">
        {["README story", "Project stack", "Live demo", "Viva notes"].map((item, index) => (
          <div key={item} className="rounded-2xl border border-white/8 bg-white/[0.035] p-3">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-[0.22em] text-white/45">{item}</span>
              <span className="h-2 w-2 rounded-full bg-orange-200 shadow-[0_0_14px_rgba(251,191,36,0.8)]" />
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-white/8">
              <motion.div
                animate={{ scaleX: [0.52, 0.86, 0.62] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: index * 0.16 }}
                className="h-full origin-left rounded-full bg-gradient-to-r from-orange-300 via-amber-200 to-emerald-300"
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>

    <motion.div
      animate={{ opacity: [0.16, 0.3, 0.18], y: [0, 7, 0], rotate: [6, 5, 6] }}
      transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
      className="absolute left-[44%] top-[5.5rem] hidden w-[24rem] rounded-[26px] border border-sky-200/10 bg-white/[0.035] p-4 shadow-[0_0_80px_rgba(56,189,248,0.08)] backdrop-blur-2xl lg:block"
    >
      <div className="h-20 rounded-[20px] border border-white/8 bg-[linear-gradient(135deg,rgba(255,255,255,0.12),rgba(56,189,248,0.08),rgba(255,145,65,0.08))]" />
      <div className="-mt-7 flex items-end justify-between px-3">
        <div className="flex items-end gap-3">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-black/40 bg-gradient-to-br from-sky-300/35 via-white/20 to-orange-300/35 text-white shadow-[0_0_36px_rgba(56,189,248,0.18)]">
            <Linkedin className="h-7 w-7" />
          </div>
          <div className="pb-1">
            <div className="h-2.5 w-32 rounded-full bg-white/24" />
            <div className="mt-2 h-2 w-44 rounded-full bg-white/10" />
          </div>
        </div>
        <ShieldCheck className="h-5 w-5 text-orange-200/55" />
      </div>
      <div className="mt-5 grid gap-2">
        {["Profile headline", "Skills alignment", "Launch post"].map((item) => (
          <div key={item} className="flex items-center justify-between rounded-2xl border border-white/8 bg-black/18 px-3 py-2">
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/45">{item}</span>
            <Check className="h-3.5 w-3.5 text-emerald-200/70" />
          </div>
        ))}
      </div>
    </motion.div>

    <motion.div
      animate={{ opacity: [0.18, 0.3, 0.2], y: [0, -5, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      className="absolute left-1/2 top-[13rem] w-[21rem] -translate-x-1/2 rounded-[24px] border border-white/8 bg-black/20 p-4 shadow-[0_0_70px_rgba(255,145,65,0.08)] backdrop-blur-2xl lg:hidden"
    >
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Github className="h-4 w-4 text-orange-200/80" />
          <Linkedin className="h-4 w-4 text-sky-200/80" />
          <span className="text-[10px] uppercase tracking-[0.22em] text-white/45">profile launch</span>
        </div>
        <span className="h-2 w-2 rounded-full bg-emerald-200 shadow-[0_0_14px_rgba(110,231,183,0.8)]" />
      </div>
      <div className="space-y-2">
        {["README", "LinkedIn", "Resume"].map((item, index) => (
          <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.035] p-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/8 text-orange-100">
              {index === 1 ? <Linkedin className="h-4 w-4" /> : <FileText className="h-4 w-4" />}
            </div>
            <div className="min-w-0 flex-1">
              <div className="h-2 w-4/5 rounded-full bg-white/18" />
              <div className="mt-2 h-1.5 w-3/5 rounded-full bg-white/8" />
            </div>
          </div>
        ))}
      </div>
    </motion.div>

    <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(255,145,65,0.08),transparent_26%),radial-gradient(circle_at_52%_22%,rgba(56,189,248,0.06),transparent_22%),linear-gradient(180deg,rgba(5,5,5,0.08),transparent_36%,rgba(5,5,5,0.14))]" />
  </div>
);

const SectionProfileBackdrop: React.FC<{
  align?: "left" | "right";
  compact?: boolean;
}> = ({ align = "right", compact = false }) => {
  const sideClass =
    align === "left"
      ? "left-3 sm:left-6"
      : "right-3 sm:right-6";

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden rounded-[30px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,145,65,0.07),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(56,189,248,0.055),transparent_26%)]" />
      <motion.div
        animate={{ opacity: [0.12, 0.24, 0.15], y: [0, compact ? -4 : -7, 0] }}
        transition={{ duration: compact ? 6 : 7.5, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute ${sideClass} top-4 w-[18.5rem] max-w-[calc(100%-1.5rem)] rounded-[24px] border border-white/8 bg-black/18 p-3 shadow-[0_0_70px_rgba(255,145,65,0.07)] backdrop-blur-2xl sm:top-5 sm:w-[25rem] sm:p-4`}
      >
        <div className="mb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Github className="h-4 w-4 text-orange-100/70" />
            <Linkedin className="h-4 w-4 text-sky-100/70" />
            <div className="h-2 w-24 rounded-full bg-white/16 sm:w-32" />
          </div>
          <span className="h-2 w-2 rounded-full bg-emerald-200 shadow-[0_0_14px_rgba(110,231,183,0.7)]" />
        </div>
        <div className="grid gap-2">
          {["Repo", "Profile", "Launch"].map((item, index) => (
            <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.035] px-3 py-2">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-white/8 text-orange-100/75">
                {index === 1 ? <Linkedin className="h-3.5 w-3.5" /> : <FileText className="h-3.5 w-3.5" />}
              </div>
              <div className="min-w-0 flex-1">
                <div className="h-2 w-4/5 rounded-full bg-white/15" />
                <div className="mt-2 h-1.5 w-1/2 rounded-full bg-white/8" />
              </div>
              <Check className="h-3.5 w-3.5 text-emerald-200/55" />
            </div>
          ))}
        </div>
      </motion.div>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.06),rgba(5,5,5,0.74)_52%,rgba(5,5,5,0.18)),linear-gradient(90deg,rgba(5,5,5,0.1),rgba(5,5,5,0.56)_76%)] sm:bg-[linear-gradient(90deg,rgba(5,5,5,0.08),rgba(5,5,5,0.52)_72%),linear-gradient(180deg,rgba(5,5,5,0.04),rgba(5,5,5,0.18))]" />
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-neutral-100 antialiased">
      <ScrollStage />

      <div className="relative mx-auto max-w-7xl px-6 py-4 sm:px-6 sm:py-5 lg:px-8">
        <motion.nav
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="sticky top-3 z-30 mx-auto flex max-w-6xl items-center justify-between rounded-[20px] border border-white/10 bg-black/60 px-3.5 py-3 shadow-2xl shadow-black/35 backdrop-blur-3xl sm:top-4 sm:rounded-[24px] sm:px-4"
        >
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/10">
              <Rocket className="h-5 w-5 text-orange-300" />
            </div>
            <div>
              <p className="text-sm font-semibold tracking-wide text-white">Project Studio</p>
              <p className="text-[11px] text-white/45">GitHub + LinkedIn launch lab</p>
            </div>
          </a>
          <div className="hidden items-center gap-6 text-sm text-white/62 md:flex">
            <a className="transition hover:text-white" href="#packages">
              Packages
            </a>
            <a className="transition hover:text-white" href="#services">
              Services
            </a>
            <a className="transition hover:text-white" href="#business">
              Business
            </a>
            <a className="transition hover:text-white" href="#contact">
              Contact
            </a>
          </div>
          <a
            href={whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-white px-3 text-sm font-semibold text-black transition hover:bg-orange-100"
          >
            <MessageCircle className="h-4 w-4" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </motion.nav>

        <section className="relative grid min-h-[calc(100vh-84px)] items-center gap-8 overflow-hidden py-10 lg:grid-cols-[1.02fr_0.98fr] lg:py-20">
          <ProfileLaunchBackdrop />
          <motion.div variants={stagger} initial="hidden" animate="visible" className="relative z-10 max-w-3xl">
            <motion.div variants={fadeUp}>
              <SectionLabel tone="ember">Portfolio-ready projects before placements</SectionLabel>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-7 flex items-end gap-4">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.05 }}
                className="text-5xl font-semibold leading-none text-orange-400 sm:text-6xl lg:text-7xl"
              >
                <StatNumber value={120} />
              </motion.div>
              <div className="pb-1 text-left text-xs uppercase tracking-[0.22em] text-white/45">
                projects shipped
              </div>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-6 max-w-4xl text-[2.65rem] font-semibold leading-[1.03] tracking-normal text-white sm:text-6xl lg:text-7xl"
            >
              From project idea to profile-ready proof.
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-base leading-7 text-white/68 sm:text-lg">
              For 3rd year, 4th year, and passed-out BTech students who need clean repos, live demos,
              documentation, resume bullets, and a LinkedIn launch that feels credible in interviews.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <motion.a
                whileHover={{ y: -3, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                href={whatsapp}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r px-5 py-3 text-sm font-bold text-slate-950 shadow-2xl ${toneStyles.sun.button}`}
              >
                Share your current profile
                <ArrowRight className="h-4 w-4" />
              </motion.a>
              <motion.a
                whileHover={{ y: -3 }}
                href="#packages"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/12 bg-white/[0.06] px-5 py-3 text-sm font-semibold text-white backdrop-blur-xl transition hover:border-white/24"
              >
                View services
              </motion.a>
              <span className="text-xs text-white/45 sm:pl-2">First chat and quote are free.</span>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
              {[
                ["1-3", "serious repos"],
                ["Live", "demo + README"],
                ["ATS", "resume support"]
              ].map(([value, label]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.055] p-4 backdrop-blur-xl">
                  <p className="text-2xl font-semibold text-white">{value}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">{label}</p>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-4 text-sm text-white/60">
              <span className="inline-flex items-center gap-2">
                <Github className="h-4 w-4 text-orange-300" />
                GitHub-ready
              </span>
              <span className="inline-flex items-center gap-2">
                <Linkedin className="h-4 w-4 text-orange-300" />
                LinkedIn-ready
              </span>
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-orange-300" />
                Placement-ready
              </span>
            </motion.div>
          </motion.div>

          <div className="relative z-10">
            <HeroReel />
            <MobileHeroReel />
          </div>
        </section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="grid grid-cols-1 gap-4 py-6 sm:grid-cols-3"
        >
          {[
            ["Empty or messy GitHub", "Turn classroom code and half-built repos into a cleaner project trail."],
            ["No story on LinkedIn", "Launch with crisp visuals, copy, and a short explanation recruiters can scan."],
            ["College paperwork needed", "Add SRS, diagrams, slides, and viva prep without losing the real product work."]
          ].map(([title, desc], index) => (
            <motion.article
              key={title}
              variants={fadeUp}
              whileHover={{ y: -8, rotateX: 4, rotateY: -4 }}
              className={`group rounded-[28px] border border-white/10 bg-white/[0.055] p-5 shadow-2xl backdrop-blur-2xl transform-gpu ${[
                "shadow-orange-500/10",
                "shadow-amber-500/10",
                "shadow-rose-500/10"
              ][index]}`}
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-orange-200 transition group-hover:bg-orange-300 group-hover:text-slate-950">
                <BadgeCheck className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/55">{desc}</p>
            </motion.article>
          ))}
        </motion.section>

        <section id="packages" className="relative overflow-hidden rounded-[30px] py-16">
          <SectionProfileBackdrop align="right" />
          <div className="relative mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <SectionLabel tone="ember">Flagship package</SectionLabel>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Portfolio + Project system</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-white/50">
              Pricing is customised after a quick look at your deadline, current profile, and college requirements.
            </p>
          </div>

          <div className="relative grid gap-5 lg:grid-cols-[1.7fr_0.85fr]">
            <CardFrame tone="ember" className="p-6 sm:p-8">
              <div className="relative">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1 text-xs font-semibold text-amber-100">
                    Core build
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs text-white/55">
                    React / Node / Java / Python / AI / ML / DB
                  </span>
                </div>
                <h3 className="mt-5 text-2xl font-semibold text-white">A project you can actually explain.</h3>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-white/62">
                  We design and build a project that fits your target role, then package it with GitHub hygiene,
                  deployment, documentation, and profile-ready copy.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    "Modern stack with database-backed features",
                    "GitHub repo with clean README and structure",
                    "Deployed demo on Vercel, Render, or similar",
                    "Feature walkthrough and trade-off notes",
                    "LinkedIn launch post and CV bullets",
                    "Basic SRS plus UML / ER material"
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-2xl border border-white/8 bg-black/20 p-3 text-sm text-white/70"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-orange-300" />
                      {item}
                    </div>
                  ))}
                </div>

                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className={`mt-7 inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r px-5 py-3 text-sm font-bold text-slate-950 ${toneStyles.sun.button}`}
                >
                  Get a custom quote
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </CardFrame>

            <CardFrame tone="smoke" className="p-6">
              <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-white/55">
                How pricing works
              </h3>
              <div className="mt-5 space-y-4">
                {[
                  "Share your idea, semester, and deadline.",
                  "Get 1-2 project options with effort estimate.",
                  "Approve a clear quote before work starts.",
                  "Skip it freely if it does not fit."
                ].map((item, index) => (
                  <div key={item} className="flex gap-3">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10 text-xs font-semibold text-orange-100">
                      {index + 1}
                    </div>
                    <p className="pt-1 text-sm leading-6 text-white/62">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-7 rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/55">
                  <Move3d className="h-4 w-4 text-orange-300" />
                  motion density
                </div>
                <p className="mt-3 text-sm leading-6 text-white/60">
                  Extra motion, extra depth, and more visual bite without losing the actual message.
                </p>
              </div>
            </CardFrame>
          </div>
        </section>

        <section id="services" className="relative overflow-hidden rounded-[30px] py-12">
          <SectionProfileBackdrop align="left" compact />
          <div className="relative mb-8">
            <SectionLabel tone="gold">Services and add-ons</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Everything around the project story.</h2>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((card) => {
              const Icon = card.icon;
              return (
                <motion.article
                  key={card.title}
                  variants={fadeUp}
                  whileHover={{ y: -8, scale: 1.02, rotateX: 6, rotateY: -5 }}
                  transition={{ type: "spring", stiffness: 240, damping: 18 }}
                  className={`group relative overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.055] p-5 shadow-2xl backdrop-blur-2xl transform-gpu ${toneStyles[card.tone].glow}`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${toneStyles[card.tone].accent} opacity-0 transition duration-300 group-hover:opacity-100`}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(140deg,rgba(255,255,255,0.08),transparent_26%,transparent_74%,rgba(255,255,255,0.05))] opacity-0 transition duration-300 group-hover:opacity-100" />
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/75 to-transparent opacity-40" />
                  <div className="relative">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-semibold text-white">{card.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/58">{card.desc}</p>
                    <p className="mt-3 text-xs leading-5 text-white/38">{card.note}</p>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </section>

        <section id="business" className="py-16">
          <div className="mb-8 text-center">
            <SectionLabel tone="sun">Business solutions</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              Websites and apps with launch energy.
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-white/52">
              For small businesses, startups, and SMEs that need a clean online presence or a practical internal tool.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {businessServices.map((service) => {
              const Icon = service.icon;
              return (
                <CardFrame key={service.title} tone={service.tone} className="p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/12 bg-white/10">
                      <Icon className="h-6 w-6" />
                    </div>
                    <Zap className="h-5 w-5 text-white/35" />
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold text-white">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/60">{service.desc}</p>
                  <p className="mt-3 text-sm leading-6 text-white/45">{service.note}</p>
                  <a
                    href={whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-7 inline-flex items-center gap-2 rounded-2xl border border-white/12 bg-white/[0.08] px-5 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
                  >
                    Start a quote
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </CardFrame>
              );
            })}
          </div>
        </section>

        <section className="relative overflow-hidden rounded-[30px] py-12">
          <SectionProfileBackdrop align="right" compact />
          <div className="relative mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <SectionLabel tone="ember">Stack coverage</SectionLabel>
              <h2 className="mt-3 text-3xl font-semibold text-white">
                Built with familiar, interview-friendly tech.
              </h2>
            </div>
          </div>
          <div className="relative grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
            {techStack.map((tech) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={tech.name}
                  whileHover={{ y: -4, scale: 1.03, rotateX: 7, rotateY: -7 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  className="flex min-h-24 flex-col items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.045] p-3 text-center text-white/70 backdrop-blur-xl transform-gpu"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/8 text-xl text-orange-200">
                    {Icon ? <Icon /> : <Code2 className="h-5 w-5" />}
                  </div>
                  <span className="text-xs font-medium">{tech.name}</span>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section className="py-12">
          <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.055] p-5 pt-7 backdrop-blur-2xl sm:p-7">
            <ContributionBackdrop />
            <div className="relative mb-6 flex items-center justify-between gap-4">
              <div>
                <SectionLabel tone="copper">Deliverables</SectionLabel>
                <h2 className="mt-3 text-3xl font-semibold text-white">Numbers with momentum.</h2>
              </div>
              <ShieldCheck className="hidden h-9 w-9 text-orange-200/70 sm:block" />
            </div>
            <div className="relative grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -6, rotateX: 5, rotateY: -5 }}
                  className={`rounded-2xl border border-white/10 bg-black/24 p-4 text-center shadow-2xl backdrop-blur-xl transform-gpu ${[
                    "shadow-orange-500/10",
                    "shadow-amber-500/10",
                    "shadow-rose-500/10",
                    "shadow-orange-500/10",
                    "shadow-amber-500/10"
                  ][index]}`}
                >
                  <div className="text-3xl font-semibold text-orange-100">
                    <StatNumber value={stat.value} />
                  </div>
                  <p className="mt-2 text-xs uppercase tracking-[0.14em] text-white/42">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-16">
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-white/[0.09] to-white/[0.035] p-6 shadow-2xl shadow-black/20 backdrop-blur-2xl sm:p-8 lg:p-10">
            <SectionProfileBackdrop align="right" compact />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-center">
              <div>
                <SectionLabel tone="ember">Start here</SectionLabel>
                <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                  Tell me where you are stuck.
                </h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-white/60">
            Send your GitHub / LinkedIn links, semester, deadline, and project idea if you have one.
            You will get suggestions and a quote based on your actual situation.
          </p>
              </div>
              <div className="grid gap-3">
                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r px-5 py-3 text-sm font-bold text-slate-950 shadow-2xl ${toneStyles.sun.button}`}
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp - get quote
                </a>
                <a
                  href="mailto:praneethreddy0112@gmail.com"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/12 bg-white/[0.06] px-5 py-3 text-sm font-semibold text-white transition hover:border-white/24"
                >
                  praneethreddy0112@gmail.com
                </a>
                <p className="flex items-center justify-center gap-2 text-xs text-white/40">
                  <Github className="h-3.5 w-3.5" />
                  github.com/PraneethPW
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/10 py-8 text-center text-xs text-white/35">
          &copy; {new Date().getFullYear()} Praneeth. Project Studio.
        </footer>
      </div>
    </main>
  );
};

export default Home;
