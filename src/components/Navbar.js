// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, List, ListItem, Button } from '@chakra-ui/react';

const Navbar = () => {
    return (
        <Box bgGradient="linear(to-r, green.600, teal.500)" px="6" py="4" boxShadow="lg">
            <Flex as="nav" justify="center">
                <List display="flex" spacing={6}>
                    <ListItem>
                        <Button
                            as={Link}
                            to="/register"
                            colorScheme="yellow"
                            variant="solid"
                            _hover={{ transform: 'scale(1.05)' }}
                            _active={{ bg: 'yellow.600' }}
                            transition="all 0.3s"
                        >
                            Register
                        </Button>
                    </ListItem>
                    <ListItem>
                        <Button
                            as={Link}
                            to="/login"
                            colorScheme="yellow"
                            variant="solid"
                            _hover={{ transform: 'scale(1.05)' }}
                            _active={{ bg: 'yellow.600' }}
                            transition="all 0.3s"
                        >
                            Login
                        </Button>
                    </ListItem>
                    <ListItem>
                        <Button
                            as={Link}
                            to="/recipes"
                            colorScheme="yellow"
                            variant="solid"
                            _hover={{ transform: 'scale(1.05)' }}
                            _active={{ bg: 'yellow.600' }}
                            transition="all 0.3s"
                        >
                            Recipes
                        </Button>
                    </ListItem>
                    <ListItem>
                        <Button
                            as={Link}
                            to="/create-recipe"
                            colorScheme="yellow"
                            variant="solid"
                            _hover={{ transform: 'scale(1.05)' }}
                            _active={{ bg: 'yellow.600' }}
                            transition="all 0.3s"
                        >
                            Create Recipe
                        </Button>
                    </ListItem>
                </List>
            </Flex>
        </Box>
    );
};

export default Navbar;
