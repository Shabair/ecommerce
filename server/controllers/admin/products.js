import ProductModel from '../../models/admin/productSchema.js'
import bcrypt from 'bcrypt'


/**
 * Add Product
 */
export const addProduct = async (req, res) => {

    try {
        const { title, description } = req.body;
        let {slug} = req.body;

        if (!title || !slug ) {
            return res.status(422).json({ error: "Plz Filled the fields properly" });
        }

        const uniqueSlug = await ProductModel.findOne({ slug: slug });

        if (uniqueSlug) {
            slug = slug + "- copy";
        }

        const product = new ProductModel({ title, slug, description });

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