import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import router from './src/router.js';
import cookieParser from 'cookie-parser';
import corsOptions from './src/utils/corsOptions.js';
import cors from 'cors';
import {login, createNewUser } from './src/controllers/user.js'

import connectDb from './config/dbConnect.js';
import { checkBearerToken } from './src/utils/auth.js';

dotenv.config();

const app = express();
const port = process.env.PORT;

connectDb();


app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use(cookieParser());

app.post('/login', login)
app.post('/register', createNewUser)

app.use('/api', checkBearerToken, router);

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(port, () => console.log(`Server running on port ${port}`));
});

mongoose.connection.on('error', (err) => {
    console.log(err);
});

export default app;
