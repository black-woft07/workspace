1.HTML

Con tus propias palabras explicar.

¿Cuales son las etiquetas de estructura de un HTML?.
  <!DOCTYPE>: Define que el documento es de tipo HTML5.
  <html>: Es la raíz que envuelve todo el código de la página.
  <head>: Guarda datos ocultos, títulos y enlaces a estilos.
  <body>: Contiene todo lo que se ve en la pantalla.
    Secciones y Contenido
    <header>: Cabecera o parte de arriba con el título o logo.
    <nav>: Zona con los enlaces de menú.
    <main>: Bloque principal con la información central.
    <section>: Parte o división temática del texto.
    <article>: Nota o post independiente.
    <aside>: Barra lateral con datos extra.
    <footer>: Pie de página con datos de contacto o legales.

¿Cuales son las etiquetas para agregar codigo?.

  <code>: Define un fragmento de código corto o una sola línea dentro de un texto normal.
  <pre>: Muestra un bloque de texto preformateado, manteniendo los espacios y los saltos de línea tal como los escribes.
  <kbd>: Representa la entrada de teclado que el usuario debe presionar (ej. Ctrl + C).
  <samp>: Muestra la salida de un programa o sistema informático.
  <var>: Define una variable dentro de un código o expresión matemática.

Explicar 5 etiquetas de texto.

    </p> (Párrafo): Define un bloque de texto normal o un párrafo. Separa el contenido en bloques legibles.
    <h1> a <h6> (Encabezados): Crean títulos y subtítulos. El <h1> es el título más importante de la página y el <h6> el menor.
    <strong> (Texto importante): Muestra el texto en negrita y le indica a los navegadores que esas palabras tienen gran importancia.
    <em> (Énfasis): Muestra el texto en cursiva y le da un valor de énfasis semántico a la frase.
    <br> (Salto de línea): Inserta un salto de línea simple dentro del texto sin crear un nuevo párrafo.

2.JavasCript.

      Explicar com funciona las variables,tipos de variables,constantes y globales.
      Cómo funcionan las variablesTienen un nombre para identificarlas (como edad o nombre).
      Almacenan un valor temporal.
      El valor inicial se puede actualizar o cambiar las veces que necesites.

      
      Tipos de variablesLos
      los datos se dividen según su clase para que la computadora sepa cuánto espacio ocupar:
      Enteros (int): Números sin decimales (ejemplo: 10, -3).
      Decimales (float / double): Números con punto decimal (ejemplo: 5.99).
      Texto (string): Letras, palabras o frases (ejemplo: "Hola").
      Booleanos (bool): Valores de verdadero o falso (true / false).
      
      Constantes
      Una constante es igual que una variable porque guarda un dato, pero con una regla estricta: su valor nunca cambia una vez que se define.
      Si intentas cambiarlo, el programa marcará un error. Se usan para valores fijos, como el número Pi(3.1416).
      
      Variables globales
      Una variable global se crea fuera de cualquier función o bloque principal.
      Esto hace que todo el programa (cualquier función o parte del código) pueda leerla o modificarla directamente.
      A diferencia de las variables locales (que solo viven dentro de una pequeña parte del código), las globales están accesibles todo el tiempo.
      
      Explica las estructuras de flujo.

Estructura secuencial
      Son los pasos que se ejecutan uno tras otro, en el mismo orden en que están escritos.
      El código baja de una línea a la siguiente sin saltos.
      Ejemplo: Leer un dato, sumar dos números y mostrar el resultado final.

  Estructura condicional (o selectiva)
      
      Permiten que el programa tome decisiones y elija caminos distintos.
      Evalúan si una condición es verdadera o falsa.Usan palabras clave como if (si), else (si no) o switch (según el caso).
      Ejemplo: Si la nota es mayor a 6, mostrar "Aprobado"; si no, mostrar "Reprobado"

      Estructura repetitiva (o bucles)
      
      Sirven para repetir un bloque de código varias veces.
      Funcionan mientras una condición siga siendo verdadera.Usan comandos como for (para) o while (mientras).
      Ejemplo: Contar del 1 al 10 o revisar los elementos de una lista uno por uno.
      Explora más detalles sobre su aplicación general en la Guía de Diagramas de Flujo de Asana.
      Aprende sobre su funcionamiento algorítmico en la lección de Estructuras de Control de la UNAM.

3.CSS
      Consultar selectores css y como modifican elementos.
        Los selectores CSS son patrones que sirven para elegir qué etiquetas o elementos HTML quieres modificar.
          Tipos principales de selectoresSelector de etiqueta (o de tipo): Escribe el nombre de la etiqueta (ej. p, h1). Modifica todas las etiquetas de ese mismo tipo en la página.
          Selector de clase: Usa un punto antes del nombre (ej. .mi-clase). Modifica cualquier elemento que tenga asignado ese atributo class="mi-clase".
          Selector de ID: Usa una almohadilla o gato (ej. #mi-id). Modifica de forma única al elemento que posea ese id="mi-id" exacto.
          Selector universal: Usa un asterisco (*). Selecciona y modifica absolutamente todos los elementos del documento.

      Cómo modifican los elementos
        Aplicando estilos directos: Definen propiedades estéticas dentro de llaves, como color: red; o font-size: 16px;.
        Especificidad y prioridad: Si dos selectores apuntan al mismo elemento con órdenes contrarias, gana el más específico (el ID manda más que la clase, y la clase más que la etiqueta).

4.REACT.
     - hacer una analogia explicativa de un componente de react de como se comporta como una etiqueta HTML.-
        HTML tradicional
En HTML puedes escribir:

<button>Comprar</button>

El navegador entiende que <button> representa un botón y sabe cómo comportarse.
  
       Componente de React
En React puedes crear algo como:

function Boton({ texto }) {
  return <button>{texto}</button>;
}

Y luego usarlo así:

<Boton texto="Comprar" />

La analogía sería:

Un componente de React funciona como una etiqueta HTML que tú mismo inventas.
  
Si HTML te da etiquetas como:

<div>
<p>
<button>
<img>

React te permite crear etiquetas propias:

<Usuario />
<Producto />
<Boton />
<Navbar />
<Modal />

La diferencia importante es que una etiqueta HTML ya tiene un comportamiento definido por el navegador,
  mientras que un componente React tiene el comportamiento que tú programes.

      -como y cuando se usa UseEffect en un componente de react.-
    
useEffect se usa en React cuando un componente necesita sincronizarse con algo que está fuera del proceso normal de renderizado.

Una forma sencilla de entenderlo:

El componente se renderiza para mostrar algo. useEffect permite ejecutar una acción después de ese renderizado cuando ocurre una determinada condición.

Analogía
Imagina un componente como una persona que prepara una habitación:

Componente
    ↓
"¿Qué debo mostrar?"
    ↓
Renderiza la interfaz
    ↓
useEffect
    ↓
"Ahora que la habitación está lista,
 hago algo adicional..."

Ese "algo adicional" puede ser:

- Consultar una API.
- Suscribirse a eventos.
- Configurar un setInterval.
- Modificar algo externo al componente.
- Escuchar eventos del navegador.
- Sincronizar información con localStorage.
- Conectarse/desconectarse de un servicio.      

1. La estructura básica
import { useEffect } from "react";

function Usuario() {
  useEffect(() => {
    console.log("El componente se renderizó");
  });

  return <h1>Usuario</h1>;
}

En este caso, el efecto se ejecuta después de cada renderizado.

Pero normalmente queremos controlar cuándo debe ejecutarse.

Para eso usamos el segundo argumento:

useEffect(() => {
  // efecto
}, []);

Ese [] se llama array de dependencias.
-
2. useEffect(..., []): ejecutar una vez
function Usuario() {
  useEffect(() => {
    console.log("Cargar usuario");

  }, []);

  return <h1>Usuario</h1>;
}

El array vacío significa:

"Ejecuta este efecto cuando el componente se monta."

Por ejemplo, para cargar información inicialmente:

useEffect(() => {
  fetch("/api/usuarios")
    .then(response => response.json())
    .then(data => {
      console.log(data);
    });
}, []);

Conceptualmente:

Componente aparece
       ↓
   Renderizado
       ↓
    useEffect
       ↓
  Consultar API    

      -como se usa useState para las variables de un componente.-
useState se utiliza en React cuando una variable necesita guardar información que puede cambiar y cuyo cambio debe provocar que el componente se vuelva a renderizar.

La idea principal es:

useState convierte una variable normal en un estado que React puede recordar y observar.

1. Una variable normal
Podrías hacer esto:

function Contador() {
  let contador = 0;

  return (
    <button>
      {contador}
    </button>
  );
}

Pero si haces:

contador = contador + 1;

React no sabe que debe actualizar la pantalla.

  Ahí entra useState.

2. Usando useState
Primero lo importamos:

import { useState } from "react";

Después:

function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <button onClick={() => setContador(contador + 1)}>
      {contador}
    </button>
  );
}

Aquí:

const [contador, setContador] = useState(0);

significa:

contador
   ↓
valor actual

setContador
   ↓
función para cambiar el valor

useState(0)
   ↓
valor inicial

  Por lo tanto, inicialmente:

contador = 0

Cuando hacemos:

setContador(contador + 1);

React recibe la instrucción:

"El estado contador ahora debe tener este nuevo valor."

React vuelve a renderizar el componente y muestra el nuevo valor.

  .
        
