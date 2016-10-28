import React, {Component} from 'react';
import {Link} from 'react-router';

class ArticleList extends Component {
    render() {
        return (
            <ul className="list">
                <li>
                    <Link>
                        <div className="top">
                            <span className="normal">分享</span>
                            <h3 title="【杭州】第三期 杭州 Node Party 开始报名啦！嘉宾和奖品非常劲爆额！">【杭州】第三期 杭州 Node Party 开始报名啦！嘉宾和奖品非常劲爆额！</h3>
                        </div>
                        <div className="bottom">
                            <span className="author"></span>
                            <div className="info">
                                <p>
                                    <span>coolfishstudio</span>
                                    <span>94/11693</span>
                                </p>
                                <p>
                                    <span>1月前</span>
                                    <span>9分钟前</span>
                                </p>
                            </div>
                        </div>
                    </Link>
                </li>
            </ul>
        );
    }
}

export default ArticleList;