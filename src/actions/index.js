import placeHolderAPI from "../utils/API";

export const fetchPosts = () => async (dispatch) => {
    const response = await placeHolderAPI.get("/posts");
    dispatch({ type: "FETCH_POSTS", payload: response });
};
