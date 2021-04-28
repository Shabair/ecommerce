import UserModel from '../../models/authSchema.js'
import bcrypt from 'bcrypt'

/**
 * User Signin
 */
export const signin = async (req, res) => {
    var passwordCheck = '';

    try {
        const { username, password } = req.body;

        if (!username || !password) {

            return res.status(422).json({ status: false, error: `Please Enter Username or Password.` })

        }

        const user = await UserModel.findOne({ $or:[{email:username}, {username:username}] });
        console.log(user)
        if (user)
            passwordCheck = bcrypt.compareSync(password, user.password)

        if (!user || !passwordCheck) {
            return res.status(422).json({ status: false, error: `User Email Or Password Does not exist` })
        }

        const token = await user.generateAuthToken();

        res.cookie("jwt_token", token, {
            expires: new Date(Date.now() + 25892000000),
            httpOnly: true
        });

        res.send({status:true ,data:user});

    } catch (error) {

        res.status(500).json({
            status: false,
            error: `"User Registration Failed!" with this error: ${error.message}`

        });

    }

}

/**
 * User Signup
 */
export const signup = async (req, res) => {

    try {
        const { username, email, fname, lname, phone, password, cpassword } = req.body;

        if (!username || !email || !fname ||!phone || !password || !cpassword) {
            return res.status(422).json({ error: "Plz Filled the fields properly" });
        }

        const emailExist = await UserModel.findOne({ email: email.toLowerCase() });
        const usernameExist = await UserModel.findOne({ username: username.toLowerCase() });

        if (emailExist) {
            return res.status(422).json({ status: false, error: "Email Exist! Please Select a New One" });
        } else if (password !== cpassword) {
            return res.status(422).json({ status: false, error: "Your Confirm Password does not match with Password" });
        }else if(usernameExist){
            return res.status(422).json({ status: false, error: "Username Exist! Please Select a New One" });
        }

        const user = new UserModel({ username, email, phone, password, fname, lname });

        const newUser = await user.save();

        if (newUser) {
            return res.status(201).json({
                status:true ,
                message: "User Registered Successfuly.",
                data: newUser
            });
        }


    } catch (error) {

        res.status(500).json({
            status: false,
            error: `User Registration Failed! with this error: ${error.message}`
        });

    }

}


/**
 * User Profile
 */
export const profile = async (req, res) => {

    try {

        res.status(200).json(req.rootUser)

    } catch (error) {

        res.status(401).json({
            status: false,
            error: `User Authentication Failed! with this error: ${error.message}`

        });

    }

}

export const logout = async (req, res) =>{
    await res.clearCookie('jwt_token');
    return res.status(200).json({ status: true, message: "Username Logged Out Successfully!" });
}


/**
 * User Authenticate
 */
 export const authenticate = async (req, res) => {

    try {

        return res.status(200).json({
            status:true ,
            message: "User Logged In Successfuly.",
            data: req.rootUser
        });

    } catch (error) {

        res.status(401).json({
            status: false,
            error: `User Authentication Failed! with this error: ${error.message}`
        });

    }

}
