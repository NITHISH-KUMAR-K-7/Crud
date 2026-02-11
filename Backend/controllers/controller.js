import express from 'express'
import Users from '../model/Usermodel.js'

export const createuser = async (req,res)=>{
    try{
        const {name,email,age} = req.body
        if(!name?.trim || !email?.trim() || !age?.trim()){
            return res.status(400).json({message:"All fields are required"})
        }
        const user = await Users.create({
            name:name.trim(), email:email.trim(), age:age.trim()
        })
        res.status(200).json({user})
    }
    catch(error){
        res.status(400).json({message:error.message})
    }
}

export const getuser = async (req,res)=>{
    try{
        const user = await Users.find({})
        res.status(200).json(user)
    }
    catch(error){
        res.status(400).json({message:error.message})
    }
}

export const getuserbyid = async(req,res)=>{
    try{
        const user = await Users.findById(req.params.id)
        res.status(200).json(user)
    }catch(error){
        res.status(400).json({message:error.message})
    }
} 

export const updateuser = async(req,res)=>{
    try{
       const user = await Users.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
        )
        res.status(200).json(user)
    }catch(error){
        res.status(400).json({message:error.message})
    }
}

export const deleteuser = async (req,res)=>{
    try{
        const user = await Users.findByIdAndDelete(req.params.id)

        if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

        res.status(200).json({message:"Deleted Sucessfully"})
    }catch(error){
        res.status(400).json({message:error.message})
    }
}