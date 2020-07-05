import ContactAttributeType from '../models/ContactAttributeType'

export default interface ContactAttributeGetPagedListRequest {
    types?: ContactAttributeType[]
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
