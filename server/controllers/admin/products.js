import ProductModel from '../../models/admin/productSchema.js'
import { validationResult } from 'express-validator'
import bcrypt from 'bcrypt'

/**
 * Get All Products
 */
export const getAllProducts = (req, res) => {
    ProductModel.find({})
    // .limit(10)
    // .sort({createdAt:-1})
    .exec((err, products)=>{
        if(err){
            return res.status(500).json({
                status: false,
                error: `Product Fatching Failed! with this error: ${error.message}`
            });
        }else{
            return res.status(201).json({
                status:true ,
                message: "Product Added Successfuly.",
                data: products
            });
        }
        
    })
}


/**
 * Add Product
 */
export const addProduct = async (req, res) => {

    try {
        const { title, content } = req.body;
        let {slug} = req.body;

        // if (!title || !slug ) {
        //     return res.status(422).json({ error: "Plz Filled the fields properly" });
        // }

        // const uniqueSlug = await ProductModel.findOne({ slug: slug });

        // if (uniqueSlug) {
        //     slug = slug + "- copy";
        // }

        const errors = validationResult(req)
        if (!errors.isEmpty()) {
          return res.status(422).json({ errors: errors.array() })
        }

        const product = new ProductModel({ title, slug, content });

        const newProduct = await product.save();

        if (newProduct) {
            return res.status(201).json({
                status:true ,
                message: "Product Added Successfuly.",
                data: newProduct
            });
        }


    } catch (error) {

        res.status(500).json({
            status: false,
            error: `Product Adding Failed! with this error: ${error.message}`
        });

    }

}