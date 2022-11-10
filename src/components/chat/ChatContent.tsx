import React, { useEffect, useRef, useState } from "react"
import { useInView } from "react-intersection-observer"
import ERole from "../../enums/ERole"
import EUserStatus from "../../enums/EUserStatus"
import Message, { TMessageProps } from "./Message"

export default function ChatContent() {
    const [auto, setAuto] = useState(true)
    const bottomAnchorRef = useRef<HTMLDivElement>(null)
    const { ref: loadRef, inView: loadInView } = useInView({ threshold: 0 })
    const { ref: autoScrollRef, inView: autoScrollInView } = useInView({ threshold: 0 })

    useEffect(() => {
        if (auto) bottomAnchorRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [])

    useEffect(() => {
        setAuto(autoScrollInView)
    }, [autoScrollInView])

    return (
        <div>
            <div>
                <div ref={loadRef} className="h-5"></div>
                {messages.map((mess) => (
                    <Message key={mess.data._id} me={mess.me} data={mess.data}></Message>
                ))}
                <div ref={autoScrollRef} className="h-1"></div>
                <div ref={bottomAnchorRef} className="h-0"></div>
            </div>
        </div>
    )
}

const messages: TMessageProps[] = [
    {
        me: false,
        data: {
            _id: "1231231231",
            sender: {
                _id: "23423423",
                avatar: "https://cdn.pixabay.com/photo/2022/10/01/22/38/sugarloaf-rock-7492389__480.jpg",
                name: "Le Tahanh Nhan",
            },
            content: {
                text: "Hello toi la le thanh nhan, hahahah",
            },
            at: Date.now(),
        },
    },
    {
        me: true,
        data: {
            _id: "2234234",
            sender: {
                _id: "23423423",
                avatar: "https://cdn.pixabay.com/photo/2022/10/01/22/38/sugarloaf-rock-7492389__480.jpg",
                name: "Le Tahanh Nhan",
            },
            content: {
                text: "Hello toi la le thanh nhan, hahahah",
            },
            at: Date.now(),
        },
    },
    {
        me: false,
        data: {
            _id: "123121231",
            sender: {
                _id: "23423423",
                avatar: "https://cdn.pixabay.com/photo/2022/10/01/22/38/sugarloaf-rock-7492389__480.jpg",
                name: "Le Tahanh Nhan",
            },
            content: {
                text: "Hello toi la le thanh nhan, hahahah",
            },
            at: Date.now(),
        },
    },
    {
        me: true,
        data: {
            _id: "1231212",
            sender: {
                _id: "23423423",
                avatar: "https://cdn.pixabay.com/photo/2022/10/01/22/38/sugarloaf-rock-7492389__480.jpg",
                name: "Le Tahanh Nhan",
            },
            content: {
                text: "Hello toi la le thanh nhan, hahahah",
            },
            at: Date.now(),
        },
    },

    {
        me: true,
        data: {
            _id: "123121212",
            sender: {
                _id: "23423423",
                avatar: "https://cdn.pixabay.com/photo/2022/10/01/22/38/sugarloaf-rock-7492389__480.jpg",
                name: "Le Tahanh Nhan",
            },
            content: {
                text: "Hello toi la le thanh nhan, hahahah",
            },
            at: Date.now(),
        },
    },

    {
        me: true,
        data: {
            _id: "1231sfda212",
            sender: {
                _id: "23423423",
                avatar: "https://cdn.pixabay.com/photo/2022/10/01/22/38/sugarloaf-rock-7492389__480.jpg",
                name: "Le Tahanh Nhan",
            },
            content: {
                text: "Hello toi la le thanh nhan, hahahah",
            },
            at: Date.now(),
        },
    },

    {
        me: true,
        data: {
            _id: "12312a12",
            sender: {
                _id: "23423423",
                avatar: "https://cdn.pixabay.com/photo/2022/10/01/22/38/sugarloaf-rock-7492389__480.jpg",
                name: "Le Tahanh Nhan",
            },
            content: {
                text: "Hello toi la le thanh nhan, hahahah",
            },
            at: Date.now(),
        },
    },

    {
        me: true,
        data: {
            _id: "12312s12",
            sender: {
                _id: "23423423",
                avatar: "https://cdn.pixabay.com/photo/2022/10/01/22/38/sugarloaf-rock-7492389__480.jpg",
                name: "Le Tahanh Nhan",
            },
            content: {
                text: "Hello toi la le thanh nhan, hahahah",
            },
            at: Date.now(),
        },
    },

    {
        me: true,
        data: {
            _id: "1231212eq",
            sender: {
                _id: "23423423",
                avatar: "https://cdn.pixabay.com/photo/2022/10/01/22/38/sugarloaf-rock-7492389__480.jpg",
                name: "Le Tahanh Nhan",
            },
            content: {
                text: "Hello toi la le thanh nhan, hahahah",
            },
            at: Date.now(),
        },
    },

    {
        me: true,
        data: {
            _id: "1231qqeq212",
            sender: {
                _id: "23423423",
                avatar: "https://cdn.pixabay.com/photo/2022/10/01/22/38/sugarloaf-rock-7492389__480.jpg",
                name: "Le Tahanh Nhan",
            },
            content: {
                text: "Hello toi la le thanh nhan, hahahah",
            },
            at: Date.now(),
        },
    },
]
