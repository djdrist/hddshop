import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ flexGrow: 1, textAlign: 'center' }}>
      <AppBar
        position="fixed"
        sx={{
          top: '95vh',
          bottom: '0',
          left: '0',
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}
      >
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
