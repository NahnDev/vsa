import TSocial from "./TSocial"

type TAssociation = {
    _id: {}
    name: string
    uri: string
    introduction: string
    social: TSocial
    images: string[]
    logo: string
}

export type TAssociationCreateDto = Pick<TAssociation, "name" | "uri">
export type TAssociationUpdateDto = Partial<
    Pick<TAssociation, "name" | "uri" | "images" | "introduction" | "logo" | "social">
>

export default TAssociation
