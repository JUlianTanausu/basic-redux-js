import { createStore, combineReducers } from 'redux';
import palabraReducer from './palabra/reducer';

const reducers = combineReducers({
    palabraReducer
});
/* eslint-disable no-underscore-dangle */
const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */
export default store;