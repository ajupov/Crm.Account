import Customer from './Customer'

export default interface CustomerGetPagedListResponse {
    totalCount: number
    lastModifyDateTime?: string
    customers?: Customer[]
}
