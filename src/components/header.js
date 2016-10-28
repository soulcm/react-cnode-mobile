import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

import cnodeImg from '../images/cnodejs_light.svg';

class Header extends Component {
    render() {
        return (
            <header>
                <Link className="img-cnode" to="/"><img src={cnodeImg} alt="cnode"/></Link>
                <input className="search" type="text" />
                <ul className="nav">
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/">新手入门</Link></li>
                    <li><Link to="/">API</Link></li>
                    <li><Link to="/">关于</Link></li>
                    <li><Link to="/">注册</Link></li>
                    <li><Link to="/">登录</Link></li>
                </ul>
            </header>
        );
    }
}

Header.propTypes = {

};

export default Header;