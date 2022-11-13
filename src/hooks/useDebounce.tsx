import { useEffect, useState } from "react"

export default function useDebounce<T = any>(initial: T, time: number = 3000) {
    const [same, setSame] = useState(true)
    const [value, setValue] = useState<T>(initial)
    const [debounced, setDebounced] = useState(value)

    const handleChange = (value: T) => {
        setValue(value)
        setSame(false)
    }
    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebounced(value)
            setSame(true)
        }, time)
        return () => {
            clearTimeout(timeout)
        }
    }, [value])

    return [value, debounced, handleChange, same] as [T, T, React.Dispatch<React.SetStateAction<T>>, boolean]
}
