/* // src/components/RecipeDetail.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
    const { id } = useParams(); // Get the recipe ID from the URL
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const response = await fetch(`/api/recipes/${id}`); // Adjust the API endpoint as needed

                if (!response.ok) {
                    throw new Error('Failed to fetch the recipe');
                }

                const data = await response.json();
                setRecipe(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchRecipe();
    }, [id]);

    if (loading) return <div>Loading...</div>;

    if (error) return <div>Error: {error}</div>;

    if (!recipe) return <div>Recipe not found</div>;

    return (
        <div className="recipe-detail">
            <h1>{recipe.name}</h1>
           
            <h2>Ingredients:</h2>
            <ul>
                {recipe.ingredients && recipe.ingredients.length > 0 ? (
                    recipe.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))
                ) : (
                    <li>No ingredients available</li>
                )}
            </ul>
            <h2>Instructions:</h2>
            <p>{recipe.instructions || 'No instructions provided'}</p>
        </div>
    );
};

export default RecipeDetail;
 */

// RecipeDetail.js
// src/components/RecipeDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
    const { id } = useParams(); // Get the recipe ID from the URL
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchRecipe = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/recipes/${id}`);

            // Check if the response is ok (status code 200)
            if (!response.ok) {
                throw new Error(`Failed to fetch the recipe. Status: ${response.status}`);
            }

            // Check if the response's content-type is JSON
            const contentType = response.headers.get('content-type');
            if (!contentType || !contentType.includes('application/json')) {
                throw new Error('Expected JSON response');
            }

            const data = await response.json(); // Parse the JSON response
            console.log('Fetched recipe data:', data); // Debug log

            // Check if the response has a `data` field
            if (!data || !data.data) {
                throw new Error('Invalid response format');
            }

            setRecipe(data.data); // Set the fetched recipe data
        } catch (error) {
            console.error('Error fetching recipe:', error);
            setError('Could not load the recipe. Please try again later.');
        } finally {
            setLoading(false); // Stop loading
        }
    };

    useEffect(() => {
        fetchRecipe(); // Call the fetch function when component mounts
    }, [id]);

    if (loading) return <p>Loading...</p>; // Display loading message
    if (error) return <p>{error}</p>; // Display error message

    return (
        <div className='recipe-detail-page'>
        <div className="recipe-detail">
            <h2 className="recipe-title">{recipe.name}</h2>
            <div className="recipe-info">
                <h3>Ingredients:</h3>
                <ul>
                    {recipe.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
                <h3>Instructions:</h3>
                <p>{recipe.instructions}</p>
            </div>
        </div>
        </div>
    );
};

export default RecipeDetail;
