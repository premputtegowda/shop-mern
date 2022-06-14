import User from '../models/userModel.js'
import asyncWrapper from "../middlewares/asyncWrapper.js";
import {createCustomError } from '../errors/customError.js';




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
            token: null
        }) 

    } else {
        
        return next(createCustomError(`Invalid email or password`, 401))
    }
   

})

export { authUser }