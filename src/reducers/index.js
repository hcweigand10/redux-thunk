import { combineReducers } from 'redux'
import { postsApi } from "../utils/postsSlice"

export default combineReducers({
    postsApi: postsApi.reducer,
})