import React from 'react';

function ReportsView({ onBack, egresos = [] }) {
  return (
    <div style={{ padding: 32 }}>
      <h2>Administrar ganancias y reportes</h2>
      <p>Aquí podrás ver el total de ventas, registrar egresos y generar reportes.</p>
      <h3>Egresos registrados</h3>
      {egresos.length === 0 ? (
        <p>No hay egresos registrados.</p>
      ) : (
        <table style={{ borderCollapse: 'collapse', width: '100%', marginBottom: 24 }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #ccc', padding: 8 }}>Fecha</th>
              <th style={{ border: '1px solid #ccc', padding: 8 }}>Cantidad</th>
              <th style={{ border: '1px solid #ccc', padding: 8 }}>Motivo</th>
              <th style={{ border: '1px solid #ccc', padding: 8 }}>Autorizó</th>
            </tr>
          </thead>
          <tbody>
            {egresos.map((e, i) => (
              <tr key={i}>
                <td style={{ border: '1px solid #ccc', padding: 8 }}>{e.fecha}</td>
                <td style={{ border: '1px solid #ccc', padding: 8 }}>${e.cantidad}</td>
                <td style={{ border: '1px solid #ccc', padding: 8 }}>{e.motivo}</td>
                <td style={{ border: '1px solid #ccc', padding: 8 }}>{e.autoriza}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <button onClick={onBack}>Volver al menú principal</button>
    </div>
  );
}

export default ReportsView; 