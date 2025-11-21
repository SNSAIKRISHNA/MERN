import React from "react";

export default function Main() {

 let [ingredient, setIngredient] = React.useState([]); // State to hold the list of ingredients //initially an empty array

  const ingredientList = ingredient.map((item) => {    // Mapping through the ingredients array to create list items //item is each ingredient in the array //map returns a new array
    return <li key={item}>{item}</li>;                 // Using item as key assuming ingredients are unique 
  });

  function handelSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget); // Creating a FormData object from the form element //event.currentTarget refers to the form element that triggered the submit event
    const newIngredient = formData.get("ingredient"); // Getting the value of the input field named "ingredient" //formData is used to extract data from the form
    setIngredient((prevIngredients) => [...prevIngredients, newIngredient]); // Update state with new ingredient //prevIngredients is used to get the previous state of ingredients
    event.currentTarget.reset();
  }

  return (
    <main className="main">
      <form className="add-ingredient-form" onSubmit={handelSubmit}>
        <input
          aria-label="Add Ingredient"
          type="text"
          placeholder="e.g. Oregano"
          name="ingredient"
        />
        <button type="submit">Add Ingredient</button>
      </form>
      <ul>{ingredientList}</ul>
    </main>
  );
}
