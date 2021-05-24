import { EntitySchema } from "typeorm";
import Kurs from "../../models/kurs.models";

const KursSchema = new EntitySchema({
    name: 'Kurs',
    target: Kurs,
    tableName: 'kurs',
    columns: {
        id: {
            type: 'varchar',
            length: 64,
            unique: true,
            generated: 'uuid',
            nullable: false,
            primary: true,
        },
        date: {
            type: 'date',
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
    relations: {
        symbol: {
            target: 'Currencies',
            type: 'many-to-one',
            joinTable: true,
            inverseSide: 'symbol',
            eager: true
        },
        types: {
            target: 'KursCategories',
            type: 'many-to-many',
            joinTable: true,
            cascade: true,
            eager: true,
            onDelete: 'CASCADE'
        }
    }
});

export default KursSchema;