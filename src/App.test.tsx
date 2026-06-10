import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import App from './App';
import { legacyProjectGroups } from './data/before2021';

const architectureEvidenceFiles = Object.keys(import.meta.glob('/public/before2021/sampleprojects/3-systemarchitecturedesign/**/*', { query: '?url', import: 'default' }))
  .filter((file) => !file.endsWith('/.DS_Store'))
  .map((file) => file.replace(/^\/public\//, ''))
  .sort();
const engineeringToolEvidenceFiles = Object.keys(import.meta.glob('/public/before2021/sampleprojects/4-tools/**/*', { query: '?url', import: 'default' }))
  .filter((file) => !file.endsWith('/.DS_Store'))
  .map((file) => file.replace(/^\/public\//, ''))
  .sort();
const teamSharingEvidenceFiles = Object.keys(import.meta.glob('/public/before2021/sampleprojects/6-sharetoteam/**/*', { query: '?url', import: 'default' }))
  .filter((file) => !file.endsWith('/.DS_Store'))
  .map((file) => file.replace(/^\/public\//, ''))
  .sort();

function mockMatchMedia(matches: boolean) {
  Object.defineProperty(window, 'matchMedia', {
    configurable: true,
    writable: true,
    value: vi.fn().mockImplementation((query: string) => ({
      addEventListener: vi.fn(),
      addListener: vi.fn(),
      dispatchEvent: vi.fn(),
      matches,
      media: query,
      onchange: null,
      removeEventListener: vi.fn(),
      removeListener: vi.fn(),
    })),
  });
}

describe('App', () => {
  it('renders the hero and primary portfolio messaging', () => {
    render(<App />);

    expect(screen.getByRole('heading', { name: 'Enterprise Software Delivery' })).toBeInTheDocument();
    expect(screen.getByText('Building smarter systems through AI integration and AI-assisted development.')).toBeInTheDocument();
    expect(screen.getByText('Version 1.1.4')).toBeInTheDocument();
    expect(screen.getByText('Cross-Platform Development')).toBeInTheDocument();
    expect(screen.getByText('AI Integration & Engineering')).toBeInTheDocument();
    expect(screen.getByText('Agile & DevOps Practice')).toBeInTheDocument();
    expect(screen.getAllByRole('button', { name: 'EN' })[0]).toHaveAttribute('title', 'English language');
    expect(screen.getAllByRole('button', { name: 'TH' })[0]).toHaveAttribute('title', 'ภาษาไทย');
    expect(screen.getByRole('contentinfo')).toHaveClass('bg-slate-50');
  });

  it('switches between English and Thai content', async () => {
    render(<App />);

    await userEvent.click(screen.getAllByRole('button', { name: 'TH' })[0]);
    await userEvent.click(screen.getAllByRole('button', { name: 'ขยาย' })[0]);

    expect(screen.getAllByText('จักรพันธ์ กันตา').length).toBeGreaterThan(0);
    expect(screen.getByRole('heading', { name: 'การส่งมอบซอฟต์แวร์ระดับองค์กร' })).toBeInTheDocument();
    expect(screen.getByText(/สร้างด้วย React, Vite, TypeScript, Tailwind CSS และ GitHub Pages/)).toBeInTheDocument();
    expect(screen.getByText('เวอร์ชัน 1.1.4')).toBeInTheDocument();
    expect(screen.getAllByText('ประสบการณ์').length).toBeGreaterThan(0);
    expect(screen.getAllByText('เขียนโค้ด').length).toBeGreaterThan(0);
    expect(screen.getByText('เก็บความต้องการ')).toBeInTheDocument();
    expect(screen.getByText('DevOps และ Cloud')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'สถาบันบัณฑิตพัฒนบริหารศาสตร์ (NIDA)' })).toBeInTheDocument();
    expect(screen.getByText('ปริญญาโท สาขาการจัดการเทคโนโลยีสารสนเทศ')).toBeInTheDocument();
    expect(screen.getAllByText('โปรเจกต์การศึกษา')).toHaveLength(2);
    expect(screen.getByRole('link', { name: 'ระบบ Job Portal' })).toHaveAttribute(
      'href',
      '/before2021/sampleprojects/2-university/6-nosql-csharp-net-mastersdegree/1-jobportal.pdf',
    );
    expect(screen.getByRole('link', { name: 'ระบบ Mutual Fund Portal' })).toHaveAttribute(
      'href',
      '/before2021/sampleprojects/2-university/7-mutualfund-php-bachelorsdegree/mutualfund.pdf',
    );
    expect(screen.getByRole('link', { name: 'วิดีโอ React Telemed ฝั่งโรงพยาบาล' })).toHaveAttribute('href', '/video/React_Telemed_Hospital.mp4');
    expect(screen.getAllByRole('link', { name: 'ดูเดโม' }).length).toBeGreaterThan(0);
    expect(screen.getByRole('heading', { name: 'ระบบเว็บองค์กรของ Honda Leasing' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'การแชร์ความรู้ในทีม' })).toBeInTheDocument();
    expect(screen.getAllByText('โปรเจกต์บริษัท').length).toBeGreaterThan(0);
    expect(screen.getByRole('link', { name: 'ระบบ IT Services' })).toHaveAttribute(
      'href',
      '/before2021/sampleprojects/1-company/1-hondaleasing-csharp-net/1-asp-net/itservices.pdf',
    );
    expect(screen.getByRole('link', { name: 'แชร์ความรู้ SignalR' })).toHaveAttribute('href', '/before2021/sampleprojects/6-sharetoteam/sinalr.docx');
    expect(document.documentElement.lang).toBe('th');
  });

  it('keeps education content visible when switching languages back and forth', async () => {
    render(<App />);

    await userEvent.click(screen.getAllByRole('button', { name: 'TH' })[0]);

    expect(screen.getByRole('heading', { name: 'ประวัติการศึกษา' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'สถาบันบัณฑิตพัฒนบริหารศาสตร์ (NIDA)' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'ระบบ Job Portal' })).toBeInTheDocument();

    await userEvent.click(screen.getAllByRole('button', { name: 'EN' })[0]);

    expect(screen.getByRole('heading', { name: 'Academic background' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'National Institute of Development Administration (NIDA)' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Job Portal' })).toBeInTheDocument();
  });

  it('keeps skill cards visible when switching languages back and forth', async () => {
    render(<App />);

    await userEvent.click(screen.getAllByRole('button', { name: 'TH' })[0]);

    expect(screen.getByRole('heading', { name: 'ชุดเทคโนโลยี' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'DevOps และ Cloud' })).toBeInTheDocument();
    expect(screen.getAllByText('GitHub Actions').length).toBeGreaterThan(0);
    expect(screen.getByText('ยินดีพูดคุยเรื่องงานพัฒนาซอฟต์แวร์ Healthcare technology, Engineering leadership และการใช้ AI ช่วยพัฒนา')).toBeInTheDocument();

    await userEvent.click(screen.getAllByRole('button', { name: 'EN' })[0]);

    expect(screen.getByRole('heading', { name: 'Technology stack' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'DevOps & Cloud' })).toBeInTheDocument();
    expect(screen.getAllByText('GitHub Actions').length).toBeGreaterThan(0);
    expect(screen.getByText('Open to professional conversations about software delivery, healthcare technology, engineering leadership, and AI-assisted development.')).toBeInTheDocument();
  });

  it('keeps other localized sections visible when switching languages back and forth', async () => {
    render(<App />);

    await userEvent.click(screen.getAllByRole('button', { name: 'TH' })[0]);

    expect(screen.getByText('ประสบการณ์ 16+ ปีในการสร้าง production software')).toBeInTheDocument();
    expect(screen.getByText('ส่งมอบ Telemedicine workflows ครอบคลุม API, Web, Android และ iOS')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Telehealth / Telemedicine Platform' })).toBeInTheDocument();
    expect(screen.getByText('เก็บความต้องการ')).toBeInTheDocument();

    await userEvent.click(screen.getAllByRole('button', { name: 'EN' })[0]);

    expect(screen.getByText('16+ years building production software')).toBeInTheDocument();
    expect(screen.getByText('Delivered telemedicine workflows across API, web, Android, and iOS channels.')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Telehealth / Telemedicine Platform' })).toBeInTheDocument();
    expect(screen.getByText('Requirements')).toBeInTheDocument();
  });

  it('toggles the dark theme class', async () => {
    render(<App />);

    await userEvent.click(screen.getAllByRole('button', { name: 'Switch to dark theme' })[0]);

    expect(document.documentElement).toHaveClass('dark');
    expect(window.localStorage.getItem('portfolio-theme')).toBe('dark');
  });

  it('marks contact active when scrolled to the bottom of the page', async () => {
    Object.defineProperty(document.documentElement, 'scrollHeight', { configurable: true, value: 2200 });
    Object.defineProperty(window, 'innerHeight', { configurable: true, value: 800 });
    Object.defineProperty(window, 'scrollY', { configurable: true, value: 1400 });

    render(<App />);
    fireEvent.scroll(window);

    await waitFor(() => {
      expect(screen.getByRole('link', { name: 'Contact' })).toHaveClass('bg-cyan-300');
    });
  });

  it('links education entries to qualification and transcript files', () => {
    render(<App />);

    expect(document.getElementById('education')).toHaveClass('bg-slate-50', 'pt-8', 'sm:pt-10');
    expect(document.getElementById('contact')).toHaveClass('bg-white');

    const qualificationLinks = screen.getAllByRole('link', { name: 'Qualification' });
    const transcriptLinks = screen.getAllByRole('link', { name: 'Transcript' });

    expect(qualificationLinks.map((link) => link.getAttribute('href'))).toEqual(
      expect.arrayContaining([
        '/before2021/certificates/3-masters/masters-qualification-en.jpg',
        '/before2021/certificates/4-bachelors/bachelors-qualification.jpg',
      ]),
    );
    expect(transcriptLinks.map((link) => link.getAttribute('href'))).toEqual(
      expect.arrayContaining([
        '/before2021/certificates/3-masters/masters-transcript1.jpg',
        '/before2021/certificates/4-bachelors/bachelors-transcript.jpg',
      ]),
    );
    expect(screen.getAllByText('Academic Projects')).toHaveLength(2);
    expect(screen.getByRole('link', { name: 'Job Portal' })).toHaveAttribute(
      'href',
      '/before2021/sampleprojects/2-university/6-nosql-csharp-net-mastersdegree/1-jobportal.pdf',
    );
    expect(screen.getByRole('link', { name: 'Job Portal IS Report' })).toHaveAttribute(
      'href',
      '/before2021/sampleprojects/2-university/6-nosql-csharp-net-mastersdegree/2-jobportal-is-report.pdf',
    );
    expect(screen.getByRole('link', { name: 'SaaS Research' })).toHaveAttribute(
      'href',
      '/before2021/sampleprojects/2-university/6-nosql-csharp-net-mastersdegree/3-saas-research.pdf',
    );
    expect(screen.getByRole('link', { name: 'Mutual Fund Portal' })).toHaveAttribute(
      'href',
      '/before2021/sampleprojects/2-university/7-mutualfund-php-bachelorsdegree/mutualfund.pdf',
    );
    expect(screen.getByRole('link', { name: 'E-Book Sales Online' })).toHaveAttribute(
      'href',
      '/before2021/sampleprojects/2-university/8-ebook-jsp-bachelorsdegree/e-book-sales-online.pdf',
    );
  });

  it('shows project video samples and AI pilot demo links', () => {
    render(<App />);

    expect(screen.getByRole('link', { name: 'React Telemed Hospital' })).toHaveAttribute('href', '/video/React_Telemed_Hospital.mp4');
    expect(screen.getByRole('link', { name: 'React Telemed Patient' })).toHaveAttribute('href', '/video/React_Telemed_Patient.mp4');
    expect(screen.getByRole('link', { name: 'Android Telemed Video Call' })).toHaveAttribute('href', '/video/Android_Telemed_Video_Call.mp4');
    expect(screen.getByRole('link', { name: 'Android Telemed Booking' })).toHaveAttribute('href', '/video/Android_Telemed_Booking_Appointment.mp4');

    expect(screen.getByRole('heading', { name: 'Dev Pilot AI' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Automate Test Pilot AI' })).toBeInTheDocument();
    expect(screen.getAllByText('Flutter').length).toBeGreaterThan(0);
    expect(screen.getAllByText('PostgreSQL').length).toBeGreaterThan(0);
    expect(screen.getAllByText('React Native').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Playwright').length).toBeGreaterThan(0);
    expect(screen.getAllByRole('link', { name: 'Live Demo' }).map((link) => link.getAttribute('href'))).toEqual(
      expect.arrayContaining([
        'https://ligerking007.github.io/CodeReviewPilotAI',
        'https://ligerking007.github.io/DevPilotAI/',
        'https://ligerking007.github.io/AutomateTestPilotAI/',
      ]),
    );
  });

  it('links the Agentic AI team sharing presentation in earlier projects', async () => {
    render(<App />);

    await userEvent.click(screen.getAllByRole('button', { name: /Expand/i })[0]);

    expect(screen.getByRole('heading', { name: 'Transportation Management and GPS Information Systems' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'System Architecture Design' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Engineering Tools and Practice' })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'University Software Projects' })).not.toBeInTheDocument();
    expect(screen.queryByRole('img', { name: 'System Architecture Design' })).not.toBeInTheDocument();
    expect(screen.queryByRole('img', { name: 'Engineering Tools and Practice' })).not.toBeInTheDocument();
    expect(screen.getByRole('link', { name: /PTGIS - Geometry Information System/i })).toHaveAttribute(
      'href',
      '/before2021/sampleprojects/1-company/2-onelink-csharp-net/ptgis.pdf',
    );
    expect(screen.getByRole('link', { name: /PVM - Palm Visit Management/i })).toHaveAttribute(
      'href',
      '/before2021/sampleprojects/1-company/2-onelink-csharp-net/pvm.pdf',
    );
    expect(screen.getByRole('link', { name: /TMS - Transportation Management System/i })).toHaveAttribute(
      'href',
      '/before2021/sampleprojects/1-company/2-onelink-csharp-net/tms.pdf',
    );
    expect(screen.getByRole('heading', { name: 'Example Source Code' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Team Knowledge Sharing' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Bank System Source Code Example/i })).toHaveAttribute(
      'href',
      '/before2021/sampleprojects/5-sourcecodeexample/netcore-api-jquery/mysourcecode-banksystem.pdf',
    );
    expect(screen.getByRole('link', { name: /Agentic AI Team Sharing 2026/i })).toHaveAttribute(
      'href',
      '/before2021/sampleprojects/6-sharetoteam/Agentic_AI_TeamSharing_2026_05_JakapanK.pptx',
    );
    expect(screen.getByRole('link', { name: /SignalR Team Sharing/i })).toHaveAttribute('href', '/before2021/sampleprojects/6-sharetoteam/sinalr.docx');
    expect(screen.getByRole('link', { name: /SonarLint Team Sharing/i })).toHaveAttribute('href', '/before2021/sampleprojects/6-sharetoteam/sonarlint.docx');
    expect(screen.getByRole('link', { name: /Jira and Confluence Team Sharing/i })).toHaveAttribute(
      'href',
      '/before2021/sampleprojects/6-sharetoteam/jiraconfluence.docx',
    );
  });

  it('registers every architecture, engineering tool, and team sharing evidence file', () => {
    const registeredFiles = new Set(legacyProjectGroups.flatMap((group) => group.links.map((link) => link.file)));
    const expectedFiles = [...architectureEvidenceFiles, ...engineeringToolEvidenceFiles, ...teamSharingEvidenceFiles];

    expect(expectedFiles).toHaveLength(72);
    expect(expectedFiles.filter((file) => !registeredFiles.has(file))).toEqual([]);
  });

  it('starts expandable panels collapsed on mobile viewports', () => {
    mockMatchMedia(true);
    render(<App />);

    expect(screen.getByRole('heading', { name: 'Current Projects' })).toBeInTheDocument();
    expect(screen.getAllByRole('button', { name: /Expand/i }).length).toBeGreaterThan(0);
    expect(screen.queryByRole('button', { name: /Collapse/i })).not.toBeInTheDocument();
  });
});
