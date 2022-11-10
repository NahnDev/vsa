import { useState } from "react"

export default function useSelected(options: { required?: boolean; multiple?: boolean }) {
    const [selected, setSelected] = useState([])
    const handleSelected = (index: number) => {}
}
