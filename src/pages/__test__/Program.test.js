import React from 'react';
import {
  render, screen,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import Program from '../Program';

it('find all program items on render', async () => {
  render(<Program />);
  const programElements = await screen.findAllByTestId('program-item');
  expect(programElements.length).toBe(9);
});
