import LeadAttribute from '../models/LeadAttribute'

export default interface LeadAttributeGetPagedListResponse {
    totalCount: number
    lastModifyDateTime?: string
    attributes?: LeadAttribute[]
}
