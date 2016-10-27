import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Root from '../containers/root';
import ArticleList from '../components/articleList';



const routes = [
    {
        path: '/',
        component: Root,
        indexRoute: { component: ArticleList },
        childRoutes: [
            { path: 'all', component: ArticleList },
            {
                path: 'good',
                component: ArticleList
            }
        ]
    }
];

export default routes;