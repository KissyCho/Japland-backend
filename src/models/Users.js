import mongoose from 'mongoose';

const usersSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: String,
    createdAt: {
        type: Date,
        immutable: true,
        default: () => Date.now(),
    },
    updatedAt: {
        type: Date,
        immutable: true,
        default: () => Date.now(),
    },
    password: { type: String, required: true },
});

export default mongoose.model('User', usersSchema);
