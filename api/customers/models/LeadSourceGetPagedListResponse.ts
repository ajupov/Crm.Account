import LeadSource from './LeadSource'

export default interface LeadSourceGetPagedListResponse {
    totalCount: number
    lastModifyDateTime?: string
    sources?: LeadSource[]
}
