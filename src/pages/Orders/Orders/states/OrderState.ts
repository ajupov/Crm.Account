import Order from '../../../../../api/orders/models/Order'
import OrderAttribute from '../../../../../api/orders/models/OrderAttribute'

export interface OrderState {
    isLoading: boolean
    order: Order
    attributes: OrderAttribute[]
    setOrder: (order: Order) => void
    create: () => Promise<void>
    update: () => Promise<void>
}

export const orderInitialState: OrderState = {
    isLoading: false,
    order: {
        id: void 0,
        accountId: void 0,
        typeId: void 0,
        statusId: void 0,
        createUserId: void 0,
        responsibleUserId: void 0,
        customerId: void 0,
        name: void 0,
        startDateTime: void 0,
        endDateTime: void 0,
        sum: 0,
        sumWithoutDiscount: 0,
        isDeleted: false,
        createDateTime: void 0,
        modifyDateTime: void 0,
        type: void 0,
        status: void 0,
        positions: [],
        attributeLinks: []
    },
    attributes: [],
    setOrder: (_: Order) => void 0,
    create: () => Promise.resolve(void 0),
    update: () => Promise.resolve(void 0)
}
