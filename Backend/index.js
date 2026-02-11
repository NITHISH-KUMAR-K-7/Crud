import express from 'express'
import cors from 'cors'
import connectDB from './config/db.js'
import dotenv from 'dotenv'
import userrouters from './routes/routes.js'

dotenv.config()
connectDB()

const app=express()
app.use(cors())
app.use(express.json())

app.use('/users',userrouters)



// app.post("/createuser",(req,res)=>{
//     UserModel.create(req.body)
//     .then(users =>res.json(users))
//     .catch(err => res.json(err))
// })

// app.get('/getuser',(req,res)=>{
//     UserModel.find({})
//     .then(users =>res.json(users))
//     .catch(err =>res.json(err))
// })

// app.get('/getuser/:id',(req,res)=>{
//     const id = req.params.id;
//     UserModel.findById({_id:id})
//     .then(users =>res.json(users))
//     .catch(err =>res.json(err))
// })

// app.put("/updateuser/:id",(req,res)=>{
//     const id = req.params.id;
//     const {name,email,age} = req.body
//     UserModel.findByIdAndUpdate({_id:id}, { name, email, age })
//     .then(users =>res.json(users))
//     .catch(err =>res.json(err))
// })

// app.delete('/deleteuser/:id',(req,res)=>{
//     const id = req.params.id
//     UserModel.findByIdAndDelete({_id:id})
//     .then(users =>res.json(res))
//     .catch(err =>res.json(err))
// })

const PORT = process.env.PORT || 3000;

app.listen(5000,()=>{
    console.log("Server Running")
})




