import axios from 'axios';

const url = '/';

export const authenticate = () => axios.get(url+"auth");
export const createUser = (newUser) => axios.post(url+"signup", newUser);
export const signinUser = (signinUser) => axios.post(url+"signin", signinUser);
export const logout = () => axios.get(url+"logout");
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
