import OrderTypeChange from './OrderTypeChange'

export default interface OrderTypeChangeGetPagedListResponse {
    totalCount: number
    changes?: OrderTypeChange[]
}
