import API from "../utils/API";
import _ from 'lodash'


export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());
    const uniqUserIds = _.uniq(getState().posts.map(post => post.userId))
    uniqUserIds.forEach(id => dispatch(fetchUser))
}


export const fetchPosts = () => async (dispatch) => {
    const response = await API.getPosts();
    dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = (userId) => {
    return (dispatch) => _fetchUser(userId, dispatch)
};

const _fetchUser = _.memoize(async (userId, dispatch) => {
    const response = await API.getUser(userId);
    dispatch({ type: "FETCH_USER", payload: response.data });
})