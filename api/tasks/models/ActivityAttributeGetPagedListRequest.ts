import ActivityAttributeType from './ActivityAttributeType'

export default interface ActivityAttributeGetPagedListRequest {
    types?: ActivityAttributeType[]
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
