import LeadAttributeChange from './LeadAttributeChange'

export default interface LeadAttributeChangeGetPagedListResponse {
    totalCount: number
    changes?: LeadAttributeChange[]
}
