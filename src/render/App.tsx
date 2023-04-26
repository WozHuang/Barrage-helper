import './App.less';
import { Button, Center, ChakraProvider, extendTheme } from '@chakra-ui/react';
import { createHashRouter, Link, RouterProvider } from 'react-router-dom';
import { store, StoreContext, useStore } from './store';
import { observer } from 'mobx-react';
import ColorPicker from './components/ColorPicker';

const theme = extendTheme({ styles: { global: () => ({ body: { bg: 'transparent' } }) } });

const Content = observer(() => {
  const { setting, theme } = useStore();
  const bgColor = theme.palette['--bg-color'];
  return (
    <Center p={2}>
      <Button className='no-drag' colorScheme='blue' onClick={() => setting.toggleStick()}>
        toggle stick: {setting.stick ? 'true' : 'false'}
      </Button>
      <ColorPicker
        value={bgColor}
        onChange={({ rgb }) => {
          theme.updatePalette({ '--bg-color': `rgba(${rgb.r},${rgb.g},${rgb.b},${rgb.a})` });
        }}
      />
    </Center>
  );
});

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
        <RouterProvider router={router} />
      </ChakraProvider>
    </StoreContext.Provider>
  );
};

export default <App />;
