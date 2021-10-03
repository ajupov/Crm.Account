import DealStatusChangeGetPagedListRequest from '../models/DealStatusChangeGetPagedListRequest'
import DealStatusChangeGetPagedListResponse from '../models/DealStatusChangeGetPagedListResponse'
import IJsonHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'

export default class DealStatusesChangesClient {
    private readonly _host: string
    private readonly _factory: IJsonHttpClientFactory

    constructor(host: string, factory: IJsonHttpClientFactory) {
        this._host = host
        this._factory = factory
    }

    public GetPagedListAsync = (
        request?: DealStatusChangeGetPagedListRequest
    ): Promise<DealStatusChangeGetPagedListResponse> =>
        this._factory
            .
            .postAsync<DealStatusChangeGetPagedListResponse>('/Deals/Statuses/Changes/v1/GetPagedList', request)
}
