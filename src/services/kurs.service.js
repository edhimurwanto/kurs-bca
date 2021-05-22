import { Between, getRepository as repository } from 'typeorm';
import Kurs from '../models/kurs.models';
import CurrenciesService from './currencies.service';

const currenciesService = new CurrenciesService();

export default class KursService {

    kursRepository() {
        return repository(Kurs);
    }

    async findBySymbolAndDate(symbol, date) {

        const kurs = await this.kursRepository().createQueryBuilder('kurs')
            .leftJoinAndSelect('kurs.symbol', 'symbol')
            .where('kurs.date = :date', { date })
            .andWhere('symbol.code = :code', { code: symbol })
            .getOne();

        return kurs;
    }

    async create(kursPayload) {

        let kurs = await this.findBySymbolAndDate(kursPayload.symbol, kursPayload.date);

        if (kurs) {
            throw new Error('Kurs already exist!');
        } else {
            const eRate = { name: 'E-Rate', ...kursPayload.e_rate };
            const tt = { name: 'TT Counter', ...kursPayload.tt_counter };
            const bn = { name: 'Bank Notes', ...kursPayload.bank_notes };

            const symbol = await currenciesService.findByCode(kursPayload.symbol);
            if (!symbol) {
                throw new Error('Symbol not found!')
            }

            const payload = {
                symbol,
                type: [
                    eRate,
                    tt,
                    bn
                ],
                date: kursPayload.date
            }
            return this.kursRepository().save(payload);
        }

    }

}