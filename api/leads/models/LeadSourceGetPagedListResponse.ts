import LeadSource from '../models/LeadSource'

export default interface LeadSourceGetPagedListResponse {
    totalCount: number
    lastModifyDateTime?: string
    sources?: LeadSource[]
}
