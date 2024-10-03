import React, { useState } from 'react';
import { registerUser } from '../api/api';
import { useNavigate } from 'react-router-dom';
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Heading,
    Select,
    useToast,
} from '@chakra-ui/react';

const Register = () => {
    const [user, setUser] = useState({ username: '', email: '', nationality: '', gender: '', password: '' });
    const navigate = useNavigate();
    const toast = useToast();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await registerUser(user);
            toast({
                title: 'Account created successfully.',
                status: 'success',
                duration: 2000,
                isClosable: true,
                position: 'top-right',
            });
            navigate('/login');
        } catch (error) {
            toast({
                title: 'Error creating account.',
                status: 'error',
                duration: 2000,
                isClosable: true,
                position: 'top-right',
            });
        }
    };

    return (
        <Box
            maxW="500px"
            mx="auto"
            mt="10"
            p="8"
            bgGradient="linear(to-r, teal.500, green.400)"
            borderRadius="lg"
            boxShadow="lg"
            color="white"
        >
            <Heading
                as="h2"
                size="lg"
                mb="6"
                textAlign="center"
                fontFamily="Caveat, cursive"
            >
                Create an Account
            </Heading>

            <form onSubmit={handleRegister}>
                <FormControl mb="4">
                    <FormLabel>Username</FormLabel>
                    <Input
                        type="text"
                        placeholder="Username"
                        value={user.username}
                        onChange={(e) => setUser({ ...user, username: e.target.value })}
                        bg="white"
                        color="black"
                        required
                    />
                </FormControl>

                <FormControl mb="4">
                    <FormLabel>Email</FormLabel>
                    <Input
                        type="email"
                        placeholder="Email"
                        value={user.email}
                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                        bg="white"
                        color="black"
                        required
                    />
                </FormControl>

                <FormControl mb="4">
                    <FormLabel>Nationality</FormLabel>
                    <Input
                        type="text"
                        placeholder="Nationality"
                        value={user.nationality}
                        onChange={(e) => setUser({ ...user, nationality: e.target.value })}
                        bg="white"
                        color="black"
                        required
                    />
                </FormControl>

                <FormControl mb="4">
                    <FormLabel>Gender</FormLabel>
                    <Select
                        placeholder="Select gender"
                        value={user.gender}
                        onChange={(e) => setUser({ ...user, gender: e.target.value })}
                        bg="white"
                        color="black"
                        required
                    >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </Select>
                </FormControl>

                <FormControl mb="4">
                    <FormLabel>Password</FormLabel>
                    <Input
                        type="password"
                        placeholder="Password"
                        value={user.password}
                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                        bg="white"
                        color="black"
                        required
                    />
                </FormControl>

                <Button
                    type="submit"
                    colorScheme="teal"
                    size="lg"
                    width="full"
                    mt="4"
                    bg="yellow.500"
                    _hover={{ bg: 'yellow.600' }}
                >
                    Register
                </Button>
            </form>
        </Box>
    );
};

export default Register;
