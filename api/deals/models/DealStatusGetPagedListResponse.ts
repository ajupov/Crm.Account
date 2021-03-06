import DealStatus from '../models/DealStatus'

export default interface DealStatusGetPagedListResponse {
    totalCount: number
    lastModifyDateTime?: string
    statuses?: DealStatus[]
}
