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

    async findByCodeOrName(code, name) {
        const cur = await this.currenciesRepository().createQueryBuilder('cur')
            .where('cur.code <= :code', { code })
            .orWhere('cur.name = :name', { name })
            .getOne();

        return cur;
    }

    async create(currencyPayload) {

        const cur = this.findByCodeOrName(currencyPayload.code, currencyPayload.name);

        if (cur) {
            throw new Error(`Currency already exist!`);
        }

        return this.currenciesRepository().save(currencyPayload);
    }

    async update(currencyPayload) {
        const currency = this.findById(currencyPayload.id);

        if (!currency) {
            throw new Error(`Currency not found!`);
        }

        const cur = this.findByCodeOrName(currencyPayload.code, currencyPayload.name);

        if (cur) {
            throw new Error(`Currency already exist!`);
        }

        return await this.currenciesRepository().save(currencyPayload);
    }

    async delete(id) {
        return await this.currenciesRepository().delete(id);
    }

}