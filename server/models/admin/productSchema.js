import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


const productSchema = mongoose.Schema(
    {

        title: {
            type: String,
            trim: true,
            required: true,
            maxlength: 120,
        },
        slug: {
            type: String,
            trim: true,
            required: true,
            maxlength: 150,
            unique: true,
        },
        description: {
            type: String,
            maxlength: 5000,
        }

    }, { timestamps: true }
);



const productModel = mongoose.model('product', productSchema);

export default productModel;