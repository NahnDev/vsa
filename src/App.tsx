import React, { useEffect } from "react"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import "./App.css"
import MainRouter from "./AppRouter"
import store from "./stores"
import { persistor } from "./stores/store"

function App() {
    return (
        <DndProvider backend={HTML5Backend}>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <MainRouter></MainRouter>
                </PersistGate>
            </Provider>
        </DndProvider>
    )
}

export default App
