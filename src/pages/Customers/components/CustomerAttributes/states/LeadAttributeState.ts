import CustomerAttribute from '../../../../../../api/customers/models/CustomerAttribute'
import CustomerAttributeType from '../../../../../../api/customers/models/CustomerAttributeType'

export interface CustomerAttributeState {
    isLoading: boolean
    attribute: CustomerAttribute
    setAttribute: (attribute: CustomerAttribute) => void
    create: () => Promise<void>
    update: () => Promise<void>
}

export const customerAttributeInitialState: CustomerAttributeState = {
    isLoading: false,
    attribute: {
        id: void 0,
        accountId: void 0,
        type: CustomerAttributeType.Text,
        key: void 0,
        isDeleted: false,
        createDateTime: void 0,
        modifyDateTime: void 0
    },
    setAttribute: (_: CustomerAttribute) => void 0,
    create: () => Promise.resolve(void 0),
    update: () => Promise.resolve(void 0)
}
