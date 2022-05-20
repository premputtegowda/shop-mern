
import Product from '../models/productModel.js'
import asyncWrapper from '../middlewares/asyncWrapper.js'
import { createCustomError } from '../errors/customError.js'


const getAllProducts = asyncWrapper(async (req, res) => {

  
        
        const products = await Product.find({})
    
        res.status(200).json(products)
       
   
})

const getProduct = asyncWrapper(async(req, res, next)=> {
    const {id: productId} = req.params
   
    const product = await Product.findById({_id: productId})
    
    if (!product){
        
        return next(createCustomError(`No proudct with id: ${productId}`, 404))
       
} 
res.status(200).json(product)

})

export { getAllProducts, getProduct}