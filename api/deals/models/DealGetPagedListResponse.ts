import Deal from '../models/Deal'

export default interface DealGetPagedListResponse {
    totalCount: number
    lastModifyDateTime?: string
    deals?: Deal[]
}
