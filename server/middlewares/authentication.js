import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import UserModel from '../models/authSchema.js'

export const authentication = async (req, res, next) =>{
    // try {
    //     const token = req.cookies.jwt_token

    //     const verifyToken = jwt.verify(token,process.env.SECRET_KEY);

    //     const rootUser = await UserModel.findOne({_id:verifyToken._id, "tokens.token": token});

    //     if(!rootUser){
    //         throw new Error("User Not Found")
    //     }

    //     req.token = token;
    //     req.rootUser = rootUser;
    //     req.userID = verifyToken._id;

    //     next()
    // } catch (error) {
    //     res.status(401).json({
    //         status: false,
    //         error: `User Unauthorized! with this error: ${error.message}`

    //     });
    // }


    next()


}