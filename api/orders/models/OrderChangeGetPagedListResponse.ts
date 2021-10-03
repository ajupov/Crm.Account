import OrderChange from './OrderChange'

export default interface OrderChangeGetPagedListResponse {
    totalCount: number
    changes?: OrderChange[]
}
