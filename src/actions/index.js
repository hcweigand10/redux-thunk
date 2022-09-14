import placeHolderAPI from "../utils/API";


export const fetchUser = (userId) => async (dispatch) => {
    const response = await placeHolderAPI.get(`/users/${userId}`);
    dispatch({ type: "FETCH_USER", payload: response.data });
}

export const fetchPosts = () => async (dispatch) => {
    const response = await placeHolderAPI.get("/posts");
    dispatch({ type: "FETCH_POSTS", payload: response.data });
};
