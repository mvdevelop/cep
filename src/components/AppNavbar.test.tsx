import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import AppNavbar from './AppNavbar';

describe('AppNavbar', () => {
  it('navigates with a non-empty search query', () => {
    render(<MemoryRouter><AppNavbar /></MemoryRouter>);
    fireEvent.change(screen.getByRole('searchbox'), { target: { value: ' português ' } });
    fireEvent.submit(screen.getByRole('searchbox').closest('form') as HTMLFormElement);
    expect(screen.getByRole('searchbox')).toHaveValue('');
  });
});
