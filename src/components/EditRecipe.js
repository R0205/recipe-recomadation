/* import React, { useEffect, useState } from 'react';

const EditRecipe = ({ recipeId, onRecipeUpdates, initialRecipeData, closeModal }) => {
    const [recipeName, setRecipeName] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (initialRecipeData) {
            setRecipeName(initialRecipeData.name);
            setIngredients(initialRecipeData.ingredients);
            setInstructions(initialRecipeData.instructions);
        } else {
            setError('No recipe data available.');
        }
    }, [initialRecipeData]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const updatedRecipe = {
                name: recipeName,
                ingredients,
                instructions,
            };

            // Ensure recipeId is defined
            if (!recipeId) {
                throw new Error('Recipe ID is undefined');
            }

            const response = await fetch(`http://localhost:8000/api/recipes/${recipeId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedRecipe),
            });

            if (!response.ok) {
                throw new Error('Failed to update recipe');
            }

            const result = await response.json(); // Get the updated recipe from the response
            onRecipeUpdates(result.data); // Pass the updated recipe back to the list
            setSuccess('Recipe updated successfully');
            closeModal(); // Close the modal after successful update
        } catch (err) {
            setError('Failed to update recipe: ' + err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='modal'>
            <div className='modal-content'>
                <span className='close' onClick={closeModal}>&times;</span>
                <h2>Edit Recipe</h2>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {success && <p style={{ color: 'green' }}>{success}</p>}

                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label>Recipe Name</label>
                        <input
                            type='text'
                            value={recipeName}
                            onChange={(e) => setRecipeName(e.target.value)}
                            required
                        />
                    </div>

                    <div className='form-group'>
                        <label>Ingredients</label>
                        <textarea
                            value={ingredients}
                            onChange={(e) => setIngredients(e.target.value)}
                            required
                        />
                    </div>

                    <div className='form-group'>
                        <label>Instructions</label>
                        <textarea
                            value={instructions}
                            onChange={(e) => setInstructions(e.target.value)}
                            required
                        />
                    </div>
                    <button type='submit' disabled={loading}>
                        {loading ? 'Updating...' : 'Update Recipe'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditRecipe;
 */



import React, { useEffect, useState } from 'react';
 // Make sure to import your CSS file

const EditRecipe = ({ recipeId, onRecipeUpdates, initialRecipeData, closeModal }) => {
    const [recipeName, setRecipeName] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (initialRecipeData) {
            setRecipeName(initialRecipeData.name);
            setIngredients(initialRecipeData.ingredients);
            setInstructions(initialRecipeData.instructions);
        } else {
            setError('No recipe data available.');
        }
    }, [initialRecipeData]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const updatedRecipe = {
                name: recipeName,
                ingredients,
                instructions,
            };

            // Ensure recipeId is defined
            if (!recipeId) {
                throw new Error('Recipe ID is undefined');
            }

            const response = await fetch(`http://localhost:8000/api/recipes/${recipeId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedRecipe),
            });

            if (!response.ok) {
                throw new Error('Failed to update recipe');
            }

            const result = await response.json(); // Get the updated recipe from the response
            onRecipeUpdates(result.data); // Pass the updated recipe back to the list
            setSuccess('Recipe updated successfully');
            closeModal(); // Close the modal after successful update
        } catch (err) {
            setError('Failed to update recipe: ' + err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='overlay'> {/* Use overlay class here */}
            <div className='modal-content'>
                <span className='close' onClick={closeModal}>&times;</span>
                <h2>Edit Recipe</h2>
                {error && <p className='error-message'>{error}</p>}
                {success && <p className='success-message'>{success}</p>}
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label>Recipe Name</label>
                        <input
                            type='text'
                            value={recipeName}
                            onChange={(e) => setRecipeName(e.target.value)}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <label>Ingredients</label>
                        <textarea
                            value={ingredients}
                            onChange={(e) => setIngredients(e.target.value)}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <label>Instructions</label>
                        <textarea
                            value={instructions}
                            onChange={(e) => setInstructions(e.target.value)}
                            required
                        />
                    </div>
                    <button type='submit' disabled={loading}>
                        {loading ? 'Updating...' : 'Update Recipe'}
                    </button>
                </form>
            </div>
        </div>
    );
    
};

export default EditRecipe;
