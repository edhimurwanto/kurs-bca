import { EntitySchema } from "typeorm";
import KursCategories from "../../models/kurs-categories.models";

const KursCategoriesSchema = new EntitySchema({
    name: 'RateType',
    target: KursCategories,
    tableName: 'kurs_categories',
    columns: {
        id: {
            type: 'varchar',
            length: 64,
            unique: true,
            generated: 'uuid',
            nullable: false,
            primary: true,
        },
        name: {
            type: 'varchar',
            length: 100,
            nullable: false,
        },
        buy: {
            type: 'int',
            nullable: false,
        },
        sell: {
            type: 'int',
            nullable: false,
        },
        createdAt: {
            name: 'created_at',
            type: 'timestamp',
            createDate: true,
        },
        updatedAt: {
            name: 'updated_at',
            type: 'timestamp',
            updateDate: true,
        },
    },
});

export default KursCategoriesSchema;