import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Root from '../containers/root';
import Main from '../components/main';



const routes = [
    {
        path: '/',
        component: Root,
        indexRoute: { component: Main },
        childRoutes: [{
            path: 'share',
            component: Main
        }, {
            path: 'good',
            component: Main
        }, {
            path: 'ask',
            component: Main
        }, {
            path: 'job',
            component: Main
        }]
    }
];

export default routes;