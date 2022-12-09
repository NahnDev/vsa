import TSocial from "./TSocial"

type TAssociation = {
    _id: string
    name: string
    uri: string
    introduction: string
    social: TSocial
    manager?: string
    images: string[]
    logo: string
    block: boolean
}

export type TAssociationCreateDto = Pick<TAssociation, "name" | "manager">
export type TAssociationUpdateDto = Partial<
    Pick<TAssociation, "name" | "uri" | "images" | "introduction" | "logo" | "social" | "block">
>

export default TAssociation
