/* eslint-disable */

import AttributeType from '../models/AttributeType'

export default interface CompanyAttribute {
    id: string
    accountId: string
    type: AttributeType
    key?: string
    isDeleted: boolean
    createDateTime: string
    modifyDateTime?: string
}
