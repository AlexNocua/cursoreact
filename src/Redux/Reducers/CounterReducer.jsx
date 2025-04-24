import { INCREMENT, DECREMENT } from "../Actions/CounterActions";
//REDUCER
// es una funcion pura que nos devuelve el estado actual
// una funcion pura, es una funcion que dado unos parametros de entrada, nos va a devolver siempre el mismo valor
const initialState = 0
function contador(state = initialState, action) {
    switch (action.type) {
        case INCREMENT:
            return state + 1
        case DECREMENT:
            return state - 1
        default:
            return state
    }
}

export default contador