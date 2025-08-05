import React, { useContext } from 'react';
import { Flex, Box, Button } from '@chakra-ui/react';
import { AuthContext } from '../AuthContext';
import { ThemeContext } from '../ThemeContext';

export default function Navbar() {
  const { isLoggedIn, toggleAuth } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const navBg = theme === 'light' ? 'gray.100' : 'gray.700';

  return (
    <Flex
      as="nav"
      p="4"
      bg={navBg}
      justifyContent="space-between"
      alignItems="center"
    >
      <Box fontWeight="bold">My App</Box>
      <Flex gap="3">
        <Button onClick={toggleAuth}>
          {isLoggedIn ? 'Log Out' : 'Log In'}
        </Button>
        <Button onClick={toggleTheme}>
          Toggle to {theme === 'light' ? 'Dark' : 'Light'} Theme
        </Button>
      </Flex>
    </Flex>
  );
}
