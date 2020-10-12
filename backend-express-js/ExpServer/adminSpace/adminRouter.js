const express = require('express')
const adminRouter = express.Router()
const Menu = require('../models/menu')
const Command =  require('../models/command')


adminRouter.get('/', (req,res)=>
{
    res.send('From API route')
})

adminRouter.post('/addFood',(req,res)=>{
    let foodData = req.body
    
    let food = new Menu(foodData)
    food.save((error, newFood)=>{
        if(error){
            console.log(error)
            console.log("error")
        }
        else{

            console.log(newFood)
            console.log("succes added ")
            console.log(foodData)
            console.log(food)
            res.json(200,' Succes Add')
            
        }
    })

    
    
})

adminRouter.get('/getFoods',(req,res)=>
{
    let food = Menu.find((err,food)=>{
       if(err){
           console.log("get data error")
           console.log(err)
       } else {
        console.log(food)
        res.json(food)
       }
    })

})

adminRouter.post('/addCommand',(req,res)=>{
    let commandData = req.body
    
    let command = new Command(commandData)
    command.save((error, newCommand)=>{
        if(error){
            console.log(error)
            console.log("error")
        }
        else{

            console.log(newCommand)
            console.log("succes added ")
            console.log(commandData)
            console.log(command)
            res.json(200,' Succes Add')
            
        }
    })

    
    
})

adminRouter.get('/getCommands',(req,res)=>
{
    let command = Command.find((err,command)=>{
       if(err){
           console.log("get data error")
           console.log(err)
       } else {
        console.log(command)
        res.json(command)
       }
    })

})


module.exports=adminRouter;