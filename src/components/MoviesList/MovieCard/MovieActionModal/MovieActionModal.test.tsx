import React from 'react';

import { act, render, screen } from '@testing-library/react';
import { MovieActionModal } from './MovieActionModal';
import * as hooks from '../../../../../hooks/useModal';
import userEvent from '@testing-library/user-event';

describe('MovieActionModal', () => {
  it('Should render component correctly', () => {
    const { asFragment } = render(<MovieActionModal onDeleteClick={() => null} onEditClick={() => null} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Should close if click outside', () => {
    const handleCloseModalMock = jest.fn();
    const useModalMock = jest.spyOn(hooks, 'useModal').mockImplementation(() => ({ close: handleCloseModalMock } as any));
    const { container } = render(<MovieActionModal onDeleteClick={() => null} onEditClick={() => null} />);

    act(() => userEvent.click(container));
    expect(handleCloseModalMock).toHaveBeenCalled();

    useModalMock.mockRestore();
  });

  it('Should close and open edit modal', () => {
    const handleCloseModalMock = jest.fn();
    const handleEditClick = jest.fn();
    const useModalMock = jest.spyOn(hooks, 'useModal').mockImplementation(() => ({ close: handleCloseModalMock, isOpen: true } as any));
    const { container } = render(<MovieActionModal onDeleteClick={() => null} onEditClick={handleEditClick} />);

    act(() => userEvent.click(container.querySelector('button.editButton') as Element));
    expect(handleEditClick).toHaveBeenCalled();
    expect(handleCloseModalMock).toHaveBeenCalled();

    useModalMock.mockRestore();
  });

  it('Should close and open delete modal', () => {
    const handleCloseModalMock = jest.fn();
    const handleDeleteClick = jest.fn();
    const useModalMock = jest.spyOn(hooks, 'useModal').mockImplementation(() => ({ close: handleCloseModalMock, isOpen: true } as any));
    const { container } = render(<MovieActionModal onDeleteClick={handleDeleteClick} onEditClick={() => null} />);

    act(() => userEvent.click(container.querySelector('button.deleteButton') as Element));
    expect(handleDeleteClick).toHaveBeenCalled();
    expect(handleCloseModalMock).toHaveBeenCalled();

    useModalMock.mockRestore();
  });
});
