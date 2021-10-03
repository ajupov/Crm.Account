import CustomerAttributeType from './CustomerAttributeType'

export default interface CustomerAttributeGetPagedListRequest {
    types?: CustomerAttributeType[]
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
