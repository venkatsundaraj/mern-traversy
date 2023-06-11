const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModels')

exports.authHandler = asyncHandler( async function(req, res, next){
    let token
         if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
          
            
            
            token = req.headers.authorization.split(' ')[1]
            
           

            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            

            req.user = await User.findById(decoded.id).select('-password')


            
          next()
           
        } catch (error) {
            
            res.status(401)
            throw new Error('not authorized')
        }}

    
         if(!token){
            res.status(401)
            throw new Error('not authorized, no token')
        }
        
})

