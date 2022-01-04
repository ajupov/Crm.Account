import StockRoom from '../../../../../api/stock/models/StockRoom'

export interface StockRoomState {
    isLoading: boolean
    room: StockRoom
    setStatus: (Status: StockRoom) => void
    create: () => Promise<void>
    update: () => Promise<void>
}

export const stockRoomInitialState: StockRoomState = {
    isLoading: false,
    room: {
        id: void 0,
        accountId: void 0,
        name: void 0,
        isDeleted: false,
        createDateTime: void 0,
        modifyDateTime: void 0
    },
    setStatus: (_: StockRoom) => void 0,
    create: () => Promise.resolve(void 0),
    update: () => Promise.resolve(void 0)
}
