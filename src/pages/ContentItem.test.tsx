import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import ContentItem from './ContentItem';

describe('ContentItem', () => {
  it('shows matching content from the query string', () => {
    render(<MemoryRouter initialEntries={['/search?q=português']}><ContentItem /></MemoryRouter>);
    expect(screen.getByRole('heading', { name: /Resultados para/i })).toBeInTheDocument();
    expect(screen.getByText('Português')).toBeInTheDocument();
  });
});
