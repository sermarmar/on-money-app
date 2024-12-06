export interface ProductProps {
    name: string
    description: string
    type: string
    subtype?: string
    size?: string | number
    stock?: number
    url: string
    status: string
}