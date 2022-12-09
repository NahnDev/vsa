import React from "react"
import Access, { AccessHOC } from "./Access"

const MemberAccess = AccessHOC((permission) => permission.member)
export default MemberAccess
