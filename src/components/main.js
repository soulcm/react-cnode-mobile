import React, {Component} from 'react';
import {Link, IndexLink} from 'react-router';

import TopicList from '../containers/topicList';

class Main extends Component {
    render() {
        return (
            <div className="main">
                <div className="panel">
                    <nav>
                        <ul>
                            <li><IndexLink to="/" activeClassName="selected">全部</IndexLink></li>
                            <li><Link to="/good" activeClassName="selected">精华</Link></li>
                            <li><Link to="/share" activeClassName="selected">分享</Link></li>
                            <li><Link to="/ask" activeClassName="selected">问答</Link></li>
                            <li><Link to="/job" activeClassName="selected">招聘</Link></li>
                        </ul>
                    </nav>
                    <TopicList location={this.props.location}/>
                </div>
            </div>
        );
    }
}

export default Main;