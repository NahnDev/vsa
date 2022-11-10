import { useEffect, useState } from "react"
import useDebounce from "./useDebounce"

export default function useAutoSave<T = any>(value: T, handler: (data: T) => Promise<any>) {
    const [data, setData] = useDebounce(value, 1000)
    const [saving, setSaving] = useState(false)
    useEffect(() => {
        setSaving(true)
        handler(data).finally(() => setSaving(false))
    }, [data])
    return { setData, saving }
}
