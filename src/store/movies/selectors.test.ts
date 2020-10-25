import { moviesFilterSelector, mapMoviesFilterSelector } from './selectors';

describe('Movies Selectors', () => {
  const rootState = {
    movies: {
      filter: {
        genre: 'foo',
        sortBy: 'bar',
        search: 'baz',
      },
    },
  };

  it('Should moviesFilterSelector return correct value', () => {
    expect(moviesFilterSelector(rootState)).toEqual({
      genre: 'foo',
      sortBy: 'bar',
      search: 'baz',
    });
  });

  it('Should mapMoviesFilterSelector return correct value', () => {
    expect(mapMoviesFilterSelector(rootState)).toEqual({
      limit: 9,
      filter: 'foo',
      sortOrder: 'desc',
      sortBy: 'bar',
      searchBy: 'title',
      search: 'baz',
    });
  });
});
