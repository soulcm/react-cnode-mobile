import React, {Component} from 'react';
import {Link, IndexLink} from 'react-router';

import TopicList from '../containers/topicList';

class Main extends Component {
    render() {
        const location = this.props.location;
        const tab = location.query.tab || 'all'
        const cls = {}
        cls[tab] = 'on';

        return (
            <div className="main">
                <div className="panel">
                    <nav>
                        <ul>
                            <li className={cls.all}><Link  to="/" activeClassName="selected">全部</Link></li>
                            <li className={cls.good}><Link to="/?tab=good" activeClassName="selected">精华</Link></li>
                            <li className={cls.share}><Link to="/?tab=share" activeClassName="selected">分享</Link></li>
                            <li className={cls.ask}><Link to="/?tab=ask" activeClassName="selected">问答</Link></li>
                            <li className={cls.job}><Link to="/?tab=job" activeClassName="selected">招聘</Link></li>
                        </ul>
                    </nav>
                    <TopicList location={this.props.location}/>
                </div>
            </div>
        );
    }
}

export default Main;