import React from 'react';
import { Box, Button, Typography, Paper, Stack } from '@mui/material';

function MainMenu({ onSelect }) {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh" bgcolor="#f5f5f5">
      <Paper elevation={3} sx={{ p: 4, minWidth: 350, display: 'flex', flexDirection: 'column', gap: 3 }}>
        <Typography variant="h4" align="center" gutterBottom>Punto de Venta</Typography>
        <Stack spacing={2}>
          <Button variant="contained" size="large" onClick={() => onSelect('orden')}>Agregar nueva orden</Button>
          <Button variant="contained" size="large" onClick={() => onSelect('pendientes')}>Órdenes pendientes</Button>
          <Button variant="contained" size="large" onClick={() => onSelect('reportes')}>Administrar ganancias y reportes</Button>
          <Button variant="contained" size="large" color="secondary" onClick={() => onSelect('egreso')}>Registrar egreso</Button>
        </Stack>
      </Paper>
    </Box>
  );
}

export default MainMenu; 