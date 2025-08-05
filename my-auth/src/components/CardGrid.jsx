import React, { useContext } from 'react';
import { Grid, Box } from '@chakra-ui/react';
import { ThemeContext } from '../ThemeContext';

export default function CardGrid({ items = [] }) {
  const { theme } = useContext(ThemeContext);
  const cardBg = theme === 'light' ? 'gray.200' : 'gray.600';
  const shadow = theme === 'light' ? 'md' : 'dark-lg';

  return (
    <Grid
      templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
      gap="4"
      p="4"
    >
      {items.map(card => (
        <Box key={card} p="4" shadow={shadow} bg={cardBg} borderRadius="md">
          {card}
        </Box>
      ))}
    </Grid>
  );
}
