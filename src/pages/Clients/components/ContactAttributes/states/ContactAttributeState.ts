import ContactAttribute from '../../../../../../api/contacts/models/ContactAttribute'
import ContactAttributeType from '../../../../../../api/contacts/models/ContactAttributeType'

export interface ContactAttributeState {
    isLoading: boolean
    attribute: ContactAttribute
    setAttribute: (attribute: ContactAttribute) => void
    create: () => Promise<void>
    update: () => Promise<void>
}

export const contactAttributeInitialState: ContactAttributeState = {
    isLoading: false,
    attribute: {
        id: void 0,
        accountId: void 0,
        type: ContactAttributeType.Text,
        key: void 0,
        isDeleted: false,
        createDateTime: void 0,
        modifyDateTime: void 0
    },
    setAttribute: (_: ContactAttribute) => void 0,
    create: () => Promise.resolve(void 0),
    update: () => Promise.resolve(void 0)
}
