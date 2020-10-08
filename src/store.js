import { createStore, combineReducers } from 'redux';

const reducers = {};

// put reducers in a form that we can pass to createStore function
const rootReducer = combineReducers(reducers);

// export function configureStore, return createStore with rootReducer
export const configureStore = () => createStore(rootReducer);