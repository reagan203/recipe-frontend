import React, { useState } from 'react';
import { loginUser } from '../api/api';
import { useNavigate } from 'react-router-dom';
import { Box, Button, FormControl, FormLabel, Heading, Input, useToast } from '@chakra-ui/react';

const Login = ({ setToken }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const toast = useToast();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await loginUser({ email, password });
            setToken(response.data.access_token);
            localStorage.setItem('token', response.data.access_token);
            toast({
                title: 'Login successful!',
                status: 'success',
                duration: 2000,
                isClosable: true,
                position: 'top-right'
            });
            navigate('/recipes');
        } catch (error) {
            toast({
                title: 'Invalid email or password',
                status: 'error',
                duration: 2000,
                isClosable: true,
                position: 'top-right'
            });
        }
    };

    return (
        <Box
            maxW="400px"
            mx="auto"
            mt="10"
            p="8"
            bgGradient="linear(to-r, teal.500, green.500)"
            borderRadius="lg"
            boxShadow="xl"
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
                Wild Login
            </Heading>
            <form onSubmit={handleLogin}>
                <FormControl id="email" mb="4">
                    <FormLabel color="white">Email</FormLabel>
                    <Input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        focusBorderColor="yellow.400"
                        _hover={{ bg: 'green.300' }}
                        _placeholder={{ color: 'yellow.300' }}
                        required
                    />
                </FormControl>

                <FormControl id="password" mb="6">
                    <FormLabel color="white">Password</FormLabel>
                    <Input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        focusBorderColor="yellow.400"
                        _hover={{ bg: 'green.300' }}
                        _placeholder={{ color: 'yellow.300' }}
                        required
                    />
                </FormControl>

                <Button
                    type="submit"
                    width="full"
                    mt="4"
                    bg="yellow.400"
                    color="white"
                    _hover={{ bg: 'yellow.500', transform: 'scale(1.05)' }}
                    _active={{ bg: 'yellow.600' }}
                    transition="all 0.3s"
                    fontWeight="bold"
                    fontFamily="Caveat, cursive"
                    fontSize="lg"
                >
                    Login
                </Button>
            </form>
        </Box>
    );
};

export default Login;
