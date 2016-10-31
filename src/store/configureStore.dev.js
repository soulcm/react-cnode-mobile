import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import todoApp from '../reducers/index';
import DevTools from '../containers/DevTools';

const enhancer = compose(
    //你要使用的中间件，放在前面
    applyMiddleware(thunk),
    //必须的！启用带有monitors（监视显示）的DevTools
    DevTools.instrument()
)

const configureStore = (initialState) => {
    return createStore(todoApp, initialState, enhancer);
}
module.exports = configureStore;