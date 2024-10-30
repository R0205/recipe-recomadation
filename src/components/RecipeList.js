/* import React, { useState, useEffect } from 'react'
import RecipeCard from './RecipeCard';

const RecipeList = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchRecipe = async () => {
            const response = await fetch('/api/recipes');
            const data = await response.json();
            setRecipes(data);
        };

        fetchRecipe();
    }, []);

    return (
        <div className='recipe-list'>
            {recipes.map(recipe => (
                <RecipeCard key={recipe._id} recipe={recipe} />
            ))}
        </div>
    )
}

export default RecipeList
 */

import React, { useEffect, useState } from 'react';
import EditRecipe from './EditRecipe';

const RecipeList = ({ onEditClick }) => {
    const [recipes, setRecipes] = useState([]);
/*     const [isEditing, setIsEditing] = useState(false);
    const [currentRecipeId, setCurrentRecipeId] = useState(null);
    const [currentRecipeData, setCurrentRecipeData] = useState(null); */

    // Fetch recipes from the backend
    const fetchRecipes = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/recipes');
            const data = await response.json();
            if (data.success) {
                setRecipes(data.data); // Assuming the data structure contains a 'data' key with recipes
            }
        } catch (error) {
            console.error('Failed to fetch recipes:', error);
        }
    };

    useEffect(() => {
        fetchRecipes(); // Fetch recipes on component mount
    }, []);

    return (
        <div>
            {recipes.map(recipe => (
                <div key={recipe._id}> {/* Use `_id` as the unique key */}
                    <h3>{recipe.name}</h3>
                    <button onClick={() => onEditClick(recipe)}>Edit</button> {/* Use the passed function for editing */}
                </div>
            ))}
        </div>
    );
};

export default RecipeList;
