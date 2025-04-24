// nombre de las acciones
export const INCREMENT = "INCREMENT"
export const DECREMENT = "DECREMENT"

// creador de las acciones
export const increment = () => {
    return {
        type: INCREMENT
    }
}
export const decrement = () => {
    return {
        type: DECREMENT
    }
}