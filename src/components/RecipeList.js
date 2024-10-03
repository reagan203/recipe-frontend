import React, { useEffect, useState } from 'react';
import { fetchRecipes, deleteRecipe } from '../api/api';
import { Box, Heading, List, ListItem, Text, IconButton, useToast } from '@chakra-ui/react';
import { FaTrash } from 'react-icons/fa';

const RecipeList = ({ token }) => {
    const [recipes, setRecipes] = useState([]);
    const toast = useToast();

    useEffect(() => {
        const getRecipes = async () => {
            try {
                const response = await fetchRecipes(token);
                setRecipes(response.data);
            } catch (error) {
                toast({
                    title: 'Error fetching recipes',
                    status: 'error',
                    duration: 2000,
                    isClosable: true,
                    position: 'top-right',
                });
            }
        };
        getRecipes();
    }, [token, toast]);

    const handleDelete = async (id) => {
        try {
            await deleteRecipe(id, token);
            setRecipes(recipes.filter((recipe) => recipe.id !== id));
            toast({
                title: 'Recipe deleted',
                status: 'success',
                duration: 2000,
                isClosable: true,
                position: 'top-right',
            });
        } catch (error) {
            toast({
                title: 'Error deleting recipe',
                status: 'error',
                duration: 2000,
                isClosable: true,
                position: 'top-right',
            });
        }
    };

    return (
        <Box
            maxW="600px"
            mx="auto"
            mt="10"
            p="6"
            bgGradient="linear(to-r, teal.500, green.400)"
            borderRadius="lg"
            boxShadow="lg"
        >
            <Heading
                as="h2"
                size="lg"
                mb="6"
                textAlign="center"
                color="white"
                fontFamily="Caveat, cursive"
                fontWeight="bold"
            >
                Wild Recipes
            </Heading>

            <List spacing={4}>
                {recipes.map((recipe) => (
                    <ListItem
                        key={recipe.id}
                        bg="white"
                        p="4"
                        borderRadius="md"
                        boxShadow="md"
                        display="flex"
                        flexDirection="column"
                        justifyContent="space-between"
                        alignItems="flex-start"
                        transition="transform 0.2s ease-in-out"
                        _hover={{ transform: 'scale(1.02)', bg: 'yellow.100' }}
                    >
                        <Text fontWeight="bold" fontFamily="Caveat, cursive" fontSize="xl" color="gray.800">
                            {recipe.title}
                        </Text>
                        <Text color="gray.600" fontSize="md">
                            <strong>Ingredients:</strong> {recipe.ingredients}
                        </Text>
                        <Text color="gray.600" fontSize="md">
                            <strong>Instructions:</strong> {recipe.instructions}
                        </Text>
                        <Text color="gray.600" fontSize="md">
                            <strong>Cooking Time:</strong> {recipe.cooking_time}
                        </Text>
                        <IconButton
                            icon={<FaTrash />}
                            colorScheme="red"
                            onClick={() => handleDelete(recipe.id)}
                            aria-label="Delete recipe"
                            _hover={{ bg: 'red.600' }}
                            mt={2}
                        />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default RecipeList;
