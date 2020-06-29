import LeadSourceChange from '../models/LeadSourceChange'

export default interface LeadSourceChangeGetPagedListResponse {
    totalCount: number
    changes?: LeadSourceChange[]
}
