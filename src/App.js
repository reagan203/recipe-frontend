import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider, Box, Container } from '@chakra-ui/react';
import Login from './components/Login';
import Register from './components/Register';
import RecipeList from './components/RecipeList';
import RecipeForm from './components/RecipeForm';
import Navbar from './components/Navbar';

const App = () => {
    const [token, setToken] = useState(localStorage.getItem('token') || '');

    return (
        <ChakraProvider>
            <Router>
                {/* Background box wrapping the whole app for the wild theme */}
                <Box bgGradient="linear(to-r, orange.400, red.300)" minHeight="100vh" py={5}>
                    <Container maxW="container.xl">
                        <Navbar />
                        <Routes>
                            <Route path="/login" element={<Login setToken={setToken} />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="/recipes" element={<RecipeList token={token} />} />
                            <Route path="/create-recipe" element={<RecipeForm token={token} />} />
                        </Routes>
                    </Container>
                </Box>
            </Router>
        </ChakraProvider>
    );
};

export default App;
