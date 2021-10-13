import { Guid } from 'guid-typescript'
import OrderAttribute from '../../../../../api/orders/models/OrderAttribute'
import OrderAttributeType from '../../../../../api/orders/models/OrderAttributeType'

export interface OrderAttributeState {
    isLoading: boolean
    attribute: OrderAttribute
    setAttribute: (attribute: OrderAttribute) => void
    create: () => Promise<void>
    update: () => Promise<void>
}

export const orderAttributeInitialState: OrderAttributeState = {
    isLoading: false,
    attribute: {
        id: Guid.create().toString(),
        accountId: void 0,
        type: OrderAttributeType.Text,
        key: void 0,
        isDeleted: false,
        createDateTime: void 0,
        modifyDateTime: void 0
    },
    setAttribute: (_: OrderAttribute) => void 0,
    create: () => Promise.resolve(void 0),
    update: () => Promise.resolve(void 0)
}
