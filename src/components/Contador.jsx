// Importamos connect para conectar el componente al store de Redux
import { connect } from "react-redux";

// Importamos las acciones que vamos a disparar
import { increment, decrement } from "../Redux/Actions/CounterActions";

// Este es el componente funcional Contador, que recibe las acciones y el valor actual del contador por props
const Contador = ({ increment, decrement, counter }) => {
    return (
        <>
            {/* Botón que dispara la acción de incrementar */}
            <button onClick={increment}>Incrementar</button>

            {/* Botón que dispara la acción de decrementar */}
            <button onClick={decrement}>Decrementar</button>

            {/* Mostramos el valor del contador */}
            <h3>Contador</h3>
            <h1>{counter}</h1>
        </>
    );
};

// Función que mapea el estado global de Redux a las props del componente
// Específicamente, tomamos el valor de `state.contador` y lo pasamos como `counter`
const mapStateToProps = (state) => ({
    counter: state.estado // Aquí debe coincidir con el nombre del reducer en el rootReducer
});

// Función que mapea acciones a props, para que se puedan usar directamente como funciones
const mapDispatchToProps = (dispatch) => ({
    increment: () => dispatch(increment()), // Dispara la acción de incrementar
    decrement: () => dispatch(decrement())  // Dispara la acción de decrementar
});

// Conectamos el componente al store de Redux
// Esto le da acceso al estado y a las acciones como props
export default connect(mapStateToProps, mapDispatchToProps)(Contador);
