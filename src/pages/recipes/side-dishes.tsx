import React, { useState } from "react";

// Interfaces should be at the top
interface Recipe {
  name: string;
  image: string;
  ingredients: string[];
  recipe: string[];
}

interface RecipeCategory {
  [category: string]: Recipe[];
}

interface RecipePageProps {
  title: string;
  categories: RecipeCategory;
}

// Reusable RecipePage component
const RecipePage: React.FC<RecipePageProps> = ({ title, categories }) => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  return (
    <div style={{ 
      backgroundColor: "#f4f4f9", 
      padding: "20px", 
      maxWidth: "1200px", 
      margin: "0 auto",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    }}>
      <h1 style={{ 
        color: "#333333", 
        textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)", 
        fontSize: "2.5rem",
        textAlign: "center",
        marginBottom: "30px",
        fontWeight: "600"
      }}>
        {title}
      </h1>
      
      {Object.entries(categories).map(([category, dishes]) => (
        <div key={category} style={{ marginBottom: "40px" }}>
          <h2 style={{ 
            borderBottom: "3px solid #FF6F61", 
            paddingBottom: "5px", 
            color: "#2C3E50", 
            textShadow: "1px 1px 3px rgba(0, 0, 0, 0.2)", 
            fontSize: "2rem",
            marginBottom: "20px"
          }}>
            {category}
          </h2>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))", gap: "20px" }}>
            {dishes.map((dish, index) => (
              <div 
                key={index} 
                style={{ 
                  backgroundColor: "#ffffff",
                  borderRadius: "8px",
                  overflow: "hidden",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "";
                }}
              >
                {dish.image && (
                  <div style={{ height: "200px", overflow: "hidden" }}>
                    <img
                      src={dish.image}
                      alt={dish.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover"
                      }}
                    />
                  </div>
                )}
                
                <div style={{ padding: "20px" }}>
                  <h3 style={{ 
                    fontSize: "1.5rem", 
                    marginBottom: "15px",
                    color: "#2C3E50"
                  }}>
                    {dish.name}
                  </h3>
                  
                  <button
                    onClick={() => setOpenDropdown(openDropdown === index ? null : index)}
                    style={{
                      backgroundColor: "#FF6F61",
                      color: "white",
                      border: "none",
                      padding: "10px 15px",
                      borderRadius: "5px",
                      cursor: "pointer",
                      fontWeight: "bold",
                      width: "100%",
                      marginBottom: "15px"
                    }}
                  >
                    {openDropdown === index ? "Hide Recipe" : "Show Recipe"}
                  </button>
                  
                  {openDropdown === index && (
                    <div>
                      <h4 style={{ fontSize: "1.2rem", margin: "10px 0" }}>Ingredients:</h4>
                      <ul style={{ marginBottom: "15px", paddingLeft: "20px" }}>
                        {dish.ingredients.map((ingredient, i) => (
                          <li key={i} style={{ marginBottom: "5px" }}>{ingredient}</li>
                        ))}
                      </ul>
                      
                      <h4 style={{ fontSize: "1.2rem", margin: "10px 0" }}>Instructions:</h4>
                      <ol style={{ paddingLeft: "20px" }}>
                        {dish.recipe.map((step, i) => (
                          <li key={i} style={{ marginBottom: "10px" }}>{step}</li>
                        ))}
                      </ol>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

// SideDishes component that uses RecipePage
const SideDishes = () => {
  const sideDishCategories = {
    "Potato Dishes": [
      {
        name: "Potato Bites",
        image: "/images/potato-bites.jpg",
        ingredients: [
          "3 medium potatoes, chopped",
          "2 tbsp olive oil",
          "1/2 tsp salt",
          "1/2 tsp black pepper",
          "1/2 tsp paprika",
          "1/2 tsp garlic powder",
          "1/2 tsp dried oregano"
        ],
        recipe: [
          "Preheat air fryer to 200°C (400°F).",
          "Mix potato cubes with olive oil and seasonings until evenly coated.",
          "Place in air fryer basket in a single layer.",
          "Air fry for 15-20 minutes, shaking halfway through, until golden and crispy.",
          "Serve hot."
        ]
      }
    ],
    "Rice Dishes": [
      {
        name: "Sushi Wrap",
        image: "/images/sushi-wrap.jpg",
        ingredients: [
          "1 cup sushi rice",
          "2 tbsp sushi vinegar",
          "1/2 tsp salt",
          "1/2 tbsp sugar",
          "1 can tuna (140g, drained)",
          "2 tbsp mayonnaise",
          "3-4 nori sheets",
          "1 small cucumber, thinly sliced"
        ],
        recipe: [
          "Cook sushi rice according to package instructions.",
          "Mix vinegar, salt, and sugar, then fold into hot rice. Let cool.",
          "Combine tuna with mayonnaise, salt, and pepper.",
          "Lay out nori sheet, spread thin layer of rice, add tuna and cucumber.",
          "Roll tightly, slice, and serve."
        ]
      }
    ],
    "Salads": [
      {
        name: "Mexican Salad",
        image: "/images/mexican-salad.jpg",
        ingredients: [
          "2 chicken breasts, grilled and sliced",
          "½ cup mayonnaise",
          "2 tbsp cream cheese",
          "½ cup corn",
          "½ cup halved cherry tomatoes",
          "1 small onion, chopped",
          "½ cup bell peppers, chopped",
          "1 tbsp olive oil",
          "Salt, black pepper, paprika, cumin to taste"
        ],
        recipe: [
          "In a bowl, mix mayonnaise, cream cheese, and seasonings for dressing.",
          "Add chopped chicken, corn, tomatoes, bell peppers, and onions.",
          "Drizzle with olive oil and toss to combine.",
          "Adjust seasonings to taste.",
          "Chill for 10-15 minutes before serving."
        ]
      }
    ]
  };

  return <RecipePage title="Side Dishes" categories={sideDishCategories} />;
};

export default SideDishes;