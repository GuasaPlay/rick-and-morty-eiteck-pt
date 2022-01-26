<h1 align="center">Rick and Morty EITECK</h1>

En el siguente proyecto utilizo la API de [Rick and Morty](https://rickandmortyapi.com/) para crear una aplicación con el Framework [Nuxt.js](https://rickandmortyapi.com/) y [TailwindCSS](https://tailwindcss.com/) donde permite realizar consultas de personajes de la serie de TV.

La razón por que utilice Nuxt.js en este proyecto es debido a que nos ayuda a solucionar muchas configuraciones la mas importante es el [SSR (Server Side Rendering)](https://lemoncode.net/lemoncode-blog/2018/5/13/server-side-rendering-i-conceptos) el mismo que nos aporta dos benefecios:

- SEO (Search Engine Optimization): es decir que los buscadores de Google te encuentren e indexen tu contenido.
- Aumentar la velocidad en la carga inicial de tu sitio: es decir que la primera vez que accedas a tu sitio lo haga más rápido.

Recordemos que Nuxt.js es un framework que esta basado en [Vue.js](https://vuejs.org/)

Por otra parte para dar estilo a la aplicación utilice TailwindCSS es mismo que es un framework CSS que permite un desarrollo ágil basado en clases de utilidad que se pueden aplicar con facilidad en el código HTML y unos flujos de desarrollo que permiten optimizar mucho el peso del código CSS.

## Caracteristicas

- Utilice `grid` de CSS para mostrar las tarjetas de cada unos de los personajes.
- Agregue una barra de busqueda realizar consultas de los personajes por el nombre.
- La paginación esta presente al final de la página.
- Agregue un skeleton loader mientras se realiza la consulta de los personajes a la API.
- La `especie`, `estado` y `género` estan traducidos al español.
- Para el detalle del personaje cree una tarjeta moderna donde muestra la información detallada del mismo
- Para mostrar el listado de los episodios donde el personaje aparece, utilice el sistema `Mansory Grid` como lo relaliza Pinterest.
- Toda la aplicación es responsive y se adapta para dispositivos moviles.
- En la aplicación esta implementado la tecnología `PWA` de esta manera puede instalar la aplicación en el celular o la computadora.

![Presentación](https://github.com/GuasaPlay/rick-and-morty-eiteck-pt/blob/main/assets/img/Hnet-image.gif?raw=true)

## Arquitectura

Como en este proyecto utilice Vue.js entonces, este implementa lo que se conoce como arquitectura MVVM (Model-View-ViewModel), el mismo que abstrae el estado y el comportamiento de la vista, lo que nos permite separar la interfaz de usuario de la vista de la lógica empresarial.

## Enfoque

El enfoque principal son los componentes que nos permite dividir las aplicaciones en bloques con funcionalidades independientes que se le denomina componentes. Esos bloques podrían ser una cabecera, un menú, un listado, etc.

## Metodología

Utilice SCRUM como metodologpia ya que es agil y flexible, de esta manera se trabajó en cada una de las iteraciones en las mismas que se mejorando cada vez mas la aplicación. Esto lo se puede comprobar en los commits del proyecto

## Posibles mejoras

Hay muchas mejoras que se puede realizar en la aplicación, las mismas que no pude realizar por que no me alcanzó el tiempo. En el siguiente listado menciono algunas de estas mejoras:

- En la página de personajes se podría agregar un botón para que se pueda realizar un filtrado por `especie`, `estado`, `tipo` o `genero`.
- En la pagina del detalle del personaje faltaría agregar un componente de carga mientras se realiza la consulta a la API.
- Mejorar la carga de las imagenes con `lazy-load`
- La pagina del detalle del personaje se puede componetizar, pero por el tiempo ya no logre abstraer en componentes.

## ¿Cómo probar la aplicación?

Actualmente la aplicación esta deplegada en Heroku, puede ingresar desde el siguente enlace: [https://rick-and-morty-eiteck-pt.herokuapp.com](https://rick-and-morty-eiteck-pt.herokuapp.com)

**Nota:** Cuando abra el enlace pueda que tarde un poco en cargar, esto debido a que Heroku duerme el servidor para ahorrar recursos ya que esta alojado en versión gratuita.

## Como ejecutar el proyecto en local

Primero clonamos el repositorio y luego ejecutamos los siguentes comando con `npm`:

```bash
# Instalar las dependencias
$ npm install

# Ejecutar el proyecto en modo de desarrollo en localhost:3000
$ npm run dev

# Construir los directorio para producción y lanzar el servidor.
$ npm run build
$ npm run start

```

Para obtener una explicación detallada sobre cómo funcionan Nuxt.js, consulte la [documentación](https://nuxtjs.org).
