import React from "react";

const mainDishes = [
    {
        title: "Grilled Chicken with Biryani Rice",
        ingredients: [
            "1 1/2 cups basmati rice",
            "2 chicken breasts, cut into pieces",
            "2 tbsp biryani seasoning",
            "2 medium tomatoes, chopped",
            "1 large onion, sliced",
            "2 tbsp olive oil",
            "2 cloves minced garlic"
        ],
        recipe: [
            "1. Marinate chicken with biryani seasoning and set aside for 15 minutes.",
            "2. Cook onions and garlic in olive oil until golden. Add tomatoes, and sauté.",
            "3. Add chicken and cook until browned.",
            "4. Cook rice separately, then mix with the chicken mixture. Simmer for 5 minutes."
        ]
    },
    {
        title: "Grilled Chicken with Veggie Rice",
        ingredients: [
            "1 cup basmati rice",
            "1/2 cup chopped carrots",
            "1/2 cup peas",
            "2 chicken breasts, sliced",
            "2 tbsp olive oil",
            "2 tbsp yogurt (for marinating)",
            "1 tsp salt",
            "1/2 tsp black pepper",
            "1/2 tsp paprika",
            "1/2 tsp garlic powder"
        ],
        recipe: [
            "1. Cook rice with carrots and peas until tender.",
            "2. Marinate chicken with yogurt, olive oil, and seasonings for 15 minutes.",
            "3. Grill the marinated chicken until cooked, then slice.",
            "4. Serve the chicken over the veggie rice."
        ]
    },
    {
        title: "Pink Pasta with Chicken Pieces",
        ingredients: [
            "300g pasta noodles (penne or fusilli)",
            "2 chicken breasts, sliced",
            "1 cup cooking cream",
            "2 tbsp olive oil",
            "1 onion, finely chopped",
            "2 cloves minced garlic",
            "2 tbsp tomato paste",
            "1 cup tomato puree",
            "1 tsp salt",
            "1/2 tsp black pepper",
            "1/2 tsp paprika",
            "1/2 tsp oregano"
        ],
        recipe: [
            "1. Boil pasta noodles, drain, and set aside.",
            "2. Heat olive oil, cook chicken with salt, pepper, and paprika. Set aside.",
            "3. Sauté onions and garlic, add tomato paste and puree, then cooking cream and oregano.",
            "4. Add pasta and chicken to the sauce. Stir well and serve."
        ]
    },
    {
        title: "Stuffed Cabbage",
        ingredients: [
            "1 medium cabbage, leaves separated",
            "1 cup rice",
            "2 tbsp tomato paste",
            "1/2 cup chopped coriander",
            "1/2 onion, chopped",
            "2 cloves minced garlic",
            "2 tbsp olive oil",
            "Juice of 1 lemon",
            "Salt, pepper, dill, and cilantro"
        ],
        recipe: [
            "1. Blanch cabbage leaves and set aside.",
            "2. Mix rice, tomato paste, onions, garlic, herbs, and seasonings.",
            "3. Fill cabbage leaves, roll, and place in a pot. Add lemon juice and water.",
            "4. Simmer for 30 minutes."
        ]
    }
];

const MainDishesPage = () => {
    return (
        <div className="bg-[#A8E6CE] min-h-screen p-8 text-[#333]">
            <h1 className="text-4xl font-bold text-center text-[#FF8C94] mb-6">Main Dishes</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mainDishes.map((dish, index) => (
                    <div key={index} className="bg-white p-4 rounded-2xl shadow-lg">
                        <h2 className="text-2xl font-semibold text-[#DCEDC2] mb-2">{dish.title}</h2>
                        <h3 className="text-lg font-medium text-[#FFD385]">Ingredients:</h3>
                        <ul className="list-disc ml-5 text-[#333]">
                            {dish.ingredients.map((ingredient, idx) => (
                                <li key={idx}>{ingredient}</li>
                            ))}
                        </ul>
                        <h3 className="text-lg font-medium text-[#FFAAA6] mt-3">Recipe:</h3>
                        <ol className="list-decimal ml-5 text-[#333]">
                            {dish.recipe.map((step, idx) => (
                                <li key={idx}>{step}</li>
                            ))}
                        </ol>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MainDishesPage;
