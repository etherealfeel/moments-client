import axios from 'axios';
const url = 'http://localhost:4000';

export const fetchPost = (id) => axios.get(`${url}/posts/${id}`);
export const fetchPosts = (page) => axios.get(`${url}/posts?page=${page}`);
export const fetchFilteredPosts = (searchQuery) =>
    axios.get(`${url}/posts/search?searchQuery=${searchQuery.searchTerm || 'none'}&tags=${searchQuery.tags}`);
export const createPost = (newPost) => axios.post(`${url}/posts`, newPost);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/posts/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/posts/${id}`);
export const likePost = (id) => axios.patch(`${url}/posts/${id}/likePost`);

export const signIn = (formData) => axios.post(`${url}/user/signIn`, formData);
export const signUp = (formData) => axios.post(`${url}/user/signUp`, formData);
