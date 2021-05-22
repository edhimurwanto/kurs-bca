import { getRepository as repository } from 'typeorm';
import Currencies from '../models/currencies.model';

export default class CurrenciesService {

    currenciesRepository() {
        return repository(Currencies);
    }

    async findAll() {
        return await this.currenciesRepository().find();
    }

    async findById(id) {
        return await this.currenciesRepository().findOne({ id });
    }

    async findByCode(code) {
        return await this.currenciesRepository().findOne({ code });
    }

    async create(currencyPayload) { 
        return this.currenciesRepository().save(currencyPayload);
    }

    async update(currencyPayload) {
        const currency = this.findById(currencyPayload.id);
        if(currency){
            return await this.currenciesRepository().save(currencyPayload);
        }
     }

    async delete(id) { 
        return await this.currenciesRepository().delete(id);
    }

}