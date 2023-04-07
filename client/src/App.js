import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadProducts } from './redux/productsRedux';
import { API_URL } from './config';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { Container } from '@mui/material';

import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import Home from './components/views/Home';

import colors from './styles/colors.scss';

const App = () => {
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
      const response = await fetch(`${API_URL}/products`);
      const data = await response.json();
      dispatch(loadProducts(data));
    };
    fetchProducts();
  }, [dispatch]);

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Header />
        <Container>
          <Routes>
            <Route exact path="/" Component={Home} />
          </Routes>
        </Container>
        <Footer />
      </ThemeProvider>
    </>
  );
};
export default App;
