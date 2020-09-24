import { ThunkAction as ReduxThunkAction } from 'redux-thunk';
import { ErrorActionTypes } from './error';
import { MoviesActionTypes } from './movies/types';
import { rootReducer } from './rootReducer';

export type RootState = ReturnType<typeof rootReducer>;
export type RootActionTypes = MoviesActionTypes | ErrorActionTypes;
export type ThunkAction = ReduxThunkAction<void, RootState, any, RootActionTypes>;
