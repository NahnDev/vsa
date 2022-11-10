export enum EEventStatus {
    PRIVATE = "PRIVATE",
    PUBLIC = "PUBLIC",
    BLOCK = "BLOCK",
}

export const StatusDescriptions: { [key in EEventStatus]: string } = {
    BLOCK: "đã kết thúc",
    PRIVATE: "đang chuẩn bị",
    PUBLIC: "đang diễn ra",
}

export default EEventStatus
