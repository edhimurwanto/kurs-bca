import KursService from '../services/kurs.service';
import { resCreated, resInternalServerError, resNotFound, resOk } from '../utils/response.util';

const kursService = new KursService();

export default class KursController {

    async getByStartDateAndEndDate(req, res) {
        try {

            const { startDate, endDate } = req.query
            const data = await kursService.search(startDate, endDate);

            resOk(res, data);
        } catch (error) {
            console.log(error);
            resInternalServerError(res);
        }
    }

    async getBySymbol(req, res) {
        try {

            const { startDate, endDate } = req.query
            const { symbol } = req.params
            const data = await kursService.findBySymbolWithStartDateAndEndDate(symbol, startDate, endDate);

            resOk(res, data);
        } catch (error) {
            resInternalServerError(res);
        }
    }

    async create(req, res) {
        try {

            let kurs = { ...req.body };

            kurs = await kursService.create(kurs);

            resCreated(res, kurs);
        } catch (error) {
            resInternalServerError(res, error.message);
        }
    }

    async update(req, res) {
        try {

            let kurs = { ...req.body };

            kurs = await kursService.update(kurs);
            resOk(res, kurs);
        } catch (error) {
            if (error.message) {
                resNotFound(res, error.message);
            } else {
                resInternalServerError(res);
            }
        }
    }

    async delete(req, res) {
        try {
            const { date } = req.params;
            await kursService.deleteByDate(date);
            res.sendStatus(204);
        } catch (error) {
            if (error.message) {
                resNotFound(res, error.message);
            } else {
                resInternalServerError(res);
            }
        }
    }

}