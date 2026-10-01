import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import Coments from './Coments';

describe('Coments', () => {
  beforeEach(() => localStorage.clear());

  it('publishes a comment and persists it', () => {
    render(<Coments />);
    fireEvent.change(screen.getByPlaceholderText(/Compartilhe sua opinião/i), { target: { value: 'Excelente conteúdo' } });
    fireEvent.click(screen.getByRole('button', { name: 'Publicar' }));
    expect(screen.getByText('Excelente conteúdo')).toBeInTheDocument();
    expect(localStorage.getItem('cep_comments')).toContain('Excelente conteúdo');
  });

  it('ignores malformed persisted comments', () => {
    localStorage.setItem('cep_comments', '{invalid');
    render(<Coments />);
    expect(screen.getByText(/Nenhum comentário ainda/i)).toBeInTheDocument();
  });

  it('prevents comments longer than the supported limit', () => {
    render(<Coments />);
    const input = screen.getByPlaceholderText(/Compartilhe sua opinião/i);
    fireEvent.change(input, { target: { value: 'a'.repeat(501) } });
    fireEvent.click(screen.getByRole('button', { name: 'Publicar' }));
    expect(screen.queryByText('a'.repeat(501))).not.toBeInTheDocument();
  });
});
