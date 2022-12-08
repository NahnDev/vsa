import ERole from "../enums/ERole"
import EUserStatus from "../enums/EUserStatus"
import TSocial from "./TSocial"

type TUser = {
    _id: string
    name: string
    fullName: string
    avatar: string
    phone: string
    email: string
    password?: string
    active: EUserStatus
    isAdmin: boolean
    roles: ERole
    introduce: string
    social: TSocial
    code: string
    address: string
}

export type TUserRef = Pick<TUser, "_id" | "name" | "avatar">
export type TLoginDto = Pick<TUser, "password" | "email">
export type TRegisterDto = Pick<TUser, "password" | "email" | "name">
export type TUpdateUserDto = Partial<Omit<TUser, "_id" | "roles" | "isAdmin" | "email">>

export default TUser
