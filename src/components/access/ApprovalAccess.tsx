import React from "react"
import Access, { AccessHOC } from "./Access"

const ApprovalAccess = AccessHOC((permission) => permission.approval || permission.manager?.unit)
export default ApprovalAccess

export const ApprovalSubmitAccess = AccessHOC((permission) => permission.approval)
export const ApprovalApprovedAccess = AccessHOC((permission) => permission.manager.unit)
