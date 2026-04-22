export interface Product {
    id: number | string
    slug: string
    name: string
    picture: string
    price: number
    manufacturer: string
    series: string
    base_color: string
    height: string | number
    surface: string
    frame_rate: string
}

export interface FilterConfig {
    label: string
    queryKey: string
    storeKey: keyof Product
}

export interface FilterOption {
    slug: string
    name: string
}