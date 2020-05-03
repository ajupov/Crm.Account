import Product from '../models/Product'

export default interface ProductGetPagedListResponse {
    totalCount: number
    lastModifyDateTime?: string
    products?: Product[]
}
