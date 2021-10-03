import LeadAttribute from './LeadAttribute'

export default interface LeadAttributeGetPagedListResponse {
    totalCount: number
    lastModifyDateTime?: string
    attributes?: LeadAttribute[]
}
