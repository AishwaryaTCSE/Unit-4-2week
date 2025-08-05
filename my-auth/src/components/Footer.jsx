import React, { useContext } from 'react';
import { Box } from '@chakra-ui/react';
import { ThemeContext } from '../ThemeContext';

export default function Footer() {
  const { theme } = useContext(ThemeContext);
  const footerBg = theme === 'light' ? 'gray.300' : 'gray.800';

  return (
    <Box as="footer" p="4" bg={footerBg} textAlign="center">
      Footer Content
    </Box>
  );
}
