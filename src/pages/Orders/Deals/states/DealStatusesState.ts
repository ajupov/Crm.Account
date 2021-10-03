import OrderStatus from '../../../../../api/orders/models/OrderStatus'

export default interface OrderStatusesState {
    isLoading: boolean
    statuses: OrderStatus[]
    getAll: () => Promise<void>
}

export const orderStatusesInitialState: OrderStatusesState = {
    isLoading: false,
    statuses: [],
    getAll: () => Promise.resolve()
}
