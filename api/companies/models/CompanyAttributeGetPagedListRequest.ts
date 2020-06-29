import CompanyAttributeType from '../models/CompanyAttributeType'

export default interface CompanyAttributeGetPagedListRequest {
    types?: CompanyAttributeType[]
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
