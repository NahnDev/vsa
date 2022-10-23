import { CSSProperties } from "react"

type TProps<T = {}> = {
    className?: string
    style?: CSSProperties
} & T
export default TProps
