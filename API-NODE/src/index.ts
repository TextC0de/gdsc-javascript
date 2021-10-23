require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });

import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';

import initializeAdminBro from './adminBro';
import usersRoutes from './usersRoutes';

const port = process.env.SERVER_PORT;

const app = express();
app.use(express.json());
app.use(cors());

app.use('/users', usersRoutes);

const run = async () => {
    const dbConnection = await mongoose.connect(
        'mongodb://localhost:27017/node-mongo'
    );

    initializeAdminBro(
        app,
        dbConnection.connection.getClient()
    );

    app.listen(port, () =>
        console.log(
            `server running at http://localhost:${port}`
        )
    );
};

run();
