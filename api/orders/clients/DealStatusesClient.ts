import DealStatus from '../models/DealStatus'
import DealStatusGetPagedListRequest from '../models/DealStatusGetPagedListRequest'
import DealStatusGetPagedListResponse from '../models/DealStatusGetPagedListResponse'
import IJsonHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'

export default class DealStatusesClient {
    private readonly _host: string
    private readonly _factory: IJsonHttpClientFactory

    constructor(host: string, factory: IJsonHttpClientFactory) {
        this._host = host
        this._factory = factory
    }

    public GetAsync = (id: string): Promise<DealStatus> =>
        this._factory
            .
            .getAsync<DealStatus>('/Deals/Statuses/v1/Get', { id })

    public GetListAsync = (values?: string[]): Promise<DealStatus[]> =>
        this._factory
            .
            .postAsync<DealStatus[]>('/Deals/Statuses/v1/GetList', values)

    public GetPagedListAsync = (request?: DealStatusGetPagedListRequest): Promise<DealStatusGetPagedListResponse> =>
        this._factory
            .
            .postAsync<DealStatusGetPagedListResponse>('/Deals/Statuses/v1/GetPagedList', request)

    public CreateAsync = (status?: DealStatus): Promise<string> =>
        this._factory
            .
            .put<string>('/Deals/Statuses/v1/Create', status)

    public UpdateAsync = (status?: DealStatus): Promise<void> =>
        this._factory.patchAsync('/Deals/Statuses/v1/Update', status)

    public DeleteAsync = (values?: string[]): Promise<void> =>
        this._factory.patchAsync('/Deals/Statuses/v1/Delete', values)

    public RestoreAsync = (values?: string[]): Promise<void> =>
        this._factory.patchAsync('/Deals/Statuses/v1/Restore', values)
}
