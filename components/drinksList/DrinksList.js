<<<<<<< HEAD:components/drinksList/DrinksList.js
import styles from "./DrinksList.module.css";

import RecipeCard from "../RecipeCard";

function DrinksList(props) {
    return (
        <ul id={styles.ul}>
            <div id={styles.row}>
                {props.results.map((result) => (
                    <div onClick={() => props.handleShowDrinkRecipe(result)}>
                        <RecipeCard
                            key={result.idDrink}
                            id={result.idDrink}
                            name={result.strDrink}
                            image={result.strDrinkThumb}
                            ingredients={result.ingredientsList}
                        />
                    </div>
                ))}
            </div>
        </ul>
    );
};

export default DrinksList;
=======
import styles from "./DrinksList.module.css";

import RecipeCard from "../RecipeCard";

function DrinksList(props) {
    return (
        <ul id={styles.ul}>
            <div id={styles.row}>
                {props.results.map((result) => (
                    <div onClick={() => props.handleShowDrinkRecipe(result)}>
                        <RecipeCard
                            key={result.idDrink}
                            id={result.idDrink}
                            name={result.strDrink}
                            image={result.strDrinkThumb}
                            ingredients={result.ingredientsList}
                        />
                    </div>
                ))}
            </div>
        </ul>
    );
};

export default DrinksList;
>>>>>>> eac428d767425a31ea2db2ef92ed2570640408f7:components/DrinksList.js
