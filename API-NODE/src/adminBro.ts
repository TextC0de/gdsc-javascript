/* eslint-disable @typescript-eslint/no-unused-vars-experimental */
import AdminBroExpress from '@admin-bro/express';
import AdminBroMongoose from '@admin-bro/mongoose';
import AdminBro from 'admin-bro';
import MongoStore from 'connect-mongo';
import { Express } from 'express';
import { SessionOptions } from 'express-session';
import { MongoClient } from 'mongodb';

import UserModel from './UserModel';

const initializeAdminBro = (
    app: Express,
    mongoClient: MongoClient
): void => {
    const sessionOptions: SessionOptions = {
        secret: process.env.SECRET as string,
        cookie: {},
        store: undefined,
        resave: false,
        saveUninitialized: false
    };

    if (process.env.NODE_ENV === 'production') {
        app.set('trust proxy', 1); // trust first proxy
        sessionOptions.cookie = { secure: true }; // serve secure cookies
        sessionOptions.store = MongoStore.create({
            client: mongoClient as any,
            collectionName: 'sessions',
            ttl: 14 * 24 * 60 * 60,
            autoRemove: 'native'
        });
    }

    AdminBro.registerAdapter(AdminBroMongoose);

    const adminBro = new AdminBro({
        loginPath: '/admin/login',
        resources: [UserModel],
        rootPath: '/admin'
    });

    const ADMIN = {
        email: process.env.ADMIN_USERNAME as string,
        password: process.env.ADMIN_PASSWORD as string
    };

    const authRouter = AdminBroExpress.buildAuthenticatedRouter(
        adminBro,
        {
            authenticate: async (email, password) => {
                if (ADMIN.password === password && ADMIN.email === email) {
                    return ADMIN;
                }
                return null;
            },
            cookieName: process.env.COOKIE_NAME,
            cookiePassword: process.env.COOKIE_PASSWORD as string
        },
        undefined,
        sessionOptions
    );

    app.use(adminBro.options.rootPath, authRouter);
};

export default initializeAdminBro;
