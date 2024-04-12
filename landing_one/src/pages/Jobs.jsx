import React from 'react';
import { makeStyles } from '@mui/styles';
import { Typography, Button } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  jobsContainer: {
    height: '100vh',
    backgroundImage: `url('ruta/a/tu/imagen.jpg')`,
    backgroundSize: 'cover',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    textAlign: 'center',
    padding: theme.spacing(0, 2),
  },
}));

const Jobs = () => {
  const classes = useStyles();

  return (
    <div className={classes.jobsContainer}>
      <div>
        <Typography variant="h3" gutterBottom>
          ¿Quieres trabajar con nosotros?
        </Typography>
        <Typography variant="body1" paragraph>
          Llena el siguiente formulario con tus datos para tomarte en cuenta en nuestro proceso de selección de personal.
        </Typography>
        {/* Aquí puedes agregar tu formulario si lo deseas */}
        <Button variant="contained" color="primary">
          Completar Formulario
        </Button>
      </div>
    </div>
  );
};

export default Jobs;
