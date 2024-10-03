import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const registerUser = (userData) => {
    return axios.post(`${API_URL}/users`, userData);
};

export const loginUser = (loginData) => {
    return axios.post(`${API_URL}/login`, loginData);
};

export const fetchRecipes = (token) => {
    return axios.get(`${API_URL}/recipes`, {
        headers: { Authorization: `Bearer ${token}` }
    });
};

export const createRecipe = (recipeData, token) => {
    return axios.post(`${API_URL}/recipes`, recipeData, {
        headers: { Authorization: `Bearer ${token}` }
    });
};

export const deleteRecipe = (id, token) => {
    return axios.delete(`${API_URL}/recipes/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
    });
};
