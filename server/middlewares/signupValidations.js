import { body } from 'express-validator'
import UserModel from '../models/authSchema.js'

export const signupVlidation = () => {
    return ([
        // body('username', 'Title is required!').notEmpty().trim().escape(),
        body('username').custom(username => {
            return UserModel.find({ username }).then(user => {
                if (user.length !== 0) {
                    return Promise.reject('Username already in use');
                }
            });
        })
    ]);
}