import { TLoginDto, TRegisterDto } from "../../types/TUser"
import AuthApi from "../api/AuthApi"
import { AppDispatch } from "../store"
import { userSliceActions } from "./reducer"

export default class UserActions {
    static login(dto: TLoginDto) {
        return async (dispatch: AppDispatch) => {
            const data = await AuthApi.login(dto)
            localStorage.setItem("token", JSON.stringify(data))
            dispatch(userSliceActions.set(data))
        }
    }
    static register(dto: TRegisterDto) {
        return async (dispatch: AppDispatch) => {
            const data = await AuthApi.register(dto)
            localStorage.setItem("token", JSON.stringify(data))
            dispatch(userSliceActions.set(data))
        }
    }

    static logout() {
        return async (dispatch: AppDispatch) => {
            localStorage.setItem("token", "")
            dispatch(userSliceActions.clear())
        }
    }
}
