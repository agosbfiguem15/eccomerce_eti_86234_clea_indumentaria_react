# Clea Indumentaria

# # Descripción del proyecto

Clea Indumentaria es una aplicación web ecommerce desarrollada como proyecto integrador del Bootcamp Full Stack, orientada a ofrecer una experiencia de compra online intuitiva, dinámica y accesible.

La plataforma permite explorar un catálogo de productos de indumentaria y marroquineria, consultar sus características y precios, y gestionar un carrito de compras funcional, con mejoras pendientes para una futura entrega. Además, cuenta con un panel de administración que facilita la gestión de productos y usuarios mediante operaciones CRUD (crear, consultar, actualizar y eliminar).

# # Tecnologías utilizadas

 - - React + Vite: desarrollo de la aplicación.
 - - JavaScript: lógica y funcionalidades.
 - - HTML y CSS: estructura y estilos.
 - - Font Awesome: iconografía.
 - - React Router: navegación entre páginas.
 - - Axios: consumo de API.
 - - React Hook Form: formularios y validaciones.
 - - SweetAlert2: alertas y confirmaciones.
 - - MockAPI: almacenamiento y gestión de datos.

# # Instalación y ejecución

 1. Clonar el repositorio

 git clone 

 2. Ingresar a la carpeta del proyecto

 cd 

 3. Instalar las dependencias

 npm install

 4. Ejecutar el proyecto

 npm run dev

 5. Abrir en el navegador

 Ingresar a la dirección local que indique Vite en la terminal.

# # Funcionalidades

 - - Página de inicio con banner, productos destacados y beneficios.
 - - Catálogo y detalle de productos.
 - - Carrito de compras. Permite agregar productos, aumentar o disminuir cantidades respetando el stock disponible, eliminar productos mediante confirmación con SweetAlert2 y visualizar el total de la compra actualizado automáticamente.
 - - Gestión del carrito mediante Context API. Implementación de un contexto global en React para compartir el estado del carrito entre los componentes, actualizar el contador de productos en el encabezado y mantener sincronizada la información de la compra.
 - - Registro de usuarios.
 - - Panel de administración. Actualmente, la visibilidad del acceso al panel se controla manualmente mediante la constante isAdmin, definida en el archivo Header.jsx. Al establecer su valor en true, se muestra la opción Administrador en el menú de navegación; al establecerlo en false, se oculta. Este mecanismo es temporal y únicamente controla la visibilidad del enlace. No implementa autenticación ni restringe el acceso directo a las rutas administrativas. En futuras entregas se incorporará la autenticación correspondiente.
 - - Gestión de productos y usuarios.
 - - Consumo de API mediante Axios.
 - - Validaciones de formularios.
 - - Diseño responsive. La aplicación se adapta a computadoras, tablets y celulares mediante Media Queries.

# # Estructura del proyecto

La aplicación está organizada mediante una estructura modular que facilita el mantenimiento y la reutilización del código.

 - - Components: componentes reutilizables de la interfaz.
 - - Pages: páginas principales de la aplicación.
 - - Layout: estructura general de navegación, encabezado y pie de página.
 - - Services: funciones encargadas de la comunicación con la API.
 - - Context: administración del estado global del carrito de compras mediante React Context API.
 - - Utils: funciones auxiliares reutilizables.

# # Próximas mejoras

Actualmente, la aplicación cuenta con las funcionalidades principales de navegación, gestión de productos y usuarios, y administración del carrito de compras.

Para futuras entregas se contempla:

 - - Implementar un sistema de autenticación y autorización de usuarios.
 - - Incorporar persistencia del carrito de compras para conservar los productos al actualizar la página.
 - - Completar el proceso de compra.
 - - Incorporar nuevas funcionalidades que mejoren la experiencia del usuario.
 - - Incorporar la funcionalidad del botón de productos favoritos.
 - - Incorporar la funcionalidad del formulario de contacto, en mockapi no se puede crear un nuevo resource donde guardar los datos.   

# # Autora

Agostina Belén Figueroa Maidana

Proyecto integrador — Bootcamp Full Stack - Segunda entrega. 