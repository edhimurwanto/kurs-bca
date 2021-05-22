import BaseModels from "./base.models";

export default class Kurs extends BaseModels {

    constructor(id, symbol, type, date){
        super();
        this.id = id;
        this.symbol = symbol;
        this.type = type;
        this.date = date;
    }

}