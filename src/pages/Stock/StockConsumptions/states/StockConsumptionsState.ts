import StockConsumption from '../../../../../api/stock/models/StockConsumption'
import StockConsumptionGetPagedListRequest from '../../../../../api/stock/models/StockConsumptionGetPagedListRequest'
import StockConsumptionGetPagedListResponse from '../../../../../api/stock/models/StockConsumptionGetPagedListResponse'

const DefaultLimit = 10
const DefaultSortBy = 'CreateDateTime'
const DefaultOrderBy = 'desc'

export default interface StockConsumptionsState {
    request: StockConsumptionGetPagedListRequest
    setRequest: (request: StockConsumptionGetPagedListRequest) => void
    isLoading: boolean
    stockConsumptions: StockConsumption[]
    total: number
    lastModifyDateTime: string
    getPagedList: () => Promise<void>
    getAll: () => Promise<StockConsumptionGetPagedListResponse>
}

export const stockConsumptionsInitialState: StockConsumptionsState = {
    request: {
        isDeleted: false,
        offset: 0,
        limit: DefaultLimit,
        sortBy: DefaultSortBy,
        orderBy: DefaultOrderBy
    },
    setRequest: (_: StockConsumptionGetPagedListRequest) => void 0,
    isLoading: false,
    stockConsumptions: [],
    total: 0,
    lastModifyDateTime: '',
    getPagedList: () => Promise.resolve(void 0),
    getAll: () => Promise.resolve({ totalCount: 0 })
}
