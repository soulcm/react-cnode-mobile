import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import todoApp from '../reducers/index';

const configureStore = (initialState) => {
    return createStore(todoApp, initialState, applyMiddleware(thunk));
}
module.exports = configureStore;