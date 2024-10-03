import React, { useState } from 'react';
import { createRecipe } from '../api/api';
import { Box, Button, FormControl, FormLabel, Input, Textarea, Heading, useToast } from '@chakra-ui/react';

const RecipeForm = ({ token }) => {
    const [recipe, setRecipe] = useState({ title: '', ingredients: '', instructions: '', cooking_time: '' });
    const toast = useToast();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Sending the recipe data to the API
            await createRecipe(recipe, token);
            toast({
                title: 'Recipe created successfully',
                status: 'success',
                duration: 2000,
                isClosable: true,
                position: 'top-right'
            });
            // Resetting the form after successful submission
            setRecipe({ title: '', ingredients: '', instructions: '', cooking_time: '' });
        } catch (error) {
            // Improved error handling
            const errorMessage = error.response?.data?.message || 'Error creating recipe';
            toast({
                title: errorMessage,
                status: 'error',
                duration: 2000,
                isClosable: true,
                position: 'top-right'
            });
        }
    };

    return (
        <Box
            maxW="500px"
            mx="auto"
            mt="10"
            p="8"
            bgGradient="linear(to-r, green.500, teal.400)"
            borderRadius="lg"
            boxShadow="lg"
        >
            <Heading
                as="h2"
                size="lg"
                textAlign="center"
                mb="6"
                color="white"
                fontFamily="Caveat, cursive"
                fontWeight="bold"
            >
                Create a Wild Recipe
            </Heading>
            <form onSubmit={handleSubmit}>
                <FormControl id="title" mb="4" isRequired>
                    <FormLabel color="white">Title</FormLabel>
                    <Input
                        type="text"
                        placeholder="Enter recipe title"
                        value={recipe.title}
                        onChange={(e) => setRecipe({ ...recipe, title: e.target.value })}
                        focusBorderColor="yellow.400"
                        _hover={{ bg: 'green.300' }}
                        _placeholder={{ color: 'yellow.300' }}
                    />
                </FormControl>

                <FormControl id="ingredients" mb="4" isRequired>
                    <FormLabel color="white">Ingredients</FormLabel>
                    <Input
                        type="text"
                        placeholder="Enter ingredients (comma separated)"
                        value={recipe.ingredients}
                        onChange={(e) => setRecipe({ ...recipe, ingredients: e.target.value })}
                        focusBorderColor="yellow.400"
                        _hover={{ bg: 'green.300' }}
                        _placeholder={{ color: 'yellow.300' }}
                    />
                </FormControl>

                <FormControl id="instructions" mb="4" isRequired>
                    <FormLabel color="white">Instructions</FormLabel>
                    <Textarea
                        placeholder="Enter instructions"
                        value={recipe.instructions}
                        onChange={(e) => setRecipe({ ...recipe, instructions: e.target.value })}
                        focusBorderColor="yellow.400"
                        _hover={{ bg: 'green.300' }}
                        _placeholder={{ color: 'yellow.300' }}
                    />
                </FormControl>

                <FormControl id="cooking_time" mb="6" isRequired>
                    <FormLabel color="white">Cooking Time</FormLabel>
                    <Input
                        type="text"
                        placeholder="Enter cooking time (e.g., 30 minutes)"
                        value={recipe.cooking_time}
                        onChange={(e) => setRecipe({ ...recipe, cooking_time: e.target.value })}
                        focusBorderColor="yellow.400"
                        _hover={{ bg: 'green.300' }}
                        _placeholder={{ color: 'yellow.300' }}
                    />
                </FormControl>

                <Button
                    type="submit"
                    width="full"
                    bg="yellow.400"
                    color="white"
                    _hover={{ bg: 'yellow.500', transform: 'scale(1.05)' }}
                    _active={{ bg: 'yellow.600' }}
                    transition="all 0.3s"
                    fontWeight="bold"
                    fontFamily="Caveat, cursive"
                    fontSize="lg"
                >
                    Create Recipe
                </Button>
            </form>
        </Box>
    );
};

export default RecipeForm;
