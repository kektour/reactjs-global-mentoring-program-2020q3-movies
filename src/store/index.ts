import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import { rootReducer } from './rootReducer';

export const store = createStore(rootReducer, composeWithDevTools());
