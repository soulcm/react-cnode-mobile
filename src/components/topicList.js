import React, {Component} from 'react';
import {Link} from 'react-router';
import classNames from 'classnames';

import {getTopicList} from '../apis/publicApi';
import {topicTab} from '../constants/topic';
import {formDate} from '../tools/index';

class TopicList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1
        }
        this.handlePage = this.handlePage.bind(this);
    }

    componentWillMount() {
        if (!this.props.list.length) {
            this.props.getList({tab: this.props.location.query.tab || 'all'})
        } else {
            this.setState({
                page: Math.ceil(this.props.list.length / 10)
            })
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.location.query.tab !== this.props.location.query.tab) {
            this.props.getList({tab: nextProps.location.query.tab || 'all'})
            this.setState({page: 1})
        }
    }

    componentDidMount() {
        document.addEventListener('scroll', this.handlePage, false);
        if (this.props.list.length) {
            document.body.scrollTop = document.documentElement.scrollTop = sessionStorage.getItem('scrollTop') || 0;
            sessionStorage.removeItem('scrollTop');
        }
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.handlePage)
    }

    handlePage() {
        const y = document.body.scrollTop || document.documentElement.scrollTop;
        const documentH = document.documentElement.clientHeight;
        const dom = document.querySelectorAll('.list li');
        if (dom[dom.length - 1].offsetTop + dom[dom.length - 1].clientHeight <= y + documentH) {
            this.props.updateList({
                tab: this.props.location.query.tab || 'all',
                page: this.state.page + 1
            })
            this.setState({ page: this.state.page + 1 })
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
                            <Link to={`/topic/${item.id}`}>
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

TopicList.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default TopicList;