import Deal from './Deal'

export default interface DealGetPagedListResponse {
    totalCount: number
    lastModifyDateTime?: string
    deals?: Deal[]
}
