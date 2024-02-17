import axios from 'axios';
const url = 'http://localhost:4000/posts';

export const fetchPost = (id) => axios.get(`${url}/${id}`);
export const fetchPosts = (page) => axios.get(`${url}?page=${page}`);
export const fetchFilteredPosts = (searchQuery) =>
    axios.get(`${url}/search?searchQuery=${searchQuery.searchTerm || 'none'}&tags=${searchQuery.tags}`);
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
