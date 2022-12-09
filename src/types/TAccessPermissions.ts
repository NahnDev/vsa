import TPermission from "./TPermission"

type TAccessPermissions = {
    member: boolean
    manager: TPermission
} & TPermission

export default TAccessPermissions
