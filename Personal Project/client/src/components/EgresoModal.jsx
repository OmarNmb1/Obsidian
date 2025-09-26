import React, { useState } from 'react';

function EgresoModal({ open, onClose, onSave }) {
  const [cantidad, setCantidad] = useState('');
  const [motivo, setMotivo] = useState('');
  const [autoriza, setAutoriza] = useState('');

  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!cantidad || !motivo || !autoriza) return;
    onSave({ cantidad, motivo, autoriza });
    setCantidad('');
    setMotivo('');
    setAutoriza('');
    onClose();
  };

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
      <form onSubmit={handleSubmit} style={{ background: '#fff', padding: 24, borderRadius: 8, minWidth: 300, display: 'flex', flexDirection: 'column', gap: 16 }}>
        <h3>Registrar egreso</h3>
        <label>
          Cantidad:
          <input type="number" min={1} value={cantidad} onChange={e => setCantidad(e.target.value)} required />
        </label>
        <label>
          Motivo:
          <input type="text" value={motivo} onChange={e => setMotivo(e.target.value)} required />
        </label>
        <label>
          Quién autoriza:
          <input type="text" value={autoriza} onChange={e => setAutoriza(e.target.value)} required />
        </label>
        <div style={{ display: 'flex', gap: 8 }}>
          <button type="submit">Guardar egreso</button>
          <button type="button" onClick={onClose}>Cancelar</button>
        </div>
      </form>
    </div>
  );
}

export default EgresoModal; 