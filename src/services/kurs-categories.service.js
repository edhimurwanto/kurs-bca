import { getRepository as repository } from 'typeorm';
import KursCategories from '../models/kurs-categories.models';

export default class KursCategoriesService {

    kursCategoriesRepository() {
        return repository(KursCategories);
    }

    async findAll() {
        return await this.kursCategoriesRepository().find();
    }

    async findById(id) {
        return await this.kursCategoriesRepository().findOne({ id });
    }

    async create(kursCategoryPayload) { 
        return this.kursCategoriesRepository().save(kursCategoryPayload);
    }

    async update(kursCategoryPayload) {
        const currency = this.findById(kursCategoryPayload.id);
        if(currency){
            return await this.kursCategoriesRepository().save(kursCategoryPayload);
        }
     }

    async delete(id) { 
        return await this.kursCategoriesRepository().delete(id);
    }

}