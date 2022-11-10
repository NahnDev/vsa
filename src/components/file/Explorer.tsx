import { useState } from "react"
import TPackage from "../../types/TPackage"
import FileColumn from "./FileColumn"
import PackageColumn from "./PackageColumn"

export default function Explorer() {
    const [target, setTarget] = useState<TPackage | undefined>(undefined)
    console.log({ target })

    return (
        <div className="flex h-full flex-row gap-2 rounded-md overflow-hidden">
            <PackageColumn onTarget={setTarget} />
            <FileColumn package={target} />
        </div>
    )
}
