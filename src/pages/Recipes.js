/* import React, { useState, useEffect } from 'react';
import Cards from '../components/Cards';
import { deleteRecipe, fetchRecipes as apiFetchRecipes } from '../api';
import EditRecipe from '../components/EditRecipe';

const Recipes = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [selectedRecipe, setSelectedRecipe] = useState(null); // State for the selected recipe

    // Fetch recipes from the API
    const fetchRecipes = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await apiFetchRecipes();
            if (response && response.success && response.data && Array.isArray(response.data.data)) {
                setRecipes(response.data.data);
            } else {
                throw new Error('Unexpected response structure');
            }
        } catch (error) {
            setError("Failed to fetch recipes. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRecipes();
    }, []);

    const handleRecipeDelete = async (id) => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                alert('Please log in to delete a recipe.');
                return;
            }
            const deleteResponse = await deleteRecipe(id, token);
            if (deleteResponse && deleteResponse.success) {
                await fetchRecipes(); // Refresh recipes after deletion
            } else {
                throw new Error('Failed to delete recipe');
            }
        } catch (error) {
            alert('Failed to delete the recipe. Please try again.');
        }
    };

    const handleEditClick = (recipe) => {
        setSelectedRecipe(recipe);
        setIsEditing(true);
    };

    const handleCloseEdit = () => {
        setIsEditing(false);
        setSelectedRecipe(null);
    };

    const handleSaveEdit = () => {
        handleCloseEdit();
        fetchRecipes(); // Refresh recipes after saving edits
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className={`recipes-page ${isEditing ? 'blurred' : ''}`}>
            <h1>Our Recipes</h1>
            <p>Browse through our selection of amazing recipes</p>

            <form className='search-container' onSubmit={(e) => e.preventDefault()}>
                <input
                    type="text"
                    placeholder='Search for a recipe...'
                    className='search-bar'
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <button type="submit" className="search-button">Search</button>
            </form>

            {loading ? (
                <p>Loading recipes...</p>
            ) : error ? (
                <p className='error-message'>{error}</p>
            ) : (
                <Cards 
                    recipes={recipes.filter(recipe => 
                        recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
                    )}
                    onRecipeDelete={handleRecipeDelete}
                    onEditClick={handleEditClick} // Trigger edit from Cards component
                />
            )}

            {isEditing && selectedRecipe && (
                <EditRecipe 
                    recipeId={selectedRecipe.id} // Pass the selected recipe ID
                    initialRecipeData={selectedRecipe} // Pass initial data for editing
                    onRecipeUpdates={handleSaveEdit} // Refresh recipes after saving edits
                    closeModal={handleCloseEdit} // Close modal function
                />
            )}
        </div>
    );
};

export default Recipes;
 */


import React, { useState, useEffect } from 'react';
import Cards from '../components/Cards';
import { deleteRecipe, fetchRecipes as apiFetchRecipes } from '../api';
import EditRecipe from '../components/EditRecipe';

const Recipes = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [selectedRecipe, setSelectedRecipe] = useState(null); // State for the selected recipe

    // Fetch recipes from the API
    const fetchRecipes = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await apiFetchRecipes();
            if (response && response.success && response.data && Array.isArray(response.data.data)) {
                setRecipes(response.data.data);
            } else {
                throw new Error('Unexpected response structure');
            }
        } catch (error) {
            setError("Failed to fetch recipes. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRecipes();
    }, []);

    const handleRecipeDelete = async (id) => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                alert('Please log in to delete a recipe.');
                return;
            }
            const deleteResponse = await deleteRecipe(id, token);
            if (deleteResponse && deleteResponse.success) {
                await fetchRecipes(); // Refresh recipes after deletion
            } else {
                throw new Error('Failed to delete recipe');
            }
        } catch (error) {
            alert('Failed to delete the recipe. Please try again.');
        }
    };

    const handleEditClick = (recipe) => {
        setSelectedRecipe(recipe);
        setIsEditing(true);
    };

    const handleCloseEdit = () => {
        setIsEditing(false);
        setSelectedRecipe(null);
    };

    const handleRecipeUpdates = (updatedRecipe) => {
        setRecipes((prevRecipes) =>
            prevRecipes.map((recipe) =>
                recipe._id === updatedRecipe._id ? updatedRecipe : recipe // Update recipe using `_id`
            )
        );
        handleCloseEdit(); // Close the modal after updating
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className={`recipes-page ${isEditing ? 'blurred' : ''}`}>
            <h1>Our Recipes</h1>
            <p>Browse through our selection of amazing recipes</p>

            <form className='search-container' onSubmit={(e) => e.preventDefault()}>
                <input
                    type="text"
                    placeholder='Search for a recipe...'
                    className='search-bar'
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <button type="submit" className="search-button">Search</button>
            </form>

            {loading ? (
                <p>Loading recipes...</p>
            ) : error ? (
                <p className='error-message'>{error}</p>
            ) : (
                <Cards 
                    recipes={recipes.filter(recipe => 
                        recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
                    )}
                    onRecipeDelete={handleRecipeDelete}
                    onEditClick={handleEditClick} // Trigger edit from Cards component
                />
            )}

            {isEditing && selectedRecipe && (
                <EditRecipe 
                    recipeId={selectedRecipe._id} // Pass the selected recipe ID
                    initialRecipeData={selectedRecipe} // Pass initial data for editing
                    onRecipeUpdates={handleRecipeUpdates} // Handle updates after editing
                    closeModal={handleCloseEdit} // Close modal function
                />
            )}
        </div>
    );
};

export default Recipes;

