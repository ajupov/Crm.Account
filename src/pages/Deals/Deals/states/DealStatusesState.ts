import DealStatus from '../../../../../api/orders/models/DealStatus'

export default interface DealStatusesState {
    isLoading: boolean
    statuses: DealStatus[]
    getAll: () => Promise<void>
}

export const dealStatusesInitialState: DealStatusesState = {
    isLoading: false,
    statuses: [],
    getAll: () => Promise.resolve()
}
