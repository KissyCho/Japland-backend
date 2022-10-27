import mongoose from 'mongoose';

const usersSchema = new mongoose.Schema(
    {
        username: { type: String, required: true, unique: true },
        email: String,
        password: { type: String, required: true },
    },
    { timestamps: true }
);

export default mongoose.model('User', usersSchema);
