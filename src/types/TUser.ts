import ERole from "../enums/ERole"
import EUserStatus from "../enums/EUserStatus"

type TUser = {
    _id: string
    name: string
    avatar: string
    email: string
    password?: string
    active: EUserStatus
    isAdmin: boolean
    roles: ERole
    introduce: string
}

export type TUserRef = Pick<TUser, "_id" | "name" | "avatar">

export type TLoginDto = Pick<TUser, "password" | "email">
export type TRegisterDto = Pick<TUser, "password" | "email" | "name">
export type TUpdateUserDto = Omit<TUser, "_id">

export default TUser
