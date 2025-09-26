import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Paper, Alert } from '@mui/material';

const USERS = [
  { username: 'parrillero', password: 'parrilla', role: 'parrillero' },
  { username: 'mostrador', password: 'mostrador', role: 'mostrador' },
  { username: 'admin', password: 'admin', role: 'admin' }
];

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = USERS.find(u => u.username === username && u.password === password);
    if (user) {
      setError('');
      onLogin({ username: user.username, role: user.role });
    } else {
      setError('Usuario o contraseña incorrectos');
    }
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh" bgcolor="#f5f5f5">
      <Paper elevation={3} sx={{ p: 4, minWidth: 320, display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Typography variant="h5" align="center" gutterBottom>Iniciar sesión</Typography>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <TextField
            label="Usuario"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
            autoFocus
          />
          <TextField
            label="Contraseña"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          {error && <Alert severity="error">{error}</Alert>}
          <Button type="submit" variant="contained" color="primary" fullWidth>Entrar</Button>
        </form>
      </Paper>
    </Box>
  );
}

export default Login; 