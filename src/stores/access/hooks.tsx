import { useAppSelector } from "../hooks"

export function usePermissions() {
    return useAppSelector((state) => state.access)
}
