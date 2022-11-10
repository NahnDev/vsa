import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import TToken from "../../types/TToken"
import TUser from "../../types/TUser"

export type TUserState = TToken & { user: TUser }

const initialState: TUserState = {} as any

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        set(state, actions: PayloadAction<TUserState>) {
            return actions.payload
        },
        clear(state) {
            return initialState
        },
    },
})
export const userSliceActions = userSlice.actions
export default userSlice.reducer
