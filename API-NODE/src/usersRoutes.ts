import express, { NextFunction, Request, Response } from 'express';

import UserModel from './UserModel';

const find = async (
    _req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    UserModel.find()
        .then((users) => {
            res.status(200).send(users);
        })
        .catch((e) => {
            next(new Error(e));
        });
};

const Router = express.Router();
Router.get('/', find);

export default Router;
