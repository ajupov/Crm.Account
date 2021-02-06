import DealStatus from '../../../../../api/deals/models/DealStatus'

export interface DealStatusState {
    isLoading: boolean
    status: DealStatus
    setStatus: (Status: DealStatus) => void
    create: () => Promise<void>
    update: () => Promise<void>
}

export const dealStatusInitialState: DealStatusState = {
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
    setStatus: (_: DealStatus) => void 0,
    create: () => Promise.resolve(void 0),
    update: () => Promise.resolve(void 0)
}
