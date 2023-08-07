import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userReducer";
import { statusReducer } from "./reducers/statusReducer";
import thunk from 'redux-thunk'

const middleware = [ thunk ];

const store = configureStore({
    reducer: {
        userReducer,
        statusReducer,
    },
    middleware: middleware
})

export default store