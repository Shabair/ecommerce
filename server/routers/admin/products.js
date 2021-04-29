import express from 'express'
import {addProduct} from '../../controllers/admin/products.js'
import {authentication} from '../../middlewares/authentication.js'

const Router = express.Router();

/**
 * Post request at http:localhost:5000/signin
 */
Router.post('/add', authentication, addProduct);


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