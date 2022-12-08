import { createContext, PropsWithChildren, useContext, useRef } from "react"
import io, { Socket } from "socket.io-client"

// export default socket
// io("ws://localhost:8080/", {
//   reconnectionDelayMax: 10000,
// })
const SocketContext = createContext<Socket | null>(null)

export function SocketProvider(props: PropsWithChildren<{}>) {
    const socket = useRef(
        io("ws://localhost:8080/", {
            reconnectionDelayMax: 10000,
        })
    ).current
    return <SocketContext.Provider value={socket}>{props.children}</SocketContext.Provider>
}

export function useSocket() {
    return useContext(SocketContext) as Socket
}
