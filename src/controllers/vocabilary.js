import Words from '../models/Words.js'

export const getN5Vocabilary = async (req, res) => {
    try {
        const words = await Words.find();

        res.status(200).json(words)

    } catch (err) {

    }
}