import { useState, useCallback } from 'react';

type UseModal = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

export const useModal = (defaultState: boolean = false): UseModal => {
  const [isOpen, setIsOpen] = useState(defaultState);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return {
    isOpen,
    open,
    close,
  };
};
