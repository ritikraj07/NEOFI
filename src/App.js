import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react'

import Navbar from './Source/Component/Navbar';
import AllRoutes from './Source/Routes/AllRoutes';

function App() {
  return (
    
    <ChakraProvider theme={theme}>
      <Navbar />
      <AllRoutes />
    </ChakraProvider>
  );
}

export default App;
