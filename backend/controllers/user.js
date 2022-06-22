import User from '../models/userModel.js'
import asyncWrapper from "../middlewares/asyncWrapper.js";
import {createCustomError } from '../errors/customError.js';
import { generateToken } from '../utils/generateToken.js';


const registerUser = asyncWrapper(async(req, res, next)=> {
    const {name, email, password} = req.body
    const userExists = await User.findOne({email})

    console.log('userExists', userExists)
 
    
    if(userExists){
      
        return next(createCustomError('User exists', 400))
    }

   
            
    const user = await User.create({
        name, 
        email,
        password
    })
            
         
            console.log(user)
            if(!user){
                return next(createCustomError('Invalid data', 400))
            } else {
                res.status(201).json({
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    isAdmin: user.isAdmin,
                    token: generateToken(user._id)
                })
            }
            
        
    

   

})

const authUser = asyncWrapper(async (req, res, next) => {
    const {email, password} = req.body
   
    const user = await User.findOne({ email })
   

    if (user && await user.matchPassword(password)){
     
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        }) 

    } else {
        
        return next(createCustomError(`Invalid email or password`, 401))
    }
   

})


const getUserProfile = asyncWrapper( async(req, res, next)=> {

    const user = await User.findById({_id: req.user})

    if(!user){
        return next(createCustomError('Not authorized', 401))
    } else {
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        })
    }



})

export { authUser, getUserProfile, registerUser }