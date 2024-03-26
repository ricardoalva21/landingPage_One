import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Button as MuiButton } from '@mui/material';

// Definimos un tema con la propiedad primaryColor
const theme = {
  primaryColor: 'blue', // Este es solo un ejemplo, puedes definir tu color primario aquí
};

// Estilizamos el botón utilizando styled-components y aplicamos el color del tema
const StyledButton = styled(MuiButton)`
  background-color: ${({ theme }) => theme.primaryColor};
  // Otros estilos...
`;

const Button = ({ children, onClick }) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledButton variant="contained" onClick={onClick}>
        {children}
      </StyledButton>
    </ThemeProvider>
  );
}



export default Button;
