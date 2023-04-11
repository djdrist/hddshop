import { Typography, List, ListItem, ListItemText, Grid } from '@mui/material';

const Summary = ({ order, cart }) => {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {cart.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText
              primary={product.name}
              secondary={`Quantity: ${product.quantity}`}
            />
            <Typography variant="body2">
              {product.price * product.quantity + '$'}
            </Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {cart.reduce(
              (acc, product) => acc + product.price * product.quantity,
              0,
            ) + '$'}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>
            {order.firstName} {order.lastName}
          </Typography>
          <Typography gutterBottom>{order.address1}</Typography>
          {order.address2 !== '' && (
            <Typography gutterBottom>{order.address2}</Typography>
          )}
          {order.state !== '' && (
            <Typography gutterBottom>{order.state}</Typography>
          )}
          <Typography gutterBottom>
            {order.zip} {order.city}
          </Typography>
          <Typography gutterBottom>{order.country}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            <Typography gutterBottom>{order.payment}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Summary;
