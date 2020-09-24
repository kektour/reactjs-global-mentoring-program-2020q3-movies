import { RootState } from '../types';
import { ErrorState } from './types';

export const errorSelector = (state: RootState): ErrorState => state.error;
