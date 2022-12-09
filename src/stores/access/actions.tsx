import { TLoginDto, TRegisterDto } from "../../types/TUser"
import AssociationApi from "../api/AssociationApi"
import AuthApi from "../api/AuthApi"
import { AppDispatch } from "../store"
import { accessSliceActions } from "./reducer"

export default class AccessActions {
    static load(params: { association: string }) {
        return async (dispatch: AppDispatch) => {
            const permissions = await AssociationApi.getPermissions(params.association)
            dispatch(accessSliceActions.set(permissions))
        }
    }
}
