import DealTypeChangeGetPagedListRequest from '../models/DealTypeChangeGetPagedListRequest'
import DealTypeChangeGetPagedListResponse from '../models/DealTypeChangeGetPagedListResponse'
import IJsonHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'

export default class DealTypesChangesClient {
    private readonly _host: string
    private readonly _factory: IJsonHttpClientFactory

    constructor(host: string, factory: IJsonHttpClientFactory) {
                this._host = host
        this._factory = factory
    }

    public GetPagedListAsync = (
        request?: DealTypeChangeGetPagedListRequest
    ): Promise<DealTypeChangeGetPagedListResponse> =>
        this._factory
            .
            .postAsync<DealTypeChangeGetPagedListResponse>('/Deals/Types/Changes/v1/GetPagedList', request)
}
