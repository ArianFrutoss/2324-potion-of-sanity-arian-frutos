import Ingredient from "./ingredient";

export default class Ingredients{

    constructor (ingredients){

        ingredients = this.ingredients;
    }

    static load(data){

        return new Ingredients(
            
            data.ingredients.map(Ingredient.from)
        )
    }
}