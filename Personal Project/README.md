# Sistema de Punto de Venta para Restaurante de Comida Rápida

Este es un sistema de punto de venta especializado para restaurantes de comida rápida, desarrollado con React y Node.js.

## Características principales

- Gestión de órdenes en tiempo real
- Comunicación entre cajero y cocina
- Control de ventas diarias
- Gestión de menú y productos
- Reportes de ingresos y egresos
- Interfaz intuitiva y rápida

## Estructura del proyecto

```
pos-system/
├── client/                 # Frontend (React)
│   ├── src/
│   │   ├── components/    # Componentes React
│   │   │   ├── orders/   # Componentes de órdenes
│   │   │   ├── kitchen/  # Vista de cocina
│   │   │   └── cashier/  # Vista de cajero
│   │   ├── pages/        # Páginas principales
│   │   ├── services/     # Servicios API
│   │   └── utils/        # Utilidades
│   └── public/           # Archivos estáticos
│
└── server/                # Backend (Node.js/Express)
    ├── src/
    │   ├── controllers/  # Controladores
    │   ├── models/       # Modelos de datos
    │   │   ├── Order.js  # Modelo de órdenes
    │   │   ├── Product.js # Modelo de productos
    │   │   └── Sale.js   # Modelo de ventas
    │   ├── routes/       # Rutas API
    │   └── utils/        # Utilidades
    └── config/           # Configuraciones
```

## Requisitos

- Node.js >= 14.x
- npm >= 6.x
- MongoDB >= 4.x

## Instalación

1. Clonar el repositorio
2. Instalar dependencias del frontend:
   ```bash
   cd client
   npm install
   ```
3. Instalar dependencias del backend:
   ```bash
   cd server
   npm install
   ```

## Desarrollo

1. Iniciar el servidor de desarrollo frontend:
   ```bash
   cd client
   npm start
   ```

2. Iniciar el servidor backend:
   ```bash
   cd server
   npm run dev
   ```

## Características específicas

### Vista de Cajero
- Creación rápida de órdenes
- Selección de productos del menú
- Modificadores de productos (extras, sin ingredientes, etc.)
- Cálculo automático del total
- Impresión de tickets
- Registro de pagos

### Vista de Cocina
- Lista de órdenes en tiempo real
- Estado de preparación de cada orden
- Notificaciones de nuevas órdenes
- Marcar órdenes como completadas

### Reportes
- Ventas diarias
- Productos más vendidos
- Horas pico
- Ingresos por período 