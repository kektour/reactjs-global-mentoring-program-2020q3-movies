import React from 'react';
import { render, waitForDomChange } from '@testing-library/react';
import axios from 'axios';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MoviesList } from './MoviesList';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
const mockStore = configureStore();
const movies = [
  {
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
  },
  {
    id: 269149,
    title: 'Zootopia',
    tagline: 'Welcome to the urban jungle.',
    vote_average: 7.7,
    vote_count: 6795,
    release_date: '2016-02-11',
    poster_path: 'https://image.tmdb.org/t/p/w500/sM33SANp9z6rXW8Itn7NnG1GOEs.jpg',
    overview:
      "Determined to prove herself, Officer Judy Hopps, the first bunny on Zootopia's police force, jumps at the chance to crack her first case - even if it means partnering with scam-artist fox Nick Wilde to solve the mystery.",
    budget: 150000000,
    revenue: 1023784195,
    genres: ['Animation', 'Adventure', 'Family', 'Comedy'],
    runtime: 108,
  },
  {
    id: 181808,
    title: 'Star Wars: The Last Jedi',
    tagline: 'The Saga Continues',
    vote_average: 7.1,
    vote_count: 4732,
    release_date: '2017-12-13',
    poster_path: 'https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg',
    overview:
      'Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.',
    budget: 200000000,
    revenue: 1325937250,
    genres: ['Fantasy', 'Adventure', 'Science Fiction'],
    runtime: 152,
  },
];
const resp = {
  data: {
    data: movies,
    totalAmount: 3,
  },
};

describe('MoviesList', () => {
  const spyQuerySelector = jest.fn();

  beforeAll(() => {
    Object.defineProperty(global.document, 'querySelector', { value: spyQuerySelector });
  });

  it('Should render component correctly', async () => {
    const store = mockStore({
      movies: {
        filter: {
          genre: 'foo',
          sortBy: 'bar',
          search: 'baz',
        },
      },
    });
    mockedAxios.get.mockImplementationOnce(() => Promise.resolve(resp));
    const body = document.createElement('body');
    const div = document.createElement('div');
    spyQuerySelector.mockImplementation((str) => {
      if (str === '#root') {
        return div;
      } else if (str === 'body') {
        return body;
      }
    });

    const component = render(
      <Provider store={store}>
        <MoviesList />
      </Provider>
    );
    await waitForDomChange();
    expect(component.asFragment()).toMatchSnapshot();
  });
});
