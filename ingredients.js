import Ingredient from "./ingredient.js";

export default class Ingredients{

    constructor (ingredients){

        this.ingredients = ingredients;
    }

    static load(data){

        return new Ingredients(
            
            data.ingredients.map(Ingredient.from)
        )
    }
}