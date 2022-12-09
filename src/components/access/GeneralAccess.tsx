import React from "react"
import Access, { AccessHOC } from "./Access"

const GeneralAccess = AccessHOC((permission) => permission.general || permission.manager?.unit)
export default GeneralAccess
