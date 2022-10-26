import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import router from './router.js'
import cors from 'cors'

import connectDb  from './config/dbConnect.js'

dotenv.config()

const app = express();
const port = process.env.PORT;

connectDb()

app.use('/api', router)

app.use(express.json({extended: true}))
app.use(express.urlencoded({extended: true}))
app.use(cors());

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
    app.listen(port, () => console.log(`Server running on port ${port}`))
})

mongoose.connection.on('error', err => {
    console.log(err)
})

export default app