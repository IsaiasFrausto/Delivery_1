# Proyecto de React: Gestión de Rutas y Hooks

Este proyecto tiene como objetivo demostrar el uso de rutas en React junto con los hooks `useState` y `useEffect`. A continuación, se describen las características y requisitos del proyecto.

## Características del Proyecto

### 1. Barra de Navegación
El proyecto incluye una barra de navegación con tres enlaces que permiten alternar entre las diferentes vistas:

- **Validación de Tarjeta de Crédito**
- **Lista de Palabras**
- **Carga de Datos desde una API**

### 2. Validación de Tarjeta de Crédito
- **Uso de `useState`:** Se utiliza para validar un número de tarjeta de crédito en tiempo real mediante el algoritmo de Luhn.
- **Funcionalidad:** El usuario ingresa el número de la tarjeta en un campo de entrada, y con cada nuevo dígito ingresado, se verifica si la tarjeta es válida o no.
- **Mensaje de Validación:** Debajo del campo de entrada, se muestra un mensaje indicando si la tarjeta es válida o inválida.

### 3. Lista de Palabras
- **Uso de `useEffect`:** Se emplea para inicializar una lista de palabras cuando el componente se monta.
- **Agregar Palabras:** El usuario puede agregar nuevas palabras a la lista mediante un input y un botón.
- **Validación de Duplicados:** Si el usuario intenta agregar una palabra que ya existe, se muestra un mensaje de advertencia y se impide su inserción.
- **Limpieza de la Lista:** Cuando el componente se desmonta, la lista de palabras se limpia automáticamente.
- **Botón de Alternancia:** Se implementa un botón que permite mostrar u ocultar la lista, alternando entre el montaje y desmontaje del componente.

### 4. Carga de Datos desde una API
- **Uso de Promesas:** Se utilizan promesas para obtener datos de una API, como `https://jsonplaceholder.typicode.com/albums`.
- **Visualización de Datos:** Se muestra información de al menos tres campos (por ejemplo, usuario, rol y tipo).
- **Simulación de Imagen:** Se incluye una simulación de uso de imagen para complementar los datos visualizados.

## Requisitos del Proyecto

- **Organización de Componentes:** Los componentes deben estar bien organizados y estructurados.
- **Uso de `useState`:** Debe demostrarse el uso correcto de `useState` para manejar el estado en la validación de la tarjeta de crédito.
- **Uso de `useEffect`:** Debe demostrarse el uso correcto de `useEffect` para manejar la lista de palabras y su limpieza al desmontar el componente.
- **Uso de Promesas:** Debe demostrarse el uso correcto de promesas para cargar datos desde una API.
- **Claridad del Código:** El código debe ser claro, legible y bien comentado.

## Entrega

Los estudiantes deben entregar su proyecto mediante un enlace de Git. Asegúrate de que el repositorio esté bien documentado y que el código cumpla con los criterios de evaluación mencionados.

## Criterios de Evaluación

- **Organización de los Componentes**
- **Uso de `useState`**
- **Uso de `useEffect`**
- **Uso de Promesas**
- **Claridad del Código**
