const express=require("express");
const app=express();
//const bodyParser=require('bodyparser');
const userRouter=require('./routes/userRouter');
const env =require('dotenv');
env.config();
const mongoose=require('mongoose');

const connectionParams={
    useNewUrlParser:true,
    useFindAndModify:false,
    useCreateIndex:true,
    useUnifiedTopology:true
}
mongoose.connect(process.env.DB_CONNECTION,connectionParams)
.then(()=>{
    console.log('connecting to DB');
})
.catch((err)=>{
    console.log('connection error '+err);
})


app.use('/user',userRouter);
