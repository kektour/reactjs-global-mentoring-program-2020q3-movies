import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import { MovieCard } from './MovieCard';

const movie = {
  id: 337167,
  title: 'Fifty Shades Freed',
  tagline: "Don't miss the climax",
  vote_average: 6.1,
  vote_count: 1195,
  release_date: '2018-02-07',
  poster_path: 'https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg',
  overview:
    'Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.',
  budget: 55000000,
  revenue: 136906000,
  genres: ['Drama', 'Romance'],
  runtime: 106,
};

describe('MovieCard', () => {
  const spyQuerySelector = jest.fn();

  beforeAll(() => {
    Object.defineProperty(global.document, 'querySelector', { value: spyQuerySelector });
    ReactDOM.createPortal = jest.fn((e) => e) as any;
  });

  it('Should render component correctly', () => {
    const body = document.createElement('body');
    const div = document.createElement('div');
    spyQuerySelector.mockImplementationOnce(() => body);
    spyQuerySelector.mockImplementationOnce(() => div);
    spyQuerySelector.mockImplementationOnce(() => body);
    spyQuerySelector.mockImplementationOnce(() => div);

    const component = render(<MovieCard movie={movie} />);
    expect(component.asFragment()).toMatchSnapshot();
  });
});
