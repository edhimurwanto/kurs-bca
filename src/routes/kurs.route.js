import { Router } from 'express';
import KursService from '../services/kurs.service';
import { resNotFound, resOk } from '../utils/response.util';

const kursService = new KursService();

export default Router()

    .post('/', async (req, res) => {
        try {

            let kurs = { ...req.body };

            kurs = await kursService.create(kurs);

            res.status(201).json(kurs);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    })

    .put('/', async (req, res) => {
        try {

            let kurs = { ...req.body };

            kurs = await kursService.update(kurs);
            resOk(res, kurs);
        } catch (error) {
            if (error.message) {
                resNotFound(res, error.message);
            } else {
                res.status(500).json({ message: error.message });
            }
        }
    })