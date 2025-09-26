import React, { useState } from 'react';

const SALSAS = [
  { id: 'verde', name: 'Salsa Verde' },
  { id: 'roja', name: 'Salsa Roja' },
  { id: 'chipotle', name: 'Salsa Chipotle' }
];

function ProductModal({ product, open, onClose, onAdd }) {
  const [cebolla, setCebolla] = useState(false);
  const [salsas, setSalsas] = useState({ verde: 0, roja: 0, chipotle: 0 });
  const [quantity, setQuantity] = useState(1);

  if (!open) return null;

  const handleSalsaChange = (id, value) => {
    setSalsas((prev) => ({ ...prev, [id]: Math.max(0, value) }));
  };

  const calcularPrecio = () => {
    let total = product.price;
    if (cebolla) total += 10;
    Object.entries(salsas).forEach(([key, val]) => {
      if (val > 1) total += (val - 1) * 10;
    });
    return total * quantity;
  };

  const handleAdd = () => {
    onAdd({
      ...product,
      cebolla,
      salsas: { ...salsas },
      quantity,
      price: calcularPrecio() / quantity
    });
    onClose();
  };

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
      <div style={{ background: '#fff', padding: 24, borderRadius: 8, minWidth: 300 }}>
        <h3>{product.name}</h3>
        <p>Precio base: ${product.price}</p>
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
          <small>La primera salsa de cada tipo es gratis. Si repites una, cada extra cuesta $10.</small>
        </div>
        <div style={{ marginTop: 12 }}>
          <label>
            Cantidad:
            <input type="number" min={1} value={quantity} onChange={e => setQuantity(Number(e.target.value))} style={{ width: 60, marginLeft: 8 }} />
          </label>
        </div>
        <h4>Total: ${calcularPrecio()}</h4>
        <div style={{ marginTop: 16, display: 'flex', gap: 8 }}>
          <button onClick={handleAdd}>Agregar a la orden</button>
          <button onClick={onClose}>Cancelar</button>
        </div>
      </div>
    </div>
  );
}

export default ProductModal; 