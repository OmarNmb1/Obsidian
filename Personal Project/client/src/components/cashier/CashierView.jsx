import React, { useState } from 'react';
import products from '../../data/products';
import OrderToppingsModal from './OrderToppingsModal';

const BEBIDAS = [
  { id: 'coca', name: 'Coca-Cola 600ml', price: 25 },
  { id: 'fanta', name: 'Fanta', price: 25 },
  { id: 'sprite', name: 'Sprite', price: 25 },
  { id: 'agua', name: 'Agua 1Lt', price: 30 },
  { id: 'aguaMedio', name: 'Agua 1/2 Lt', price: 15 }
];

function CashierView() {
  const [order, setOrder] = useState([]);
  const [toppingsModalOpen, setToppingsModalOpen] = useState(false);
  const [orderToppings, setOrderToppings] = useState({ cebolla: false, salsas: { verde: 0, roja: 0, chipotle: 0 } });
  const [bebidas, setBebidas] = useState([]);

  const addToOrder = (product) => {
    setOrder((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromOrder = (idx) => {
    setOrder((prev) => prev.filter((_, i) => i !== idx));
  };

  const openToppingsModal = () => setToppingsModalOpen(true);
  const closeToppingsModal = () => setToppingsModalOpen(false);
  const saveToppings = (toppings) => setOrderToppings(toppings);

  const addBebida = (bebida) => {
    setBebidas((prev) => {
      const existing = prev.find((item) => item.id === bebida.id);
      if (existing) {
        return prev.map((item) =>
          item.id === bebida.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prev, { ...bebida, quantity: 1 }];
      }
    });
  };

  const removeBebida = (idx) => {
    setBebidas((prev) => prev.filter((_, i) => i !== idx));
  };

  const getToppingsTotal = () => {
    let total = 0;
    if (orderToppings.cebolla) total += 10;
    Object.entries(orderToppings.salsas).forEach(([_, val]) => {
      if (val > 1) total += (val - 1) * 10;
    });
    return total;
  };

  const getBebidasTotal = () => {
    return bebidas.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const getTotal = () => {
    const orderTotal = order.reduce((sum, item) => sum + item.price * item.quantity, 0);
    return orderTotal + getToppingsTotal() + getBebidasTotal();
  };

  return (
    <div style={{ display: 'flex', gap: '2rem', padding: '2rem' }}>
      <div style={{ flex: 1 }}>
        <h2>Menú</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
          {products.map((product) => (
            <div key={product.id} style={{ border: '1px solid #ccc', borderRadius: 8, padding: 16, minWidth: 150 }}>
              <h4>{product.name}</h4>
              <p>${product.price}</p>
              <button onClick={() => addToOrder(product)}>Agregar</button>
            </div>
          ))}
        </div>
        <h2 style={{ marginTop: 32 }}>Bebidas</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
          {BEBIDAS.map((bebida) => (
            <div key={bebida.id} style={{ border: '1px solid #ccc', borderRadius: 8, padding: 16, minWidth: 150 }}>
              <h4>{bebida.name}</h4>
              <p>${bebida.price}</p>
              <button onClick={() => addBebida(bebida)}>Agregar</button>
            </div>
          ))}
        </div>
      </div>
      <div style={{ flex: 1 }}>
        <h2>Orden actual</h2>
        {order.length === 0 && bebidas.length === 0 ? (
          <p>No hay productos en la orden.</p>
        ) : (
          <>
            <ul>
              {order.map((item, idx) => (
                <li key={idx} style={{ marginBottom: 8 }}>
                  {item.name} x{item.quantity} - ${item.price * item.quantity}
                  <button style={{ marginLeft: 8 }} onClick={() => removeFromOrder(idx)}>Quitar</button>
                </li>
              ))}
            </ul>
            {bebidas.length > 0 && (
              <>
                <h3>Bebidas</h3>
                <ul>
                  {bebidas.map((item, idx) => (
                    <li key={idx} style={{ marginBottom: 8 }}>
                      {item.name} x{item.quantity} - ${item.price * item.quantity}
                      <button style={{ marginLeft: 8 }} onClick={() => removeBebida(idx)}>Quitar</button>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </>
        )}
        <div style={{ margin: '1rem 0', display: 'flex', gap: 8 }}>
          <button onClick={openToppingsModal}>Agregar toppings</button>
        </div>
        <div>
          {orderToppings.cebolla && <span>Cebolla asada | </span>}
          {Object.values(orderToppings.salsas).some(v => v > 0) && (
            <span>Salsas: {Object.entries(orderToppings.salsas).filter(([_, v]) => v > 0).map(([k, v]) => `${k} (${v})`).join(', ')}</span>
          )}
        </div>
        <h3>Total: ${getTotal()}</h3>
        <button disabled={order.length === 0 && bebidas.length === 0}>Finalizar orden</button>
      </div>
      <OrderToppingsModal
        open={toppingsModalOpen}
        onClose={closeToppingsModal}
        onSave={saveToppings}
        initialToppings={orderToppings}
      />
    </div>
  );
}

export default CashierView; 