import Effect from "./effect";

export default class Ingredient{

    constructor (name, effects, value, weight){

        name = this.name;
        effects = this.effects;
        value = this.value;
        weight = this.weight;
    }

    static from ({name, effects, value, weight}){

        return new Ingredient(

            name,
            effects.map(effect => Effect.from(effect)),
            value,
            weight
        )
    }
}