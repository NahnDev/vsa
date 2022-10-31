import React, { useEffect } from "react"
import { Provider } from "react-redux"
import "./App.css"
import MainRouter from "./AppRouter"
import store from "./stores"

function App() {
    return (
        <Provider store={store}>
            <MainRouter></MainRouter>
        </Provider>
    )
}

export default App
