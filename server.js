const app = require('./app/app');


app.listen(3030,(err,address)=>{
    if(err){
        console.error(err);
        process.exit(1);
    }
    console.info(`server is running at ${address}`);
})