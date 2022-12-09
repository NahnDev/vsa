import Explorer from "../../../components/file/Explorer"

export default function ManagerDocPage() {
    return (
        <div className="p-5 pl-0 h-full overflow-y-auto">
            <div className="bg-white h-full rounded-md p-5 flex flex-col">
                <h1 className="p-5 text-xl text-center text-dark font-bold uppercase">Tài liệu và văn kiện</h1>
                <div className="flex-1 ">
                    <Explorer />
                </div>
            </div>
        </div>
    )
}
