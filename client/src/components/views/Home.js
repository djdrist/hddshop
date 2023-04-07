import {
  CardActionArea,
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { getAllProducts } from '../../redux/productsRedux';
import { IMAGES_URL } from '../../config';

const Home = () => {
  const products = useSelector(getAllProducts);

  return (
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
          products.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <Card>
                <CardActionArea>
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
          ))}
      </Grid>
    </Box>
  );
};

export default Home;
