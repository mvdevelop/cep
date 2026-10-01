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
});
