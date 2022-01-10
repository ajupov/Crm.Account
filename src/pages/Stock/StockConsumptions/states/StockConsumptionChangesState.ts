import StockConsumptionChange from '../../../../../api/stock/models/StockConsumptionChange'
import StockConsumptionChangeGetPagedListRequest from '../../../../../api/stock/models/StockConsumptionChangeGetPagedListRequest'
import StockConsumptionChangeGetPagedListResponse from '../../../../../api/stock/models/StockConsumptionChangeGetPagedListResponse'

const DefaultLimit = 10
const DefaultSortBy = 'CreateDateTime'
const DefaultOrderBy = 'desc'

export default interface StockConsumptionChangesState {
    request: StockConsumptionChangeGetPagedListRequest
    setRequest: (request: StockConsumptionChangeGetPagedListRequest) => void
    isLoading: boolean
    changes: StockConsumptionChange[]
    total: number
    getAll: () => Promise<StockConsumptionChangeGetPagedListResponse | undefined>
}

export const stockConsumptionChangesInitialState: StockConsumptionChangesState = {
    request: {
        stockConsumptionId: '',
        minCreateDate: void 0,
        maxCreateDate: void 0,
        offset: 0,
        limit: DefaultLimit,
        sortBy: DefaultSortBy,
        orderBy: DefaultOrderBy
    },
    setRequest: (_: StockConsumptionChangeGetPagedListRequest) => void 0,
    isLoading: false,
    changes: [],
    total: 0,
    getAll: () => Promise.resolve({ totalCount: 0 })
}
