import express from 'express'
import {signin, signup, profile, logout, authenticate} from '../controllers/auth/authController.js'
import {authentication} from '../middlewares/authentication.js'
const Router = express.Router();

/**
 * Post request at http:localhost:5000/signin
 */
Router.post('/signin',signin);

/**
 * post request at http:localhost:5000/signup
 */
Router.post('/signup', signup);

/**
 * post request at http:localhost:5000/logout
 */
Router.get('/logout', logout);

/**
 * post request at http:localhost:5000/signup
 */
Router.get('/profile',authentication,profile);


/**
 * get request at http:localhost:5000/
 */
Router.get('/auth',authentication,authenticate);


export default Router;