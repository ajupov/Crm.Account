import Order from '../../../../../api/orders/models/Order'

export default interface OrdersState {
    isLoading: boolean
    orders: Order[]
    getAll: () => Promise<void>
}

export const ordersInitialState: OrdersState = {
    isLoading: false,
    orders: [],
    getAll: () => Promise.resolve()
}
