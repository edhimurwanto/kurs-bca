import { Router } from 'express';
import KursController from '../controllers/kurs.controller';
import kursPayload from '../dto/kurs-payload.dto';
import validator from '../utils/validator'

const kursController = new KursController();

export default Router()
    .get('/', async (req, res) => {
        kursController.getByStartDateAndEndDate(req, res);
    })

    .get('/:symbol', async (req, res) => {
        kursController.getBySymbol(req, res);
    })

    .post('/', validator(kursPayload), async (req, res) => {
        kursController.create(req, res);
    })

    .put('/', validator(kursPayload), async (req, res) => {
        kursController.update(req, res);
    })

    .delete('/:date', async (req, res) => {
        kursController.delete(req, res);
    })