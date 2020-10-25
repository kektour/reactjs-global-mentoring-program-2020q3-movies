import { act, renderHook } from '@testing-library/react-hooks';
import { useRemoveMovie } from './useRemoveMovie';
import * as MoviesService from '../../services/movies';

describe('useRemoveMovie', () => {
  it('Should call API when call remove movie method', async () => {
    const id = 123;
    const spyCreateMovie = jest.spyOn(MoviesService, 'removeMovie').mockImplementationOnce(() => Promise.resolve());
    const { result } = renderHook(() => useRemoveMovie());
    await act(async () => await result.current.removeMovie(id));
    expect(spyCreateMovie).toHaveBeenCalledWith(id);
  });
});
