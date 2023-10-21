import styles from "./RecipeCard.module.css";

function RecipeCard({ name, image, ingredients }) {
    return (
        <div className={styles.container}>
            <div className={styles.cardContainer}>
                <h3 className={styles.cocktailName}>{name}</h3>
                <img src={image} className={styles.cardImage} />
                <div id={styles.ingredientsBox}>
                    <h2 className={styles.ingredientsTitle}> Ingredients </h2>
                    <hr className={styles.titleUnderline}></hr>
                    <ul>
                        {ingredients.map((ingredient) => (
                            <li className={styles.recipeIngredient}>
                                {ingredient.name} -
                                <span id={styles.measurement}>
                                    {ingredient.measurement}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;