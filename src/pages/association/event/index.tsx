import { Route, Routes } from "react-router-dom"
import EventDetailPage from "./EventDetailPage"
import EventMainPage from "./EventMainPage"

export default function AssociationEventPage() {
    return (
        <Routes>
            <Route path="/" element={<EventMainPage />}></Route>
            <Route path="/:eId" element={<EventDetailPage />}></Route>
        </Routes>
    )
}
