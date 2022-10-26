import mongoose from 'mongoose';
import User from '../models/Users.js';
import { hashPassword, createJWT } from '../utils/auth';

export const createNewUser = async (req, res) => {
    const user = await User.create({
        username: req.body.username,
        password: await hashPassword(req.body.password),
        email: req.body.email,
    });

const token = createJWT(user);
res.json({token})

};