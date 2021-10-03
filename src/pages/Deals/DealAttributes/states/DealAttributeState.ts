import DealAttribute from '../../../../../api/orders/models/DealAttribute'
import DealAttributeType from '../../../../../api/orders/models/DealAttributeType'

export interface DealAttributeState {
    isLoading: boolean
    attribute: DealAttribute
    setAttribute: (attribute: DealAttribute) => void
    create: () => Promise<void>
    update: () => Promise<void>
}

export const dealAttributeInitialState: DealAttributeState = {
    isLoading: false,
    attribute: {
        id: void 0,
        accountId: void 0,
        type: DealAttributeType.Text,
        key: void 0,
        isDeleted: false,
        createDateTime: void 0,
        modifyDateTime: void 0
    },
    setAttribute: (_: DealAttribute) => void 0,
    create: () => Promise.resolve(void 0),
    update: () => Promise.resolve(void 0)
}
