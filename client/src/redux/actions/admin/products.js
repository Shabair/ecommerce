import { PRODUCTS } from '../../constants/publicConstants';

import * as api from '../../api/admin/products';

export const addProduct = (newProduct) => async (dispatch) => {
  try {
    
    const {data} = await api.addProduct(newProduct);
    
    dispatch({ type: PRODUCTS.ADD_PRODUCT, payload: data.data });

  } catch (error) {

    console.log(error.message);
    
  }
};
