import { useAppSelector } from "../hooks"

export function useUser() {
    return useAppSelector((state) => state.user?.user || {})
}
export function useToken() {
    return useAppSelector((state) => {
        const { user, ...tokens } = state
        return tokens
    })
}
