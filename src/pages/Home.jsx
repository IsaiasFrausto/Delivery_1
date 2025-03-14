import { useState } from 'react';

function Home() {
    // Estado para el número
    const [number, setNumber] = useState(0);

    // Función para sumar 1 al número
    const addNumber = () => {
        setNumber(number + 1);
        
    }
    // Función para restar 1 al número
    const substractNumber = () => {
        setNumber(number - 1);
    }
    return (
        <div>
            <h2>{number}</h2>
            <button onClick={addNumber}>Sumar</button>
            <button onClick={substractNumber}>Restar</button>
        </div>
    )
}

export default Home;