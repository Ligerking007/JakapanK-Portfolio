export type ArchiveLinkType = 'pdf' | 'image' | 'video' | 'document' | 'spreadsheet' | 'diagram';

export type ArchiveLink = {
  title: string;
  file: string;
  type: ArchiveLinkType;
};

export type LegacyCredential = ArchiveLink & {
  year: string;
  category: string;
};

export type LegacyProjectGroup = {
  title: string;
  period: string;
  category: string;
  summary: string;
  tags: string[];
  preview?: string;
  links: ArchiveLink[];
};

export const legacyCredentials: LegacyCredential[] = [
  {
    title: 'Excellence Award - Master Degree',
    year: '2012',
    category: 'Award',
    file: 'before2021/Certificates/2_Award/Excellence Award - Masters Degree 2012.jpg',
    type: 'image',
  },
  {
    title: 'Best Employee - Onelink',
    year: '2014',
    category: 'Award',
    file: 'before2021/Certificates/2_Award/Best Employee - Onelink 2014.pdf',
    type: 'pdf',
  },
  {
    title: 'Agile Software Development',
    year: '2015',
    category: 'Training',
    file: 'before2021/Certificates/1_Training/Agile Software Development 2015.jpg',
    type: 'image',
  },
  {
    title: 'Web Security',
    year: '2016',
    category: 'Training',
    file: 'before2021/Certificates/1_Training/Web Security 2016.jpg',
    type: 'image',
  },
  {
    title: 'Risk Management',
    year: '2017',
    category: 'Training',
    file: 'before2021/Certificates/1_Training/Risk_Management_2017.jpg',
    type: 'image',
  },
  {
    title: 'Safety, Health, and Environment',
    year: '2017',
    category: 'Training',
    file: 'before2021/Certificates/1_Training/Safety-Health-Environment_2017.jpg',
    type: 'image',
  },
  {
    title: 'Object-Oriented Programming with .NET',
    year: '2018',
    category: 'Training',
    file: 'before2021/Certificates/1_Training/OOP .Net 2018.jpg',
    type: 'image',
  },
  {
    title: 'Software Project Estimation',
    year: '2019',
    category: 'Training',
    file: 'before2021/Certificates/1_Training/Software Project Estimation 2019.jpg',
    type: 'image',
  },
  {
    title: 'Global Confidentiality Policy',
    year: '2020',
    category: 'Compliance',
    file: 'before2021/Certificates/1_Training/Global Confidentiality Policy 2020.jpg',
    type: 'image',
  },
  {
    title: '5 Years Service - Honda Leasing',
    year: '2020',
    category: 'Award',
    file: 'before2021/Certificates/2_Award/5 Years Services - Honda Leasing 2020.jpg',
    type: 'image',
  },
];

export const legacyProjectGroups: LegacyProjectGroup[] = [
  {
    title: 'Honda Leasing Enterprise Web Systems',
    period: '2015 - 2020',
    category: 'Company Projects',
    summary: 'ASP.NET, AngularJS, .NET Core API, responsive customer service, document scanning, reporting, and estimation workflow examples.',
    tags: ['ASP.NET', 'AngularJS', '.NET Core API', 'MSSQL', 'Responsive Web'],
    links: [
      { title: 'IT Services', file: 'before2021/SampleProjects/1_Company/1_HondaLeasing_C#.Net/1_ASP.NET/ITServices.pdf', type: 'pdf' },
      { title: 'Mobile Customer Service Web Responsive', file: 'before2021/SampleProjects/1_Company/1_HondaLeasing_C#.Net/1_ASP.NET/Mobile_Customer_Service_WebResponsive.mp4', type: 'video' },
      { title: 'Pivot Drill Down', file: 'before2021/SampleProjects/1_Company/1_HondaLeasing_C#.Net/1_ASP.NET/PivotDrillDown.pdf', type: 'pdf' },
      { title: 'Customer Scoring ACS', file: 'before2021/SampleProjects/1_Company/1_HondaLeasing_C#.Net/2_AngularJS/CustomerScoring_ACS.pdf', type: 'pdf' },
      { title: 'Public Web', file: 'before2021/SampleProjects/1_Company/1_HondaLeasing_C#.Net/2_AngularJS/PublicWeb.pdf', type: 'pdf' },
      { title: 'E-Document Scan Control', file: 'before2021/SampleProjects/1_Company/1_HondaLeasing_C#.Net/3_NetCoreAPI/E-DocumentFilesScanControl.pdf', type: 'pdf' },
      { title: 'Man-Day Estimation', file: 'before2021/SampleProjects/1_Company/1_HondaLeasing_C#.Net/4_ManDay_Estimation/ManDay_Estimation.pdf', type: 'pdf' },
      { title: 'Man-Day Estimation Example', file: 'before2021/SampleProjects/1_Company/1_HondaLeasing_C#.Net/4_ManDay_Estimation/ManDay_Estimation_Example.xlsx', type: 'spreadsheet' },
    ],
  },
  {
    title: 'Transportation and GPS Tracking Systems',
    period: '2013 - 2015',
    category: 'Company Projects',
    summary: 'Transportation management, vehicle monitoring, and GPS-related business systems from Onelink experience.',
    tags: ['C#', 'ASP.NET MVC', 'PostgreSQL', 'Google Maps API', 'DevExpress'],
    links: [
      { title: 'PTGIS', file: 'before2021/SampleProjects/1_Company/2_OneLink_C#.Net/PTGIS.pdf', type: 'pdf' },
      { title: 'PVM', file: 'before2021/SampleProjects/1_Company/2_OneLink_C#.Net/PVM.pdf', type: 'pdf' },
      { title: 'TMS', file: 'before2021/SampleProjects/1_Company/2_OneLink_C#.Net/TMS.pdf', type: 'pdf' },
    ],
  },
  {
    title: 'Enterprise and Back-Office Systems',
    period: 'Before 2013',
    category: 'Company Projects',
    summary: 'Early enterprise system samples across barcode, postal, mortgage, leasing, and back-office process domains.',
    tags: ['C#', 'PHP', 'Back Office', 'Reporting', 'Database Design'],
    links: [
      { title: 'Barcode System', file: 'before2021/SampleProjects/1_Company/3_VSmart_C#.Net/BarCode.pdf', type: 'pdf' },
      { title: 'Postal System', file: 'before2021/SampleProjects/1_Company/3_VSmart_C#.Net/Postal.pdf', type: 'pdf' },
      { title: 'Mortgage System', file: 'before2021/SampleProjects/1_Company/4_ThaiAce_C#.Net/Mortgage.pdf', type: 'pdf' },
      { title: 'Leasing System', file: 'before2021/SampleProjects/1_Company/5_ThaiAce_PHP/Leasing.pdf', type: 'pdf' },
      { title: 'Finger Scan', file: 'before2021/SampleProjects/1_Company/4_ThaiAce_C#.Net/FingerScan.pdf', type: 'pdf' },
    ],
  },
  {
    title: 'University Software Projects',
    period: '2006 - 2014',
    category: 'Academic Projects',
    summary: 'Master and bachelor project artifacts including job portal, NoSQL research, mutual fund portal, and online e-book sales.',
    tags: ['C#', 'PHP', 'JSP', 'NoSQL', 'Research'],
    links: [
      { title: 'Job Portal', file: 'before2021/SampleProjects/2_University/6_NoSQL_C#.Net_MastersDegree/1_JobPortal.pdf', type: 'pdf' },
      { title: 'Job Portal IS Report', file: 'before2021/SampleProjects/2_University/6_NoSQL_C#.Net_MastersDegree/2_JobPortal_IS_Report.pdf', type: 'pdf' },
      { title: 'SaaS Research', file: 'before2021/SampleProjects/2_University/6_NoSQL_C#.Net_MastersDegree/3_SaaS_Research.pdf', type: 'pdf' },
      { title: 'Mutual Fund Portal', file: 'before2021/SampleProjects/2_University/7_MutualFund_PHP_BachelorsDegree/MutualFund.pdf', type: 'pdf' },
      { title: 'E-Book Sales Online', file: 'before2021/SampleProjects/2_University/8_EBook_JSP_BachelorsDegree/E-Book Sales Online.pdf', type: 'pdf' },
    ],
  },
  {
    title: 'Architecture, DevOps, and Engineering Tools',
    period: '2015 - 2020',
    category: 'Engineering Practice',
    summary: 'System architecture, DevOps, code quality, project management, Docker, Kubernetes, and testing material used for team enablement.',
    tags: ['Architecture', 'CI/CD', 'Docker', 'Kubernetes', 'SonarQube', 'Jira'],
    preview: 'before2021/SampleProjects/3_SystemArchitectureDesign/MySystemArchitectureDesign.png',
    links: [
      { title: 'System Architecture Design', file: 'before2021/SampleProjects/3_SystemArchitectureDesign/MySystemArchitectureDesign.png', type: 'image' },
      { title: 'Draw.io Architecture Source', file: 'before2021/SampleProjects/3_SystemArchitectureDesign/MySystemArchitectureDesign.drawio', type: 'diagram' },
      { title: 'Development Tools', file: 'before2021/SampleProjects/4_Tools/Development_Tools.jpg', type: 'image' },
      { title: 'Jira Agile', file: 'before2021/SampleProjects/4_Tools/ProjectManagement/1_Jira/Jira_Agile.pdf', type: 'pdf' },
      { title: 'Redmine', file: 'before2021/SampleProjects/4_Tools/ProjectManagement/2_Redmine/Redmine-EN.pdf', type: 'pdf' },
      { title: 'Jenkins Notes', file: 'before2021/SampleProjects/4_Tools/CICD/3_Jenkins/Jenkins1.docx', type: 'document' },
    ],
  },
  {
    title: 'Source Code and Team Knowledge Sharing',
    period: '2015 - 2020',
    category: 'Team Enablement',
    summary: 'Source code examples, project templates, API gateway notes, team leadership, Agile retrospective, Jira, and SonarLint sharing documents.',
    tags: ['Code Review', 'API Gateway', 'Team Lead', 'Agile', 'Documentation'],
    links: [
      { title: 'Bank System Source Code Example', file: 'before2021/SampleProjects/5_SourceCodeExample/NetCore_API_jQuery/MySourceCode_BankSystem.pdf', type: 'pdf' },
      { title: 'Source Code Guide', file: 'before2021/SampleProjects/5_SourceCodeExample/NetCore_API_jQuery/Knowledge/ProjectTemplate/SourceCodeGuide.pdf', type: 'pdf' },
      { title: 'API Project Template', file: 'before2021/SampleProjects/5_SourceCodeExample/NetCore_API_jQuery/Knowledge/ProjectTemplate/API.pdf', type: 'pdf' },
      { title: 'Ocelot API Gateway', file: 'before2021/SampleProjects/6_ShareToTeam/Ocelot_API_Gateway.docx', type: 'document' },
      { title: 'Agile Retrospective', file: 'before2021/SampleProjects/6_ShareToTeam/AgileRestrospective.docx', type: 'document' },
      { title: 'Team Leader Notes', file: 'before2021/SampleProjects/6_ShareToTeam/TeamLeader.docx', type: 'document' },
    ],
  },
];
