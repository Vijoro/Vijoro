import { RequestHandler } from "express";

export const helloController: RequestHandler = async (req, res) => {
    try {
        res.status(200).send('Hello, World!');
    } catch (error) {
        res.status(500).send({ message: 'Internal Server Error' });
    }
};
