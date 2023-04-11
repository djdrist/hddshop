import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addCartProduct } from '../../redux/cartRedux';
import { getProductById } from '../../redux/productsRedux';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  TextField,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IMAGES_URL } from '../../config';

const Product = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = useSelector((state) => getProductById(state, id));
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    if (+e.target.value > 0 && +e.target.value < 100)
      setQuantity(+e.target.value);
  };

  return (
    <Card sx={{ maxWidth: '90%', textAlign: 'center', margin: '40px auto' }}>
      <CardMedia
        component="img"
        height="100%"
        image={`${IMAGES_URL}/products/${product.image}`}
        alt={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="subtitle2" component="div">
          {product.name}
        </Typography>
        <Typography variant="h5" color="text.secondary">
          {product.price} $
        </Typography>
        <Typography variant="body1" marginTop="10px">
          {product.description}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex', flexDirection: 'column' }}>
        <TextField
          id="outlined-number"
          label="Quantity"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          value={quantity}
          onChange={handleQuantityChange}
          sx={{ width: '80px', margin: '0 auto' }}
        />
        <Button
          variant="contained"
          size="large"
          sx={{ margin: '10px auto' }}
          onClick={() => {
            dispatch(
              addCartProduct({
                id: product.id,
                name: product.name,
                price: product.price,
                quantity,
              }),
            );
          }}
        >
          <ShoppingCartIcon />
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default Product;
