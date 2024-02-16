import { FETCH_POST, FETCH_ALL, FETCH_FILTERED, UPDATE_POST, DELETE_POST, CREATE_POST } from '../constants/actionTypes';
import * as api from '../api';

export const getPost = (id) => async (dispatch) => {
    try {
        const { data } = await api.fetchPost(id);
        dispatch({ type: FETCH_POST, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        dispatch({ type: FETCH_ALL, payload: data });
    } catch (err) {
        console.log(err);
    }
};

export const getFilteredPosts = (searchQuery) => async (dispatch) => {
    try {
        const {
            data: { data },
        } = await api.fetchFilteredPosts(searchQuery);
        console.log(data);
        dispatch({ type: FETCH_FILTERED, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        dispatch({ type: CREATE_POST, payload: data });
    } catch (err) {
        console.log(err);
    }
};

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);
        dispatch({ type: UPDATE_POST, payload: data });
    } catch (err) {
        console.log(err);
    }
};

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);
        dispatch({ type: DELETE_POST, payload: id });
    } catch (err) {
        console.log(err);
    }
};

export const likePost = (id) => async (dispatch) => {
    try {
        const { data } = await api.likePost(id);
        dispatch({ type: UPDATE_POST, payload: data });
    } catch (err) {
        console.log(err);
    }
};
