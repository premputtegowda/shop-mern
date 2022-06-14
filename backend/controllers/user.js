import User from '../models/userModel.js'
import asyncWrapper from "../middlewares/asyncWrapper.js";
import {createCustomError } from '../errors/customError.js';
import { generateToken } from '../utils/generateToken.js';




const authUser = asyncWrapper(async (req, res, next) => {
    const {email, password} = req.body
   
    const user = await User.findOne({ email })
   

    if (user && await user.matchPassword(password)){
        console.log('hello')
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

export { authUser, getUserProfile }