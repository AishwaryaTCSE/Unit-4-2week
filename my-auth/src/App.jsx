import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import CardGrid from './components/CardGrid';
import Footer from './components/Footer';

export default function App() {
  const cards = ['Card 1', 'Card 2', 'Card 3', 'Card 4', 'Card 5'];

  return (
    <ChakraProvider>
      <Navbar />
      <CardGrid items={cards} />
      <Footer />
    </ChakraProvider>
  );
}
