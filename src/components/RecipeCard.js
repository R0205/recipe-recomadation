import React from 'react';
import { useNavigate } from 'react-router-dom';

const RecipeCard = ({ recipe, onDelete, onEdit }) => {
    const navigate = useNavigate();

    // Navigate to the detailed view of the selected recipe
    const handleViewMore = () => {
        navigate(`/recipe/${recipe._id}`);
    };

    return (
        <div className="recipe-card">
            {/* Display recipe name or fallback if name is missing */}
            <h2 className="card-title">{recipe.name || "Untitled Recipe"}</h2>

            {/* Show a snippet of instructions or a default message */}
            <p className="card-description">
                {recipe.instructions?.substring(0, 100) || recipe.description || "No description available."}
                {recipe.instructions && recipe.instructions.length > 100 && "..."}
            </p>

            {/* Button to view the full recipe */}
            <button className="view-more" onClick={handleViewMore}>
                View Recipe
            </button>

            {/* Buttons for Edit and Delete actions */}
            <div className="card-buttons">
                <button 
                    onClick={() => onEdit(recipe._id)} 
                    className="card-button"
                >
                    Edit Recipe
                </button>
                <button 
                    onClick={() => onDelete(recipe._id)} 
                    className="card-button delete-button"
                >
                    Delete Recipe
                </button>
            </div>
        </div>
    );
};

export default RecipeCard;




/* import React, { useEffect, useState } from 'react';
import RecipeCard from './RecipeCard'; // Adjust the path if necessary
import axios from 'axios';

const RecipeCards = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/recipes'); // Adjust the URL as necessary
                setRecipes(response.data); // Assuming the response contains an array of recipes
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchRecipes();
    }, []);

    if (loading) {
        return <div>Loading recipes...</div>;
    }

    if (error) {
        return <div>Error fetching recipes: {error}</div>;
    }

    return (
        <div className='cards-section'>
            {recipes.map((recipe) => (
                <RecipeCard 
                    key={recipe._id} 
                    recipe={recipe} 
                    onDelete={(id) => console.log('Delete recipe with id:', id)} // Implement onDelete function
                    onEdit={(id) => console.log('Edit recipe with id:', id)} // Implement onEdit function
                />
            ))}
        </div>
    );
};

export default RecipeCards; */
