import React, {Component, PropTypes} from 'react';

import classNames from 'classnames';

class Topic extends Component {
    constructor(props) {
        super(props);
        this.handleBack = this.handleBack.bind(this);
    }

    handleBack() {
        this.context.router.goBack();
    }

    render() {
        // const {data} = this.props;

        // const tabCls = classNames('normal', {
        //     color: data.good || data.top
        // })
        // let tab = data.tab;
        // if (data.good) {
        //     tab = 'good'
        // } else if (data.top) {
        //     tab = 'top'
        // }

        return (
            <div className="topic">
                <div className="topic-header">
                    <span onClick={this.handleBack} className="topic-back">返回</span>
                    <span className="topic-title">
                        <span className="normal color">精华</span>
                        【Node全栈】升级为CNode官方公众号，招收喜欢运营的小伙伴
                    </span>

                </div>
            </div>
        );
    }
}

Topic.propTypes = {

};

Topic.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default Topic;