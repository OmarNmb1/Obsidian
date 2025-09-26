import React, { useState } from 'react';
import Login from './components/Login';
import MainMenu from './components/MainMenu';
import CashierView from './components/cashier/CashierView';
import PendingOrdersView from './components/PendingOrdersView';
import ReportsView from './components/ReportsView';
import EgresoModal from './components/EgresoModal';

function App() {
  const [user, setUser] = useState(null);
  const [view, setView] = useState('menu');
  const [egresoOpen, setEgresoOpen] = useState(false);
  const [egresos, setEgresos] = useState([]);

  const handleEgresoSave = (egreso) => {
    setEgresos((prev) => [...prev, { ...egreso, fecha: new Date().toLocaleString() }]);
  };

  const handleLogout = () => {
    setUser(null);
    setView('menu');
  };

  if (!user) return <Login onLogin={setUser} />;

  // Control de acceso por perfil
  let allowedViews = [];
  if (user.role === 'parrillero') {
    allowedViews = ['pendientes'];
  } else if (user.role === 'mostrador') {
    allowedViews = ['orden', 'egreso'];
  } else if (user.role === 'admin') {
    allowedViews = ['orden', 'pendientes', 'reportes', 'egreso'];
  }

  // Redirigir si la vista no está permitida
  if (!allowedViews.includes(view) && view !== 'menu') setView('menu');

  return (
    <>
      <div style={{ position: 'absolute', top: 10, right: 20, zIndex: 2000 }}>
        <span>Usuario: <b>{user.username}</b> ({user.role}) </span>
        <button onClick={handleLogout}>Cerrar sesión</button>
      </div>
      {view === 'menu' && (
        <MainMenu
          onSelect={(v) => {
            if (allowedViews.includes(v)) {
              if (v === 'egreso') setEgresoOpen(true);
              else setView(v);
            }
          }}
        />
      )}
      {view === 'orden' && allowedViews.includes('orden') && <CashierView />}
      {view === 'pendientes' && allowedViews.includes('pendientes') && <PendingOrdersView onBack={() => setView('menu')} />}
      {view === 'reportes' && allowedViews.includes('reportes') && <ReportsView onBack={() => setView('menu')} egresos={egresos} />}
      <EgresoModal open={egresoOpen} onClose={() => setEgresoOpen(false)} onSave={handleEgresoSave} />
    </>
  );
}

export default App; 