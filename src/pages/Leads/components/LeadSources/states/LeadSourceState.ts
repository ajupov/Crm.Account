import LeadSource from '../../../../../../api/customers/models/LeadSource'

export interface LeadSourceState {
    isLoading: boolean
    source: LeadSource
    setSource: (Source: LeadSource) => void
    create: () => Promise<void>
    update: () => Promise<void>
}

export const leadSourceInitialState: LeadSourceState = {
    isLoading: false,
    source: {
        id: void 0,
        accountId: void 0,
        name: void 0,
        isDeleted: false,
        createDateTime: void 0,
        modifyDateTime: void 0
    },
    setSource: (_: LeadSource) => void 0,
    create: () => Promise.resolve(void 0),
    update: () => Promise.resolve(void 0)
}
