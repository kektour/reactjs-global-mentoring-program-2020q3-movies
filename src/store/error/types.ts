export const ERROR_SET = '@@ERROR/SET';
export const ERROR_CLEAR = '@@ERROR/CLEAR';

export type ErrorState = Record<string, string> | null;

export interface ErrorSetAction {
  type: typeof ERROR_SET;
  error: Record<string, string>;
}

export interface ErrorClearAction {
  type: typeof ERROR_CLEAR;
}

export type ErrorActionTypes = ErrorSetAction | ErrorClearAction;
