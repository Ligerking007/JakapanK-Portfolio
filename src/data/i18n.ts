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
  MessageSquareCode,
  MonitorCog,
  Network,
  ServerCog,
  ShieldCheck,
  Smartphone,
  Users,
  type LucideIcon,
} from 'lucide-react';
import type { ExperienceItem, FocusItem, Project, SkillCategory } from './profile';

export type Language = 'en' | 'th';

type SectionCopy = {
  eyebrow: string;
  title: string;
  description: string;
};

export type LocalizedContent = {
  navigation: { label: string; href: string }[];
  sectionSummaries: { label: string; href: string; description: string }[];
  hero: {
    eyebrow: string;
    role: string;
    summary: string;
    viewExperience: string;
    viewProjects: string;
    contactMe: string;
    portfolio: string;
  };
  heroHighlights: { title: string; description: string; icon: LucideIcon }[];
  sections: {
    about: SectionCopy;
    skills: SectionCopy;
    experience: SectionCopy;
    projects: SectionCopy;
    certificates: SectionCopy;
    education: SectionCopy;
    contact: SectionCopy;
  };
  labels: {
    contact: string;
    workFocus: string;
    lifecycle: string;
    keyAchievements: string;
    viewCertificate: string;
    certificatesCount: string;
    providers: string;
    topics: string;
    currentPhase: string;
    previousPhase: string;
    currentProjects: string;
    earlierProjects: string;
    recentCredentials: string;
    earlierCredentials: string;
    archivedCredentials: string;
    sampleProjects: string;
    evidenceFiles: string;
    openFile: string;
    expand: string;
    collapse: string;
    linkedin: string;
    github: string;
    email: string;
  };
  profile: {
    name: string;
    about: string;
  };
  focusItems: FocusItem[];
  skillCategories: SkillCategory[];
  experiences: ExperienceItem[];
  projects: Project[];
  strengths: { label: string; icon: LucideIcon }[];
  lifecycle: string[];
  education: {
    school: string;
    degree: string;
    period: string;
    grade: string;
    detail: string;
  }[];
  metrics: { label: string; value: string; icon: LucideIcon }[];
};

const english: LocalizedContent = {
  navigation: [
    { label: 'Home', href: '#top' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certificates', href: '#certificates' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ],
  sectionSummaries: [
    { label: 'About', href: '#about', description: 'Overview and SDLC focus' },
    { label: 'Skills', href: '#skills', description: 'Core stack by category' },
    { label: 'Experience', href: '#experience', description: 'Timeline and responsibilities' },
    { label: 'Projects', href: '#projects', description: 'Current and previous work' },
    { label: 'Certificates', href: '#certificates', description: 'Recent and earlier credentials' },
    { label: 'Education', href: '#education', description: 'Academic background' },
    { label: 'Contact', href: '#contact', description: 'Professional links' },
  ],
  hero: {
    eyebrow: 'Full Stack · Front End · Back End · Mobile',
    role: 'Senior Software Developer',
    summary:
      'Senior Software Developer and Team Lead with 16+ years of experience delivering scalable web, backend, and mobile applications across healthcare, finance, and transportation domains.',
    viewExperience: 'View Experience',
    viewProjects: 'View Projects',
    contactMe: 'Contact Me',
    portfolio: 'Portfolio',
  },
  heroHighlights: [
    {
      title: 'Scalable Systems',
      description: '.NET Core APIs, Node.js APIs, database design, and enterprise integrations.',
      icon: ServerCog,
    },
    {
      title: 'Cross-Platform Delivery',
      description: 'React web apps, .NET Core and Node.js APIs, Android/iOS delivery, and telemedicine workflow integration.',
      icon: Smartphone,
    },
    {
      title: 'Team & Quality',
      description: 'Code review, Agile delivery, CI/CD, and production support.',
      icon: ShieldCheck,
    },
  ],
  sections: {
    about: {
      eyebrow: 'About',
      title: 'Hands-on engineering leadership',
      description: 'Clean implementation, scalable design, and steady delivery across business-critical systems.',
    },
    skills: {
      eyebrow: 'Skills',
      title: 'Technology stack',
      description: 'Grouped by delivery area for quick scanning.',
    },
    experience: {
      eyebrow: 'Experience',
      title: 'Enterprise software timeline',
      description: '16+ years across healthcare, leasing, and transportation technology.',
    },
    projects: {
      eyebrow: 'Projects',
      title: 'Projects by career phase',
      description: 'A clearer split between the current Bumrungrad phase from 2022 onward and earlier enterprise delivery experience up to 2021.',
    },
    certificates: {
      eyebrow: 'Certificates',
      title: 'Certificates by career phase',
      description: 'Recent learning from 2022 onward is separated from earlier awards, training, and professional credentials up to 2021.',
    },
    education: {
      eyebrow: 'Education',
      title: 'Academic background',
      description: 'Information technology management and software-focused foundations.',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Connect',
      description: 'Enterprise software delivery, healthcare technology, .NET engineering, team leadership, and AI-assisted workflows.',
    },
  },
  labels: {
    contact: 'Contact',
    workFocus: 'Work Focus',
    lifecycle: 'Full SDLC Coverage',
    keyAchievements: 'Key Achievements',
    viewCertificate: 'View PDF',
    certificatesCount: 'Certificates',
    providers: 'Providers',
    topics: 'Topics',
    currentPhase: '2022+ · Bumrungrad',
    previousPhase: 'Up to 2021 · Previous',
    currentProjects: 'Current Projects',
    earlierProjects: 'Earlier Sample Projects',
    recentCredentials: 'Recent Certificates',
    earlierCredentials: 'Earlier Credentials',
    archivedCredentials: 'Archived Credentials',
    sampleProjects: 'Sample Projects',
    evidenceFiles: 'Evidence Files',
    openFile: 'Open File',
    expand: 'Expand',
    collapse: 'Collapse',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    email: 'Email',
  },
  profile: {
    name: 'Jakapan Kanta',
    about:
      'I specialize in C#, .NET, ASP.NET MVC, .NET Core APIs, Node.js, React, Angular, and Android development. I work across the full software development lifecycle: Requirements, Planning, Designing, Coding, Testing, Monitoring, Controlling, Reporting, Supporting, and Coordinating. My work balances hands-on engineering, architecture, documentation, team leadership, and continuous improvement through modern tools and AI-assisted development.',
  },
  focusItems: [
    { label: 'Coding', value: 70, icon: Code2 },
    { label: 'Design & Documentation', value: 20, icon: BookOpenCheck },
    { label: 'Lead & Support', value: 10, icon: Users },
  ],
  skillCategories: [
    { title: 'Backend', skills: ['C#.NET', '.NET Core API', 'ASP.NET MVC', 'Node.js'] },
    { title: 'Frontend', skills: ['React', 'ASP.Net', 'Angular', 'TypeScript', 'jQuery', 'JavaScript', 'Bootstrap', 'Tailwind CSS', 'CSS'] },
    { title: 'Mobile', skills: ['Android Kotlin', 'React Native', 'Flutter', 'iOS Swift'] },
    { title: 'DevOps & Cloud', skills: ['Azure', 'CI/CD', 'TeamCity', 'Octopus', 'GitHub Actions', 'Docker', 'Kubernetes'] },
    { title: 'Database & Reporting', skills: ['Microsoft SQL Server', 'PostgreSQL', 'MongoDB', 'SQLite', 'Crystal Reports', 'RDLC', 'SSRS'] },
    { title: 'Quality & Process', skills: ['Agile', 'Scrum', 'Jira', 'Code Review', 'SonarQube', 'Selenium', 'UML'] },
    { title: 'UI Frameworks', skills: ['Telerik', 'DevExpress', 'Kendo UI', 'MDBootstrap', 'jQuery UI'] },
    { title: 'Architecture', skills: ['System Design', 'Database Design', 'Scalable APIs', 'Monitoring', 'Production Support'] },
  ],
  experiences: [
    {
      company: 'Bumrungrad International Hospital',
      role: 'Senior Software Developer',
      period: 'Oct 2021 - Present',
      location: 'Bangkok City, Thailand · Hybrid',
      business: 'Hospital, focused on Telemedicine',
      summary:
        'Build and maintain telemedicine capabilities across API, web, Android, and iOS platforms while supporting Agile delivery, Azure integration, and production-grade healthcare workflows.',
      achievements: [
        'Delivered telemedicine workflows across API, web, Android, and iOS channels.',
        'Integrated Azure-backed healthcare communication and operational support.',
        'Supported Agile delivery with production monitoring and issue resolution.',
      ],
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
      achievements: [
        'Led full SDLC delivery from requirements through support and reporting.',
        'Improved delivery process with Docker, Kubernetes, CI/CD, TeamCity, and Octopus.',
        'Strengthened quality practices with code review, SonarQube, Selenium, and Agile ceremonies.',
      ],
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
      achievements: [
        'Designed database-backed GPS tracking and transportation management features.',
        'Coordinated UAT with customers and prepared systems for operations handover.',
        'Resolved production issues through analysis, team coordination, and user support.',
      ],
      technologies: ['C#', 'ASP.NET MVC', 'PostgreSQL', 'Google Maps API', 'DevExpress', 'SQLite', '.NET Framework'],
    },
  ],
  projects: [
    {
      title: 'Telehealth / Telemedicine Platform',
      description: 'Healthcare delivery platform supporting remote consultation workflows across web, backend API, Android, iOS, and Azure services.',
      impact: 'Improves access to patient care with scalable, integrated telemedicine capabilities.',
      technologies: ['.NET Core API', 'React', 'Android Kotlin', 'iOS Swift', 'Azure'],
      icon: MonitorCog,
    },
    {
      title: 'Android Azure Communication Services Calling App',
      description: 'Mobile calling application using Azure Communication Services to support secure remote healthcare communication.',
      impact: 'Connects patients and care teams through reliable mobile video and voice workflows.',
      technologies: ['Android', 'Kotlin', 'Azure Communication Services', 'REST API'],
      icon: Smartphone,
    },
    {
      title: 'Code Review AI Pilot',
      description: 'AI-assisted engineering workflow using tools such as Codex, Cursor, and ChatGPT to improve review quality and developer productivity.',
      impact: 'Raises code quality by combining human review discipline with AI-assisted analysis.',
      technologies: ['Codex', 'Cursor', 'ChatGPT', 'GitHub', 'TypeScript'],
      icon: MessageSquareCode,
    },
    {
      title: 'Enterprise .NET Core API Services',
      description: 'Business-critical API services designed for maintainability, clean architecture, integration reliability, and operational support.',
      impact: 'Enables stable enterprise workflows with documented, testable, and scalable service boundaries.',
      technologies: ['.NET Core', 'C#', 'MSSQL', 'Docker', 'CI/CD'],
      icon: ServerCog,
    },
  ],
  strengths: [
    { label: '16+ years building production software', icon: BriefcaseBusiness },
    { label: 'Healthcare, finance, and transportation domain experience', icon: Layers3 },
    { label: 'Hands-on team leadership in Agile environments', icon: Users },
    { label: 'System architecture and database design', icon: Network },
    { label: 'Code review, testing, and maintainability focus', icon: ShieldCheck },
    { label: 'Modern delivery with CI/CD, Docker, Kubernetes, and Azure', icon: GitBranch },
  ],
  lifecycle: ['Requirements', 'Planning', 'Designing', 'Coding', 'Testing', 'Monitoring', 'Controlling', 'Reporting', 'Supporting', 'Coordinating'],
  education: [
    {
      school: 'National Institute of Development Administration (NIDA)',
      degree: "Master's degree, Information Technology Management",
      period: 'Jan 2012 - Jun 2014',
      grade: 'GPA 3.53',
      detail: 'Job portal project, NoSQL',
    },
    {
      school: "King Mongkut's Institute of Technology Ladkrabang (KMITL)",
      degree: "Bachelor's degree, Information Technology",
      period: 'May 2006 - May 2010',
      grade: 'GPA 3.07',
      detail: 'Mutual fund portal management project',
    },
  ],
  metrics: [
    { label: 'Years Experience', value: '16+', icon: BadgeCheck },
    { label: 'Primary Stack', value: '.NET', icon: Binary },
    { label: 'Delivery Model', value: 'Agile', icon: ClipboardCheck },
    { label: 'Data & APIs', value: 'SQL', icon: Database },
    { label: 'UI Delivery', value: 'React', icon: LayoutDashboard },
    { label: 'Innovation', value: 'AI Tools', icon: Lightbulb },
  ],
};

const thai: LocalizedContent = {
  navigation: [
    { label: 'หน้าแรก', href: '#top' },
    { label: 'เกี่ยวกับ', href: '#about' },
    { label: 'ทักษะ', href: '#skills' },
    { label: 'ประสบการณ์', href: '#experience' },
    { label: 'โปรเจกต์', href: '#projects' },
    { label: 'ใบรับรอง', href: '#certificates' },
    { label: 'การศึกษา', href: '#education' },
    { label: 'ติดต่อ', href: '#contact' },
  ],
  sectionSummaries: [
    { label: 'เกี่ยวกับ', href: '#about', description: 'ภาพรวมและบทบาทใน SDLC' },
    { label: 'ทักษะ', href: '#skills', description: 'เทคโนโลยีหลักตามหมวดงาน' },
    { label: 'ประสบการณ์', href: '#experience', description: 'เส้นทางงานและความรับผิดชอบ' },
    { label: 'โปรเจกต์', href: '#projects', description: 'งานปัจจุบันและงานก่อนหน้า' },
    { label: 'ใบรับรอง', href: '#certificates', description: 'หลักสูตรล่าสุดและก่อนหน้า' },
    { label: 'การศึกษา', href: '#education', description: 'ประวัติการศึกษา' },
    { label: 'ติดต่อ', href: '#contact', description: 'ช่องทาง professional' },
  ],
  hero: {
    eyebrow: 'ทั้งระบบ · หน้าบ้าน · หลังบ้าน · มือถือ',
    role: 'นักพัฒนาซอฟต์แวร์อาวุโส',
    summary:
      'นักพัฒนาซอฟต์แวร์อาวุโส และหัวหน้าทีมที่มีประสบการณ์มากกว่า 16 ปี ในการพัฒนาเว็บ ส่วนหลังบ้าน และแอปพลิเคชันมือถือ สำหรับธุรกิจ การดูแลสุขภาพ การเงิน และการขนส่ง',
    viewExperience: 'ดูประสบการณ์',
    viewProjects: 'ดูโปรเจกต์',
    contactMe: 'ติดต่อฉัน',
    portfolio: 'ผลงาน',
  },
  heroHighlights: [
    {
      title: 'ระบบที่ขยายได้',
      description: '.NET Core API, Node.js API, Database design และ Enterprise integrations',
      icon: ServerCog,
    },
    {
      title: 'ส่งมอบหลายแพลตฟอร์ม',
      description: 'React web apps, .NET Core และ Node.js APIs, Android/iOS delivery และ Telemedicine workflow integration',
      icon: Smartphone,
    },
    {
      title: 'ทีมและคุณภาพ',
      description: 'Code review, Agile delivery, CI/CD และ Production support',
      icon: ShieldCheck,
    },
  ],
  sections: {
    about: {
      eyebrow: 'เกี่ยวกับ',
      title: 'ผู้นำในการพัฒนาระบบ',
      description: 'เน้นโค้ดที่ดูแลต่อได้ ออกแบบระบบให้ขยายได้ และส่งมอบงานสำคัญของธุรกิจอย่างสม่ำเสมอ',
    },
    skills: {
      eyebrow: 'ทักษะ',
      title: 'ชุดเทคโนโลยี',
      description: 'จัดกลุ่มตามลักษณะงานเพื่อให้อ่านและประเมินได้เร็ว',
    },
    experience: {
      eyebrow: 'ประสบการณ์',
      title: 'เส้นทางงานซอฟต์แวร์ระดับองค์กร',
      description: 'ประสบการณ์ 16+ ปีใน Healthcare, Leasing และ Transportation Technology',
    },
    projects: {
      eyebrow: 'โปรเจกต์',
      title: 'ผลงานตามช่วงอาชีพ',
      description: 'แยกงานช่วง Bumrungrad ตั้งแต่ปี 2022 ขึ้นไป ออกจากงานองค์กรและตัวอย่างผลงานช่วงก่อนถึงปี 2021',
    },
    certificates: {
      eyebrow: 'ใบรับรอง',
      title: 'ใบรับรองตามช่วงอาชีพ',
      description: 'แยกใบรับรองและการเรียนรู้ตั้งแต่ปี 2022 ขึ้นไป ออกจากรางวัล การอบรม และหลักฐานวิชาชีพช่วงก่อนถึงปี 2021',
    },
    education: {
      eyebrow: 'การศึกษา',
      title: 'ประวัติการศึกษา',
      description: 'พื้นฐานด้าน Information Technology Management และ Software-focused IT',
    },
    contact: {
      eyebrow: 'ติดต่อ',
      title: 'ช่องทางติดต่อ',
      description: 'พูดคุยเรื่อง Enterprise software, Healthcare technology, .NET engineering, Team leadership และ AI-assisted workflows',
    },
  },
  labels: {
    contact: 'ติดต่อ',
    workFocus: 'สัดส่วนงานที่โฟกัส',
    lifecycle: 'ครอบคลุม Full SDLC',
    keyAchievements: 'ผลงานสำคัญ',
    viewCertificate: 'ดูไฟล์ PDF',
    certificatesCount: 'ใบรับรอง',
    providers: 'ผู้ให้บริการ',
    topics: 'หมวดหมู่',
    currentPhase: '2022+ · Bumrungrad',
    previousPhase: 'ถึงปี 2021 · ก่อนหน้า',
    currentProjects: 'โปรเจกต์ช่วงปัจจุบัน',
    earlierProjects: 'ตัวอย่างโปรเจกต์ก่อนหน้า',
    recentCredentials: 'ใบรับรองล่าสุด',
    earlierCredentials: 'ใบรับรองและหลักฐานก่อนหน้า',
    archivedCredentials: 'หลักฐานเดิม',
    sampleProjects: 'ตัวอย่างโปรเจกต์',
    evidenceFiles: 'ไฟล์ประกอบ',
    openFile: 'เปิดไฟล์',
    expand: 'ขยาย',
    collapse: 'ย่อ',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    email: 'Email',
  },
  profile: {
    name: 'จักรพันธ์ กันตา',
    about:
      'ผมเชี่ยวชาญ C#, .NET, ASP.NET MVC, .NET Core API, Node.js, React, Angular และ Android Development มีประสบการณ์ทำงานครอบคลุม Full SDLC ตั้งแต่ Requirements, Planning, Designing, Coding, Testing, Monitoring, Controlling, Reporting, Supporting และ Coordinating โดยทำงานผสมระหว่าง Hands-on coding, System architecture, Documentation, Team leadership และการนำเครื่องมือสมัยใหม่รวมถึง AI-assisted development มาเพิ่มคุณภาพและประสิทธิภาพในการส่งมอบงาน',
  },
  focusItems: [
    { label: 'Coding', value: 70, icon: Code2 },
    { label: 'Design & Documentation', value: 20, icon: BookOpenCheck },
    { label: 'Lead & Support', value: 10, icon: Users },
  ],
  skillCategories: english.skillCategories,
  experiences: [
    {
      company: 'Bumrungrad International Hospital',
      role: 'Senior Software Developer',
      period: 'Oct 2021 - Present',
      location: 'Bangkok City, Thailand · Hybrid',
      business: 'ธุรกิจโรงพยาบาล เน้น Telemedicine',
      summary:
        'พัฒนาและดูแล Telemedicine capabilities ทั้ง API, Web, Android และ iOS พร้อมสนับสนุน Agile delivery, Azure integration และ production-grade healthcare workflows',
      achievements: [
        'ส่งมอบ Telemedicine workflows ครอบคลุม API, Web, Android และ iOS',
        'เชื่อมต่อ Azure-backed healthcare communication และดูแลงาน operation support',
        'สนับสนุน Agile delivery พร้อม monitoring และแก้ปัญหา production issue',
      ],
      technologies: english.experiences[0].technologies,
    },
    {
      company: 'Honda Leasing (Thailand) Co., Ltd.',
      role: 'Senior Web Developer',
      period: 'Mar 2015 - Oct 2021',
      location: 'Bangkok City, Thailand · On-site',
      business: 'ธุรกิจ Hire Purchase และ Leasing',
      summary:
        'ดูแลงาน SDLC ตั้งแต่ requirements, planning, design, coding, testing, monitoring, reporting, support, coordination รวมถึง system architecture, database design และ process improvement',
      achievements: [
        'นำทีมส่งมอบงาน Full SDLC ตั้งแต่ requirement จนถึง support และ reporting',
        'ปรับปรุง delivery process ด้วย Docker, Kubernetes, CI/CD, TeamCity และ Octopus',
        'ยกระดับคุณภาพงานด้วย code review, SonarQube, Selenium และ Agile ceremonies',
      ],
      technologies: english.experiences[1].technologies,
    },
    {
      company: 'Onelink Technology',
      role: 'Senior Programmer',
      period: 'Jul 2013 - Mar 2015',
      location: 'Bangkok City, Thailand · On-site',
      business: 'Transportation management และ GPS tracking',
      summary:
        'วิเคราะห์ความต้องการลูกค้า ออกแบบฐานข้อมูล พัฒนาระบบ tracking ประสานงาน UAT ส่งมอบให้ operation team และแก้ปัญหา production',
      achievements: [
        'ออกแบบฟีเจอร์ GPS tracking และ transportation management ที่ใช้ database เป็นแกนหลัก',
        'ประสานงาน UAT กับลูกค้าและเตรียมระบบสำหรับ operation handover',
        'วิเคราะห์และแก้ปัญหา production ผ่านการประสานงานทีมและ user support',
      ],
      technologies: english.experiences[2].technologies,
    },
  ],
  projects: [
    {
      title: 'Telehealth / Telemedicine Platform',
      description: 'แพลตฟอร์ม Healthcare สำหรับ remote consultation ครอบคลุม Web, Backend API, Android, iOS และ Azure services',
      impact: 'ช่วยเพิ่มการเข้าถึงการรักษาผ่าน telemedicine capabilities ที่ scale ได้และเชื่อมต่อระบบได้ดี',
      technologies: english.projects[0].technologies,
      icon: MonitorCog,
    },
    {
      title: 'Android Azure Communication Services Calling App',
      description: 'Mobile calling application ที่ใช้ Azure Communication Services เพื่อรองรับ secure remote healthcare communication',
      impact: 'เชื่อมต่อผู้ป่วยและทีมรักษาผ่าน mobile video และ voice workflows ที่เชื่อถือได้',
      technologies: english.projects[1].technologies,
      icon: Smartphone,
    },
    {
      title: 'Code Review AI Pilot',
      description: 'Workflow สำหรับ AI-assisted engineering โดยใช้ Codex, Cursor และ ChatGPT เพื่อเพิ่มคุณภาพ review และ productivity',
      impact: 'ยกระดับคุณภาพโค้ดโดยผสาน human review discipline กับ AI-assisted analysis',
      technologies: english.projects[2].technologies,
      icon: MessageSquareCode,
    },
    {
      title: 'Enterprise .NET Core API Services',
      description: 'API services สำคัญของธุรกิจที่ออกแบบให้ maintain ง่าย เชื่อมต่อระบบได้เสถียร และรองรับ operation support',
      impact: 'ช่วยให้ enterprise workflows มี service boundary ที่ชัดเจน ทดสอบได้ และ scale ได้',
      technologies: english.projects[3].technologies,
      icon: ServerCog,
    },
  ],
  strengths: [
    { label: 'ประสบการณ์ 16+ ปีในการสร้าง production software', icon: BriefcaseBusiness },
    { label: 'มีประสบการณ์ใน Healthcare, Finance และ Transportation', icon: Layers3 },
    { label: 'นำทีมใน Agile environment พร้อมลงมือพัฒนาเอง', icon: Users },
    { label: 'ออกแบบ System architecture และ Database design', icon: Network },
    { label: 'ให้ความสำคัญกับ Code review, Testing และ Maintainability', icon: ShieldCheck },
    { label: 'ส่งมอบงานด้วย CI/CD, Docker, Kubernetes และ Azure', icon: GitBranch },
  ],
  lifecycle: ['Requirements', 'Planning', 'Designing', 'Coding', 'Testing', 'Monitoring', 'Controlling', 'Reporting', 'Supporting', 'Coordinating'],
  education: [
    {
      school: 'National Institute of Development Administration (NIDA)',
      degree: "Master's degree, Information Technology Management",
      period: 'Jan 2012 - Jun 2014',
      grade: 'GPA 3.53',
      detail: 'Job portal project, NoSQL',
    },
    {
      school: "King Mongkut's Institute of Technology Ladkrabang (KMITL)",
      degree: "Bachelor's degree, Information Technology",
      period: 'May 2006 - May 2010',
      grade: 'GPA 3.07',
      detail: 'Mutual fund portal management project',
    },
  ],
  metrics: [
    { label: 'Years Experience', value: '16+', icon: BadgeCheck },
    { label: 'Primary Stack', value: '.NET', icon: Binary },
    { label: 'Delivery Model', value: 'Agile', icon: ClipboardCheck },
    { label: 'Data & APIs', value: 'SQL', icon: Database },
    { label: 'UI Delivery', value: 'React', icon: LayoutDashboard },
    { label: 'Innovation', value: 'AI Tools', icon: Lightbulb },
  ],
};

export const localizedContent: Record<Language, LocalizedContent> = {
  en: english,
  th: thai,
};
