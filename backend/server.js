import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import {notfound, errorHandlerMiddleware} from './middlewares/errorHandlerMiddleware.js'

dotenv.config()



const app = express()
app.use(express.json())

app.get('/',(req,res)=> {
    res.send('Api is running')
})

app.use('/api/products',productRoutes)



app.use(notfound)
app.use(errorHandlerMiddleware)

const PORT = process.env.PORT || 5000

const start = async () => {
    try {
        await connectDB()
        app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} mode on ${PORT}`))

    } catch (error) {
        console.log(error)
    }
}

start()

