import mongoose from 'mongoose'

const postSchema = mongoose.Schema({
    title: {
        type: String,
        trim: true,
        min: 3,
        max: 160,
        required: true
    },
    slug: {
        type: String,
        unique: true,
        index: true,
        lowercase: true
    },
    content: {
        type: {},
        required: true,
        min: 20,
        max: 2000000
    },
    user: {
        type: String,
        default: 'Admin'
    },
    tags:[String],
    selectedFile:String,
    likeCount:{
        type:Number,
        default:0
    },
    createdAt:{
        type:Date,
        default: new Date()
    }

});


const postModel = mongoose.model('post',postSchema);

export default postModel;