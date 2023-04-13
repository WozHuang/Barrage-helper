import './App.less';
import { Box, Button, Center, ChakraProvider, extendTheme } from '@chakra-ui/react';
import { createHashRouter, Link, RouterProvider } from 'react-router-dom';
import { SketchPicker } from 'react-color';

const theme = extendTheme({ styles: { global: () => ({ body: { bg: 'transparent' } }) } });

const Content = () => {
  return (
    <Center p={2}>
      <Button className='no-drag' colorScheme='blue'>
        Button
      </Button>
      <SketchPicker />
      <Box>12345</Box>
    </Center>
  );
};

const router = createHashRouter([
  {
    path: '/',
    element: (
      <>
        <Content />
        <Link to='about'>About Us</Link>
      </>
    )
  },
  {
    path: 'about',
    element: (
      <>
        <Link to='/'>back</Link>
      </>
    )
  }
]);

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box h='100%' w='100%'>
        <RouterProvider router={router} />
      </Box>
    </ChakraProvider>
  );
};

export default <App />;
