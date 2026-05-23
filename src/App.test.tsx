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

  it('starts expandable panels collapsed on mobile viewports', () => {
    mockMatchMedia(true);
    render(<App />);

    expect(screen.getByRole('heading', { name: 'Current Projects' })).toBeInTheDocument();
    expect(screen.getAllByRole('button', { name: /Expand/i }).length).toBeGreaterThan(0);
    expect(screen.queryByRole('button', { name: /Collapse/i })).not.toBeInTheDocument();
  });
});
