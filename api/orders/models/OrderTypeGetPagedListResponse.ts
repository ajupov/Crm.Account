import OrderType from './OrderType'

export default interface OrderTypeGetPagedListResponse {
    totalCount: number
    lastModifyDateTime?: string
    types?: OrderType[]
}
