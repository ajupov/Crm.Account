import OrderStatus from './OrderStatus'

export default interface OrderStatusGetPagedListResponse {
    totalCount: number
    lastModifyDateTime?: string
    statuses?: OrderStatus[]
}
