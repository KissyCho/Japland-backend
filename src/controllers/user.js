import mongoose from 'mongoose';
import User from '../models/Users.js';
import { hashPassword, createJWT, comparePasswords } from '../utils/auth.js';

export const createNewUser = async (req, res) => {
    const user = await User.create({
        username: req.body.username,
        password: await hashPassword(req.body.password),
        email: req.body.email,
    });

    const token = createJWT(user);
    res.json({ token });
};

export const login = async (req, res) => {
   
    const user = await User.find({ username: req.body.username });

    if (user !== []) {
        res.status(401)
        res.json({message: 'Username or password not matching'})
        return;
    }
    const isValid = await comparePasswords(req.body.password, user.password)

    if (!isValid) {
        res.status(401)
        res.json({message: 'Username or password not matching'})
        return;
    }

    const token = createJWT(user);
    res.json({ token });
};
