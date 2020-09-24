import { ErrorClearAction, ErrorSetAction, ERROR_CLEAR, ERROR_SET } from './types';

export const errorSetActionCreator = (value: Record<string, string>): ErrorSetAction => ({
  type: ERROR_SET,
  error: value,
});

export const errorClearActionCreator = (): ErrorClearAction => ({
  type: ERROR_CLEAR,
});
