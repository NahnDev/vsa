import React from "react"
import ReactDOM from "react-dom"
import { ReactFormBuilder } from "react-form-builder2"
import "react-form-builder2/dist/app.css"
import Demobar from "./Demobar"
import "./style.css"

export default function FormEditor() {
    return (
        <div>
            <div className="overflow-auto ">
                <ReactFormBuilder />
                <Demobar />
            </div>
        </div>
    )
}
