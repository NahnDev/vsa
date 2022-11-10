import { useEffect, useState } from "react"

export default function useDebounce<T = any>(initial: T, time: number) {
    const [value, setValue] = useState<T>(initial)
    const [debounced, setDebounced] = useState(value)

    useEffect(() => {
        const timeout = setTimeout(() => setDebounced(value), time)
        return () => {
            clearTimeout(timeout)
        }
    }, [value])

    return [value, debounced, setValue] as [T, T, React.Dispatch<React.SetStateAction<T>>]
}
