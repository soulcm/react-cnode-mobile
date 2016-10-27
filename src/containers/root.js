import {connect} from 'react-redux';

import Header from '../components/header';

import React, {Component} from 'react';

class Root extends Component {
    render() {
        return (
            <div>
                <Header />
                {this.props.children}
            </div>
        );
    }
}

export default connect()(Root)