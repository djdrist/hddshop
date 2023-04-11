import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SaveIcon from '@mui/icons-material/Save';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCart } from '../../../redux/cartRedux';
import { useState } from 'react';
import Cart from '../../views/Cart';

const Header = () => {
  const cart = useSelector((state) => getCart(state));
  const navigate = useNavigate();
  const [openCart, setOpenCart] = useState(false);

  const handleCartOpen = () => {
    if (cart.length > 0) setOpenCart(true);
  };

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 'auto' }}
            onClick={() => navigate('/')}
          >
            <SaveIcon />
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
              HDDShop
            </Typography>
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="cart"
            sx={{ ml: 'auto' }}
            onClick={handleCartOpen}
          >
            <ShoppingCartIcon />
            {cart.length > 0 && (
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                {cart.length}
              </Typography>
            )}
          </IconButton>
        </Toolbar>
      </AppBar>
      {openCart && <Cart openCart={openCart} setOpenCart={setOpenCart} />}
    </>
  );
};

export default Header;
