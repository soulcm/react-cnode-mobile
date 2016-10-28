import React, {Component} from 'react';
import {Link} from 'react-router';

import ArticleList from './articleList';

class Main extends Component {
    render() {
        return (
            <div className="main">
                <div className="panel">
                    <nav>
                        <ul>
                            <li><Link to="/" className="selected">全部</Link></li>
                            <li><Link to="/">精华</Link></li>
                            <li><Link to="/">分享</Link></li>
                            <li><Link to="/">问答</Link></li>
                            <li><Link to="/">招聘</Link></li>
                        </ul>
                    </nav>
                    <ArticleList />
                </div>
            </div>
        );
    }
}

export default Main;