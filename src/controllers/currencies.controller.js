import CurrenciesService from '../services/currencies.service';
import { resOk, resInternalServerError, resCreated } from '../utils/response.util';

const currenciesService = new CurrenciesService();

export default class CurrenciesController {

    async getAll(req, res) {
        try {
            const data = await currenciesService.findAll();
            resOk(res, data);
        } catch (error) {
            resInternalServerError(res);
        }
    }

    async create(req, res) {
        try {

            let currency = { ...req.body };

            currency = await currenciesService.create(currency);

            resCreated(res, currency);
        } catch (error) {
            resInternalServerError(res, error.message);
        }
    }
}