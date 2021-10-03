import LeadSourceChange from './LeadSourceChange'

export default interface LeadSourceChangeGetPagedListResponse {
    totalCount: number
    changes?: LeadSourceChange[]
}
