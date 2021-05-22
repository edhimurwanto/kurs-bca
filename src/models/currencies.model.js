import BaseModels from "./base.models";

export default class Currencies extends BaseModels {

    constructor(id, code, name, description){
        super();
        this.id = id;
        this.code = code;
        this.name = name;
        this.description = description;
    }
    
}