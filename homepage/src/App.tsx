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
  SiPostgresql,
  SiPrisma,
  SiSpringboot,
  SiTailwindcss,
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
  "https://wa.me/918374606752?text=Hi%20Praneeth%2C%20I%20need%20a%20project";

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

  return (
    <motion.div
      style={{ rotateX, rotateY, perspective: 1800 }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        x.set(event.clientX - rect.left - rect.width / 2);
        y.set(event.clientY - rect.top - rect.height / 2);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className="relative hidden min-h-[520px] overflow-hidden rounded-[32px] border border-white/12 bg-white/[0.06] p-5 shadow-2xl shadow-black/35 backdrop-blur-3xl transform-gpu lg:block"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,149,58,0.18),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02)_30%,rgba(255,255,255,0.06))]" />
      <div className="absolute inset-0 film-noise" />
      <motion.div
        animate={{ opacity: [0.65, 1, 0.65], scale: [1, 1.02, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-x-6 top-6 rounded-[28px] border border-orange-200/14 bg-[radial-gradient(circle_at_50%_18%,rgba(255,148,53,0.34),rgba(255,148,53,0.08)_34%,rgba(0,0,0,0.18)_70%)] p-5"
      >
        <div className="absolute inset-0 video-scan opacity-40" />
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-orange-100/80">
            <BlinkDot tone="amber" />
            motion reel
          </span>
          <Move3d className="h-4 w-4 text-orange-200" />
        </div>

        <div className="mt-5 grid gap-3">
          <div className="relative h-56 overflow-hidden rounded-[26px] border border-white/12 bg-[linear-gradient(135deg,rgba(255,255,255,0.12),rgba(255,145,65,0.08)_28%,rgba(0,0,0,0.25)_72%)]">
            <motion.div
              animate={{ backgroundPositionX: ["0%", "100%"] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.02)_0%,rgba(255,255,255,0.12)_18%,rgba(255,145,65,0.05)_34%,rgba(255,255,255,0.02)_56%,rgba(255,255,255,0.1)_78%,rgba(255,255,255,0.02)_100%)] bg-[length:220%_220%] opacity-55"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(255,145,65,0.32),transparent_24%),radial-gradient(circle_at_50%_70%,rgba(255,255,255,0.1),transparent_20%)]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/18 bg-black/35 shadow-[0_0_50px_rgba(255,145,65,0.28)] backdrop-blur-xl">
                <Play className="h-6 w-6 fill-white text-white" />
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[10px] uppercase tracking-[0.24em] text-white/55">
              <span>video layer</span>
              <span>looping light</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
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
      </motion.div>

      <motion.div
        animate={{ x: [0, 12, 0], y: [0, -10, 0], rotate: [0, 1.5, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-28 right-7 w-52 rounded-[24px] border border-white/12 bg-black/35 p-4 backdrop-blur-2xl"
      >
        <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-white">
          <ScanLine className="h-4 w-4 text-orange-300" />
          motion reel
        </div>
        <div className="space-y-2">
          {["Light pass", "Depth pass", "Launch pass"].map((item, index) => (
            <div key={item} className="flex items-center gap-2 text-xs text-white/70">
              <BlinkDot tone={index === 1 ? "amber" : "orange"} delay={index * 0.2} className="h-1.5 w-1.5" />
              {item}
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        animate={{ scale: [1, 1.04, 1], opacity: [0.85, 1, 0.85] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-8 rounded-full border border-orange-300/20 bg-orange-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-orange-100"
      >
        placement ready
      </motion.div>
    </motion.div>
  );
};

const Home: React.FC = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-neutral-100 antialiased">
      <ScrollStage />

      <div className="relative mx-auto max-w-7xl px-5 py-5 sm:px-6 lg:px-8">
        <motion.nav
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="sticky top-4 z-30 mx-auto flex max-w-6xl items-center justify-between rounded-[24px] border border-white/10 bg-black/55 px-4 py-3 shadow-2xl shadow-black/35 backdrop-blur-3xl"
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

        <section className="grid min-h-[calc(100vh-92px)] items-center gap-10 py-14 lg:grid-cols-[1.02fr_0.98fr] lg:py-20">
          <motion.div variants={stagger} initial="hidden" animate="visible" className="max-w-3xl">
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
              className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.02] tracking-normal text-white sm:text-6xl lg:text-7xl"
            >
              Build the project story your profile is missing.
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-base leading-7 text-white/68 sm:text-lg">
              For 3rd and 4th year BTech students who need clean repos, live demos,
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

          <HeroReel />
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

        <section id="packages" className="py-16">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <SectionLabel tone="ember">Flagship package</SectionLabel>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Portfolio + Project system</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-white/50">
              Pricing is customised after a quick look at your deadline, current profile, and college requirements.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1.7fr_0.85fr]">
            <CardFrame tone="ember" className="p-6 sm:p-8">
              <div className="relative">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1 text-xs font-semibold text-amber-100">
                    Core build
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs text-white/55">
                    React / Node / Java / DB
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

        <section id="services" className="py-12">
          <div className="mb-8">
            <SectionLabel tone="gold">Services and add-ons</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Everything around the project story.</h2>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
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

        <section className="py-12">
          <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <SectionLabel tone="ember">Stack coverage</SectionLabel>
              <h2 className="mt-3 text-3xl font-semibold text-white">
                Built with familiar, interview-friendly tech.
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
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
          <div className="rounded-[30px] border border-white/10 bg-white/[0.055] p-5 backdrop-blur-2xl sm:p-7">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <SectionLabel tone="copper">Deliverables</SectionLabel>
                <h2 className="mt-3 text-3xl font-semibold text-white">Numbers with momentum.</h2>
              </div>
              <ShieldCheck className="hidden h-9 w-9 text-orange-200/70 sm:block" />
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
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
          <div className="overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-white/[0.09] to-white/[0.035] p-6 shadow-2xl shadow-black/20 backdrop-blur-2xl sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-center">
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
