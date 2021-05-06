import { body } from 'express-validator'

export const checkProduct = () => {
    return ([
        body('title', 'Title is required!').notEmpty().trim().escape(),
    ]);
}