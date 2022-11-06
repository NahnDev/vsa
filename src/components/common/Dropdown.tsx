import { Fragment, useState } from "react"
import { Menu, Transition } from "@headlessui/react"
import clsx from "clsx"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"

type TDropdownProps<T> = {
    data: { label: string; value: T }[]
    onSelected: (value: T) => any
}
export default function Dropdown<T>(props: TDropdownProps<T>) {
    const [selected, setSelected] = useState(0)
    const target = props.data[selected]
    const handleChange = (v: T, index: number) => {
        props.onSelected && props.onSelected(v)
        setSelected(index)
    }
    return (
        <Menu as="div" className="w-full relative">
            <div className="w-full">
                <Menu.Button className="w-full px-5 flex flex-row justify-center items-center rounded-full border border-light  focus:outline-none">
                    <span className="p-2 text-sm ">{target.label}</span>
                    <div className="flex-1"></div>
                    <FontAwesomeIcon icon={faAngleDown} className="h-4 w-4" aria-hidden="true" />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        {props.data.map((el, key) => {
                            return (
                                <Menu.Item>
                                    {({ active }) => (
                                        <div
                                            onClick={() => handleChange(el.value, key)}
                                            className={clsx([
                                                active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                                                "block px-4 py-2 text-sm cursor-pointer",
                                            ])}
                                        >
                                            {el.label}
                                        </div>
                                    )}
                                </Menu.Item>
                            )
                        })}
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}
