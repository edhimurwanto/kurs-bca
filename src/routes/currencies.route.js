import { Router } from 'express';
import CurrenciesService from '../services/currencies.service';

const currenciesService = new CurrenciesService();

export default Router()
    .get('/', async (req, res) => {
        try {
            const data = await currenciesService.findAll();

            res.json({ data });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    })

    .post('/', async (req, res) => {
        try {

            let currency = { ...req.body };

            currency = await currenciesService.create(currency);

            res.status(201).json(currency);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    })