import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Logo = styled.img`
  max-width: 100px;
  margin-right: 20px;
`;

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Logo src="/ruta/al/logo.png" alt="Logo de la empresa" />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Nombre de la Empresa
        </Typography>
        <Button component={Link} to="/about" color="inherit">Quiénes Somos</Button>
        <Button component={Link} to="/jobs" color="inherit">Trabajos</Button>
        <Button component={Link} to="/contact" color="inherit">Contacto</Button>
        <Button color="inherit">Sign In</Button>
        <Button color="inherit">Register</Button>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
