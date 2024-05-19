import mongoose from 'mongoose'

const userScheme= new mongoose.Schema({
    username: {
        type:String,
        require:true,
        unique:true,

    },

    email:{
        type:String,
        required:true,
        unique:true,
    },

    username:{
        type:String,
        required:true,
        unique:true,
    },

    password:{
        type:String,
        required:true,
        unique:true,
    },


},{timestamps:true});

const User=mongoose.model('User',userScheme);

export default User;