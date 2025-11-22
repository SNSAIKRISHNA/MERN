import React from "react";
import Recipe from "./Recipe.jsx";
import Ingredients from "./ingredient.jsx";

export default function Main() {

  const [ingredients, setIngredients] = React.useState([]);
  const [recipeShown, setRecipeShown] = React.useState(false);

  function toggleShowRecipe() {
    setRecipeShown((prevRecipeShown) => !prevRecipeShown);
  }

  const ingredientsListItems = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  return (
    <main>
      <form action={addIngredient} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>

      {ingredients.length > 0 && (
        <Ingredients
          ingredients={ingredients}
          ingredientsListItems={ingredientsListItems}
          toggleShowRecipe={toggleShowRecipe}
        />

      )}{" "}

      // Only show Ingredients component if there are ingredients
      
      {recipeShown && <Recipe />}
    </main>
  );
}
