import IJsonHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'
import StockConsumption from '../models/StockConsumption'
import StockConsumptionGetPagedListRequest from '../models/StockConsumptionGetPagedListRequest'
import StockConsumptionGetPagedListResponse from '../models/StockConsumptionGetPagedListResponse'

export default class StockConsumptionsClient {
    private readonly _host: string
    private readonly _factory: IJsonHttpClientFactory

    constructor(host: string, factory: IJsonHttpClientFactory) {
        this._host = host
        this._factory = factory
    }

    public GetAsync = (id: string): Promise<StockConsumption> =>
        this._factory.getAsync<StockConsumption>(this._host + '/Stock/Consumptions/v1/Get', { id })

    public GetListAsync = (values?: string[]): Promise<StockConsumption[]> =>
        this._factory.postAsync<StockConsumption[]>(this._host + '/Stock/Consumptions/v1/GetList', void 0, values)

    public GetPagedListAsync = (request?: StockConsumptionGetPagedListRequest): Promise<StockConsumptionGetPagedListResponse> =>
        this._factory.postAsync<StockConsumptionGetPagedListResponse>(
            this._host + '/Stock/Consumptions/v1/GetPagedList',
            void 0,
            request
        )

    public CreateAsync = (arrival?: StockConsumption): Promise<string> =>
        this._factory.postAsync<string>(this._host + '/Stock/Consumptions/v1/Create', void 0, arrival)

    public UpdateAsync = (arrival?: StockConsumption): Promise<void> =>
        this._factory.patchAsync(this._host + '/Stock/Consumptions/v1/Update', void 0, arrival)

    public DeleteAsync = (values?: string[]): Promise<void> =>
        this._factory.patchAsync(this._host + '/Stock/Consumptions/v1/Delete', void 0, values)

    public RestoreAsync = (values?: string[]): Promise<void> =>
        this._factory.patchAsync(this._host + '/Stock/Consumptions/v1/Restore', void 0, values)
}
