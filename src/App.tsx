import {
  ArrowRight,
  Archive,
  Award,
  CalendarClock,
  ChevronDown,
  CheckCircle2,
  ExternalLink,
  FileCode2,
  FileSpreadsheet,
  FileText,
  Github,
  Image as ImageIcon,
  Linkedin,
  Mail,
  Menu,
  MonitorCog,
  Moon,
  Send,
  Sun,
  type LucideIcon,
  Video,
  X,
} from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion, type Variants } from 'framer-motion';
import { useEffect, useRef, useState, type MouseEvent, type ReactNode } from 'react';
import { legacyCredentials, legacyProjectGroups, type ArchiveLink, type ArchiveLinkType } from './data/before2021';
import { certificateProviders, certificates } from './data/certificates';
import { localizedContent, type Language, type LocalizedContent } from './data/i18n';
import { profile } from './data/profile';

const assetPath = (path: string) => `${import.meta.env.BASE_URL}${path}`;
const publicAsset = (path: string) => encodeURI(assetPath(path));

type Theme = 'light' | 'dark';

function scrollToSection(href: string) {
  const id = href.replace('#', '');
  const target = document.getElementById(id);

  if (!target) {
    return;
  }

  const headerOffset = document.querySelector('header')?.getBoundingClientRect().height ?? 0;
  const top = target.getBoundingClientRect().top + window.scrollY - headerOffset - 12;

  window.scrollTo({ top: Math.max(top, 0), behavior: 'auto' });
  window.history.replaceState(null, '', href);
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

function useMotionSettings() {
  const shouldReduceMotion = useReducedMotion();

  return {
    initial: shouldReduceMotion ? false : 'hidden',
    whileInView: shouldReduceMotion ? undefined : 'visible',
    viewport: { once: true, amount: 0.18 },
    transition: { duration: 0.55, ease: 'easeOut' as const },
  };
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('top');
  const activeSectionLockUntil = useRef(0);
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') {
      return 'light';
    }

    const savedTheme = window.localStorage.getItem('portfolio-theme');

    if (savedTheme === 'dark' || savedTheme === 'light') {
      return savedTheme;
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === 'undefined') {
      return 'en';
    }

    return window.localStorage.getItem('portfolio-language') === 'th' ? 'th' : 'en';
  });
  const content = localizedContent[language];
  const activateSection = (sectionId: string) => {
    activeSectionLockUntil.current = Date.now() + 1200;
    setActiveSection(sectionId);
  };

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#06101f' : '#f8fafc');
    window.localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = language === 'th' ? 'th' : 'en';
    window.localStorage.setItem('portfolio-language', language);
  }, [language]);

  useEffect(() => {
    const sectionIds = content.navigation.map((item) => item.href.replace('#', ''));

    const updateActiveSection = () => {
      if (Date.now() < activeSectionLockUntil.current) {
        return;
      }

      const headerOffset = document.querySelector('header')?.getBoundingClientRect().height ?? 0;
      const activationLine = headerOffset + 40;
      const activeId = sectionIds.reduce((currentId, sectionId) => {
        const section = document.getElementById(sectionId);

        if (!section) {
          return currentId;
        }

        return section.getBoundingClientRect().top <= activationLine ? sectionId : currentId;
      }, sectionIds[0] ?? 'top');

      setActiveSection(activeId);
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, [content.navigation]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-100">
      <Header activeSection={activeSection} content={content} isMenuOpen={isMenuOpen} language={language} setActiveSection={activateSection} setIsMenuOpen={setIsMenuOpen} setLanguage={setLanguage} setTheme={setTheme} theme={theme} />
      <main>
        <Hero content={content} />
        <SectionNavigator activeSection={activeSection} content={content} setActiveSection={activateSection} />
        <About content={content} />
        <Skills content={content} />
        <Experience content={content} />
        <Projects content={content} />
        <Certificates content={content} />
        <Education content={content} />
        <Contact content={content} />
      </main>
      <Footer />
    </div>
  );
}

type HeaderProps = {
  activeSection: string;
  content: LocalizedContent;
  isMenuOpen: boolean;
  language: Language;
  setActiveSection: (value: string) => void;
  setIsMenuOpen: (value: boolean) => void;
  setLanguage: (value: Language) => void;
  setTheme: (value: Theme) => void;
  theme: Theme;
};

function Header({ activeSection, content, isMenuOpen, language, setActiveSection, setIsMenuOpen, setLanguage, setTheme, theme }: HeaderProps) {
  const navigateToSection = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    setActiveSection(href.replace('#', ''));
    setIsMenuOpen(false);

    window.setTimeout(() => scrollToSection(href), 240);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.08)] transition-colors dark:border-cyan-400/25 dark:bg-[#06101f] dark:shadow-[0_10px_30px_rgba(2,8,23,0.38)]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
        <a href="#top" className="flex items-center gap-3 text-navy-950 dark:text-white">
          <span className="grid h-10 w-10 place-items-center rounded-lg bg-cyan-400 text-sm font-bold text-navy-950">
            JK
          </span>
          <span className="block">
            <span className="block text-sm font-semibold leading-tight">{profile.name}</span>
            <span className="block text-xs text-slate-500 dark:text-slate-300">Portfolio</span>
          </span>
        </a>

        <div className="hidden items-center gap-2 lg:flex">
          {content.navigation.map((item) => (
            <NavLink key={item.href} item={item} activeSection={activeSection} onNavigate={navigateToSection} />
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageToggle language={language} setLanguage={setLanguage} />
          <ThemeToggle setTheme={setTheme} theme={theme} />
        </div>
        <div className="flex items-center gap-3 lg:hidden">
          <button
            type="button"
            className="inline-grid h-10 w-10 place-items-center rounded-lg border border-slate-200 bg-slate-50 text-navy-950 transition hover:bg-slate-100 dark:border-cyan-300/35 dark:bg-white/[0.06] dark:text-white dark:hover:bg-white/[0.12] lg:hidden"
            aria-label="Toggle navigation"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          className="max-h-[calc(100dvh-64px)] overflow-y-auto border-t border-slate-200 bg-white px-4 py-4 shadow-2xl dark:border-cyan-400/20 dark:bg-[#08172a] lg:hidden"
        >
          <div className="mx-auto grid max-w-7xl gap-2 rounded-lg border border-slate-200 bg-slate-50 p-2 dark:border-cyan-300/20 dark:bg-[#0d2036]">
            <div className="mb-2 grid grid-cols-[1fr_auto] gap-2 border-b border-slate-200 pb-3 dark:border-white/10">
              <LanguageToggle language={language} setLanguage={setLanguage} expanded />
              <ThemeToggle setTheme={setTheme} theme={theme} />
            </div>
            {content.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(event) => navigateToSection(event, item.href)}
                className={`rounded-lg px-3 py-3 text-sm font-semibold transition ${
                  activeSection === item.href.replace('#', '')
                    ? 'bg-cyan-300 text-navy-950 shadow-sm'
                    : 'text-slate-700 hover:bg-white hover:text-cyan-700 dark:text-slate-100 dark:hover:bg-white/[0.12] dark:hover:text-cyan-200'
                }`}
              >
                {item.label}
              </a>
            ))}
            <div className="mt-2 border-t border-slate-200 pt-3 dark:border-white/10">
              <a className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-cyan-200 bg-white px-3 py-3 text-sm font-bold text-cyan-800 dark:border-cyan-300/45 dark:bg-white/[0.04] dark:text-cyan-100" href="#contact" onClick={(event) => navigateToSection(event, '#contact')}>
                <Send size={16} />
                {content.labels.contact}
              </a>
            </div>
          </div>
        </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function ThemeToggle({ setTheme, theme }: { setTheme: (value: Theme) => void; theme: Theme }) {
  const nextTheme = theme === 'dark' ? 'light' : 'dark';
  const Icon = theme === 'dark' ? Sun : Moon;

  return (
    <button
      type="button"
      onClick={() => setTheme(nextTheme)}
      className="inline-grid h-10 w-10 place-items-center rounded-lg border border-slate-200 bg-slate-50 text-cyan-800 transition hover:bg-slate-100 dark:border-cyan-300/30 dark:bg-white/[0.06] dark:text-cyan-100 dark:hover:bg-white/[0.12]"
      aria-label={`Switch to ${nextTheme} theme`}
      title={`Switch to ${nextTheme} theme`}
    >
      <Icon size={18} />
    </button>
  );
}

function LanguageToggle({
  expanded = false,
  language,
  setLanguage,
}: {
  expanded?: boolean;
  language: Language;
  setLanguage: (value: Language) => void;
}) {
  return (
    <div className={`grid grid-cols-2 rounded-lg border border-slate-200 bg-slate-50 p-1 dark:border-cyan-300/30 dark:bg-white/[0.06] ${expanded ? 'w-full' : 'w-[92px]'}`} aria-label="Language selector">
      {(['en', 'th'] as const).map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => setLanguage(option)}
          className={`rounded-md px-3 py-2 text-xs font-bold transition ${
            language === option ? 'bg-cyan-300 text-navy-950' : 'text-slate-600 hover:bg-white hover:text-cyan-800 dark:text-cyan-100 dark:hover:bg-white/[0.12]'
          }`}
        >
          {option.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

type NavItem = {
  label: string;
  href: string;
};

function NavLink({
  activeSection,
  item,
  onNavigate,
}: {
  activeSection: string;
  item: NavItem;
  onNavigate: (event: MouseEvent<HTMLAnchorElement>, href: string) => void;
}) {
  const isActive = activeSection === item.href.replace('#', '');

  return (
    <a
      href={item.href}
      onClick={(event) => onNavigate(event, item.href)}
      className={`rounded-lg px-3 py-2 text-sm font-semibold transition ${
        isActive
          ? 'bg-cyan-300 text-navy-950 shadow-[0_0_0_1px_rgba(15,23,42,0.08)]'
          : 'text-slate-700 hover:bg-slate-100 hover:text-cyan-800 dark:text-slate-100 dark:hover:bg-white/[0.12] dark:hover:text-cyan-200'
      }`}
    >
      {item.label}
    </a>
  );
}

function Hero({ content }: { content: LocalizedContent }) {
  const motionSettings = useMotionSettings();

  return (
    <section id="top" className="relative overflow-hidden bg-slate-50 transition-colors dark:bg-navy-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(8,145,178,0.14),transparent_34%),linear-gradient(135deg,rgba(14,165,233,0.10),transparent_45%)] dark:bg-[radial-gradient(circle_at_20%_20%,rgba(56,213,255,0.18),transparent_32%),linear-gradient(135deg,rgba(14,165,233,0.14),transparent_45%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 md:grid-cols-[1.2fr_0.8fr] md:items-center lg:px-8 lg:py-20">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
          <p className="mb-4 inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-800 dark:border-cyan-300/30 dark:bg-cyan-300/10 dark:text-cyan-200">
            {content.hero.eyebrow}
          </p>
          <motion.h1 variants={fadeUp} transition={motionSettings.transition} className="max-w-4xl text-4xl font-bold tracking-tight text-navy-950 dark:text-white sm:text-5xl">
            {profile.name}
          </motion.h1>
          <motion.p variants={fadeUp} transition={motionSettings.transition} className="mt-4 text-xl font-semibold text-cyan-800 dark:text-cyan-200 sm:text-2xl">{content.hero.role}</motion.p>
          <motion.p variants={fadeUp} transition={motionSettings.transition} className="mt-5 max-w-3xl text-base leading-7 text-slate-700 dark:text-slate-300 sm:text-lg">{content.hero.summary}</motion.p>
          <motion.div variants={fadeUp} transition={motionSettings.transition} className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a className="btn-primary" href="#experience">
              {content.hero.viewExperience}
              <ArrowRight size={18} />
            </a>
            <a className="btn-secondary" href="#projects">
              {content.hero.viewProjects}
              <ArrowRight size={18} />
            </a>
            <a className="btn-ghost" href="#contact">
              <Send size={18} />
              {content.hero.contactMe}
            </a>
          </motion.div>
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="grid gap-4">
          <motion.div
            variants={fadeUp}
            transition={motionSettings.transition}
            className="rounded-lg border border-slate-200 bg-white p-5 shadow-card backdrop-blur dark:border-cyan-300/20 dark:bg-white/[0.08]"
          >
            <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:text-left md:flex-col md:text-center xl:flex-row xl:text-left">
              <div className="relative shrink-0">
                <div className="absolute inset-0 rounded-full bg-cyan-300 blur-2xl opacity-25" />
                <img
                  src={assetPath('profile.jpg')}
                  alt="Jakapan Kanta"
                  className="relative h-36 w-36 rounded-full border-4 border-cyan-300/35 object-cover shadow-2xl"
                  onError={(event) => {
                    event.currentTarget.src = assetPath('profile-avatar.svg');
                  }}
                />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-800 dark:text-cyan-200">{content.hero.portfolio}</p>
                <p className="mt-2 text-xl font-bold text-navy-950 dark:text-white">{profile.name}</p>
                <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">{content.hero.role}</p>
                <div className="mt-4 flex justify-center gap-3 sm:justify-start md:justify-center xl:justify-start">
                  <a className="inline-grid h-10 w-10 place-items-center rounded-lg border border-slate-200 bg-slate-50 text-cyan-800 transition hover:bg-cyan-50 dark:border-white/15 dark:bg-white/[0.06] dark:text-cyan-100 dark:hover:bg-white/[0.12]" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                    <Linkedin size={18} />
                  </a>
                  <a className="inline-grid h-10 w-10 place-items-center rounded-lg border border-slate-200 bg-slate-50 text-cyan-800 transition hover:bg-cyan-50 dark:border-white/15 dark:bg-white/[0.06] dark:text-cyan-100 dark:hover:bg-white/[0.12]" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                    <Github size={18} />
                  </a>
                  <a className="inline-grid h-10 w-10 place-items-center rounded-lg border border-slate-200 bg-slate-50 text-cyan-800 transition hover:bg-cyan-50 dark:border-white/15 dark:bg-white/[0.06] dark:text-cyan-100 dark:hover:bg-white/[0.12]" href={`mailto:${profile.email}`} aria-label="Email">
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2">
          {content.metrics.map((metric) => (
            <motion.div
              key={metric.label}
              variants={fadeUp}
              transition={motionSettings.transition}
              whileHover={{ y: -5 }}
              className="rounded-lg border border-slate-200 bg-white p-5 shadow-card backdrop-blur transition hover:border-cyan-200 dark:border-white/10 dark:bg-white/[0.08] dark:shadow-none dark:hover:bg-white/[0.12]"
            >
              <metric.icon className="mb-4 text-cyan-700 dark:text-cyan-300" size={26} />
              <p className="text-2xl font-bold text-navy-950 dark:text-white">{metric.value}</p>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{metric.label}</p>
            </motion.div>
          ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SectionNavigator({
  activeSection,
  content,
  setActiveSection,
}: {
  activeSection: string;
  content: LocalizedContent;
  setActiveSection: (value: string) => void;
}) {
  const motionSettings = useMotionSettings();
  const navigateToSection = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    setActiveSection(href.replace('#', ''));
    scrollToSection(href);
  };

  return (
    <section className="border-b border-slate-200 bg-white py-3 transition-colors dark:border-slate-800 dark:bg-slate-900 sm:py-5">
      <motion.div
        {...motionSettings}
        variants={staggerContainer}
        className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 pb-1 sm:grid sm:grid-cols-2 sm:gap-3 sm:overflow-visible sm:px-6 sm:pb-0 lg:grid-cols-4 lg:px-8 xl:grid-cols-7"
      >
        {content.sectionSummaries.map((item) => {
          const isActive = activeSection === item.href.replace('#', '');

          return (
            <motion.a
              key={item.href}
              href={item.href}
              onClick={(event) => navigateToSection(event, item.href)}
              variants={fadeUp}
              transition={motionSettings.transition}
              className={`min-w-36 rounded-lg border px-3 py-2.5 transition hover:-translate-y-0.5 sm:min-w-0 sm:p-4 ${
                isActive
                  ? 'border-cyan-300 bg-cyan-50 text-navy-950 shadow-sm dark:border-cyan-400/50 dark:bg-cyan-400/15 dark:text-cyan-50'
                  : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-cyan-200 hover:bg-white dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-200 dark:hover:border-cyan-500/50 dark:hover:bg-slate-800'
              }`}
            >
              <span className="block text-sm font-bold">{item.label}</span>
              <span className="mt-1 hidden text-xs leading-5 text-slate-500 dark:text-slate-400 sm:block">{item.description}</span>
            </motion.a>
          );
        })}
      </motion.div>
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  tone = 'light',
}: {
  eyebrow: string;
  title: string;
  description?: string;
  tone?: 'light' | 'dark';
}) {
  const isDark = tone === 'dark';

  return (
    <div className="mx-auto mb-8 max-w-3xl text-center">
      <p className={`text-sm font-semibold uppercase tracking-[0.18em] ${isDark ? 'text-cyan-300' : 'text-cyan-700 dark:text-cyan-300'}`}>{eyebrow}</p>
      <h2 className={`mt-2 text-2xl font-bold tracking-tight sm:text-3xl ${isDark ? 'text-white' : 'text-navy-950 dark:text-white'}`}>{title}</h2>
      {description && <p className={`mt-3 text-sm leading-6 sm:text-base ${isDark ? 'text-slate-300' : 'text-slate-600 dark:text-slate-300'}`}>{description}</p>}
    </div>
  );
}

function About({ content }: { content: LocalizedContent }) {
  const motionSettings = useMotionSettings();

  return (
    <section id="about" className="section bg-white transition-colors dark:bg-slate-950">
      <SectionHeading
        eyebrow={content.sections.about.eyebrow}
        title={content.sections.about.title}
        description={content.sections.about.description}
      />
      <motion.div {...motionSettings} variants={staggerContainer} className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <motion.div variants={fadeUp} transition={motionSettings.transition} className="card p-5 sm:p-6">
          <p className="leading-7 text-slate-700 dark:text-slate-300">{content.profile.about}</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {content.strengths.map((strength) => (
              <div key={strength.label} className="flex items-start gap-3 rounded-lg bg-slate-50 p-3 dark:bg-slate-800/70">
                <strength.icon className="mt-0.5 shrink-0 text-cyan-700 dark:text-cyan-300" size={20} />
                <span className="text-sm font-medium leading-6 text-slate-700 dark:text-slate-300">{strength.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div variants={fadeUp} transition={motionSettings.transition} className="card p-5 sm:p-6">
          <h3 className="text-xl font-bold text-navy-950 dark:text-white">{content.labels.workFocus}</h3>
          <div className="mt-5 space-y-5">
            {content.focusItems.map((item) => (
              <div key={item.label}>
                <div className="mb-2 flex items-center justify-between gap-3">
                  <span className="flex items-center gap-2 text-sm font-semibold text-slate-800 dark:text-slate-200">
                    <item.icon size={18} className="text-cyan-700 dark:text-cyan-300" />
                    {item.label}
                  </span>
                  <span className="text-sm font-bold text-navy-950 dark:text-white">{item.value}%</span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                  <div className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-700" style={{ width: `${item.value}%` }} />
                </div>
              </div>
            ))}
          </div>
          <h3 className="mt-7 text-xl font-bold text-navy-950 dark:text-white">{content.labels.lifecycle}</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {content.lifecycle.map((item) => (
              <span key={item} className="rounded-full border border-cyan-100 bg-cyan-50 px-3 py-1.5 text-xs font-semibold text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-100">
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function Skills({ content }: { content: LocalizedContent }) {
  const motionSettings = useMotionSettings();

  return (
    <section id="skills" className="section bg-slate-50 transition-colors dark:bg-slate-900">
      <SectionHeading
        eyebrow={content.sections.skills.eyebrow}
        title={content.sections.skills.title}
        description={content.sections.skills.description}
      />
      <motion.div {...motionSettings} variants={staggerContainer} className="mx-auto grid max-w-7xl gap-5 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {content.skillCategories.map((category) => (
          <motion.div key={category.title} variants={fadeUp} transition={motionSettings.transition} className="card p-5">
            <h3 className="text-lg font-bold text-navy-950 dark:text-white">{category.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span key={skill} className="rounded-md bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

function Experience({ content }: { content: LocalizedContent }) {
  const motionSettings = useMotionSettings();

  return (
    <section id="experience" className="section bg-white transition-colors dark:bg-slate-950">
      <SectionHeading
        eyebrow={content.sections.experience.eyebrow}
        title={content.sections.experience.title}
        description={content.sections.experience.description}
      />
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative border-l-2 border-cyan-100 pl-6 dark:border-cyan-400/25 sm:pl-8">
          {content.experiences.map((item) => (
            <motion.article
              key={`${item.company}-${item.period}`}
              {...motionSettings}
              variants={fadeUp}
              className="relative mb-8 last:mb-0"
            >
              <span className="absolute -left-[34px] top-2 h-4 w-4 rounded-full border-4 border-white bg-cyan-500 shadow dark:border-slate-950" />
              <div className="card p-5 sm:p-6">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">{item.period}</p>
                    <h3 className="mt-1 text-xl font-bold text-navy-950 dark:text-white">{item.role}</h3>
                    <p className="mt-1 font-semibold text-slate-700 dark:text-slate-300">{item.company}</p>
                  </div>
                  <p className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">{item.location}</p>
                </div>
                <p className="mt-3 text-sm font-semibold text-slate-500 dark:text-slate-400">{item.business}</p>
                <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-300 sm:text-base">{item.summary}</p>
                <div className="mt-4 rounded-lg border border-cyan-100 bg-cyan-50/70 p-3 dark:border-cyan-400/20 dark:bg-cyan-400/10">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-cyan-800 dark:text-cyan-200">{content.labels.keyAchievements}</p>
                  <ul className="mt-3 grid gap-2">
                    {item.achievements.map((achievement) => (
                      <li key={achievement} className="flex gap-2 text-sm leading-6 text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="mt-0.5 shrink-0 text-cyan-700 dark:text-cyan-300" size={17} />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <span key={tech} className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-800 dark:bg-blue-400/10 dark:text-blue-100">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects({ content }: { content: LocalizedContent }) {
  const motionSettings = useMotionSettings();
  const evidenceFileCount = legacyProjectGroups.reduce((total, group) => total + group.links.length, 0);

  return (
    <section id="projects" className="section bg-slate-50 text-slate-900 transition-colors dark:bg-navy-950 dark:text-white">
      <SectionHeading
        eyebrow={content.sections.projects.eyebrow}
        title={content.sections.projects.title}
        description={content.sections.projects.description}
      />
      <motion.div {...motionSettings} variants={staggerContainer} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ExpandablePanel
          collapseLabel={content.labels.collapse}
          defaultExpanded
          eyebrow={content.labels.currentPhase}
          expandLabel={content.labels.expand}
          title={content.labels.currentProjects}
          stats={[
            { label: content.labels.sampleProjects, value: content.projects.length, icon: MonitorCog },
          ]}
        >
          <div className="grid gap-5 lg:grid-cols-2">
            {content.projects.map((project) => (
              <motion.article
                key={project.title}
                whileHover={{ y: -5 }}
                className="rounded-lg border border-slate-200 bg-white p-5 shadow-card transition hover:border-cyan-200 dark:border-white/10 dark:bg-white/[0.08] dark:shadow-card dark:hover:bg-white/[0.12]"
              >
                <project.icon className="text-cyan-700 dark:text-cyan-300" size={30} />
                <h3 className="mt-4 text-xl font-bold text-navy-950 dark:text-white">{project.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-300 sm:text-base">{project.description}</p>
                <p className="mt-4 rounded-lg border border-cyan-100 bg-cyan-50 p-3 text-sm font-medium leading-6 text-cyan-900 dark:border-cyan-300/20 dark:bg-cyan-300/10 dark:text-cyan-100">
                  {project.impact}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 dark:bg-white/10 dark:text-slate-100">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </ExpandablePanel>

        <div className="mt-5">
          <ExpandablePanel
            collapseLabel={content.labels.collapse}
            defaultExpanded={false}
            eyebrow={content.labels.previousPhase}
            expandLabel={content.labels.expand}
            title={content.labels.earlierProjects}
            stats={[
              { label: content.labels.sampleProjects, value: legacyProjectGroups.length, icon: Archive },
              { label: content.labels.evidenceFiles, value: evidenceFileCount, icon: FileText },
            ]}
          >
            <div className="grid gap-5">
              {legacyProjectGroups.map((group) => (
                <LegacyProjectCard key={group.title} group={group} label={content.labels.openFile} />
              ))}
            </div>
          </ExpandablePanel>
        </div>
      </motion.div>
    </section>
  );
}

function Certificates({ content }: { content: LocalizedContent }) {
  const motionSettings = useMotionSettings();
  const categories = Array.from(new Set(certificates.map((certificate) => certificate.category))).sort();
  const stats = [
    { label: content.labels.certificatesCount, value: certificates.length, icon: Award },
    { label: content.labels.providers, value: certificateProviders.length, icon: FileText },
    { label: content.labels.topics, value: categories.length, icon: CheckCircle2 },
  ];

  return (
    <section id="certificates" className="section bg-white transition-colors dark:bg-slate-950">
      <SectionHeading
        eyebrow={content.sections.certificates.eyebrow}
        title={content.sections.certificates.title}
        description={content.sections.certificates.description}
      />
      <motion.div {...motionSettings} variants={staggerContainer} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ExpandablePanel
          collapseLabel={content.labels.collapse}
          defaultExpanded
          eyebrow={content.labels.currentPhase}
          expandLabel={content.labels.expand}
          title={content.labels.recentCredentials}
          stats={stats}
        >
          <div className="grid gap-8">
            {certificateProviders.map((provider) => {
              const providerCertificates = certificates.filter((certificate) => certificate.provider === provider);

              return (
                <motion.div key={provider} className="rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-900/70 sm:p-5">
                  <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-700 dark:text-cyan-300">{provider}</p>
                      <h3 className="mt-1 text-xl font-bold text-navy-950 dark:text-white">{providerCertificates.length} {content.labels.certificatesCount}</h3>
                    </div>
                  </div>
                  <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                    {providerCertificates.map((certificate) => (
                      <motion.a
                        key={certificate.file}
                        href={publicAsset(certificate.file)}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ y: -4 }}
                        className="group flex min-h-36 flex-col justify-between rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition hover:border-cyan-200 hover:shadow-card dark:border-slate-700 dark:bg-slate-950/80 dark:hover:border-cyan-500/50"
                      >
                        <span>
                          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-cyan-50 px-3 py-1 text-xs font-bold text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-100">
                            <Award size={14} />
                            {certificate.category}
                          </span>
                          <span className="mt-3 block text-base font-bold leading-6 text-navy-950 dark:text-white">{certificate.title}</span>
                        </span>
                        <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-cyan-800 transition group-hover:text-cyan-700 dark:text-cyan-200 dark:group-hover:text-cyan-100">
                          {content.labels.viewCertificate}
                          <ExternalLink size={15} />
                        </span>
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </ExpandablePanel>

        <div className="mt-5">
          <ExpandablePanel
            collapseLabel={content.labels.collapse}
            defaultExpanded={false}
            eyebrow={content.labels.previousPhase}
            expandLabel={content.labels.expand}
            title={content.labels.earlierCredentials}
            stats={[
              { label: content.labels.archivedCredentials, value: legacyCredentials.length, icon: Award },
              { label: content.labels.evidenceFiles, value: legacyCredentials.length, icon: FileText },
            ]}
          >
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {legacyCredentials.map((credential) => (
                <motion.a
                  key={credential.file}
                  href={publicAsset(credential.file)}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -4 }}
                  className="group flex min-h-32 flex-col justify-between rounded-lg border border-slate-200 bg-slate-50 p-4 transition hover:border-cyan-200 hover:bg-white hover:shadow-card dark:border-slate-700 dark:bg-slate-900/70 dark:hover:border-cyan-500/50 dark:hover:bg-slate-900"
                >
                  <span>
                    <span className="inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-white px-3 py-1 text-xs font-bold text-cyan-800 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-100">
                      <CalendarClock size={14} />
                      {credential.year} · {credential.category}
                    </span>
                    <span className="mt-3 block text-base font-bold leading-6 text-navy-950 dark:text-white">{credential.title}</span>
                  </span>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-cyan-800 transition group-hover:text-cyan-700 dark:text-cyan-200 dark:group-hover:text-cyan-100">
                    {content.labels.openFile}
                    <ExternalLink size={15} />
                  </span>
                </motion.a>
              ))}
            </div>
          </ExpandablePanel>
        </div>
      </motion.div>
    </section>
  );
}

function ExpandablePanel({
  children,
  collapseLabel,
  defaultExpanded,
  eyebrow,
  expandLabel,
  stats,
  title,
}: {
  children: ReactNode;
  collapseLabel: string;
  defaultExpanded: boolean;
  eyebrow: string;
  expandLabel: string;
  stats: { label: string; value: number | string; icon: LucideIcon }[];
  title: string;
}) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <div className="rounded-lg border border-cyan-100 bg-cyan-50/70 p-4 dark:border-cyan-400/20 dark:bg-cyan-400/10 sm:p-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-800 dark:text-cyan-200">{eyebrow}</p>
          <h3 className="mt-2 text-2xl font-bold text-navy-950 dark:text-white">{title}</h3>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:min-w-[360px]">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-lg border border-cyan-100 bg-white p-3 dark:border-cyan-400/20 dark:bg-slate-950/40">
              <stat.icon className="text-cyan-700 dark:text-cyan-300" size={18} />
              <p className="mt-2 text-xl font-bold text-navy-950 dark:text-white">{stat.value}</p>
              <p className="text-xs font-semibold text-slate-600 dark:text-slate-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      <button
        type="button"
        onClick={() => setIsExpanded((current) => !current)}
        className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-cyan-200 bg-white px-4 py-3 text-sm font-bold text-cyan-800 transition hover:border-cyan-300 hover:bg-cyan-50 dark:border-cyan-300/30 dark:bg-slate-950/40 dark:text-cyan-100 dark:hover:bg-cyan-400/10 sm:w-auto"
        aria-expanded={isExpanded}
      >
        {isExpanded ? collapseLabel : expandLabel}
        <ChevronDown className={`transition-transform ${isExpanded ? 'rotate-180' : ''}`} size={17} />
      </button>
      <motion.div
        initial={false}
        animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
        transition={{ duration: 0.28, ease: 'easeOut' }}
        className="overflow-hidden"
        aria-hidden={!isExpanded}
        style={{ pointerEvents: isExpanded ? 'auto' : 'none' }}
      >
        <div className="pt-5">{children}</div>
      </motion.div>
    </div>
  );
}

function LegacyProjectCard({
  group,
  label,
}: {
  group: (typeof legacyProjectGroups)[number];
  label: string;
}) {
  return (
    <motion.article className="card overflow-hidden">
      <div className="grid gap-0 xl:grid-cols-[0.72fr_1fr]">
        {group.preview && (
          <a href={publicAsset(group.preview)} target="_blank" rel="noreferrer" className="block bg-slate-100 dark:bg-slate-800">
            <img src={publicAsset(group.preview)} alt={group.title} className="h-full min-h-56 w-full object-cover" loading="lazy" />
          </a>
        )}
        <div className={`p-5 sm:p-6 ${group.preview ? '' : 'xl:col-span-2'}`}>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-700 dark:text-cyan-300">{group.category}</p>
              <h3 className="mt-2 text-xl font-bold text-navy-950 dark:text-white">{group.title}</h3>
            </div>
            <span className="rounded-full bg-cyan-50 px-3 py-1.5 text-xs font-bold text-cyan-800 dark:bg-cyan-400/10 dark:text-cyan-100">{group.period}</span>
          </div>
          <p className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-300">{group.summary}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {group.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-5 grid gap-2 sm:grid-cols-2">
            {group.links.map((link) => (
              <ArchiveFileLink key={link.file} link={link} label={label} />
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function ArchiveFileLink({ label, link }: { label: string; link: ArchiveLink }) {
  const Icon = archiveLinkIcons[link.type];

  return (
    <a
      href={publicAsset(link.file)}
      target="_blank"
      rel="noreferrer"
      className="group flex items-center justify-between gap-3 rounded-lg border border-slate-200 bg-white px-3 py-3 text-sm font-semibold text-slate-700 transition hover:border-cyan-200 hover:text-cyan-800 dark:border-slate-700 dark:bg-slate-950/70 dark:text-slate-200 dark:hover:border-cyan-500/50 dark:hover:text-cyan-200"
      title={`${label}: ${link.title}`}
    >
      <span className="flex min-w-0 items-center gap-2">
        <Icon className="shrink-0 text-cyan-700 dark:text-cyan-300" size={16} />
        <span className="truncate">{link.title}</span>
      </span>
      <ExternalLink className="shrink-0 text-slate-400 transition group-hover:text-cyan-700 dark:group-hover:text-cyan-300" size={15} />
    </a>
  );
}

const archiveLinkIcons: Record<ArchiveLinkType, LucideIcon> = {
  pdf: FileText,
  image: ImageIcon,
  video: Video,
  document: FileText,
  spreadsheet: FileSpreadsheet,
  diagram: FileCode2,
};

function Education({ content }: { content: LocalizedContent }) {
  const motionSettings = useMotionSettings();

  return (
    <section id="education" className="section bg-white transition-colors dark:bg-slate-950">
      <SectionHeading
        eyebrow={content.sections.education.eyebrow}
        title={content.sections.education.title}
        description={content.sections.education.description}
      />
      <motion.div {...motionSettings} variants={staggerContainer} className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          {content.education.map((item) => (
            <motion.div key={item.school} variants={fadeUp} transition={motionSettings.transition} className="card p-5">
              <p className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">{item.period}</p>
              <h3 className="mt-2 text-lg font-bold text-navy-950 dark:text-white">{item.school}</h3>
              <p className="mt-2 font-medium text-slate-700 dark:text-slate-300">{item.degree}</p>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{item.grade} · {item.detail}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function Contact({ content }: { content: LocalizedContent }) {
  const motionSettings = useMotionSettings();

  return (
    <section id="contact" className="section bg-slate-50 transition-colors dark:bg-slate-900">
      <SectionHeading
        eyebrow={content.sections.contact.eyebrow}
        title={content.sections.contact.title}
        description={content.sections.contact.description}
      />
      <motion.div {...motionSettings} variants={staggerContainer} className="mx-auto grid max-w-4xl gap-4 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
        <motion.a variants={fadeUp} transition={motionSettings.transition} className="contact-card" href={profile.linkedin} target="_blank" rel="noreferrer">
          <Linkedin className="text-cyan-700 dark:text-cyan-300" size={26} />
          <span className="font-bold text-navy-950 dark:text-white">{content.labels.linkedin}</span>
          <span className="text-sm text-slate-600 dark:text-slate-300">jakapan-kanta</span>
        </motion.a>
        <motion.a variants={fadeUp} transition={motionSettings.transition} className="contact-card" href={profile.github} target="_blank" rel="noreferrer">
          <Github className="text-cyan-700 dark:text-cyan-300" size={26} />
          <span className="font-bold text-navy-950 dark:text-white">{content.labels.github}</span>
          <span className="text-sm text-slate-600 dark:text-slate-300">Ligerking007</span>
        </motion.a>
        <motion.a variants={fadeUp} transition={motionSettings.transition} className="contact-card" href={`mailto:${profile.email}`}>
          <Mail className="text-cyan-700 dark:text-cyan-300" size={26} />
          <span className="font-bold text-navy-950 dark:text-white">{content.labels.email}</span>
          <span className="break-all text-sm text-slate-600 dark:text-slate-300">{profile.email}</span>
        </motion.a>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-4 py-8 text-center text-sm text-slate-500 transition-colors dark:border-slate-800 dark:bg-navy-950 dark:text-slate-400">
      <p>
        © {new Date().getFullYear()} <span className="font-semibold text-navy-950 dark:text-white">{profile.name}</span>. Built with React, Vite, TypeScript, Tailwind CSS, and GitHub Pages.
      </p>
    </footer>
  );
}

export default App;
