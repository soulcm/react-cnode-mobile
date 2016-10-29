import fetchApi from './index';

export const getTopicList = (data) => {
    return fetchApi({
        url: '/v1/topics',
        body: data
    })
}
