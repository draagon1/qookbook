import React from "react";

const mainDishes = [
    {
        title: "Grilled Chicken Salad",
        ingredients: [
            "2 chicken breasts",
            "Mixed greens (lettuce, spinach, arugula)",
            "Tomatoes (sliced)",
            "Cucumbers (sliced)",
            "Red onions (sliced)",
            "Olive oil",
            "Salt and pepper",
            "Lemon vinaigrette dressing"
        ],
        recipe: [
            "1. Preheat the grill to medium-high heat.",
            "2. Season the chicken breasts with olive oil, salt, and pepper.",
            "3. Grill the chicken for about 7-8 minutes per side or until fully cooked.",
            "4. In a large bowl, mix the greens, tomatoes, cucumbers, and onions.",
            "5. Slice the grilled chicken and place it on top of the salad.",
            "6. Drizzle with lemon vinaigrette dressing and serve."
        ],
        cookTime: "20 minutes",
        servings: 2
    },
    {
        title: "Spaghetti Aglio e Olio",
        ingredients: [
            "200g spaghetti",
            "4 cloves garlic (thinly sliced)",
            "1/4 cup olive oil",
            "1/2 teaspoon red pepper flakes",
            "Parsley (chopped)",
            "Salt and pepper to taste",
            "Grated Parmesan (optional)"
        ],
        recipe: [
            "1. Cook the spaghetti according to the package instructions.",
            "2. In a large skillet, heat the olive oil over medium heat.",
            "3. Add the garlic and red pepper flakes and sauté until the garlic is golden brown.",
            "4. Drain the spaghetti, reserving some pasta water.",
            "5. Add the spaghetti to the skillet and toss it with the garlic oil mixture.",
            "6. Add a little pasta water to create a smooth sauce.",
            "7. Season with salt, pepper, and chopped parsley.",
            "8. Serve with grated Parmesan if desired."
        ],
        cookTime: "15 minutes",
        servings: 2
    }
];

const MainDishes = () => {
    return (
        <div>
            <h1>Main Dishes</h1>
            <ul>
                {mainDishes.map((dish, index) => (
                    <li key={index}>
                        <h2>{dish.title}</h2>
                        <p><strong>Cook Time:</strong> {dish.cookTime} | <strong>Servings:</strong> {dish.servings}</p>
                        <h3>Ingredients:</h3>
                        <ul>
                            {dish.ingredients.map((ingredient, i) => (
                                <li key={i}>{ingredient}</li>
                            ))}
                        </ul>
                        <h3>Recipe:</h3>
                        <ol>
                            {dish.recipe.map((step, i) => (
                                <li key={i}>{step}</li>
                            ))}
                        </ol>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MainDishes;
