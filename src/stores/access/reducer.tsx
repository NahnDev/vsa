import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import TAccessPermissions from "../../types/TAccessPermissions"
import TToken from "../../types/TToken"
import TUser from "../../types/TUser"

export type TAccessState = TAccessPermissions

const initialState: TAccessState = {} as any

const accessSlice = createSlice({
    name: "access",
    initialState,
    reducers: {
        set(state, actions: PayloadAction<TAccessState>) {
            return actions.payload
        },
        clear(state) {
            return initialState
        },
    },
})
export const accessSliceActions = accessSlice.actions
export default accessSlice.reducer
