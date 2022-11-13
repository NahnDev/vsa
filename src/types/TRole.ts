import TPermission from "./TPermission"

type TRole = {
    _id: string
    name: string
    association: string
    user: string
    permission: TPermission
}
export default TRole
