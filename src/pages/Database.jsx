import React, { useState, useEffect } from 'react';

// Database: Componente que simula una base de datos.
// Muestra una lista de elementos y permite agregar nuevos elementos.
function Database() {
    // items: Arreglo de objetos que representan los elementos de la base de datos.
    const [items, setItems] = useState([]);
    // inputValue: Cadena de texto que representa el valor
    const [inputValue, setInputValue] = useState('');
    // mounted: Booleano que representa si el componente está montado
    const [mounted, setMounted] = useState(true);

    function addItem() {
        if (inputValue.trim() !== '') {
            // Verifica si el objeto ya existe en la lista
            const exists = items.some(item => item.value === inputValue);
            if (!exists) {
                setItems([...items, { id: items.length, value: inputValue }]);
                console.log("Se añadió el objeto " + inputValue);
                setInputValue('');
                alert("Se añadió el objeto " + inputValue);
            } else {
                alert("El objeto " + inputValue + " ya existe en la base de datos");
                console.log("El objeto " + inputValue + " ya existe en la base de datos");
            }
        }
    }

    useEffect(() => {
        // Limpiar la base de datos cuando el componente se desmonte
        return () => {
            setItems([]);
            console.log("Se limpió la base de datos");
        };
    }, [mounted]);

    function toggleComponent() {
        setMounted(!mounted);
    }

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column', // Coloca los elementos en columna
                justifyContent: 'center', // Centra los elementos en el eje principal
                alignItems: 'center', // Centra los elementos horizontalmente
                height: '100vh', // Altura completa de la ventana
                padding: '10px'
            }}
        >
            <button onClick={toggleComponent}>Quitar/agregar componente</button>
            {mounted && (
                <>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Add new item"
                    />
                    <button onClick={addItem}>Add Item</button>
                    <ul>
                        {items.map((item) => (
                            <li key={item.id}>{item.value}</li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
}

export default Database;