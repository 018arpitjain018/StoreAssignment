import {createSlice} from '@reduxjs/toolkit';
import {GetPostAction, setPostAction, resetPostAction} from './actions';

/**
 * The initial state of the Post reducer is an object with a post property that is set to null. 
 * This reducer is used to manage the state related to posts in the application.
 */
const initialState = {
    post: null
}

/**
 * The PostSlice reducer manages the state related to the posts in the application. 
 * It has three action creators:
 * 
 * * GetPost: This action is used to get the posts from the server.
 * * setPost: This action is used to set the post data in the state.
 * * resetPost: This action is used to reset the post data in the state to its initial value.
 */
export const PostSlice = createSlice({
    name: 'Post',
    initialState: initialState,
    reducers: {
        GetPost: GetPostAction,
        setPost: setPostAction,
        resetPost: resetPostAction
    }
});

export const { GetPost, setPost, resetPost } = PostSlice.actions
export default PostSlice.reducer;
