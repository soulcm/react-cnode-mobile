import * as types from '../constants/actionTypes';
import {getTopicList} from '../apis/publicApi';

export const getList = (data) => {
    return (dispatch) => {
        getTopicList(data).then((res) => {
            if (res.success) {
                return dispatch({
                    type: types.GET_LIST,
                    data: res.data
                })
            }
        })
    }
}