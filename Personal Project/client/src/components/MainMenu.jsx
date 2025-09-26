import React from 'react';

function MainMenu({ onSelect }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24, padding: 40 }}>
      <h1>Punto de Venta - Menú Principal</h1>
      <button style={{ width: 250, height: 50 }} onClick={() => onSelect('orden')}>Agregar nueva orden</button>
      <button style={{ width: 250, height: 50 }} onClick={() => onSelect('pendientes')}>Órdenes pendientes</button>
      <button style={{ width: 250, height: 50 }} onClick={() => onSelect('reportes')}>Administrar ganancias y reportes</button>
      <button style={{ width: 250, height: 50 }} onClick={() => onSelect('egreso')}>Registrar egreso</button>
    </div>
  );
}

export default MainMenu; 