const express = require('express')
const mongoose = require('mongoose') 
const config = require('./helpers/config')

const authRoutes = require('./routes/auth')


// Mongoose Connection
mongoose.connect(config.MONGODB_URI, config.MONGODB_OPTIONS)
.then (() =>{
      console.log(`MONGODB Connection Successful on '${config.NODE_ENV}' environment `)

}).catch(exception =>{
    console.log("MONGODB Connection failed\n", exception)
})


const app = express()


// Usage of middlewares
app.use(express.json())

app.use(authRoutes)




app.listen(config.PORT, ()=> {
    console.log(`Server started on PORT: ${config.PORT}`)
})