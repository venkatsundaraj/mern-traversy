const express = require('express')
const dotenv = require('dotenv').config()
const mongoose = require('mongoose')
const colors = require('colors')
const PORT = process.env.PORT || 5000
const app = express()
const goalRouter = require('./router/goalRoutes')
const userRouter = require('./router/userRoutes')
const connectDB = require('./config/db')
const {errorHandler} = require('./middleware/errorMiddleware')

app.use(express.json())
app.use(express.urlencoded(({extended:false})))

connectDB()

app.use(goalRouter)
app.use('/admin',userRouter)


app.use(errorHandler)


app.listen(PORT, ()=>{console.log(`server started at ${PORT}`)})


