import axios from "axios";

export function matchIngredientsWithMeasurements(cocktailData) {
    const ingredients = [];
    for (let i = 1; i <= 15; i++) {
        const ingredient = {};
        if (cocktailData[`strMeasure${i}`]) {
            ingredient.measurement = cocktailData[`strMeasure${i}`];
        }
        if (cocktailData[`strIngredient${i}`]) {
            ingredient.name = cocktailData[`strIngredient${i}`];
        }
        if (Object.keys(ingredient).length) {
            ingredients.push(ingredient);
        }
    };
    return ingredients;
};

async function searchCocktail(searchTerm) {
    try {
        const response = await axios({
            method: "get",
            url: `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`,
        });
        const {
            drinks
        } = response.data;
        const cocktails = [];
        for (const cocktail of drinks) {
            const ingredientsList = matchIngredientsWithMeasurements(cocktail);
            cocktails.push({
                ...cocktail,
                ingredientsList
            });
        };
        return cocktails;
    } catch (error) {
        console.error(error);
    };
};

export default searchCocktail;