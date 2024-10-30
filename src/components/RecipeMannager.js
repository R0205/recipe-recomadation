/* import React, { useState } from 'react';
import EditRecipe from './EditRecipe';
import Modal from './Modal';

const RecipeMannager = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [initialRecipeData, setInitialRecipeData] = useState({
        name: '',
        ingredients: '',
        instructions: '',

    });

    const openModal = (recipe) => {
        setInitialRecipeData(recipe);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    }

    const handleRecipeUpdates = (updatedRecipe) => {
        console.log('Updated Recipe:', updatedRecipe);
        closeModal();
    }
    return (
        <div>
            <h1>RecipeMannager</h1>
            <button onClick={() => openModal(initialRecipeData)}>Add/Edit Recipe</button>

         
            {isModalOpen && (
                <Modal closeModal={closeModal}>
                    <EditRecipe recipeId={initialRecipeData.id} // You might want to set an ID or a unique identifier
                        initialRecipeData={initialRecipeData}
                        onRecipeUpdates={handleRecipeUpdates} />
                </Modal>
            )}
        </div>
    )
}

export default RecipeMannager */