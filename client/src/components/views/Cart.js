import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  getCart,
  editCartProductRequest,
  deleteCartProductRequest,
} from '../../redux/cartRedux';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import {
  Dialog,
  DialogActions,
  DialogContent,
  Box,
  Button,
  Typography,
  IconButton,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ForwardIcon from '@mui/icons-material/Forward';

const Cart = ({ openCart, setOpenCart }) => {
  const navigate = useNavigate();
  const cart = useSelector((state) => getCart(state));
  const dispatch = useDispatch();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleEditProduct = (product, quantity) => {
    product = { ...product, quantity: product.quantity + quantity };
    if (product.quantity === 0) {
      dispatch(deleteCartProductRequest({ id: product.id }));
    } else {
      dispatch(editCartProductRequest(product));
    }
  };

  return (
    <Dialog
      fullScreen={fullScreen}
      open={openCart}
      onClose={() => setOpenCart(false)}
      aria-labelledby="cart"
    >
      <DialogContent>
        {cart.map((product) => (
          <Box
            key={product.id}
            margin="20px"
            sx={{
              margin: '20px auto',
            }}
            textAlign="center"
          >
            <Typography variant="h5">{product.name}</Typography>
            <Box
              display="flex"
              sx={{
                justifyContent: 'center',
              }}
            >
              <IconButton onClick={() => handleEditProduct(product, -1)}>
                <RemoveIcon />
              </IconButton>
              <Typography variant="h6" margin="10px">
                {product.quantity}
              </Typography>
              <IconButton onClick={() => handleEditProduct(product, 1)}>
                <AddIcon />
              </IconButton>
            </Box>
            <Typography variant="subtitle2">
              {product.price} x {product.quantity} ={' '}
              {product.price * product.quantity}$
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Button
                variant="outlined"
                onClick={() =>
                  dispatch(deleteCartProductRequest({ id: product.id }))
                }
              >
                <DeleteForeverIcon />
                REMOVE
              </Button>
            </Box>
          </Box>
        ))}
        {cart.length > 0 && (
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, textAlign: 'center' }}
          >
            Total:
            {cart.reduce(
              (acc, product) => acc + product.price * product.quantity,
              0,
            )}
            $
          </Typography>
        )}
        {cart.length === 0 && (
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, textAlign: 'center' }}
          >
            Your cart is empty
          </Typography>
        )}
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          size="large"
          autoFocus
          onClick={() => setOpenCart(false)}
          sx={{ margin: '0 auto', width: '150px' }}
        >
          CLOSE CART
        </Button>
        <Button
          variant="contained"
          size="large"
          autoFocus
          onClick={() => {
            setOpenCart(false);
            navigate('/order');
          }}
          sx={{ margin: '0 auto', width: '150px' }}
          {...(cart.length === 0 && { disabled: true })}
        >
          <ForwardIcon /> ORDER
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Cart;
