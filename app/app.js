const fastify = require('fastify');
const mongoose = require('mongoose');

const app = fastify();
const uri ='mongodb+srv://digvijaysinghthakur17:AishDivi@cluster0.bns5oiu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(uri).then(()=>{
        console.log("Database connected succesfully");
    }).catch((err)=>{
        console.error(`Error in connecting Database. Err: ${err}`);
        process.exit(1);
    })
app.get('/',(request, reply)=>{
    reply.code(200);
    return{
        message: 'Server is running'
    };
});

app.register(require('./auth/route'),{
    prefix:'/auth'
})

module.exports =app;