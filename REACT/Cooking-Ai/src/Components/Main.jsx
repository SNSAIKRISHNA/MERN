export default function Main() {
  const ingredient = ["Chicken", "Salt", "Pepper"];

  const ingredientList = ingredient.map((item) => {
    return <li key={item}>{item}</li>;
  });

  function handelSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");
    ingredient.push(newIngredient);
    console.log(ingredient);
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
