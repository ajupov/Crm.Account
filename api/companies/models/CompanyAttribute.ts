import CompanyAttributeType from '../models/CompanyAttributeType'

export default interface CompanyAttribute {
    id?: string
    accountId?: string
    type: CompanyAttributeType
    key?: string
    isDeleted: boolean
    createDateTime?: string
    modifyDateTime?: string
}
