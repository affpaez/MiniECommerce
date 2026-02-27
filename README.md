# Práctica: Mini Proyecto E-Commerce
**Nombre:** Abraham Gonzalez  
**Matrícula:** 375052  
**Materia:** Aplicaciones Moviles

---

## Proyecto
Tienda básica donde puedes ver una lista de productos, entrar a ver el detalle de cada uno y agregarlos a un carrito.

## Objetivos de aprendizaje:
* **Drawer:** Menú lateral done estan los accesos a Ajustes y la info de la App.
* **Tabs:** Para moverte rápido entre el Inicio, el Carrito y tu Perfil.
* **Carrito de Compras:** Guarda los productos que seleccionas y suma los precios reales.
* **Deep Linking:** Configuré la app para que si pones un link como `myapp://cart` te lleve directo al carrito.

## Cómo probar Deep Linking:
Si usas tu cel, puedes probar estas rutas una vez iniciado el proyecto y habiendo instalado la app de Expo Go:
- `myapp://home` -> Abre la lista de productos.
- `myapp://cart` -> Abre el carrito.
- `myapp://product/101` -> Abre el detalle de un proudcto iPhone.
- `myapp://settings` -> Abre la pantalla de ajustes.

## Cómo correr el proyecto:
1. Instalar las librerías con `npm install`.
2. Ejecutar con `npx expo start`.
3. Escanear el código QR con la app de Expo Go.