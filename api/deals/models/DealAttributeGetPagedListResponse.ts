import DealAttribute from '../models/DealAttribute'

export default interface DealAttributeGetPagedListResponse {
    totalCount: number
    lastModifyDateTime?: string
    attributes?: DealAttribute[]
}
