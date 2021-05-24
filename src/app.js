import express from 'express';
import configure from './config/config';
import createConnection from './db/connection';
import AppRouter from './routes';

configure();
createConnection()
    .then(connection => {
        if (connection.isConnected) {

            const app = express();

            app.use(express.json());
            app.use('/api', AppRouter);
            app.listen(process.env.APP_PORT, () => {
                console.log(`Application ${process.env.APP_NAME} successfully started at http://localhost:${process.env.APP_PORT}`)
            });
        } else {
            throw new Error('Database connection failed!');
        }
    })
    .catch(err => {
        console.log(`Error starting application.`);
        console.error(err);
    });
