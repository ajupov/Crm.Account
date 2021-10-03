import Deal from '../models/Deal'
import DealGetPagedListRequest from '../models/DealGetPagedListRequest'
import DealGetPagedListResponse from '../models/DealGetPagedListResponse'
import IJsonHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'

export default class DealsClient {
    private readonly _host: string
    private readonly _factory: IJsonHttpClientFactory

    constructor(host: string, factory: IJsonHttpClientFactory) {
        this._host = host
        this._factory = factory
    }

    public GetAsync = (id: string): Promise<Deal> =>
        this._factory.getAsync<Deal>('/Deals/v1/Get', { id })

    public GetListAsync = (values?: string[]): Promise<Deal[]> =>
        this._factory.postAsync<Deal[]>('/Deals/v1/GetList', values)

    public GetPagedListAsync = (request?: DealGetPagedListRequest): Promise<DealGetPagedListResponse> =>
        this._factory
            .
            .postAsync<DealGetPagedListResponse>('/Deals/v1/GetPagedList', request)

    public CreateAsync = (deal?: Deal): Promise<string> =>
        this._factory.putAsync<string>('/Deals/v1/Create', deal)

    public UpdateAsync = (deal?: Deal): Promise<void> =>
        this._factory.patchAsync('/Deals/v1/Update', deal)

    public DeleteAsync = (values?: string[]): Promise<void> =>
        this._factory.patchAsync('/Deals/v1/Delete', values)

    public RestoreAsync = (values?: string[]): Promise<void> =>
        this._factory.patchAsync('/Deals/v1/Restore', values)
}
