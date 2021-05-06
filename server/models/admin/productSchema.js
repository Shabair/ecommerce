import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


const productSchema = mongoose.Schema(
    {

        title: {
            type: String,
            trim: true,
            min: 3,
            max: 160,
        },
        slug: {
            type: String,
            trim: true,
            required: true,
            min: 3,
            index: true,
            maxlength: 180,
            unique: true,
            lowercase: true
        },
        content: {
            type: {},
            required: true,
            min: 20,
            max: 2000000
        },
        user: {
            type: Number,
            default: 0
        },
        createdAt: {
            type: Date,
            default: new Date()
        }

    }
);


const productModel = mongoose.model('product', productSchema);

export default productModel;