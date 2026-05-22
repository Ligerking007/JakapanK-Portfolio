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
    file: 'before2021/certificates/2-award/excellence-award-masters-degree-2012.jpg',
    type: 'image',
  },
  {
    title: 'Best Employee - Onelink',
    year: '2014',
    category: 'Award',
    file: 'before2021/certificates/2-award/best-employee-onelink-2014.pdf',
    type: 'pdf',
  },
  {
    title: 'Agile Software Development',
    year: '2015',
    category: 'Training',
    file: 'before2021/certificates/1-training/agile-software-development-2015.jpg',
    type: 'image',
  },
  {
    title: 'Web Security',
    year: '2016',
    category: 'Training',
    file: 'before2021/certificates/1-training/web-security-2016.jpg',
    type: 'image',
  },
  {
    title: 'Risk Management',
    year: '2017',
    category: 'Training',
    file: 'before2021/certificates/1-training/risk-management-2017.jpg',
    type: 'image',
  },
  {
    title: 'Safety, Health, and Environment',
    year: '2017',
    category: 'Training',
    file: 'before2021/certificates/1-training/safety-health-environment-2017.jpg',
    type: 'image',
  },
  {
    title: 'Object-Oriented Programming with .NET',
    year: '2018',
    category: 'Training',
    file: 'before2021/certificates/1-training/oop-net-2018.jpg',
    type: 'image',
  },
  {
    title: 'Software Project Estimation',
    year: '2019',
    category: 'Training',
    file: 'before2021/certificates/1-training/software-project-estimation-2019.jpg',
    type: 'image',
  },
  {
    title: 'Global Confidentiality Policy',
    year: '2020',
    category: 'Compliance',
    file: 'before2021/certificates/1-training/global-confidentiality-policy-2020.jpg',
    type: 'image',
  },
  {
    title: '5 Years Service - Honda Leasing',
    year: '2020',
    category: 'Award',
    file: 'before2021/certificates/2-award/5-years-services-honda-leasing-2020.jpg',
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
      { title: 'IT Services', file: 'before2021/sampleprojects/1-company/1-hondaleasing-csharp-net/1-asp-net/itservices.pdf', type: 'pdf' },
      { title: 'Mobile Customer Service Web Responsive', file: 'before2021/sampleprojects/1-company/1-hondaleasing-csharp-net/1-asp-net/mobile-customer-service-webresponsive.mp4', type: 'video' },
      { title: 'Pivot Drill Down', file: 'before2021/sampleprojects/1-company/1-hondaleasing-csharp-net/1-asp-net/pivotdrilldown.pdf', type: 'pdf' },
      { title: 'Customer Scoring ACS', file: 'before2021/sampleprojects/1-company/1-hondaleasing-csharp-net/2-angularjs/customerscoring-acs.pdf', type: 'pdf' },
      { title: 'Public Web', file: 'before2021/sampleprojects/1-company/1-hondaleasing-csharp-net/2-angularjs/publicweb.pdf', type: 'pdf' },
      { title: 'E-Document Scan Control', file: 'before2021/sampleprojects/1-company/1-hondaleasing-csharp-net/3-netcoreapi/e-documentfilesscancontrol.pdf', type: 'pdf' },
      { title: 'Man-Day Estimation', file: 'before2021/sampleprojects/1-company/1-hondaleasing-csharp-net/4-manday-estimation/manday-estimation.pdf', type: 'pdf' },
      { title: 'Man-Day Estimation Example', file: 'before2021/sampleprojects/1-company/1-hondaleasing-csharp-net/4-manday-estimation/manday-estimation-example.xlsx', type: 'spreadsheet' },
    ],
  },
  {
    title: 'Transportation and GPS Tracking Systems',
    period: '2013 - 2015',
    category: 'Company Projects',
    summary: 'Transportation management, vehicle monitoring, and GPS-related business systems from Onelink experience.',
    tags: ['C#', 'ASP.NET MVC', 'PostgreSQL', 'Google Maps API', 'DevExpress'],
    links: [
      { title: 'PTGIS', file: 'before2021/sampleprojects/1-company/2-onelink-csharp-net/ptgis.pdf', type: 'pdf' },
      { title: 'PVM', file: 'before2021/sampleprojects/1-company/2-onelink-csharp-net/pvm.pdf', type: 'pdf' },
      { title: 'TMS', file: 'before2021/sampleprojects/1-company/2-onelink-csharp-net/tms.pdf', type: 'pdf' },
    ],
  },
  {
    title: 'Enterprise and Back-Office Systems',
    period: 'Before 2013',
    category: 'Company Projects',
    summary: 'Early enterprise system samples across barcode, postal, mortgage, leasing, and back-office process domains.',
    tags: ['C#', 'PHP', 'Back Office', 'Reporting', 'Database Design'],
    links: [
      { title: 'Barcode System', file: 'before2021/sampleprojects/1-company/3-vsmart-csharp-net/barcode.pdf', type: 'pdf' },
      { title: 'Postal System', file: 'before2021/sampleprojects/1-company/3-vsmart-csharp-net/postal.pdf', type: 'pdf' },
      { title: 'Mortgage System', file: 'before2021/sampleprojects/1-company/4-thaiace-csharp-net/mortgage.pdf', type: 'pdf' },
      { title: 'Leasing System', file: 'before2021/sampleprojects/1-company/5-thaiace-php/leasing.pdf', type: 'pdf' },
      { title: 'Finger Scan', file: 'before2021/sampleprojects/1-company/4-thaiace-csharp-net/fingerscan.pdf', type: 'pdf' },
    ],
  },
  {
    title: 'University Software Projects',
    period: '2006 - 2014',
    category: 'Academic Projects',
    summary: 'Master and bachelor project artifacts including job portal, NoSQL research, mutual fund portal, and online e-book sales.',
    tags: ['C#', 'PHP', 'JSP', 'NoSQL', 'Research'],
    links: [
      { title: 'Job Portal', file: 'before2021/sampleprojects/2-university/6-nosql-csharp-net-mastersdegree/1-jobportal.pdf', type: 'pdf' },
      { title: 'Job Portal IS Report', file: 'before2021/sampleprojects/2-university/6-nosql-csharp-net-mastersdegree/2-jobportal-is-report.pdf', type: 'pdf' },
      { title: 'SaaS Research', file: 'before2021/sampleprojects/2-university/6-nosql-csharp-net-mastersdegree/3-saas-research.pdf', type: 'pdf' },
      { title: 'Mutual Fund Portal', file: 'before2021/sampleprojects/2-university/7-mutualfund-php-bachelorsdegree/mutualfund.pdf', type: 'pdf' },
      { title: 'E-Book Sales Online', file: 'before2021/sampleprojects/2-university/8-ebook-jsp-bachelorsdegree/e-book-sales-online.pdf', type: 'pdf' },
    ],
  },
  {
    title: 'Architecture, DevOps, and Engineering Tools',
    period: '2015 - 2020',
    category: 'Engineering Practice',
    summary: 'System architecture, DevOps, code quality, project management, Docker, Kubernetes, and testing material used for team enablement.',
    tags: ['Architecture', 'CI/CD', 'Docker', 'Kubernetes', 'SonarQube', 'Jira'],
    preview: 'before2021/sampleprojects/3-systemarchitecturedesign/mysystemarchitecturedesign.png',
    links: [
      { title: 'System Architecture Design', file: 'before2021/sampleprojects/3-systemarchitecturedesign/mysystemarchitecturedesign.png', type: 'image' },
      { title: 'Draw.io Architecture Source', file: 'before2021/sampleprojects/3-systemarchitecturedesign/mysystemarchitecturedesign.drawio', type: 'diagram' },
      { title: 'Development Tools', file: 'before2021/sampleprojects/4-tools/development-tools.jpg', type: 'image' },
      { title: 'Jira Agile', file: 'before2021/sampleprojects/4-tools/projectmanagement/1-jira/jira-agile.pdf', type: 'pdf' },
      { title: 'Redmine', file: 'before2021/sampleprojects/4-tools/projectmanagement/2-redmine/redmine-en.pdf', type: 'pdf' },
      { title: 'Jenkins Notes', file: 'before2021/sampleprojects/4-tools/cicd/3-jenkins/jenkins1.docx', type: 'document' },
    ],
  },
  {
    title: 'Source Code and Team Knowledge Sharing',
    period: '2015 - 2020',
    category: 'Team Enablement',
    summary: 'Source code examples, project templates, API gateway notes, team leadership, Agile retrospective, Jira, and SonarLint sharing documents.',
    tags: ['Code Review', 'API Gateway', 'Team Lead', 'Agile', 'Documentation'],
    links: [
      { title: 'Bank System Source Code Example', file: 'before2021/sampleprojects/5-sourcecodeexample/netcore-api-jquery/mysourcecode-banksystem.pdf', type: 'pdf' },
      { title: 'Source Code Guide', file: 'before2021/sampleprojects/5-sourcecodeexample/netcore-api-jquery/knowledge/projecttemplate/sourcecodeguide.pdf', type: 'pdf' },
      { title: 'API Project Template', file: 'before2021/sampleprojects/5-sourcecodeexample/netcore-api-jquery/knowledge/projecttemplate/api.pdf', type: 'pdf' },
      { title: 'Ocelot API Gateway', file: 'before2021/sampleprojects/6-sharetoteam/ocelot-api-gateway.docx', type: 'document' },
      { title: 'Agile Retrospective', file: 'before2021/sampleprojects/6-sharetoteam/agilerestrospective.docx', type: 'document' },
      { title: 'Team Leader Notes', file: 'before2021/sampleprojects/6-sharetoteam/teamleader.docx', type: 'document' },
    ],
  },
];
