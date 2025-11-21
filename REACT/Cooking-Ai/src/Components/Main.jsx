export default function Main() {
    return (
        <main className="main">
            <form className="add-ingredient-form">
                <input aria-label="Add Ingredient" type="text" placeholder="e.g. Oregano" />
                <button type="submit">Add Ingredient</button>
            </form>
        </main>
    )
}