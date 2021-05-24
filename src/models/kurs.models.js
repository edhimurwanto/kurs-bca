import BaseModels from "./base.models";

export default class Kurs extends BaseModels {

    constructor(id, symbol, types, date){
        super();
        this.id = id;
        this.symbol = symbol;
        this.types = types;
        this.date = date;
    }

}