import Order from './Order'

export default interface OrderGetPagedListResponse {
    totalCount: number
    lastModifyDateTime?: string
    orders?: Order[]
}
