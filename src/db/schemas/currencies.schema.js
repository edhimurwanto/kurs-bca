import { EntitySchema } from "typeorm";
import Currencies from "../../models/currencies.model";

const CurrenciesSchema = new EntitySchema({
    name: 'Currencies',
    target: Currencies,
    tableName: 'currencies',
    columns: {
        id: {
            type: 'varchar',
            length: 64,
            unique: true,
            generated: 'uuid',
            nullable: false,
            primary: true,
        },
        code: {
            type: 'varchar',
            length: 3,
            nullable: false,
            unique: true,
        },
        name: {
            type: 'varchar',
            length: 100,
            nullable: false,
            unique: true,
        },
        description: {
            type: 'varchar',
            nullable: true
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

export default CurrenciesSchema;