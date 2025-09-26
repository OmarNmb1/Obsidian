Cambios aplicados:
![[Pasted image 20250730160100.png]]
La profesora indica, que los objetivos no son correctos ya que mas bien parecen pruebas especificas, en los objetivos se debe hablar de features, aspectos no funcionales a un nivel no tan detallado. Los objetivos se desglosan en la seccion de estrategia.

Reformulacion:
### Objetivos Específicos 

1. Validar que la funcionalidad del módulo de carrito de compras se correcta durante el proceso de compra.
2. Verificar que los usuarios puedan gestionar productos en el carrito de forma fluida y sin errores.
3. Asegurar la persistencia y consistencia de la información del carrito entre sesiones y tipos de usuario.
4. Evaluar la interacción del carrito con los sistemas relacionados como: inventario, descuentos y cálculo de totales.
5. Comprobar la compatibilidad del carrito con diferentes perfiles de usuario y condiciones de uso.
   
   ![[Pasted image 20250730161500.png]]
   
   **1. Gestión de productos en el carrito**

- Un usuario registrado elimina productos del carrito y el total se recalcula en automático de forma correcta.
- Un usuario modifica la cantidad de un producto en el carrito, se verifica el stock y el total se recalcula en automático de forma correcto.
- El sistema bloquea la opción de añadir más productos cuando el stock es insuficiente.

**2. Persistencia del carrito**

- Un usuario invitado agrega productos al carrito, se registra, y conserva su selección.
- Un usuario registrado cierra sesión y al volver a ingresar ve su carrito intacto.

**3. Interacción con promociones y cálculo de totales**

- Un usuario aplica un cupón válido y se reflejan correctamente el descuento.
- El sistema rechaza cupones expirados o inválidos con un mensaje adecuado.
- El total del carrito se recalcula correctamente con impuestos, descuentos y promociones aplicadas.

**4. Compatibilidad entre perfiles y dispositivos**

- Un usuario invitado en móvil agrega productos y continúa su compra en escritorio como registrado.
- Se valida que el comportamiento del carrito sea consistente en distintos navegadores (Chrome, Firefox, Edge).
- Se valida la sincronización y persistencia del carrito en un caso en el que el usuario usa distintos dispositivos para manipular su carrito.