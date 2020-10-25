import axios from 'axios';
import { createMovie, fetchMovies, removeMovie, updateMovie, url } from './movies';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Movies Service', () => {
  it('should call fetchMovies with right params', async () => {
    const params = { filter: 'qwe', limit: 1, offset: 2, search: 'qwe', searchBy: 'title', sortBy: 'qwe', sortOrder: 'desc' } as any;
    const movies = [
      {
        id: 1,
        title: 'foo',
      },
    ];
    const resp = { data: movies };
    mockedAxios.get.mockImplementationOnce(() => Promise.resolve(resp));
    const result = await fetchMovies(params);
    expect(mockedAxios.get).toHaveBeenCalledWith(url, { params });
    expect(result).toEqual(movies);
  });

  it('should call removeMovie with right params', async () => {
    const id = 123;
    mockedAxios.delete.mockImplementationOnce(() => Promise.resolve());
    await removeMovie(id);
    expect(mockedAxios.delete).toHaveBeenCalledWith(`${url}/${id}`);
  });

  it('should call updateMovie with right params', async () => {
    const movie = {
      id: 1,
      title: 'foo',
    } as any;
    mockedAxios.put.mockImplementationOnce(() => Promise.resolve());
    await updateMovie(movie);
    expect(mockedAxios.put).toHaveBeenCalledWith(url, movie);
  });

  it('should call createMovie with right params', async () => {
    const movie = {
      title: 'foo',
    } as any;
    mockedAxios.post.mockImplementationOnce(() => Promise.resolve());
    await createMovie(movie);
    expect(mockedAxios.post).toHaveBeenCalledWith(url, movie);
  });
});
