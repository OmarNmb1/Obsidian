import React, { useState } from 'react';

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
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <form onSubmit={handleSubmit} style={{ background: '#fff', padding: 32, borderRadius: 8, minWidth: 300, display: 'flex', flexDirection: 'column', gap: 16 }}>
        <h2>Iniciar sesión</h2>
        <label>
          Usuario:
          <input value={username} onChange={e => setUsername(e.target.value)} required />
        </label>
        <label>
          Contraseña:
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
        </label>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Login; 