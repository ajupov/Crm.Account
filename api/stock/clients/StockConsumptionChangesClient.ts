import IJsonHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'
import StockConsumptionChangeGetPagedListRequest from '../models/StockConsumptionChangeGetPagedListRequest'
import StockConsumptionChangeGetPagedListResponse from '../models/StockConsumptionChangeGetPagedListResponse'

export default class StockConsumptionChangesClient {
    private readonly _host: string
    private readonly _factory: IJsonHttpClientFactory

    constructor(host: string, factory: IJsonHttpClientFactory) {
        this._host = host
        this._factory = factory
    }

    public GetPagedListAsync = (
        request?: StockConsumptionChangeGetPagedListRequest
    ): Promise<StockConsumptionChangeGetPagedListResponse> =>
        this._factory.postAsync<StockConsumptionChangeGetPagedListResponse>(
            this._host + '/Stock/Consumptions/Changes/v1/GetPagedList',
            void 0,
            request
        )
}
