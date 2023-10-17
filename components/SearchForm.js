import styles from "./SearchForm.module.css";

import { useState } from "react";
import { useRouter } from "next/router";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDice } from "@fortawesome/free-solid-svg-icons";

// import searchCocktail from "./api/searchCocktail";
import randomCocktail from "../pages/api/randomCocktail";

function SearchForm(props) {
    const [searchTerm, setSearchTerm] = useState("");
    const router = useRouter();

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Prevents users from searching if the search field is empty
        if (searchTerm.trim() === "") {
            return;
        };
        const data = await searchCocktail(searchTerm);
        setSearchTerm("");
        if (data == undefined) {
            // setAlert(true);
        } else {
            // Pushing variables through to page and setting the route
            router.push({
                pathname: `/drinks/${searchTerm}`,
                query: {
                    drinks: JSON.stringify(data),
                },
            });
        };
    };

    const handleShowDrinkRecipe = (result) => {
        console.log(result);

        // Pushing variables through to page and setting the route, must convert the JS
        // object to a JSON string in order to send the data
        router.push({
            pathname: `/drink/${result.idDrink}`,
            query: {
                drink: JSON.stringify(result),
            },
        });
    };

    const handleShowRandomCocktailRecipe = async () => {
        const data = await randomCocktail();
        handleShowDrinkRecipe(data);
    };

    return (
        <div id={styles.form}>
            <form onSubmit={handleSubmit}>
                <input
                    id={styles.input}
                    type="text"
                    value={searchTerm}
                    onChange={handleChange}
                />
                <button
                    className={styles.btn}
                    type="submit">
                    Search
                </button>
                <button
                    className={styles.btn}
                    onClick={
                        handleShowRandomCocktailRecipe
                    }
                >
                    <FontAwesomeIcon id={styles.dice} icon={faDice} />
                    Random
                </button>
            </form>
        </div>
    );
};

export default SearchForm;