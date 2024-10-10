import Ingredients from "./ingredients.js";
import { getData } from "./service.js"

const execute = async () => {

    try{

        const data = await getData();
        const ingredients = Ingredients.load(data);
        console.log(ingredients);
    }

    catch (error){

        console.log(error.message);
    }
}

execute();