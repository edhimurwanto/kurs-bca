import { Router } from 'express';
import CurrenciesController from '../controllers/currencies.controller';

const currenciesController = new CurrenciesController();

export default Router()
    .get('/', async (req, res) => {
        currenciesController.getAll(req, res);
    })

    .post('/', async (req, res) => {
        currenciesController.create(req, res);
    })