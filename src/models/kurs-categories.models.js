import BaseModels from "./base.models";

export default class KursCategories extends BaseModels {

    constructor(id, name, buy, sell){
        super();
        this.id = id;
        this.name = name;
        this.buy = buy;
        this.sell = sell
    }

}