import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import App from './App';

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
    expect(screen.getByText('Cross-Platform Development')).toBeInTheDocument();
    expect(screen.getByText('AI Integration & Engineering')).toBeInTheDocument();
    expect(screen.getByText('Agile & DevOps Practice')).toBeInTheDocument();
  });

  it('switches between English and Thai content', async () => {
    render(<App />);

    await userEvent.click(screen.getAllByRole('button', { name: 'TH' })[0]);

    expect(screen.getAllByText('จักรพันธ์ กันตา').length).toBeGreaterThan(0);
    expect(screen.getByRole('heading', { name: 'การส่งมอบซอฟต์แวร์ระดับองค์กร' })).toBeInTheDocument();
    expect(document.documentElement.lang).toBe('th');
  });

  it('toggles the dark theme class', async () => {
    render(<App />);

    await userEvent.click(screen.getAllByRole('button', { name: 'Switch to dark theme' })[0]);

    expect(document.documentElement).toHaveClass('dark');
    expect(window.localStorage.getItem('portfolio-theme')).toBe('dark');
  });

  it('links education entries to qualification and transcript files', () => {
    render(<App />);

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

  it('starts expandable panels collapsed on mobile viewports', () => {
    mockMatchMedia(true);
    render(<App />);

    expect(screen.getByRole('heading', { name: 'Current Projects' })).toBeInTheDocument();
    expect(screen.getAllByRole('button', { name: /Expand/i }).length).toBeGreaterThan(0);
    expect(screen.queryByRole('button', { name: /Collapse/i })).not.toBeInTheDocument();
  });
});
