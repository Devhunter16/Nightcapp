import { useState, useEffect } from "react";
import { useRouter } from 'next/router';

import { matchIngredientsWithMeasurements } from "../../api/searchCocktail";
import Layout from "../../../components/layout/Layout";
import HomePageIntro from "../../../components/HomePageIntro";
import SearchForm from "../../../components/SearchForm";
import RecipeDetails from "../../../components/RecipeDetails";

export default function DrinkPage() {
    const [parsedCocktail, setParsedCocktail] = useState(null);
    // Loading state so that RecipeDetails does not try to render before parsedCocktail
    // is initialized
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    const {
        query: { drink }
    } = router;

    // Set the parsedCocktail state when the component mounts
    useEffect(() => {
        if (drink) {
            const parsedCocktail = JSON.parse(drink);
            const name = parsedCocktail.strDrink;
            const image = parsedCocktail.strDrinkThumb;
            const instructions = parsedCocktail.strInstructions;
            const ingredientsList = matchIngredientsWithMeasurements(parsedCocktail);

            setParsedCocktail({ name, image, instructions, ingredientsList });
            setLoading(false); // Set loading to false after parsedCocktail is initialized
        };
    }, [drink]);

    return (
        <Layout>
            <HomePageIntro />
            <SearchForm />
            {loading ? (
                <p>Loading...</p> // Show a loading indicator while parsedCocktail is being initialized
            ) : (
                <RecipeDetails
                    name={parsedCocktail.name}
                    image={parsedCocktail.image}
                    instructions={parsedCocktail.instructions}
                    ingredientsList={parsedCocktail.ingredientsList}
                />
            )}
        </Layout>
    );
};