const express = require('express')
const connectdb=require('./config/connectDb')
require('dotenv').config({path:"./config/.env"})
const cors = require('cors')
const app = express()
app.use(cors()) 
app.use(express.json())
app.use("/uploads", express.static(__dirname + "/uploads"));
app.use('/users',require('./Routes/userRoutes'))
app.use('/cours',require('./Routes/coursRoutes'))
app.use('/note',require('./Routes/noteRoutes'))

connectdb()
const port = 5000
app.listen(port, () => console.log(`Example app listening on port ${port}!`))