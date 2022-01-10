import StockArrival from '../../../../../api/stock/models/StockArrival'
import StockArrivalType from '../../../../../api/stock/models/StockArrivalType'

export interface StockArrivalState {
    isLoading: boolean
    stockArrival: StockArrival
    setStockArrival: (stockArrival: StockArrival) => void
    create: () => Promise<void>
    update: () => Promise<void>
}

export const stockArrivalInitialState: StockArrivalState = {
    isLoading: false,
    stockArrival: {
        id: void 0,
        accountId: void 0,
        createUserId: void 0,
        type: StockArrivalType.ArrivalFromSupplier,
        supplierId: void 0,
        orderId: void 0,
        inventoryId: void 0,
        isDeleted: false,
        createDateTime: void 0,
        modifyDateTime: void 0,
        items: []
    },
    setStockArrival: (_: StockArrival) => void 0,
    create: () => Promise.resolve(void 0),
    update: () => Promise.resolve(void 0)
}
