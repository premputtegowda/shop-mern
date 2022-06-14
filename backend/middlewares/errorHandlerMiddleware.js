import { CustomAPIError } from '../errors/customError.js'

const notfound = (req, res) => res.status(404).send('Route not found')




const errorHandlerMiddleware = (err, req, res, next) => {
  
    if (err instanceof CustomAPIError){
        return res.status(err.statusCode).json({msg: err.message})
    } else {
       
        return res.status(500).json({msg: 'Something went wrong'})
    }
}





export {errorHandlerMiddleware, notfound}