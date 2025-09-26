import React, { useState } from 'react';

const SALSAS = [
  { id: 'verde', name: 'Salsa Verde' },
  { id: 'roja', name: 'Salsa Roja' },
  { id: 'jitomate', name: 'Salsa Jitomate' }
];

function OrderToppingsModal({ open, onClose, onSave, initialToppings }) {
  const [cebolla, setCebolla] = useState(initialToppings?.cebolla || false);
  const [salsas, setSalsas] = useState(initialToppings?.salsas || { verde: 0, roja: 0, chipotle: 0 });

  if (!open) return null;

  const handleSalsaChange = (id, value) => {
    setSalsas((prev) => ({ ...prev, [id]: Math.max(0, value) }));
  };

  const handleSave = () => {
    onSave({ cebolla, salsas });
    onClose();
  };

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
      <div style={{ background: '#fff', padding: 24, borderRadius: 8, minWidth: 300 }}>
        <h3>Toppings para la orden</h3>
        <div>
          <label>
            <input type="checkbox" checked={cebolla} onChange={e => setCebolla(e.target.checked)} />
            Agregar cebolla asada (+$10)
          </label>
        </div>
        <div style={{ marginTop: 12 }}>
          <strong>Salsas:</strong>
          {SALSAS.map(salsa => (
            <div key={salsa.id} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span>{salsa.name}</span>
              <button onClick={() => handleSalsaChange(salsa.id, salsas[salsa.id] - 1)} disabled={salsas[salsa.id] === 0}>-</button>
              <span>{salsas[salsa.id]}</span>
              <button onClick={() => handleSalsaChange(salsa.id, salsas[salsa.id] + 1)}>+</button>
            </div>
          ))}
          <small>La primera salsa de cada tipo es gratis. Al repetir una, cada extra cuesta $10.</small>
        </div>
        <div style={{ marginTop: 16, display: 'flex', gap: 8 }}>
          <button onClick={handleSave}>Guardar toppings</button>
          <button onClick={onClose}>Cancelar</button>
        </div>
      </div>
    </div>
  );
}

export default OrderToppingsModal; 