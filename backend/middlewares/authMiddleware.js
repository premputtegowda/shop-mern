import jwt from 'jsonwebtoken'
import asyncWrapper from './asyncWrapper.js'
import { createCustomError } from '../errors/customError.js'


const protect = asyncWrapper( async(req, res, next) => {

    
  
     if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        
        const token = req.headers.authorization.split(' ')[1]
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            req.user = decoded.id
            next()
        } catch(error){
            return next(createCustomError('Not Authorized', 401))
        }
        
        
        
       
    } else {
        return next(createCustomError('Not Authorized', 401))
    }


})

export {protect}