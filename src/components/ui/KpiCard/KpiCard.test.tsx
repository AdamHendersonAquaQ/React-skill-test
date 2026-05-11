import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { KpiCard } from './KpiCard';

describe('KpiCard', () => {
  it('renders label, value, and sub text', () => {
    render(<KpiCard label="Cash Balance" value="£95k" sub="As of Dec 2024" />);
    expect(screen.getByText('Cash Balance')).toBeInTheDocument();
    expect(screen.getByText('£95k')).toBeInTheDocument();
    expect(screen.getByText('As of Dec 2024')).toBeInTheDocument();
  });

  it('applies neg class for negative sentiment', () => {
    render(<KpiCard label="Burn" value="−£13.5k" sub="Monthly" sentiment="neg" />);
    const valueEl = screen.getByText('−£13.5k');
    expect(valueEl.className).toMatch(/neg/);
  });

  it('applies pos class for positive sentiment', () => {
    render(<KpiCard label="Revenue" value="£100k" sub="This month" sentiment="pos" />);
    const valueEl = screen.getByText('£100k');
    expect(valueEl.className).toMatch(/pos/);
  });

  it('defaults to neutral sentiment', () => {
    render(<KpiCard label="Total" value="£444k" sub="Period" />);
    const valueEl = screen.getByText('£444k');
    expect(valueEl.className).toMatch(/neutral/);
  });
});
