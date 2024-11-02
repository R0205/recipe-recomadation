/* import axios from "axios";
//import { useEffect } from "react";

const API_URL = 'http://localhost:8000/api';

// Register a new user

export const registerUser = async (userData) => {
  return await axios.post(`${API_URL}/users/register`, userData);
};


// Login user

export const loginUser = async (userData) => {
  return await axios.post(`${API_URL}/users/login`, userData);
};




export const createRecipe = async (recipeData, token) => {
  try {
    const response = await axios.post(`${API_URL}/recipes`, recipeData, {
      headers: {
        Authorization: `Bearer ${token}`,

      },
    });
    return response;
  } catch (error) {
    console.error('Error creating recipe:', error.response || error.message);
    throw error;
  }
};
/* 

export const fetchRecipes = async () => {
  try {
    const response = await axios.get(`${API_URL}/recipes`);
    return response.data;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    throw error;
  }
};

export const updateRecipe = async (id, recipeData, token) => {
  try {
    const response = await axios.put(`${API_URL}/recipes/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error updating recipe:', error);
    throw error;
  }
};

export const deleteRecipe = async (id, token) => {
  if (!id) {
    console.error('Recipe ID is required for deletion.');
    return { success: false, message: 'Invalid Recipe ID.' };
  }

  if (!token) {
    console.error('Authorization token is missing.');
    return { success: false, message: 'Authentication error. Please log in again.' };
  }

  console.log('Deleting recipe with ID:', id);
  console.log('Authorization token:', token);

  try {
    const response = await axios.delete(`${API_URL}/recipes/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log('Recipe deleted successfully', response.data);
    return { success: true, data: response.data };

  } catch (error) {
    console.error('Error deleting recipe:', error);

    const errorMessage = error.response?.data?.message ||
      (error.response?.status === 404 ? 'Recipe not found.' : 'Failed to delete the recipe.');
    return { success: false, message: errorMessage };
  }
};



export const getRecipeById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/recipes/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching recipe:', error);
    throw error;
  }
};
 */


import axios from "axios";

const API_URL = process.env.REACT_APP_API_BASE_URL;
// Helper function for error handling
const handleError = (error, customMessage = 'An error occurred') => {
  console.error(customMessage, error.response || error.message);
  return { success: false, message: customMessage }; // Return an error object
};

// Register a new user
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/users/register`, userData);
    return { success: true, data: response.data };
  } catch (error) {
    return handleError(error, 'Error registering user');
  }
};

// Login user
export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/users/login`, userData);
    return { success: true, data: response.data };
  } catch (error) {
    return handleError(error, 'Error logging in user');
  }
};

// Create a new recipe
export const createRecipe = async (recipeData, token) => {
  try {
    const response = await axios.post(`${API_URL}/recipes`, recipeData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return { success: true, data: response.data };
  } catch (error) {
    return handleError(error, 'Error creating recipe');
  }
};

// Fetch all recipes
export const fetchRecipes = async () => {
  try {
    const response = await axios.get(`${API_URL}/recipes/`);
    return { success: true, data: response.data };
  } catch (error) {
    return handleError(error, 'Error fetching recipes');
  }
};

// Update a recipe
export const updateRecipe = async (id, recipeData, token) => {
  if (!id) {
    return { success: false, message: 'Recipe ID is required.' };
  }
  if (!token) {
    return { success: false, message: 'Authorization token is missing.' };
  }

  try {
    const response = await axios.put(`${API_URL}/recipes/${id}`, recipeData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return { success: true, data: response.data };
  } catch (error) {
    return handleError(error, 'Error updating recipe');
  }
};

// Delete a recipe
export const deleteRecipe = async (id, token) => {
  if (!id) {
    return { success: false, message: 'Recipe ID is required for deletion.' };
  }

  if (!token) {
    return { success: false, message: 'Authorization token is missing.' };
  }

  try {
    const response = await axios.delete(`${API_URL}/recipes/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return { success: true, data: response.data };
  } catch (error) {
    const errorMessage = error.response?.data?.message ||
      (error.response?.status === 404 ? 'Recipe not found.' : 'Failed to delete the recipe.');
    console.error('Error deleting recipe:', errorMessage);
    return { success: false, message: errorMessage };
  }
};

// Get a recipe by its ID
export const getRecipeById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/recipes/${id}`);
    return { success: true, data: response.data };
  } catch (error) {
    return handleError(error, 'Error fetching recipe');
  }
};

