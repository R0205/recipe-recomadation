 import React, { useState } from 'react';
import axios from 'axios';
/*
const AddRecipe = ({ onRecipeAdded }) => {
    const [recipeName, setRecipeName] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);

    const resetForm = () => {
        setRecipeName('');
        setIngredients('');
        setInstructions('');
        setError('');
        setSuccess('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!recipeName || !ingredients || !instructions) {
            setError('All fields are required');
            return;
        }

        setLoading(true);
        setError(''); // Reset error message before submitting
        const formData = {
            name: recipeName,
            ingredients,
            instructions,
        };

        try {
            const response = await axios.post('http://localhost:8000/api/recipes', formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (onRecipeAdded instanceof Function) {
                onRecipeAdded(response.data);
            } else {
                console.warn('onRecipeAdded was not provided as a function');
            }

            setSuccess('Recipe added successfully');
            resetForm();
        } catch (error) {
            setError('Error adding recipe: ' + (error.response?.data?.message || error.message));
        } finally {
            setLoading(false); // Ensure loading state is reset
        }

        // Clear success message after a delay
        setTimeout(() => setSuccess(''), 3000);
    };

    return (
        <div className='add-recipe-page'>
            <div className='add-recipe-form'>
                <h2>Add New Recipe</h2>
                {error && <p style={{ color: 'red' }} aria-live="assertive">{error}</p>}
                {success && <p style={{ color: 'green' }} aria-live="polite">{success}</p>}

                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor='recipeName'>Recipe Name</label>
                        <input
                            id='recipeName'
                            type='text'
                            value={recipeName}
                            onChange={(e) => setRecipeName(e.target.value)}
                            required
                        />
                    </div>

                    <div className='form-group'>
                        <label htmlFor='ingredients'>Ingredients</label>
                        <textarea
                            id='ingredients'
                            value={ingredients}
                            onChange={(e) => setIngredients(e.target.value)}
                            required
                        />
                    </div>

                    <div className='form-group'>
                        <label htmlFor='instructions'>Instructions</label>
                        <textarea
                            id='instructions'
                            value={instructions}
                            onChange={(e) => setInstructions(e.target.value)}
                            required
                        />
                    </div>

                    <button type='submit' disabled={loading}>
                        {loading ? 'Adding...' : 'Add Recipe'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddRecipe;
 */
const AddRecipe = ({ onRecipeAdded = () => {} }) => {
    const [recipeName, setRecipeName] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);

    const resetForm = () => {
        setRecipeName('');
        setIngredients('');
        setInstructions('');
        setError('');
        setSuccess('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!recipeName || !ingredients || !instructions) {
            setError('All fields are required');
            return;
        }

        setLoading(true);
        setError(''); // Reset error message before submitting
        const formData = {
            name: recipeName,
            ingredients,
            instructions,
        };

        try {
            const response = await axios.post('http://localhost:8000/api/recipes', formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (onRecipeAdded instanceof Function) {
                onRecipeAdded(response.data);
            } else {
                console.warn('onRecipeAdded was not provided as a function');
            }

            setSuccess('Recipe added successfully');
            resetForm();
        } catch (error) {
            setError('Error adding recipe: ' + (error.response?.data?.message || error.message));
        } finally {
            setLoading(false); // Ensure loading state is reset
        }

        // Clear success message after a delay
        setTimeout(() => setSuccess(''), 3000);
    };

    return (
        <div className='add-recipe-page'>
            <div className='add-recipe-form'>
                <h2>Add New Recipe</h2>
                {error && <p style={{ color: 'red' }} aria-live="assertive">{error}</p>}
                {success && <p style={{ color: 'green' }} aria-live="polite">{success}</p>}

                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor='recipeName'>Recipe Name</label>
                        <input
                            id='recipeName'
                            type='text'
                            value={recipeName}
                            onChange={(e) => setRecipeName(e.target.value)}
                            required
                        />
                    </div>

                    <div className='form-group'>
                        <label htmlFor='ingredients'>Ingredients</label>
                        <textarea
                            id='ingredients'
                            value={ingredients}
                            onChange={(e) => setIngredients(e.target.value)}
                            required
                        />
                    </div>

                    <div className='form-group'>
                        <label htmlFor='instructions'>Instructions</label>
                        <textarea
                            id='instructions'
                            value={instructions}
                            onChange={(e) => setInstructions(e.target.value)}
                            required
                        />
                    </div>

                    <button type='submit' disabled={loading}>
                        {loading ? 'Adding...' : 'Add Recipe'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddRecipe;
