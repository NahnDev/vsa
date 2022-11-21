import React from "react"
import { Route, Routes } from "react-router-dom"
import MEventLayout from "./MEventLayout"
import MEventMainPage from "./MEventMainPage"
import MEventUpdatePage from "./MEventManagerPage"
import MEventPostPage from "./MEventPostPage"
import MEventResourcePage from "./MEventResourcePage"
import MEventVolunteerPage from "./MEventVolunteerPage"

export default function MEventRouter() {
    return (
        <div className="pl-0 h-full overflow-y-auto">
            <Routes>
                <Route path="/*" element={<MEventMainPage />} />
                <Route
                    path="/:eId/*"
                    element={
                        <MEventLayout>
                            <Routes>
                                <Route path="/*" element={<MEventUpdatePage />} />
                                <Route path="/volunteers/*" element={<MEventVolunteerPage />} />
                                <Route path="/posts/*" element={<MEventPostPage />} />
                                <Route path="/resources/*" element={<MEventResourcePage />} />
                            </Routes>
                        </MEventLayout>
                    }
                />
            </Routes>
        </div>
    )
}
