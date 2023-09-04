import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../media/images/Logo.png';

const Footer = () => {
  return (
    <Box mt="80px" sx={{backgroundColor:"#c0e3c6", backgroundSize:'100%'}}>
      <Stack gap="20px" alignItems="center">
        <img src={Logo} alt="logo" width="150px" height="100px"/>
        <Typography variant="h4" pb="30px" mt="10px">Created by Muhsin Mohamed</Typography>

      </Stack>
    </Box>
  )
}

export default Footer;