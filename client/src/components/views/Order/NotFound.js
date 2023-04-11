import { Box, Typography } from '@mui/material';

const NotFound = () => {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Typography variant="h1">404</Typography>
      <Typography variant="h3">Sorry, not found...</Typography>
    </Box>
  );
};

export default NotFound;
