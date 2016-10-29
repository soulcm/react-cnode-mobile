import React, {Component} from 'react';
import {Link} from 'react-router';
import classNames from 'classnames';

import {getTopicList} from '../apis/publicApi';
import {topicTab} from '../constants/topic';
import {formDate} from '../tools/index';

class TopicList extends Component {

    componentWillMount() {
        this.props.getList()
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.location.pathname !== this.props.location.pathname) {
            this.props.getList({tab: nextProps.location.pathname.slice(1)})
        }
    }

    render() {
        const list = this.props.list;

        return (
            <ul className="list">
                {list.map((item) => {
                    const tabCls = classNames('normal', {
                        color: item.good || item.top
                    })
                    let tab = item.tab;
                    if (item.good) {
                        tab = 'good'
                    } else if (item.top) {
                        tab = 'top'
                    }
                    return (
                        <li key={item.id}>
                            <Link>
                                <div className="top">
                                    <span className={tabCls}>{topicTab[tab]}</span>
                                    <h3 title={item.title}>{item.title}</h3>
                                </div>
                                <div className="bottom">
                                    <span className="author"
                                        style={{backgroundImage: `url(${item.author.avatar_url})`}}></span>
                                    <div className="info">
                                        <p>
                                            <span>{item.author.loginname}</span>
                                            <span>{`${item.reply_count}/${item.visit_count}`}</span>
                                        </p>
                                        <p>
                                            <span>{formDate(item.create_at)}</span>
                                            <span>{formDate(item.last_reply_at)}</span>
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        );
    }
}

export default TopicList;