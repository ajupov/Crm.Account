import IJsonHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'
import StockArrival from '../models/StockArrival'
import StockArrivalGetPagedListRequest from '../models/StockArrivalGetPagedListRequest'
import StockArrivalGetPagedListResponse from '../models/StockArrivalGetPagedListResponse'

export default class StockArrivalsClient {
    private readonly _host: string
    private readonly _factory: IJsonHttpClientFactory

    constructor(host: string, factory: IJsonHttpClientFactory) {
        this._host = host
        this._factory = factory
    }

    public GetAsync = (id: string): Promise<StockArrival> =>
        this._factory.getAsync<StockArrival>(this._host + '/Stock/Arrivals/v1/Get', { id })

    public GetListAsync = (values?: string[]): Promise<StockArrival[]> =>
        this._factory.postAsync<StockArrival[]>(this._host + '/Stock/Arrivals/v1/GetList', void 0, values)

    public GetPagedListAsync = (request?: StockArrivalGetPagedListRequest): Promise<StockArrivalGetPagedListResponse> =>
        this._factory.postAsync<StockArrivalGetPagedListResponse>(
            this._host + '/Stock/Arrivals/v1/GetPagedList',
            void 0,
            request
        )

    public CreateAsync = (arrival?: StockArrival): Promise<string> =>
        this._factory.postAsync<string>(this._host + '/Stock/Arrivals/v1/Create', void 0, arrival)

    public UpdateAsync = (arrival?: StockArrival): Promise<void> =>
        this._factory.patchAsync(this._host + '/Stock/Arrivals/v1/Update', void 0, arrival)

    public DeleteAsync = (values?: string[]): Promise<void> =>
        this._factory.patchAsync(this._host + '/Stock/Arrivals/v1/Delete', void 0, values)

    public RestoreAsync = (values?: string[]): Promise<void> =>
        this._factory.patchAsync(this._host + '/Stock/Arrivals/v1/Restore', void 0, values)
}
