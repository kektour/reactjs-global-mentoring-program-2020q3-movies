import React from 'react';
import { render, waitForDomChange } from '@testing-library/react';
import axios from 'axios';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MovieDetails } from './MovieDetails';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
const mockStore = configureStore();
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

describe('MovieDetails', () => {
  const spyScrollTo = jest.fn();

  beforeAll(() => {
    Object.defineProperty(global.window, 'scrollTo', { value: spyScrollTo });
  });

  it('Should render component correctly', async () => {
    const store = mockStore({});
    mockedAxios.get.mockImplementationOnce(() => Promise.resolve({ data: movie }));
    const component = render(
      <Provider store={store}>
        <MovieDetails movieId={movie.id + ''} />
      </Provider>
    );
    await waitForDomChange();
    expect(component.asFragment()).toMatchSnapshot();
  });
});
