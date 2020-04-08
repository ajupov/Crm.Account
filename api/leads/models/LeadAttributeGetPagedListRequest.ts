/* eslint-disable */

import AttributeType from '../models/AttributeType'

export default interface LeadAttributeGetPagedListRequest {
    types?: AttributeType[]
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
