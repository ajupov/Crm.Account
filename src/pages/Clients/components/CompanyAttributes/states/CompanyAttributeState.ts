import CompanyAttribute from '../../../../../../api/companies/models/CompanyAttribute'
import CompanyAttributeType from '../../../../../../api/companies/models/CompanyAttributeType'

export interface CompanyAttributeState {
    isLoading: boolean
    attribute: CompanyAttribute
    setAttribute: (attribute: CompanyAttribute) => void
    create: () => Promise<void>
    update: () => Promise<void>
}

export const companyAttributeInitialState: CompanyAttributeState = {
    isLoading: false,
    attribute: {
        id: void 0,
        accountId: void 0,
        type: CompanyAttributeType.Text,
        key: void 0,
        isDeleted: false,
        createDateTime: void 0,
        modifyDateTime: void 0
    },
    setAttribute: (_: CompanyAttribute) => void 0,
    create: () => Promise.resolve(void 0),
    update: () => Promise.resolve(void 0)
}
