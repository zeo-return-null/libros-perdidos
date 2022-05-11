
# Libros Perdidos

Frontend de un ecommerce de libros, desarrollado durante el curso de React JS en Coderhouse. 

Versión en vivo [Aquí](https://libros-perdidos.vercel.app/)

Este proyecto fue maquetado con [Create React App](https://github.com/facebook/create-react-app). 

# Tabla de contenidos

- [Instalación](#Instalación)
- [Uso](#Uso)
- [Creditos](#Creditos)

# Instalación 

- Clonar el repositorio.
- Utilizar `npm install` en el directorio raiz.
- Luego utilizar `npm start`.

### Librerias utilizadas

- React router dom
- Material UI 
- Material icons
- Styled components
- Firebase
- Formik
- React spinners

# Uso

El sitio posee un inicio, categorias y un carrito de compras. 

En el inicio se visualizan todos los productos disponibles. 

Al seleccionar una categoria se solicita el contenido filtrado a Firebase para luego renderizarlo dentro de un contenedor. 

Al seleccionar un producto este es renderizado dentro de un contenedor con sus detalles. Desde aquí es posible añadirlo al carrito de compras.

Al entrar al carrito de compras, si este se encuentra vacio muestra un mensaje y permite redirigir hacia los productos. 
En caso de haber seleccionado productos, permite rellenar un formulario para obtener los datos: Nombre y apellido, dirección, email y telefono de contacto.

### Navegando el Sitio

![](src/assets/Navegacion.gif)

# Creditos

Este trabajo fue desarrollado por @zeo-return-null durante el curso de React JS dictado por @alejandromoises02, profesor de Coderhouse.

