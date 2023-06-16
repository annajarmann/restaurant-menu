import React from "react";

const getFilteredDishes = (selectedIngredients, dishes) => {
    if (!selectedIngredients) {
      return dishes;
    }
    // Get list of ingredients (selectedIngredients is in a react-select format):
    const ingredients = selectedIngredients.map(selectedIngredients => selectedIngredients.value);

    // Filter by checking if the selected ingredients are in any of the dishes:
    return dishes.filter(dish => ingredients.every((el) => {
        return dish.ingredients.includes(el)
    }))
}

export default function Dishes({ selectedIngredients, data }) {
    const filteredDishes = getFilteredDishes(selectedIngredients, data);

    // Return display of dishes:
    return (
        <section className="dishes">
            {filteredDishes.map((dish, key) => (
                <article className="dish-item" key={key}>
                    <h3 className="dish-name">{dish.name}</h3>
                    {dish.ingredients.map((ingredient, key) => (
                        <p key={key}>{ingredient} </p>
                    ))}
                </article>
            ))}
        </section>
    );
};
