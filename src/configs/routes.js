import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Root from '../containers/root';
import Main from '../components/main';



const routes = [
    {
        path: '/',
        component: Root,
        indexRoute: { component: Main },
        childRoutes: [
            { path: 'all', component: Main },
            {
                path: 'good',
                component: Main
            }
        ]
    }
];

export default routes;