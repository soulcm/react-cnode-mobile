import {GET_TOPIC_INFO} from '../constants/actionTypes';

const topicInfo = (state={}, action) => {
    switch (action.type) {
        case GET_TOPIC_INFO:

            return Object.assign({}, action.data);

        default:
            return state
    }
}