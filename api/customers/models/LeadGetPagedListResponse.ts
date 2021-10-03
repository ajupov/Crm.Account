import Lead from './Lead'

export default interface LeadGetPagedListResponse {
    totalCount: number
    lastModifyDateTime?: string
    leads?: Lead[]
}
