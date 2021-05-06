import express from 'express'

import * as api from '../../controllers/admin/products.js'
import {authentication} from '../../middlewares/authentication.js'
import {checkProduct} from '../../middlewares/product.js'
const Router = express.Router();

/**
 * Post request at http:localhost:5000/products
 */
Router.post('/', authentication, checkProduct(), api.addProduct);


/**
 * Get request at http:localhost:5000/products
 */
Router.get('/', authentication, api.getAllProducts);


/**
 * post request at http:localhost:5000/signup
 */

/**
 * post request at http:localhost:5000/logout
 */
// Router.get('/logout', logout);

/**
 * post request at http:localhost:5000/signup
 */
// Router.get('/profile',authentication,profile);


/**
 * get request at http:localhost:5000/
 */


export default Router;