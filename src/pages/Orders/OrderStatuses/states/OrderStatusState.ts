import OrderStatus from '../../../../../api/orders/models/OrderStatus'

export interface OrderStatusState {
    isLoading: boolean
    status: OrderStatus
    setStatus: (Status: OrderStatus) => void
    create: () => Promise<void>
    update: () => Promise<void>
}

export const orderStatusInitialState: OrderStatusState = {
    isLoading: false,
    status: {
        id: void 0,
        accountId: void 0,
        name: void 0,
        isFinish: false,
        isDeleted: false,
        createDateTime: void 0,
        modifyDateTime: void 0
    },
    setStatus: (_: OrderStatus) => void 0,
    create: () => Promise.resolve(void 0),
    update: () => Promise.resolve(void 0)
}
