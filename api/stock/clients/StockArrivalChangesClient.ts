import IJsonHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'
import StockArrivalChangeGetPagedListRequest from '../models/StockArrivalChangeGetPagedListRequest'
import StockArrivalChangeGetPagedListResponse from '../models/StockArrivalChangeGetPagedListResponse'

export default class StockArrivalChangesClient {
    private readonly _host: string
    private readonly _factory: IJsonHttpClientFactory

    constructor(host: string, factory: IJsonHttpClientFactory) {
        this._host = host
        this._factory = factory
    }

    public GetPagedListAsync = (
        request?: StockArrivalChangeGetPagedListRequest
    ): Promise<StockArrivalChangeGetPagedListResponse> =>
        this._factory.postAsync<StockArrivalChangeGetPagedListResponse>(
            this._host + '/Stock/Arrivals/Changes/v1/GetPagedList',
            void 0,
            request
        )
}
