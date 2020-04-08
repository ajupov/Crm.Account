/* eslint-disable */

import AttributeType from '../models/AttributeType'

export default interface LeadAttribute {
    id: string
    accountId: string
    type: AttributeType
    key?: string
    isDeleted: boolean
    createDateTime: string
    modifyDateTime?: string
}
