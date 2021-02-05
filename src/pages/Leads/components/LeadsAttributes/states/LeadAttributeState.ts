import LeadAttribute from '../../../../../../api/leads/models/LeadAttribute'
import LeadAttributeType from '../../../../../../api/leads/models/LeadAttributeType'

export interface LeadAttributeState {
    isLoading: boolean
    attribute: LeadAttribute
    setAttribute: (attribute: LeadAttribute) => void
    create: () => Promise<void>
    update: () => Promise<void>
}

export const leadAttributeInitialState: LeadAttributeState = {
    isLoading: false,
    attribute: {
        id: void 0,
        accountId: void 0,
        type: LeadAttributeType.Text,
        key: void 0,
        isDeleted: false,
        createDateTime: void 0,
        modifyDateTime: void 0
    },
    setAttribute: (_: LeadAttribute) => void 0,
    create: () => Promise.resolve(void 0),
    update: () => Promise.resolve(void 0)
}
