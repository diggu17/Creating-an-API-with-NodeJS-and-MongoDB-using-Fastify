const userService = require('./service');
const jwt = require('jsonwebtoken');

module.exports={
    register: async(req,res)=>{
        try{
            if(await userService.findbyEmail(req.body.email) && await userService.findbyUsername(req.body.username)){
                res.code(400);
                return {
                    message: 'Username or Email Already Exists',
                };
            }
            const user = await userService.Create(req.body);
            console.log(user);
            res.code(200);
            return{
                message: 'User Registration Succesfull',
                data:{user}
            }
        } catch (err){
            res.code(500);
            console.log(err);
            return{
                err,
            };
        }
    },

    login: async(req,res)=>{
        try{
            const user = await userService.findbyUsername(req.body.username);
            console.log(user);
            if(!user){
                res.code(400);
                return{
                    message: 'Username is Incorrect',
                };
            };
            if(await userService.comparePassword(user.password, req.body.password)){
                res.code(400);
                return {
                    message: 'incorrect Password',
                }
            }
            //sign in token

            const token = jwt.sign({id: user._id}, 'thisIsaPrivate')
            res.code(200);
            return{
                message: ' Login Sucessfully',
                data:{
                    user,
                    token
                }
            }
        }catch (err){
            res.code(500);
            console.log(err);
            return{
                err,
            };
        }
    }
};