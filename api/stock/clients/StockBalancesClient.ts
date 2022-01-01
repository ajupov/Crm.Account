import IJsonHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'
import StockBalance from '../models/StockBalance'
import StockBalanceGetPagedListRequest from '../models/StockBalanceGetPagedListRequest'
import StockBalanceGetPagedListResponse from '../models/StockBalanceGetPagedListResponse'

export default class StockBalancesClient {
    private readonly _host: string
    private readonly _factory: IJsonHttpClientFactory

    constructor(host: string, factory: IJsonHttpClientFactory) {
        this._host = host
        this._factory = factory
    }

    public GetAsync = (id: string): Promise<StockBalance> =>
        this._factory.getAsync<StockBalance>(this._host + '/Stock/Balances/v1/Get', { id })

    public GetListAsync = (values?: string[]): Promise<StockBalance[]> =>
        this._factory.postAsync<StockBalance[]>(this._host + '/Stock/Balances/v1/GetList', void 0, values)

    public GetPagedListAsync = (request?: StockBalanceGetPagedListRequest): Promise<StockBalanceGetPagedListResponse> =>
        this._factory.postAsync<StockBalanceGetPagedListResponse>(
            this._host + '/Stock/Balances/v1/GetPagedList',
            void 0,
            request
        )

    public CreateAsync = (arrival?: StockBalance): Promise<string> =>
        this._factory.postAsync<string>(this._host + '/Stock/Balances/v1/Create', void 0, arrival)

    public UpdateAsync = (arrival?: StockBalance): Promise<void> =>
        this._factory.patchAsync(this._host + '/Stock/Balances/v1/Update', void 0, arrival)

    public DeleteAsync = (values?: string[]): Promise<void> =>
        this._factory.patchAsync(this._host + '/Stock/Balances/v1/Delete', void 0, values)

    public RestoreAsync = (values?: string[]): Promise<void> =>
        this._factory.patchAsync(this._host + '/Stock/Balances/v1/Restore', void 0, values)
}
