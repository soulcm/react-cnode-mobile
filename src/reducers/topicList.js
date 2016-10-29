import {GET_LIST} from '../constants/actionTypes';



const topicList = (state=[], action) => {
    switch(action.type) {
        case GET_LIST:
            return action.data || state
        default:
            return state
    }
}

export default topicList