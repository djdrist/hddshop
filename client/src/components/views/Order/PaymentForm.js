import { Typography, Select, MenuItem } from '@mui/material';

const PaymentForm = ({ order, setOrder }) => {
  const paymentTypes = ['CASH ON DELIVERY'];
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Select
        value={order.payment}
        onChange={(e) => setOrder({ ...order, payment: e.target.value })}
      >
        {paymentTypes.map((paymentType) => (
          <MenuItem key={paymentType} value={paymentType}>
            {paymentType}
          </MenuItem>
        ))}
      </Select>
    </>
  );
};

export default PaymentForm;
