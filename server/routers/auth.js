import express from 'express'
import * as auth from '../controllers/auth/authController.js'
import {authentication} from '../middlewares/authentication.js'
import {signupVlidation} from '../middlewares/signupValidations.js'
const Router = express.Router();

/**
 * Post request at http:localhost:5000/signin
 */
Router.post('/signin',auth.signin);

/**
 * post request at http:localhost:5000/signup
 */
Router.post('/signup', signupVlidation(), auth.signup);

/**
 * post request at http:localhost:5000/logout
 */
Router.get('/logout', auth.logout);

/**
 * post request at http:localhost:5000/signup
 */
Router.get('/profile',authentication,auth.profile);


/**
 * get request at http:localhost:5000/
 */
Router.get('/auth',authentication,auth.authenticate);


/**
 * get request at http:localhost:5000/
 */
Router.get('/isUniqueEmail',auth.checkIsEmailUnique);




export default Router;