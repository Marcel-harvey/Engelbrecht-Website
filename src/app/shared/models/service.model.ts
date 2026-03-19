export interface ServiceInterface {
    id: number
    name: string
    description: string
    longDescription: string
    price: number
    duration: number
    image: string
    popular?: boolean
}

export interface ServiceTypeInterface {
    id: number;
}