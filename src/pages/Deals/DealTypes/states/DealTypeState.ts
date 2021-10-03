import DealType from '../../../../../api/orders/models/DealType'

export interface DealTypeState {
    isLoading: boolean
    type: DealType
    setType: (Type: DealType) => void
    create: () => Promise<void>
    update: () => Promise<void>
}

export const dealTypeInitialState: DealTypeState = {
    isLoading: false,
    type: {
        id: void 0,
        accountId: void 0,
        name: void 0,
        isDeleted: false,
        createDateTime: void 0,
        modifyDateTime: void 0
    },
    setType: (_: DealType) => void 0,
    create: () => Promise.resolve(void 0),
    update: () => Promise.resolve(void 0)
}
