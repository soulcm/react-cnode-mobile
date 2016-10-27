import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

import cnodeImg from '../images/cnodejs_light.svg';

class Header extends Component {
    render() {
        return (
            <header>
                <Link className="img-cnode" to="/"><img src={cnodeImg} alt="cnode"/></Link>
            </header>
        );
    }
}

Header.propTypes = {

};

export default Header;