import {GET_LIST, UPDATE_LIST} from '../constants/actionTypes';



const topicList = (state=[], action) => {
    switch(action.type) {
        case GET_LIST:
            return action.data || state
        case UPDATE_LIST:
            return [...state, ...action.data]
        default:
            return state
    }
}

export default topicList