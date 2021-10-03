import OrderAttributeType from './OrderAttributeType'

export default interface OrderAttributeGetPagedListRequest {
    types?: OrderAttributeType[]
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
