import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import Logo from '../media/images/Logo_2.png';

const Navbar = () => {

  return(
    <Stack direction="row" className="nav-bar"  width='100%' sx={{gap: {sm:'80px', xs:'40px'}, justifyContent:'none'}}>
      <Link to="/">
        <img src={Logo} alt="logo" style={{ width: '120px', height:'80px', margin: '0 20px'}}/>
      </Link>
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        <Link to="/" style={{textDecoration: 'none', color: '#4ECCA3', borderBottom: '3px solid #4ECCA3'}}>Home</Link>
        <a href="#workouts" style={{textDecoration: 'none', color: '#4ECCA3'}}>Workouts</a>
      </Stack>
    </Stack>
  )
}

export default Navbar;