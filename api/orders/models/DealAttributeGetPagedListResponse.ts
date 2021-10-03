import DealAttribute from './DealAttribute'

export default interface DealAttributeGetPagedListResponse {
    totalCount: number
    lastModifyDateTime?: string
    attributes?: DealAttribute[]
}
