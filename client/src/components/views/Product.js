import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addCartProductRequest } from '../../redux/cartRedux';
import { getProductById, getAllProducts } from '../../redux/productsRedux';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  TextField,
  Zoom,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IMAGES_URL } from '../../config';
import Filter from '../features/Filter';

const Product = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const product = useSelector((state) => getProductById(state, id));
  const products = useSelector(getAllProducts);
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState(product?.color.toUpperCase() || '');
  const [capacity, setCapacity] = useState(product?.capacity || '');

  const handleQuantityChange = (e) => {
    if (+e.target.value > 0 && +e.target.value < 100)
      setQuantity(+e.target.value);
  };

  useEffect(() => {
    const product = products.find(
      (product) =>
        product.color.toUpperCase() === color && product.capacity === capacity,
    );
    if (product) {
      navigate(`/product/${product.id}`);
    }
  }, [color, capacity, navigate]);

  return (
    <>
      {product && (
        <Zoom in={true} timeout={1000}>
          <Card
            sx={{ maxWidth: '90%', textAlign: 'center', margin: '40px auto' }}
          >
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
              <Filter
                color={color}
                setColor={setColor}
                capacity={capacity}
                setCapacity={setCapacity}
                singleProduct={true}
              />
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
                    addCartProductRequest({
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
        </Zoom>
      )}
    </>
  );
};

export default Product;
