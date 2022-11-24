import TPermission from "./TPermission"

type TRole = {
    _id: string
    name: string
    association: string
    permission: TPermission
}

export type TCreateRoleDto = Pick<TRole, "association" | "name" | "permission">
export type TUpdateRoleDto = Partial<TCreateRoleDto>
export default TRole
