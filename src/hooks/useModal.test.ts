import { act, renderHook } from '@testing-library/react-hooks';
import { useModal } from './useModal';

describe('useModal', () => {
  it('Should have correct inital state', () => {
    const { result } = renderHook(() => useModal());
    expect(result.current.isOpen).toEqual(false);
  });

  it('Should update state on open', async () => {
    const { result } = renderHook(() => useModal());
    act(() => result.current.open());
    expect(result.current.isOpen).toEqual(true);
  });

  it('Should update state on close', async () => {
    const { result } = renderHook(() => useModal());
    act(() => result.current.open());
    act(() => result.current.close());
    expect(result.current.isOpen).toEqual(false);
  });
});
