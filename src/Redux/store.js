import { configureStore } from "@reduxjs/toolkit"
import contador from "./Reducers/CounterReducer";

const store = configureStore({
    reducer: {
        estado: contador
    }
})

export default store;