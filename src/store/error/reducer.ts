import { ErrorActionTypes, ErrorState, ERROR_CLEAR, ERROR_SET } from './types';

const initialState: ErrorState = null;

export const errorReducer = (state: ErrorState = initialState, action: ErrorActionTypes): ErrorState => {
  switch (action.type) {
    case ERROR_SET:
      return { ...action.error };
    case ERROR_CLEAR:
      return null;
    default:
      return state;
  }
};
