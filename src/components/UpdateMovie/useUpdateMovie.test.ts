import { act, renderHook } from '@testing-library/react-hooks';
import { useUpdateMovie } from './useUpdateMovie';
import * as MoviesService from '../../services/movies';

describe('useUpdateMovie', () => {
  const updatedMovie = {
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

  it('Should have correct inital state', () => {
    const { result } = renderHook(() => useUpdateMovie());
    expect(result.current.error).toEqual(null);
  });

  it('Should call API when call update movie method', async () => {
    const spyUpdateMovie = jest.spyOn(MoviesService, 'updateMovie').mockImplementationOnce(() => Promise.resolve());
    const { result } = renderHook(() => useUpdateMovie());
    await act(async () => await result.current.updateMovie(updatedMovie));
    expect(spyUpdateMovie).toHaveBeenCalledWith(updatedMovie);
  });

  it('Should set errors if API call was rejected', async () => {
    jest.spyOn(MoviesService, 'updateMovie').mockImplementationOnce(() =>
      Promise.reject({
        response: {
          data: {
            messages: ['"foo" error foo field', '"bar" error bar field', '"baz" error baz field'],
          },
        },
      })
    );
    const { result } = renderHook(() => useUpdateMovie());
    await act(async () => {
      try {
        await result.current.updateMovie({} as any);
      } catch (_) {}
    });
    expect(result.current.error).toEqual({ foo: '"foo" error foo field', bar: '"bar" error bar field', baz: '"baz" error baz field' });
  });

  it('Should clear errors', async () => {
    jest.spyOn(MoviesService, 'updateMovie').mockImplementationOnce(() =>
      Promise.reject({
        response: {
          data: {
            messages: ['"foo" error foo field', '"bar" error bar field', '"baz" error baz field'],
          },
        },
      })
    );
    const { result } = renderHook(() => useUpdateMovie());
    await act(async () => {
      try {
        await result.current.updateMovie({} as any);
      } catch (_) {}
    });
    act(() => result.current.clearError());
    expect(result.current.error).toEqual(null);
  });
});
