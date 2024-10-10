import Effect from "./effect";

export default class ingredient{

    constructor (name, effects, value, weight){

        name = this.name;
        effects = this.effects;
        value = this.value;
        weight = this.weight;
    }

    static from ({name, effects, value, weight}){

        return new ingredient(

            name,
            effects.map(effect => Effect.from(effect)),
            value,
            weight
        )
    }
}