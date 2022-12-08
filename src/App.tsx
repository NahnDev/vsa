import moment from "moment"
import "moment/locale/vi"
import React, { useEffect } from "react"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import "./App.css"
import MainRouter from "./AppRouter"
import FormEditor from "./components/form/FormEditor"
import { SocketProvider } from "./socket"
import store from "./stores"
import { persistor } from "./stores/store"

moment.locale("vi")

function App() {
    return (
        <SocketProvider>
            <DndProvider backend={HTML5Backend}>
                <Provider store={store}>
                    <PersistGate loading={null} persistor={persistor}>
                        <MainRouter></MainRouter>
                    </PersistGate>
                </Provider>
            </DndProvider>
        </SocketProvider>
    )
}

export default App
