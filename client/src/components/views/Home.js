import { useState, useEffect } from 'react';
import {
  CardActionArea,
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Zoom,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAllProducts } from '../../redux/productsRedux';
import { IMAGES_URL } from '../../config';
import Header from '../layout/Header/Header';
import Filter from '../features/Filter';

const Home = () => {
  const navigate = useNavigate();
  const products = useSelector(getAllProducts);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [capacity, setCapacity] = useState('');
  const [color, setColor] = useState('');

  useEffect(() => {
    setFilteredProducts(
      products.filter((product) => {
        if (capacity && color) {
          return (
            product.capacity === capacity &&
            product.color.toUpperCase() === color
          );
        } else if (capacity) {
          return product.capacity === capacity;
        } else if (color) {
          return product.color.toUpperCase() === color;
        } else {
          return product;
        }
      }),
    );
  }, [capacity, color, products]);

  return (
    <>
      <Header />
      <Box
        sx={{
          display: 'flex',
          margin: '40px',
          textAlign: 'center',
          justifyContent: 'space-around',
          backgroundColor: 'white',
          borderRadius: '10px',
        }}
      >
        <Filter
          capacity={capacity}
          setCapacity={setCapacity}
          color={color}
          setColor={setColor}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          margin: '40px',
          textAlign: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {products &&
            filteredProducts.map((product) => (
              <Zoom in={true} timeout={1000} key={product.id}>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Card>
                    <CardActionArea
                      onClick={() => navigate(`/product/${product.id}`)}
                    >
                      <CardMedia
                        component="img"
                        height="100%"
                        image={`${IMAGES_URL}/products/${product.image}`}
                        alt={product.name}
                      />
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="subtitle2"
                          component="div"
                        >
                          {product.name}
                        </Typography>
                        <Typography variant="h5" color="text.secondary">
                          {product.price} $
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              </Zoom>
            ))}
        </Grid>
      </Box>
    </>
  );
};

export default Home;
