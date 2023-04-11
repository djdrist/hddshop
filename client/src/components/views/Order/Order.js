import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteCart } from '../../../redux/cartRedux';
import { getCart } from '../../../redux/cartRedux';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Summary from './Summary';
import { API_URL } from '../../../config';

import {
  Box,
  Container,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  CircularProgress,
  Backdrop,
  Snackbar,
} from '@mui/material';

const Order = () => {
  const cart = useSelector((state) => getCart(state));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [order, setOrder] = useState({
    firstName: '',
    lastName: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    phone: '',
    email: '',
    payment: 'CASH ON DELIVERY',
  });
  const [orderId, setOrderId] = useState('');
  const [loader, setLoader] = useState(false);

  const steps = ['Address', 'Payment', 'Summary'];

  const stepContent = (step) => {
    switch (step) {
      case 0:
        return <AddressForm order={order} setOrder={setOrder} />;
      case 1:
        return <PaymentForm order={order} setOrder={setOrder} />;
      case 2:
        return <Summary order={order} setOrder={setOrder} cart={cart} />;
      default:
    }
  };

  const handleNext = async () => {
    if (activeStep === 0) {
      if (
        order.firstName === '' ||
        order.lastName === '' ||
        order.address1 === '' ||
        order.city === '' ||
        order.zip === '' ||
        order.country === '' ||
        order.phone === '' ||
        order.email === ''
      ) {
        alert('Please fill all required fields');
        return;
      }
    }
    if (activeStep + 1 === steps.length) {
      dispatch(deleteCart());
      const orderData = {
        name: `${order.firstName} ${order.lastName}`,
        address: `${order.address1} ${order.address2}, ${order.state}`,
        city: order.city,
        zipcode: order.zip,
        country: order.country,
        phone: order.phone,
        email: order.email,
        payment: order.payment,
        total: cart.reduce(
          (acc, product) => acc + product.price * product.quantity,
          0,
        ),
        products: cart.map((product) => ({
          id: product.id,
          quantity: product.quantity,
        })),
      };
      setLoader(true);
      let response = await fetch(`${API_URL}/orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });
      if (response.status !== 201) {
        response = await response.json();
        alert(response.message);
        setLoader(false);
        return;
      }
      setLoader(false);
      response = await response.json();
      setOrderId(response.id);
    }

    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
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
      <Paper
        variant="outlined"
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
      >
        <Typography component="h1" variant="h4" align="center">
          Checkout
        </Typography>
        <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length ? (
          <>
            <Typography variant="h5" gutterBottom>
              Thank you for your order.
            </Typography>
            <Typography variant="subtitle1">
              Your order number is: {orderId}.
            </Typography>
            <Button
              sx={{ margin: '10px auto', display: 'block' }}
              variant="contained"
              onClick={() => navigate('/')}
            >
              GO BACK TO MAIN PAGE
            </Button>
          </>
        ) : (
          <>
            {stepContent(activeStep)}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              {activeStep !== 0 && (
                <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                  Back
                </Button>
              )}

              <Button
                variant="contained"
                onClick={handleNext}
                sx={{ mt: 3, ml: 1 }}
              >
                {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
              </Button>
            </Box>
          </>
        )}
      </Paper>
    </Container>
  );
};

export default Order;
