import { faUpload, faTrash, faHistory } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import clsx from "clsx"
import { useCallback, useEffect, useRef, useState } from "react"
import { useDropzone } from "react-dropzone"
import PackageApi from "../../stores/api/PackageApi"
import ResourceApi from "../../stores/api/ResourceApi"
import TFile from "../../types/TFile"
import TPackage from "../../types/TPackage"
import TResource from "../../types/TResource"
import File from "./File"

type TFileColumnProps = { package?: TPackage }
export default function FileColumn(props: TFileColumnProps) {
    const inputRef = useRef<HTMLInputElement>(null)
    const [groups, setGroups] = useState<TFile[][]>([])

    const uploadFile = async (file: any) => {
        if (!props.package) return
        try {
            await PackageApi.addFiles(props.package?._id, file)
        } finally {
            loadFiles()
        }
    }
    const onDrop = useCallback(
        (files: any[]) => {
            console.log({ files })

            for (const file of files) {
                uploadFile(file)
            }
        },
        [props.package, uploadFile]
    )
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    const loadFiles = async () => {
        if (!props.package) return
        try {
            const resource = await PackageApi.findAllFiles(props.package._id)
            setGroups(resource)
        } catch {}
    }

    useEffect(() => {
        loadFiles()
    }, [props.package])

    console.log({ groups })

    if (!props.package) return <div className="bg-lightest flex-[5] flex flex-col" />
    return (
        <div className="bg-lightest flex-[5] flex flex-col">
            <div className="flex flex-row p-2">
                <h2 className="font-bold p-2">Package: {props.package.name}</h2>
                <div className="flex-1"></div>
                <div className="flex justify-center items-center gap-5">
                    <div className="button" onClick={() => inputRef.current?.click()}>
                        <FontAwesomeIcon className="text-success" icon={faUpload} />
                    </div>
                    <FontAwesomeIcon className="text-error" icon={faTrash} />
                </div>
            </div>
            <div className="p-2 flex-1  relative flex flex-col gap-2" {...getRootProps()} onClick={() => {}}>
                <div
                    className={clsx([
                        "absolute w-full h-full",
                        "bg-lighter opacity-50",
                        " flex items-center justify-center flex-col",
                        isDragActive ? "flex" : "hidden",
                    ])}
                >
                    <FontAwesomeIcon icon={faUpload} className="text-[5em]" />
                    <span className="p-5">Drop files to upload</span>
                </div>

                {groups.map((files, index) => (
                    <GroupFile files={files} key={index} />
                ))}
            </div>
            <div className="hidden">
                <input type="file" multiple ref={inputRef} onChange={(e) => onDrop(Array.from(e.target.files || []))} />
                <input {...getInputProps()} />
            </div>
        </div>
    )
}

function GroupFile(props: { files: TResource[]; selected?: boolean }) {
    const [expand, setExpand] = useState(false)
    return (
        <div>
            <div className="flex flex-row bg-white items-center justify-center gap-2 p-2">
                <div className="flex-1">
                    <File data={props.files[0]} />
                </div>
                <FontAwesomeIcon onClick={() => setExpand(!expand)} className="button text-darkless" icon={faHistory} />
            </div>
            <div className={clsx([" ml-5 border-l-2 border-third", expand ? "" : "hidden"])}>
                {props.files.map((file) => (
                    <File data={file} key={file._id} />
                ))}
            </div>
        </div>
    )
}
