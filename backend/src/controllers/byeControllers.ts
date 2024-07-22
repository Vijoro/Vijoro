import { RequestHandler } from "express";

export const byeController: RequestHandler = async (req, res) => {
    try {
        res.status(200).send('Bye, World!');
    } catch (error) {
        res.status(500).send({ message: 'Internal Server Error' });
    }
};
