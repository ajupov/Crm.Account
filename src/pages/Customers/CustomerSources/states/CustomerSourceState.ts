import CustomerSource from '../../../../../api/customers/models/CustomerSource'

export interface CustomerSourceState {
    isLoading: boolean
    source: CustomerSource
    setSource: (Source: CustomerSource) => void
    create: () => Promise<void>
    update: () => Promise<void>
}

export const customerSourceInitialState: CustomerSourceState = {
    isLoading: false,
    source: {
        id: void 0,
        accountId: void 0,
        name: void 0,
        isDeleted: false,
        createDateTime: void 0,
        modifyDateTime: void 0
    },
    setSource: (_: CustomerSource) => void 0,
    create: () => Promise.resolve(void 0),
    update: () => Promise.resolve(void 0)
}
