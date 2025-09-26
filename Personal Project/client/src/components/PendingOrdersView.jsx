import React from 'react';

function PendingOrdersView({ onBack }) {
  return (
    <div style={{ padding: 32 }}>
      <h2>Órdenes pendientes</h2>
      <p>Aquí se mostrarán las órdenes que no han sido completadas.</p>
      <button onClick={onBack}>Volver al menú principal</button>
    </div>
  );
}

export default PendingOrdersView; 