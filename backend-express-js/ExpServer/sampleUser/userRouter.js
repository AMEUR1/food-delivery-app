const express = require('express')
const router = express.Router()
const User = require('../models/userFood')


router.get('/', (req,res)=>
{
    res.send('From API route')
})

router.post('/register',(req,res)=>{
    let userData = req.body
    
    User.findOne({email : userData.email},(err,user)=>
    {
        if(err)
        { 
            console.log(err)
        }else {
            if(user){
                res.status(401).send('email already exist')
            } else {
                let user = new User(userData)
                user.save((error, registeredUser)=>{
                    if(error){
                        console.log(error)
                        console.log("error")
                    }
                    else{
                        // let payload = { subject : registeredUser._id}
                        // let token = jwt.sign(payload,'secretKey')
                        // res.status(200).send({token})
                        console.log(registeredUser)
                        console.log("succes registed "+userData)
                        res.json(200,'registration Succes')
                        
                    }
                })
            }
        }
    }
    )

    
    
})

router.post('/login',(req,res)=>{
    let userData = req.body
   // console.log(req.body)
    User.findOne({email : userData.email},(err,user)=>{
        if(err){
            console.log("failed Login"+err)
        }
        else{
            if(!user){
                console.log("user Not Found")
                res.status(401).send('invalid email')
            } else {
            if(user.password!=userData.password){
                console.log("wrong password")
                res.status(401).send('invalid password')
             } else {
                console.log("user Connected"+user)
                res.json(200,'Connection Succes')
               // res.status(200).send('Connection Succes')
            }
            }
        }
    })
    
    
})

module.exports=router;