import Deal from '../../../../../api/orders/models/Deal'

export default interface DealsState {
    isLoading: boolean
    deals: Deal[]
    getAll: () => Promise<void>
}

export const dealsInitialState: DealsState = {
    isLoading: false,
    deals: [],
    getAll: () => Promise.resolve()
}
