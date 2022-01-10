import StockConsumption from '../../../../../api/stock/models/StockConsumption'
import StockConsumptionType from '../../../../../api/stock/models/StockConsumptionType'

export interface StockConsumptionState {
    isLoading: boolean
    stockConsumption: StockConsumption
    setStockConsumption: (stockConsumption: StockConsumption) => void
    create: () => Promise<void>
    update: () => Promise<void>
}

export const stockConsumptionInitialState: StockConsumptionState = {
    isLoading: false,
    stockConsumption: {
        id: void 0,
        accountId: void 0,
        createUserId: void 0,
        type: StockConsumptionType.SaleToCustomer,
        supplierId: void 0,
        orderId: void 0,
        inventoryId: void 0,
        isDeleted: false,
        createDateTime: void 0,
        modifyDateTime: void 0,
        items: []
    },
    setStockConsumption: (_: StockConsumption) => void 0,
    create: () => Promise.resolve(void 0),
    update: () => Promise.resolve(void 0)
}
