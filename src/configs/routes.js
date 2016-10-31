import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Root from '../containers/root';
import Main from '../components/main';
import Topic from '../containers/topic';



const routes = [
    {
        path: '/',
        component: Root,
        indexRoute: {
            component: Main,
            onLeave: () => {
                sessionStorage.setItem('scrollTop', document.body.scrollTop || document.documentElement.scrollTop)
            }
        },
        childRoutes: [{
            path: 'topic/:id',
            component: Topic
        }]
    }
];

export default routes;