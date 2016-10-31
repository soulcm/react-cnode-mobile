import * as types from '../constants/actionTypes';
import {topicList, topicInfo} from '../apis/publicApi';

export const getTopicList = (data) => {
    return (dispatch) => {
        topicList(data).then((res) => {
            if (res.success) {
                return dispatch({
                    type: types.GET_LIST,
                    data: res.data
                })
            }
        })
    }
}

export const updateTopicList = (data) => {
    return (dispatch) => {
        topicList(data).then((res) => {
            if (res.success) {
                return dispatch({
                    type: types.UPDATE_LIST,
                    data: res.data
                })
            }
        })
    }
}

export const getTopicInfo = () => {
    return (dispatch) => {
        topicInfo().then((res) => {
            if (res.success) {
                return dispatch({
                    type: types.GET_TOPIC_INFO,
                    data: res.data
                })
            }
        })
    }
}