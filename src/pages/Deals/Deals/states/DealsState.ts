import Deal from '../../../../../api/deals/models/Deal'

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
