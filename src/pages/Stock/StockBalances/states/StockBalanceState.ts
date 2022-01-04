import StockBalance from '../../../../../api/stock/models/StockBalance'

export interface StockBalanceState {
    isLoading: boolean
    stockBalance: StockBalance
    setStockBalance: (stockBalance: StockBalance) => void
    create: () => Promise<void>
    update: () => Promise<void>
}

export const stockBalanceInitialState: StockBalanceState = {
    isLoading: false,
    stockBalance: {
        id: void 0,
        accountId: void 0,
        createUserId: void 0,
        roomId: void 0,
        productId: void 0,
        count: 0,
        isDeleted: false,
        createDateTime: void 0,
        modifyDateTime: void 0,
        uniqueElementIds: []
    },
    setStockBalance: (_: StockBalance) => void 0,
    create: () => Promise.resolve(void 0),
    update: () => Promise.resolve(void 0)
}
