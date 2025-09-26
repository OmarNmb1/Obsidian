La estrategia de pruebas para el módulo de carrito de compras en ToolShop se enfocara en validar las características funcionales como no funcionales, asegurando una experiencia fluida y confiable para el usuario. Con el objetivo de garantizar que el sistema permita gestionar los productos de forma efectiva durante el proceso de compra, abarcando escenarios indispensables como agregar, modificar, eliminar productos, y realizar cálculos acertados de los totales, todo a la vez mientras se preserva la persistencia del carrito.

#### **Características funcionales cubiertas:**

- Agregar productos al carrito.
- Actualizar cantidades.
- Eliminar productos.
- Cálculo de totales (precio, descuentos, impuestos).
- Persistencia del carrito en sesiones activas/inactivas.
- Verificación del stock antes de continuar al pago.

#### **Características no funcionales cubiertas:**

- **Usabilidad:** facilidad de navegación, claridad en botones y etiquetas.
- **Rendimiento:** respuesta del sistema al agregar múltiples productos.
- **Seguridad:** protección contra manipulaciones en consola o precios.
- **Compatibilidad:** comportamiento del carrito en distintos navegadores y dispositivos (con cobertura priorizada por restricciones).

#### **Escenarios principales de uso:**

- Un usuario invitado agrega productos al carrito y luego se registra sin perder su selección.
- Un usuario registrado visualiza correctamente su carrito después de iniciar sesión.
- El sistema advierte cuando se intenta añadir más unidades de las disponibles.
- Un usuario interactúa con promociones o cupones, y el total se actualiza correctamente.

#### **Dónde se probará:**

Las pruebas se ejecutarán en un entorno aislado que simula fielmente el ambiente de producción. Esto incluye integración con los sistemas reales de inventario y autenticación (mockeados en caso de indisponibilidad), además de pruebas en navegadores principales como Chrome, Firefox y Edge.

#### **Verificación de cumplimiento de requisitos:**

Cada requisito funcional y no funcional será validado mediante:

- Casos de prueba trazables al documento de requerimientos.
- Resultados esperados definidos por los criterios de aceptación.
- Evidencia (capturas, logs, grabaciones) recopilada en herramientas de gestión de pruebas.


#### **Charters definidos:**

Los siguientes charters cubren los objetivos de testeo y guían el enfoque de pruebas exploratorias:

| ID  | Título del Charter                    | Objetivo                                                                          | Actor                         | Área involucrada     |
| --- | ------------------------------------- | --------------------------------------------------------------------------------- | ----------------------------- | -------------------- |
| CH1 | Agregado y persistencia de productos  | Validar el agregado correcto de productos y su persistencia tras cierre de sesión | Usuario registrado e invitado | Carrito, sesión      |
| CH2 | Comportamiento ante límites de stock  | Probar respuestas del sistema al intentar superar el stock disponible             | Usuario invitado              | Carrito, inventario  |
| CH3 | Flujo completo de modificación        | Simular flujo de agregar → actualizar → eliminar → pagar                          | Usuario registrado            | Carrito, checkout    |
| CH4 | Validación de totales con promociones | Validar el cálculo final con cupones y descuentos                                 | Usuario registrado            | Carrito, promociones |
| CH5 | Evaluación de rendimiento con carga   | Verificar el comportamiento con más de 100 productos                              | Usuario registrado            | Carrito, backend     |
