import Ingredients from "./ingredients.js";
import { getData } from "./service.js"

const execute = async () => {

    try{

        const data = await getData();
        const ingredients = Ingredients.load(data);
        
        showIngredients(ingredients);
    }

    catch (error){

        console.log(error.message);
    }
}

const showIngredients = (ingredients) => {
    
    ingredients.ingredients.map((ingredient) => {

        console.log(ingredient);
    })
}

execute();