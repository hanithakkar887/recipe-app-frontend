// import { useEffect, useState } from "react";
// import "../style/Home.css";
// import Loder from "./Loder"; // Fixed the spelling of Loader component

// export const Home = () => {
//   // State management
//   const [recipesData, setRecipesData] = useState([]);
//   const [displayedRecipes, setDisplayedRecipes] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [showDetails, setShowDetails] = useState(false);
//   const [activeRecipe, setActiveRecipe] = useState(null);
//   const [userCart, setUserCart] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   // Fetch recipes on component mount
//   useEffect(() => {
//     fetchRecipes();
//     loadUserCart();
//   }, []);

//   // Filter recipes based on search query
//   useEffect(() => {
//     if (searchQuery.trim()) {
//       const filteredList = recipesData.filter(
//         (recipe) =>
//           recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//           recipe.cuisine.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//       setDisplayedRecipes(filteredList);
//     } else {
//       setDisplayedRecipes(recipesData);
//     }
//   }, [searchQuery, recipesData]);

//   // Fetch recipes from API
//   async function fetchRecipes() {
//     setIsLoading(true);
//     try {
//       const response = await fetch("https://recipe-1dy1.onrender.com/auth/Data");
//       const jsonData = await response.json();
//       if (jsonData?.recipes?.length > 0) {
//         setRecipesData(jsonData.recipes);
//         setDisplayedRecipes(jsonData.recipes);
//       }
//     } catch (error) {
//       console.error("Error fetching recipes:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   }

//   // Recipe detail handlers
//   function showRecipeDetails(recipe) {
//     setActiveRecipe(recipe);
//     setShowDetails(true);
//   }

//   function hideDetailsPopup() {
//     setShowDetails(false);
//     setActiveRecipe(null);
//   }

//   // Cart functionality
//   function loadUserCart() {
//     const savedCart = JSON.parse(localStorage.getItem("userCart")) || [];
//     setUserCart(savedCart);
//   }

//   function addItemToCart(recipe) {
//     const userToken = localStorage.getItem("userToken");
//     if (!userToken) {
//       alert("Please log in first");
//       return;
//     }

//     if (userCart.some((item) => item.id === recipe.id)) {
//       alert("Recipe already in favorites!");
//       return;
//     }

//     const updatedCart = [...userCart, recipe];
//     localStorage.setItem("userCart", JSON.stringify(updatedCart));
//     setUserCart(updatedCart);
//     alert("Added to Favorites!");
//   }

//   // Component rendering
//   return (
//     <div className="recipe-container">
//       <div className="search-container">
//         <input
//           placeholder="Search by recipe name or cuisine..."
//           type="text"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           className="search-input"
//         />
//       </div>

//       {isLoading ? (
//         <Loder />
//       ) : (
//         <div className="recipe-grid">
//           {displayedRecipes.length > 0 ? (
//             displayedRecipes.map((recipe) => (
//               <div key={recipe.id || recipe.name} className="recipe-card">
//                 <div className="recipe-image-container">
//                   <img src={recipe.image} alt={recipe.name} className="recipe-image" />
//                 </div>
//                 <div className="recipe-info">
//                   <h3 className="recipe-name">{recipe.name}</h3>
//                   <p className="recipe-cuisine">{recipe.cuisine}</p>
//                   <div className="recipe-details">
//                     <span>{recipe.caloriesPerServing} calories</span>
//                     <span className="recipe-rating">★ {recipe.rating}</span>
//                   </div>
//                   <div className="recipe-actions">
//                     <button className="favorite-button" onClick={() => addItemToCart(recipe)}>
//                       ❤️ Favorite
//                     </button>
//                     <button className="details-button" onClick={() => showRecipeDetails(recipe)}>
//                       View Recipe
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <div className="no-results">No recipes found matching your search.</div>
//           )}
//         </div>
//       )}

//       {showDetails && activeRecipe && (
//         <div className="modal-overlay" onClick={hideDetailsPopup}>
//           <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//             <div className="modal-header">
//               <h2 className="modal-title">{activeRecipe.name}</h2>
//               <button className="close-button" onClick={hideDetailsPopup}>×</button>
//             </div>
//             <div className="modal-body">
//               <img src={activeRecipe.image} alt={activeRecipe.name} className="modal-image" />
//               <div className="recipe-stats">
//                 <div className="stat-item">
//                   <span className="stat-label">Cuisine:</span>
//                   <span className="stat-value">{activeRecipe.cuisine}</span>
//                 </div>
//                 <div className="stat-item">
//                   <span className="stat-label">Meal Type:</span>
//                   <span className="stat-value">{activeRecipe.mealType}</span>
//                 </div>
//                 <div className="stat-item">
//                   <span className="stat-label">Prep Time:</span>
//                   <span className="stat-value">{activeRecipe.prepTimeMinutes} minutes</span>
//                 </div>
//                 <div className="stat-item">
//                   <span className="stat-label">Calories:</span>
//                   <span className="stat-value">{activeRecipe.caloriesPerServing} per serving</span>
//                 </div>
//               </div>
//               <div className="recipe-section">
//                 <h3>Ingredients</h3>
//                 <p>{activeRecipe.ingredients}</p>
//               </div>
//               <div className="recipe-section">
//                 <h3>Instructions</h3>
//                 <p>{activeRecipe.instructions}</p>
//               </div>
//               <button className="favorite-button modal-action" onClick={() => addItemToCart(activeRecipe)}>
//                 ❤️ Add to Favorites
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// import Re from 'react';

const Favorites = () => {
  return (
    <div>
      fav
    </div>
  );
}

export default Favorites;
