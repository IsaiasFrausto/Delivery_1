##Delivery1
Descripción:

En esta actividad, el objetivo es utilizar rutas en React junto con los hooks useState y useEffect. A continuación, se describen los requisitos del proyecto:

Requisitos del proyecto
El proyecto debe incluir una barra de navegación con tres enlaces para mostrar diferentes vistas. Se evaluará el uso de react-router-dom para la gestión de rutas.

Primera vista: Validación de tarjeta de crédito
Se utilizará useState para validar un número de tarjeta de crédito mediante el algoritmo de Luhn.
El usuario ingresará el número de la tarjeta en un input, y con cada nuevo dígito ingresado, la función de useState verificará en tiempo real si la tarjeta es válida o no.
Debajo del campo de entrada, se mostrará un mensaje indicando si la tarjeta es válida o inválida.
Segunda vista: Lista de palabras con useEffect
Se empleará useEffect para inicializar una lista de palabras cuando el componente se monte.
Se podrá agregar nuevas palabras a la lista mediante un input y un botón.
Si el usuario intenta agregar una palabra que ya existe, se mostrará un mensaje de advertencia y se impedirá su inserción.
Cuando el componente se desmonte, la lista de palabras deberá limpiarse.
Para alternar entre el montaje y desmontaje del componente, se implementará un botón que permita mostrar u ocultar la lista.
Tercera vista: Carga de datos desde una API
Se utilizarán promesas para obtener datos de una API, por ejemplo: "https://jsonplaceholder.typicode.com/albums"Links to an external site..
Se debe mostrar, como mínimo, información de tres campos (por ejemplo, usuario, rol y tipo).
Se incluirá una simulación de uso de imagen para complementar los datos visualizados.
 
Entrega:
Los estudiantes deberán entregar su proyecto mediante un enlace de Git.

Criterios de evaluación:
Organización los componentes.
Uso de useState
Uso de useEffect
Uso de promesas
Claridad del código
