import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import routes from './configs/routes';
import configureStore from './store/index';
import DevTools from './containers/DevTools';

import './styles/main';
import 'github-markdown-css'; //markdown css

const store = configureStore();

if (process.env.NODE_ENV === 'production') {
    render(
        <Provider store={store}>
            <Router history={browserHistory} routes={routes} />
        </Provider>,
        document.getElementById('app')
    )
} else {
    render(
        <Provider store={store}>
            <div>
                <Router history={browserHistory} routes={routes} />
                <DevTools />
            </div>
        </Provider>,
        document.getElementById('app')
    )
}