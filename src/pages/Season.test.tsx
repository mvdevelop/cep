import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import Season from './Season';

describe('Season', () => {
  it('navigates between content pages', () => {
    render(<MemoryRouter initialEntries={['/season/1']}><Routes><Route path="/season/:id" element={<Season />} /></Routes></MemoryRouter>);
    expect(screen.getByText(/Página 1 de/i)).toBeInTheDocument();
    const next = screen.getByRole('button', { name: /Próxima página/i });
    fireEvent.click(next);
    expect(screen.getByText(/Página 2 de/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Próxima página/i })).toBeDisabled();
  });

  it('shows not found for an invalid route id', () => {
    render(<MemoryRouter initialEntries={['/season/999']}><Routes><Route path="/season/:id" element={<Season />} /></Routes></MemoryRouter>);
    expect(screen.getByText('Página não encontrada.')).toBeInTheDocument();
  });
});
