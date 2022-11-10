import { combineReducers, configureStore } from "@reduxjs/toolkit"
import userReducer from "./user/reducer"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"

const persistConfig = { key: "root", storage }

const reducer = persistReducer(persistConfig, combineReducers({ user: userReducer }))
const store = configureStore({ reducer, devTools: true })

export default store
export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
