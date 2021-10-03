import DealChangeGetPagedListRequest from '../models/DealChangeGetPagedListRequest'
import DealChangeGetPagedListResponse from '../models/DealChangeGetPagedListResponse'
import IJsonHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'

export default class DealChangesClient {
    private readonly _host: string
    private readonly _factory: IJsonHttpClientFactory

    constructor(host: string, factory: IJsonHttpClientFactory) {
        this._host = host
        this._factory = factory
    }

    public GetPagedListAsync = (request?: DealChangeGetPagedListRequest): Promise<DealChangeGetPagedListResponse> =>
        this._factory
            .
            .postAsync<DealChangeGetPagedListResponse>('/Deals/Changes/v1/GetPagedList', request)
}
