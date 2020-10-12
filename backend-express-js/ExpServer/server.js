const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose')


const PORT = 3000;
const userRouter =require('./sampleUser/userRouter')
const adminRouter =require('./adminSpace/adminRouter')
const app = express();

// const db = "mongodb://localhost:27017/fooddb"
const db = "mongodb://Ameur:mehdifadel@localhost:27017/fooddb"

mongoose.connect(db,err => {
    if(err){
        console.error('Error!'+err)
    }
    else{
        console.log('Connected To MongoDb')
    }
} )

app.use(bodyParser.json());

 app.use(cors());

 app.use('/user',userRouter);
 app.use('/admin',adminRouter);

app.get('/',function(re,res){
    res.send('Hello from server');
})

app.post('/enroll',function(re,res){
    console.log(re.body);
    res.status(200).send({"message":"data recivied"});
})

app.listen(PORT,function(){
    console.log("server running on "+PORT);
})