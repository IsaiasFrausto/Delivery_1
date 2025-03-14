import { useEffect, useState } from "react";
//Se incluirá una simulación de uso de imagen para complementar los datos visualizados.

function Promesas() {
    // Estado para almacenar los datos obtenidos
    const [datos, setDatos] = useState([]);
    // Estado para indicar si la solicitud aún está en proceso
    const [loading, setLoading] = useState(true);
    // Estado para almacenar errores si ocurre alguno
    const [error, setError] = useState(null);
  

    useEffect(() => {
        // Función que obtiene los datos desde la API
        const fetchData = async () => {
        setLoading(true); // Indicamos que la carga ha iniciado

        fetch("https://jsonplaceholder.typicode.com/albums")
            .then((response) => {
                if (!response.ok) {
                // Si la respuesta no es exitosa, lanzamos un error
                throw new Error("Error al obtener los datos");
                }
            return response.json(); // Convertimos la respuesta a JSON
            })
            .then((resultado) => {
                console.log("Éxito:", resultado); // ✅ Se ejecuta si la promesa se resuelve con éxito
                setDatos(resultado); // Guardamos los datos en el estado
            })
            .catch((error) => {
                console.error("Error:", error); // ❌ Se ejecuta si la promesa se rechaza
                setError(error.message); // Guardamos el mensaje de error en el estado
            })
            .finally(() => {
                console.log("La promesa ha finalizado"); // 🔄 Se ejecuta siempre, éxito o error
                setLoading(false); // Indicamos que la carga ha finalizado
            });
        };
        fetchData(); // Llamamos a la función cuando el componente se monta
    }, []); // El array vacío [] asegura que useEffect solo se ejecute una vez

    // Si la carga está en proceso, mostramos un mensaje
    if (loading) {
        return <p>Cargando Datos...</p>;
    }
    // Si ocurrió un error, mostramos un mensaje
    if (error) {
        return <p>Error: {error}</p>;
    }


    return (
        <div>
            {/*Salto de linea*/}
            <br></br>
            <br></br>
            <br></br>        
            <h2>Lista de Datos</h2>
            <ul>
                {datos.slice(0,10).map((dato) => (
                    <li key={dato.id}>
                        <p>Usuario: {dato.userId}</p>
                        <p>Rol: {dato.id}</p>
                        <p>Tipo: {dato.title}</p>
                        {/*Simulación de uso de imagen*/}
                        <img src="imagen_prueba.jpg" alt="Imagen de ejemplo" />
                        {/*otra manera de hacerlo*/}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Promesas;