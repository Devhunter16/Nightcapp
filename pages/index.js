import { useState, useContext } from "react";
import { useRouter } from "next/router";

// import searchCocktail from "./api/searchCocktail";
// import randomCocktail from "./api/randomCocktail";
import Layout from "../components/layout/Layout"
import HomepageIntro from "../components/HomePageIntro";
import SearchForm from "../components/SearchForm";
// import Alert from "../components/Alert";


function HomePage() {
    /*
    const [searchTerm, setSearchTerm] = useState("");
    const [alert, setAlert] = useState(false);
    const router = useRouter();

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Prevents users from searching if the search field is empty
        if (searchTerm.trim() === "") {
            return;
        }
        const data = await searchCocktail(searchTerm);
        setSearchTerm("");
        if (data == undefined) {
            setAlert(true);
        } else {
            // Pushing variables through to page and setting the route
            router.push({
                pathname: `/drinks/${searchTerm}`,
                query: {
                    drinks: JSON.stringify(data),
                },
            });
        }
    };

    const handleShowDrinkRecipe = (result) => {
        // Pushing variables through to page and setting the route
        router.push({
            pathname: `/drink/${result.idDrink}`,
            query: {
                drink: JSON.stringify(result),
            },
        });
    };

    const handleShowRandomCocktailRecipe = async () => {
        const data = await randomCocktail();
        handleShowDrinkRecipe(data.recipe);
    };

    const handleSetAlertFalse = () => {
        setAlert(false);
    };

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };
    */
    return (
        <>
            <Layout>
                <HomepageIntro />{" "}
                <SearchForm />{" "}
            </Layout>
        </>
    );
};

export default HomePage;