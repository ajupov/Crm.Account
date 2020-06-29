import LeadAttributeType from '../models/LeadAttributeType'

export default interface LeadAttributeGetPagedListRequest {
    types?: LeadAttributeType[]
    key?: string
    isDeleted?: boolean
    minCreateDate?: string
    maxCreateDate?: string
    minModifyDate?: string
    maxModifyDate?: string
    offset: number
    limit: number
    sortBy?: string
    orderBy?: string
}
