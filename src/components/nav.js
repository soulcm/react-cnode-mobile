import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router'

class Nav extends Component {
    render() {
        return (
            <ul>
                <li>
                    <Link to="/all">全部</Link>
                </li>
                <li>
                    <Link to="/good">精华</Link>
                </li>
            </ul>
        );
    }
}

Nav.propTypes = {

};

export default Nav;