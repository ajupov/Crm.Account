import IJsonHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'
import StockBalanceChangeGetPagedListRequest from '../models/StockBalanceChangeGetPagedListRequest'
import StockBalanceChangeGetPagedListResponse from '../models/StockBalanceChangeGetPagedListResponse'

export default class StockBalanceChangesClient {
    private readonly _host: string
    private readonly _factory: IJsonHttpClientFactory

    constructor(host: string, factory: IJsonHttpClientFactory) {
        this._host = host
        this._factory = factory
    }

    public GetPagedListAsync = (
        request?: StockBalanceChangeGetPagedListRequest
    ): Promise<StockBalanceChangeGetPagedListResponse> =>
        this._factory.postAsync<StockBalanceChangeGetPagedListResponse>(
            this._host + '/Stock/Balances/Changes/v1/GetPagedList',
            void 0,
            request
        )
}
