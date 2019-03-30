import { createStore } from 'redux';
import rootReducer from './reducers';

// outer store
const initState = {};

const store = createStore(rootReducer, initState);

export default store;