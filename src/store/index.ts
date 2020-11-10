import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import { rootReducer } from './rootReducer';

const wrappedReducer = (state: any, action: any) => {
  if (action.type === HYDRATE) {
    return { ...state, ...action.payload };
  }
  return rootReducer(state, action);
};

const initStore = () => createStore(wrappedReducer, composeWithDevTools());

export const store = initStore();
export const wrappedStore = createWrapper(initStore);
