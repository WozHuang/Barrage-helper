import './App.less';
import { Box, Button, Center, ChakraProvider, extendTheme } from '@chakra-ui/react';
import { createHashRouter, Link, RouterProvider } from 'react-router-dom';
import { SketchPicker } from 'react-color';
import { store, StoreContext, useStore } from './store';

const theme = extendTheme({ styles: { global: () => ({ body: { bg: 'transparent' } }) } });

const Content = () => {
  const { settings } = useStore();
  return (
    <Center p={2}>
      <Button className='no-drag' colorScheme='blue' onClick={() => settings.toggleStick()}>
        toggle stick
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
    <StoreContext.Provider value={store}>
      <ChakraProvider theme={theme}>
        <Box h='100%' w='100%'>
          <RouterProvider router={router} />
        </Box>
      </ChakraProvider>
    </StoreContext.Provider>
  );
};

export default <App />;
