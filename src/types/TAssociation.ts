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
}

export type TAssociationCreateDto = Pick<TAssociation, "name" | "manager">
export type TAssociationUpdateDto = Partial<
    Pick<TAssociation, "name" | "uri" | "images" | "introduction" | "logo" | "social">
>

export default TAssociation
