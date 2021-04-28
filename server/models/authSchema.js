import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


const authSchema = mongoose.Schema(
    {

        username: {
            type: String,
            trim: true,
            required: true,
            maxlength: 50,
            unique: true,
        },
        fname: {
            type: String,
            trim: true,
            required: true,
            maxlength: 50,
        },
        lname: {
            type: String,
            trim: true,
            maxlength: 50,
        },
        email: {
            type: String,
            trim: true,
            required: true,
            unique: true,
            maxlength: 50,
            lowercase:true
        },
        phone: {
            type: Number,
            trim: true,
            required: true,
            maxlength: 25
        },
        password: {
            type: String,
            required: true
        },
        role:{
            type:Number,
            default:0
        },
        history:{
            type:Array,
            default:[]
        },
        tokens: [
            {
                token:{
                    type:String,
                    required:true
                }
            }
        ]

    }, { timestamps: true }
);

authSchema.pre('save',async function(next){

    if(this.isModified('password')){
        
        this.password = await bcrypt.hash(this.password,12);
    }

    //convert all uppercase to lower case during user registration
    if(this.isModified('username')){
        
        this.username = await this.username.toLowerCase();
    }

    next()
});

//Auth Token Generation
authSchema.methods.generateAuthToken = async function(){
    try {
        let tokenGen = jwt.sign({_id:this._id},process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token:tokenGen});
        await this.save();
        return tokenGen;
    } catch (error) {
        res.status(500).json({
            status: false,
            error: `"User Login Failed!" with this error: ${error.message}`

        });
    }
}


const authModel = mongoose.model('user', authSchema);

export default authModel;

//check this link for virtual concept
//https://stackoverflow.com/questions/39904244/add-property-to-mongoose-document-pre-lowercase-validation