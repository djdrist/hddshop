import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loadProducts } from './redux/productsRedux';
import { loadCartRequest } from './redux/cartRedux';
import { API_URL } from './config';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import {
  Container,
  CircularProgress,
  Backdrop,
  Box,
  Typography,
} from '@mui/material';

import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import Home from './components/views/Home';
import Product from './components/views/Product';
import Order from './components/views/Order/Order';

import colors from './styles/colors.scss';
import NotFound from './components/views/Order/NotFound';

const App = () => {
  const [loader, setLoader] = useState(false);
  const darkTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: colors.primary,
      },
    },
  });

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoader(true);
      const response = await fetch(`${API_URL}/products`);
      const data = await response.json();
      dispatch(loadProducts(data));
      setLoader(false);
    };
    dispatch(loadCartRequest());
    fetchProducts();
  }, [dispatch]);

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Header />
        <Container sx={{ marginY: '100px' }}>
          {loader && (
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Backdrop
                sx={{
                  color: '#fff',
                  zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
                open={loader}
              >
                <CircularProgress color="inherit" />
              </Backdrop>
            </Box>
          )}

          <Routes>
            <Route exact path="/" Component={Home} />
            <Route exact path="/product/:id" Component={Product} />
            <Route exact path="/order" Component={Order} />
            <Route path="/404" Component={NotFound} />
            <Route path="*" Component={NotFound} />
          </Routes>
        </Container>
        <Footer />
      </ThemeProvider>
    </>
  );
};
export default App;
