import React, { useState } from "react";

const MainDishes = () => {
  const categories = {
    "Meat-Based Dishes": [
      {
        name: "Grilled Chicken with Biryani Rice",
         image: "https://wallpaperaccess.com/full/4723250.jpg", // Add the image URL
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
          "Marinate chicken with biryani seasoning and set aside for 15 minutes.",
          "Cook onions and garlic in olive oil until golden. Add tomatoes, and sauté.",
          "Add chicken and cook until browned.",
          "Cook rice separately, then mix with the chicken mixture. Simmer for 5 minutes."
        ]
      },
      {
        name: "Grilled Chicken with Veggie Rice",
        image: "/recipes/vegrice.jpg",
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
          "Cook rice with carrots and peas until tender.",
          "Marinate chicken with yogurt, olive oil, and seasonings for 15 minutes.",
          "Grill the marinated chicken until cooked, then slice.",
          "Serve the chicken over the veggie rice."
        ]
      },
      {
        name: "Ground Beef with Rice",
        image: "/images/groundrice.jpg",
        ingredients: [
          "200g ground beef",
          "1 cup rice",
          "2 tbsp tomato paste",
          "1 tbsp olive oil",
          "1/2 tsp salt",
          "1/2 tsp black pepper",
          "1/2 tsp paprika",
          "1/2 tsp cumin"
        ],
        recipe: [
          "Cook rice according to package instructions.",
          "Heat olive oil in a pan, add ground beef and seasonings. Cook until browned.",
          "Add tomato paste and cook for another 5 minutes.",
          "Mix the beef with the rice or serve it on top."
        ]
      },
      {
        name: "Mexican-Style Tacos",
        image: "/images/taco.jpg",
        ingredients: [
          "200g ground beef",
          "1 tbsp olive oil",
          "1/2 small onion, chopped",
          "2 tbsp tomato paste",
          "1 tbsp taco seasoning",
          "4-6 taco shells",
          "1/2 cup shredded lettuce",
          "1 small tomato, chopped"
        ],
        recipe: [
          "Heat olive oil in a pan, add onions, and cook until softened.",
          "Add ground beef, taco seasoning, and tomato paste. Cook until beef is browned.",
          "Chop vegetables as desired.",
          "Fill taco shells with beef and then vegetables."
        ]
      }
    ],
    "Pasta Dishes": [
      {
        name: "Pink Pasta with Chicken Pieces",
        image: "/images/pinkpiece.jpg",
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
          "Boil pasta noodles, drain, and set aside.",
          "Heat olive oil, cook chicken with salt, pepper, and paprika. Set aside.",
          "Sauté onions and garlic, add tomato paste and puree, then cooking cream and oregano.",
          "Add pasta and chicken to the sauce. Stir well and serve."
        ]
      },
      {
        name: "Pink Pasta with Grilled Chicken",
        image: "/images/pinkgrilled.jpg",
        ingredients: [
          "200g pasta noodles",
          "1/2 onion, chopped",
          "2 cloves minced garlic",
          "1 cup tomato puree",
          "2 tbsp tomato paste",
          "2 tbsp olive oil",
          "1/2 tsp salt",
          "1/2 tsp black pepper",
          "1/2 tsp oregano",
          "1/2 tsp paprika",
          "1/2 cup cooking cream",
          "1 chicken breast, marinated with yogurt and spices"
        ],
        recipe: [
          "Cook pasta, drain, and set aside.",
          "Sauté onions and garlic, add tomato puree, paste, and seasonings.",
          "Stir in marinated chicken and cook until done.",
          "Add cooking cream, then combine with pasta. Simmer for 5 minutes."
        ]
      },
      {
        name: "Pasta with Vegetables",
        image: "/images/vegetablepasta.jpg",
        ingredients: [
          "200g pasta noodles",
          "1/2 onion, chopped",
          "2 cloves minced garlic",
          "1/2 cup tomato puree",
          "2 tbsp tomato paste",
          "1 medium tomato, chopped",
          "1/2 cup peas",
          "2 tbsp olive oil",
          "1/2 tsp salt",
          "1/2 tsp black pepper",
          "1/2 tsp oregano",
          "1/2 tsp paprika",
          "1/2 cup cooking cream"
        ],
        recipe: [
          "Cook pasta and set aside.",
          "Sauté onion, garlic, and chopped tomato in olive oil.",
          "Add tomato puree, paste, seasonings, and peas. Cook for 5 minutes.",
          "Stir in cooking cream, add pasta, and toss to combine."
        ]
      },
      {
        name: "Alfredo Pasta",
        image: "/images/alfredo.jpg",
        ingredients: [
          "200g pasta noodles",
          "1/4 cup butter",
          "1 cup cooking cream",
          "2 cloves minced garlic",
          "1 cup grated Parmesan cheese",
          "Salt and black pepper to taste",
          "Pinch of nutmeg"
        ],
        recipe: [
          "Cook pasta and drain.",
          "Melt butter, add garlic, and cook until fragrant.",
          "Stir in cooking cream, cheese, salt, pepper, and nutmeg.",
          "Toss pasta in the sauce and serve hot."
        ]
      },
      {
        name: "Creamy Pasta with Chicken Pieces",
        image: "/images/creamypieces.jpg",
        ingredients: [
          "200g pasta noodles",
          "200ml cooking cream",
          "Salt, black pepper, paprika, Italian seasoning to taste",
          "2 chicken breast slices, cut",
          "1 tbsp olive oil",
          "1 finely chopped onion",
          "2 cloves minced garlic",
          "Grated Parmesan (optional)"
        ],
        recipe: [
          "Cook pasta in salted water until al dente. Drain and set aside.",
          "Heat olive oil, sauté onions and garlic until fragrant.",
          "Add chicken pieces, season, and cook until browned.",
          "Pour in cooking cream and adjust seasoning. Simmer for 5 minutes.",
          "Toss in the cooked pasta and stir until evenly coated.",
          "Serve hot, garnished with grated Parmesan if available."
        ]
      }
    ],
    "Vegetarian Dishes": [
      {
        name: "Stuffed Cabbage",
        image: "/images/stuffedcabbage.jpg",
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
          "Blanch cabbage leaves and set aside.",
          "Mix rice, tomato paste, onions, garlic, herbs, and seasonings.",
          "Fill cabbage leaves, roll, and place in a pot. Add lemon juice and water.",
          "Simmer for 30 minutes."
        ]
      },
      {
        name: "Stuffed Zucchini",
        image: "/images/stuffedzuc.jpg",
        ingredients: [
          "5 medium zucchinis, hollowed out",
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
          "Hollow out the zucchinis carefully, leaving a thin wall.",
          "Mix rice, tomato paste, onions, garlic, coriander, olive oil, and seasonings.",
          "Fill each zucchini with the rice mixture.",
          "Place in a pot, add lemon juice and water, and simmer for 30-40 minutes."
        ]
      },
      {
        name: "Zucchini Casserole",
        image: "/images/zuc.jpg",
        ingredients: [
          "2 medium zucchinis, sliced",
          "1/2 cup tomato puree",
          "2 tbsp tomato paste",
          "1/2 tsp salt",
          "1/2 tsp black pepper",
          "1/2 tsp paprika",
          "1/2 tsp oregano",
          "1/2 tsp garlic powder"
        ],
        recipe: [
          "Preheat oven to 180°C (350°F).",
          "Layer zucchini slices in a baking dish.",
          "Mix tomato puree, tomato paste, and seasonings, then pour over zucchini.",
          "Bake for 20–25 minutes until tender and bubbling."
        ]
      },
      {
        name: "Vegetable Noodles",
        image: "/images/vegnoodle.jpg",
        ingredients: [
          "200g noodles",
          "1 medium zucchini, sliced",
          "1/2 bell pepper, sliced",
          "1/2 cup mushrooms, sliced",
          "1 small carrot, julienned",
          "1/2 onion, chopped",
          "2 tbsp olive oil",
          "2 tbsp teriyaki sauce",
          "2 tbsp sweet and sour sauce",
          "Parsley for garnish"
        ],
        recipe: [
          "Cook noodles, drain, and set aside.",
          "Stir-fry all vegetables in olive oil.",
          "Add sauces, season with salt and pepper, then toss in noodles."
        ]
      }
    ]
  };

  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  return (
    <div style={{ backgroundColor: "#f4f4f9", padding: "20px" }}>
      <h1 style={{ color: "#333333", textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)", fontSize: "4em" }}>Main Dishes</h1>
      {Object.entries(categories).map(([category, dishes]) => (
        <div key={category}>
          <h2 style={{ borderBottom: "3px solid #FF6F61", paddingBottom: "5px", color: "#2C3E50", textShadow: "1px 1px 3px rgba(0, 0, 0, 0.2)", fontSize: "2.5em" }}>{category}</h2>
          {dishes.map((dish, index) => (
            <div key={index}>
              <button
                style={{
                  width: "100%",
                  textAlign: "left",
                  padding: "15px",
                  backgroundColor: "#FF6F61",
                  border: "none",
                  cursor: "pointer",
                  margin: "10px 0",
                  color: "#ffffff",
                  fontSize: "1.5em",
                  fontWeight: "bold",
                }}
                onClick={() => setOpenDropdown(openDropdown === index ? null : index)}
              >
                {dish.name}
              </button>
              {openDropdown === index && (
                <div style={{ display: "flex", alignItems: "flex-start", gap: "20px", padding: "15px", backgroundColor: "#ffffff", border: "1px solid #ddd" }}>
                  {/* Text Section (Ingredients & Recipe) */}
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: "1.8em", color: "#2C3E50" }}>Ingredients:</h3>
                    <ul style={{ fontSize: "1.5em", color: "#555" }}>
                      {dish.ingredients.map((ingredient, i) => (
                        <li key={i}>{ingredient}</li>
                      ))}
                    </ul>
                    <h3 style={{ fontSize: "1.8em", color: "#2C3E50" }}>Recipe:</h3>
                    <ol style={{ fontSize: "1.5em", color: "#555" }}>
                      {dish.recipe.map((step, i) => (
                        <li key={i}>{step}</li>
                      ))}
                    </ol>
                  </div>

                  {/* Image Section */}
                  {dish.image && (
                    <div
                      style={{
                        width: "500px", // You can adjust the width of the image
                        height: "500px", // Make the height equal to width for a square shape
                        overflow: "hidden",
                        borderRadius: "10px",
                        border: "2px solid #ddd",
                        position: "relative",
                        boxSizing: "border-box",
                      }}
                    >
                      <img
                        src={dish.image}
                        alt={dish.name}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover", // Ensure the image covers the container without stretching
                          transition: "transform 0.3s ease-in-out",
                        }}
                        className="imageHoverEffect"
                      />
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MainDishes;