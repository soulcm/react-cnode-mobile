import {connect} from 'react-redux'

import TopicList from '../components/topicList'
import {getList} from '../actions/index'

const mapStateToProps = (state, ownProps) => {
    return {
        list: state.topicList
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getList: (data) => {
            dispatch(getList(Object.assign({
                limit: 10,
                mdrender: false,
                page: 1
            }, data)))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopicList)