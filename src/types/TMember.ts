type TMember = {
    _id: string
    association: string
    user: string
    role: string
    at: number
}

export type TCreateMember = {}
export type TUpdateMember = Partial<Pick<TMember, "role">>

export default TMember
