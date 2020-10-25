import { MoviesActionTypes } from './movies/types';
import { rootReducer } from './rootReducer';

export type RootState = ReturnType<typeof rootReducer>;
export type RootActionTypes = MoviesActionTypes;
