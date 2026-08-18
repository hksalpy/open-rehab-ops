import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { App } from './App';

describe('App', () => {
  it('identifies the interface as a synthetic demo', () => {
    render(<App />);
    expect(screen.getByText('Synthetic demo')).toBeInTheDocument();
    expect(screen.getByText(/does not provide diagnosis/i)).toBeInTheDocument();
  });
});
