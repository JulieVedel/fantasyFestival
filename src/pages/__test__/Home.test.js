import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../Home';

it('render welcome message', async () => {
  render(<Home />);
  const titleElement = screen.getByRole('heading', { name: 'Vi ses til Fantasyfestival 14. – 15. september 2024' });
  expect(titleElement).toBeInTheDocument();
});
