import DealAttributeType from './DealAttributeType'

export default interface DealAttributeGetPagedListRequest {
    types?: DealAttributeType[]
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
