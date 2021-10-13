import { Guid } from 'guid-typescript'
import OrderType from '../../../../../api/orders/models/OrderType'

export interface OrderTypeState {
    isLoading: boolean
    type: OrderType
    setType: (Type: OrderType) => void
    create: () => Promise<void>
    update: () => Promise<void>
}

export const orderTypeInitialState: OrderTypeState = {
    isLoading: false,
    type: {
        id: Guid.create().toString(),
        accountId: void 0,
        name: void 0,
        isDeleted: false,
        createDateTime: void 0,
        modifyDateTime: void 0
    },
    setType: (_: OrderType) => void 0,
    create: () => Promise.resolve(void 0),
    update: () => Promise.resolve(void 0)
}
