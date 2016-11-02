import {connect} from 'react-redux';

import Topic from '../components/topic';

const mapStateToProps = (state) => {
    return {
        info: state.topicInfo
    }
}

const mapDispatchToProps = (dispatch) => {

}



export default connect()(Topic)