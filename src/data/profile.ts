import {
  BadgeCheck,
  Binary,
  BookOpenCheck,
  BriefcaseBusiness,
  ClipboardCheck,
  Code2,
  Database,
  GitBranch,
  Layers3,
  LayoutDashboard,
  Lightbulb,
  LucideIcon,
  MessageSquareCode,
  MonitorCog,
  Network,
  ServerCog,
  ShieldCheck,
  Smartphone,
  Users,
} from 'lucide-react';

export type SkillCategory = {
  title: string;
  skills: string[];
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  business: string;
  summary: string;
  technologies: string[];
};

export type Project = {
  title: string;
  description: string;
  impact: string;
  technologies: string[];
  icon: LucideIcon;
};

export type FocusItem = {
  label: string;
  value: number;
  icon: LucideIcon;
};

export const profile = {
  name: 'Jakapan Kanta',
  role: 'Senior Software Developer',
  email: 'pundum_k@hotmail.com',
  linkedin: 'https://www.linkedin.com/in/jakapan-kanta-16199a158/',
  github: 'https://github.com/Ligerking007',
  summary:
    'Senior Software Developer and Team Lead with 16+ years of experience delivering scalable web, backend, and mobile applications across healthcare, finance, and transportation domains.',
  about:
    'I specialize in C#, .NET, ASP.NET MVC, .NET Core APIs, React, Angular, and Android development. I work across the full software development lifecycle: Requirements, Planning, Designing, Coding, Testing, Monitoring, Controlling, Reporting, Supporting, and Coordinating. My work balances hands-on engineering, architecture, documentation, team leadership, and continuous improvement through modern tools and AI-assisted development.',
};

export const focusItems: FocusItem[] = [
  { label: 'Coding', value: 70, icon: Code2 },
  { label: 'Design & Documentation', value: 20, icon: BookOpenCheck },
  { label: 'Lead & Support', value: 10, icon: Users },
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Backend',
    skills: ['C#', '.NET', '.NET Core API', 'ASP.NET MVC', 'Node.js', 'TypeScript'],
  },
  {
    title: 'Frontend',
    skills: ['React', 'Angular', 'JavaScript', 'jQuery', 'Bootstrap', 'Tailwind CSS'],
  },
  {
    title: 'Mobile',
    skills: ['Android Kotlin', 'Android Java', 'iOS Swift', 'Azure Communication Services'],
  },
  {
    title: 'DevOps & Cloud',
    skills: ['Azure', 'Docker', 'Kubernetes', 'CI/CD', 'TeamCity', 'Octopus', 'GitHub Actions'],
  },
  {
    title: 'Database & Reporting',
    skills: ['Microsoft SQL Server', 'PostgreSQL', 'SQLite', 'Crystal Reports', 'RDLC', 'SSRS'],
  },
  {
    title: 'Quality & Process',
    skills: ['Agile', 'Scrum', 'Jira', 'Code Review', 'SonarQube', 'Selenium', 'UML'],
  },
  {
    title: 'UI Frameworks',
    skills: ['Telerik', 'DevExpress', 'Kendo UI', 'MDBootstrap', 'AJAX'],
  },
  {
    title: 'Architecture',
    skills: ['System Design', 'Database Design', 'Scalable APIs', 'Monitoring', 'Production Support'],
  },
];

export const experiences: ExperienceItem[] = [
  {
    company: 'Bumrungrad International Hospital',
    role: 'Senior Software Developer',
    period: 'Oct 2021 - Present',
    location: 'Bangkok City, Thailand · Hybrid',
    business: 'Hospital, focused on Telemedicine',
    summary:
      'Build and maintain telemedicine capabilities across API, web, Android, and iOS platforms while supporting Agile delivery, Azure integration, and production-grade healthcare workflows.',
    technologies: ['.NET Core API', 'React', 'Android Kotlin', 'iOS Swift', 'Azure', 'SQL', 'Node.js', 'GitHub', 'Jira'],
  },
  {
    company: 'Honda Leasing (Thailand) Co., Ltd.',
    role: 'Senior Web Developer',
    period: 'Mar 2015 - Oct 2021',
    location: 'Bangkok City, Thailand · On-site',
    business: 'Hire purchase and leasing',
    summary:
      'Led SDLC activities including requirements, planning, design, coding, testing, monitoring, reporting, support, coordination, system architecture, database design, and delivery process improvements.',
    technologies: ['.NET Core', 'C#', 'ASP.NET', 'jQuery', 'MSSQL', 'Docker', 'Kubernetes', 'CI/CD', 'TeamCity', 'Octopus', 'SonarQube', 'Selenium'],
  },
  {
    company: 'Onelink Technology',
    role: 'Senior Programmer',
    period: 'Jul 2013 - Mar 2015',
    location: 'Bangkok City, Thailand · On-site',
    business: 'Transportation management and GPS tracking',
    summary:
      'Analyzed customer needs, designed databases, developed tracking systems, coordinated UAT, supported operations, and resolved production issues for GPS and transportation management platforms.',
    technologies: ['C#', 'ASP.NET MVC', 'PostgreSQL', 'Google Maps API', 'DevExpress', 'SQLite', '.NET Framework'],
  },
];

export const projects: Project[] = [
  {
    title: 'Telehealth / Telemedicine Platform',
    description:
      'Healthcare delivery platform supporting remote consultation workflows across web, backend API, Android, iOS, and Azure services.',
    impact: 'Improves access to patient care with scalable, integrated telemedicine capabilities.',
    technologies: ['.NET Core API', 'React', 'Android Kotlin', 'iOS Swift', 'Azure'],
    icon: MonitorCog,
  },
  {
    title: 'Android Azure Communication Services Calling App',
    description:
      'Mobile calling application using Azure Communication Services to support secure remote healthcare communication.',
    impact: 'Connects patients and care teams through reliable mobile video and voice workflows.',
    technologies: ['Android', 'Kotlin', 'Azure Communication Services', 'REST API'],
    icon: Smartphone,
  },
  {
    title: 'Code Review AI Pilot',
    description:
      'AI-assisted engineering workflow using tools such as Codex, Cursor, and ChatGPT to improve review quality and developer productivity.',
    impact: 'Raises code quality by combining human review discipline with AI-assisted analysis.',
    technologies: ['Codex', 'Cursor', 'ChatGPT', 'GitHub', 'TypeScript'],
    icon: MessageSquareCode,
  },
  {
    title: 'Enterprise .NET Core API Services',
    description:
      'Business-critical API services designed for maintainability, clean architecture, integration reliability, and operational support.',
    impact: 'Enables stable enterprise workflows with documented, testable, and scalable service boundaries.',
    technologies: ['.NET Core', 'C#', 'MSSQL', 'Docker', 'CI/CD'],
    icon: ServerCog,
  },
];

export const strengths = [
  { label: '16+ years building production software', icon: BriefcaseBusiness },
  { label: 'Healthcare, finance, and transportation domain experience', icon: Layers3 },
  { label: 'Hands-on team leadership in Agile environments', icon: Users },
  { label: 'System architecture and database design', icon: Network },
  { label: 'Code review, testing, and maintainability focus', icon: ShieldCheck },
  { label: 'Modern delivery with CI/CD, Docker, Kubernetes, and Azure', icon: GitBranch },
];

export const lifecycle = [
  'Requirements',
  'Planning',
  'Designing',
  'Coding',
  'Testing',
  'Monitoring',
  'Controlling',
  'Reporting',
  'Supporting',
  'Coordinating',
];

export const education = [
  {
    school: 'NIDA Thailand',
    degree: "Master's degree, Information Technology Management",
    period: 'Jan 2012 - Jun 2014',
    grade: 'GPA 3.53',
    detail: 'Job portal project, NoSQL',
  },
  {
    school: "School of Information Technology, King Mongkut's Institute of Technology Ladkrabang",
    degree: "Bachelor's degree, Information Technology",
    period: 'May 2006 - May 2010',
    grade: 'GPA 3.07',
    detail: 'Mutual fund portal management project',
  },
];

export const metrics = [
  { label: 'Years Experience', value: '16+', icon: BadgeCheck },
  { label: 'Primary Stack', value: '.NET', icon: Binary },
  { label: 'Delivery Model', value: 'Agile', icon: ClipboardCheck },
  { label: 'Data & APIs', value: 'SQL', icon: Database },
  { label: 'UI Delivery', value: 'React', icon: LayoutDashboard },
  { label: 'Innovation', value: 'AI Tools', icon: Lightbulb },
];
