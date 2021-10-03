import DealStatus from './DealStatus'

export default interface DealStatusGetPagedListResponse {
    totalCount: number
    lastModifyDateTime?: string
    statuses?: DealStatus[]
}
