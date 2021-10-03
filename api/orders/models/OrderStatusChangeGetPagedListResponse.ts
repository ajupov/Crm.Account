import OrderStatusChange from './OrderStatusChange'

export default interface OrderStatusChangeGetPagedListResponse {
    totalCount: number
    changes?: OrderStatusChange[]
}
