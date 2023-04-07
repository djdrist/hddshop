import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ flexGrow: 1, textAlign: 'center' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            &copy; HDDShop {new Date().getFullYear()}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Footer;
