import axios from 'axios';

const url = '/products/';

export const getAllProducts = () => axios.get(url);

export const addProduct = (newProduct) => axios.post(url+"add", newProduct);
