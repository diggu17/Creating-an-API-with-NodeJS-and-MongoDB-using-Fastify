const User = require('../users/models/user');
const bcrypt = require('bcrypt');

module.exports={
    findbyEmail: async (email)=>{
        return await User.findOne({email:email});
    },
    findbyUsername: async(username)=>{
        return await User.findOne({username});
    },
    findbyUserID: async (userId)=>{
        return await User.findById(userId);
    },
    Create: async (data)=>{
        data.password = bcrypt.hashSync(data.password,10);
        return await User.create(data);
    },
    isUsernameExists: async (username)=>{
        return await User.exists(username);
    },
    isEmailExists:async (email)=>{
        return await User.exists(email);
    },
    comparePassword: async(userPassword,password)=>{
        const isCompare= bcrypt.compareSync(userPassword,password);
        return isCompare;
    }
};