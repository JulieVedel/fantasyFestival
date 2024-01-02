import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProgramItem from '../ProgramItem';

const mockData1 = {
  category: 'Bedst til børn',
  description: 'I denne andedam har man i flere år kunne få vanvittige gode præmier.',
  image_url: 'https://cdn.bakken.dk/media/1893/0q7a9234.jpg?center=0.48484848484848486%2C0.42385321100917434&mode=crop&width=768&height=768&rnd=131660344920000000&format=jpg&quality=80',
  program_date: 'Søndag d. 15/9',
  program_id: 133,
  program_location: 'Den lille dam',
  registration: 'Kræver tilmelding',
  short_description: 'Andedam hvor man kan vinde præmier',
  speaker: null,
  time_end: '13:15',
  time_start: '12:30',
  times: ['Eftermiddag'],
  title: 'andedam',
};

const mockData2 = {
  category: 'Bedst til børn',
  description: 'I denne andedam har man i flere år kunne få vanvittige gode præmier.',
  image_url: 'https://cdn.bakken.dk/media/1893/0q7a9234.jpg?center=0.48484848484848486%2C0.42385321100917434&mode=crop&width=768&height=768&rnd=131660344920000000&format=jpg&quality=80',
  program_date: 'Søndag d. 15/9',
  program_id: 133,
  program_location: 'Den lille dam',
  registration: 'Kræver ikke tilmelding',
  short_description: 'Andedam hvor man kan vinde præmier',
  speaker: null,
  time_end: '13:15',
  time_start: '12:30',
  times: ['Eftermiddag'],
  title: 'andedam',
};

describe('ProgramItem buttons', () => {
  it('check for 3 buttons - activity requires registration', async () => {
    render(<ProgramItem item={mockData1} />);
    const buttonElements = screen.getAllByRole('button');
    expect(buttonElements.length).toBe(3);
  });

  it('check for 2 buttons - activity does NOT require registration', async () => {
    render(<ProgramItem item={mockData2} />);
    const buttonElements = screen.getAllByRole('button');
    expect(buttonElements.length).toBe(2);
  });

  it('check for "my list" button', async () => {
    render(<ProgramItem item={mockData1} />);
    const buttonElement = screen.getByRole('button', { name: /tilføj liste/i });
    expect(buttonElement).toBeInTheDocument();
  });

  it('check change for "my list" button', async () => {
    render(<ProgramItem item={mockData1} />);
    const buttonElementBefore = screen.getByRole('button', { name: /tilføj liste/i });
    fireEvent.click(buttonElementBefore);
    const buttonElementAfter = screen.getByRole('button', { name: /tilføjet/i });
    expect(buttonElementAfter).toBeInTheDocument();
  });

  it('dialog should NOT visible on render', async () => {
    render(<ProgramItem item={mockData1} />);
    const dialogElement = screen.queryByRole('dialog');
    expect(dialogElement).not.toBeInTheDocument();
  });

  it('dialog should open on button click', async () => {
    render(<ProgramItem item={mockData1} />);
    const buttonElement = screen.getByRole('button', { name: /læs mere/i });
    fireEvent.click(buttonElement);
    const dialogElement = screen.getByRole('dialog');
    expect(dialogElement).toBeInTheDocument();
  });
});
