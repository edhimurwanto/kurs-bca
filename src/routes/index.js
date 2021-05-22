import express from 'express';

import CurrenciesRoute from './currencies.route';
import KursRoute from './kurs.route';

export default express.Router()
    .use('/currencies', CurrenciesRoute)
    .use('/kurs', KursRoute)
    .use((req, res, next) => {
        res.status(404).json({ message: 'Not found.' });
    });