import React from "react";
import Recipe from "./Recipe.jsx";
import Ingredients from "./ingredient.jsx";
import { getRecipeFromMistral } from "../ai.js";

export default function Main() {
  const [ingredients, setIngredients] = React.useState([
    "tomato",
    "basil",
    "garlic",
    "pasta",
  ]);
  const [recipeShown, setRecipeShown] = React.useState(false);
  const [recipeText, setRecipeText] = React.useState("");
  const inputRef = React.useRef(null);
  
async function getRecipe() {
  const generateAi = await getRecipeFromMistral(ingredients);
  setRecipeText(generateAi);
  setRecipeShown(true);
}

  const ingredientsListItems = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  function addIngredient(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newIngredient = (formData.get("ingredient") || "").trim();
    if (!newIngredient) return; // ignore empty
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
    e.target.reset();
    if (inputRef.current) inputRef.current.focus();
  }

  return (
    <main>
      <form onSubmit={addIngredient} className="add-ingredient-form">
        <input
          ref={inputRef}
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button type="submit">Add ingredient</button>
      </form>

      {ingredients.length > 0 && (
        <Ingredients
          ingredients={ingredients}
          ingredientsListItems={ingredientsListItems}
          toggleShowRecipe={getRecipe}
        />
      )}

      {recipeShown && <Recipe content={recipeText} />}
    </main>
  );
}
