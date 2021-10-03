import LeadChange from './LeadChange'

export default interface LeadChangeGetPagedListResponse {
    totalCount: number
    changes?: LeadChange[]
}
