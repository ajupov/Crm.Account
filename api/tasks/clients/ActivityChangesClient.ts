import ActivityChangeGetPagedListRequest from '../models/ActivityChangeGetPagedListRequest'
import ActivityChangeGetPagedListResponse from '../models/ActivityChangeGetPagedListResponse'
import IJsonHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'

export default class ActivityChangesClient {
    private readonly _host: string
    private readonly _factory: IJsonHttpClientFactory

    constructor(host: string, factory: IJsonHttpClientFactory) {
                this._host = host
        this._factory = factory
    }

    public GetPagedListAsync = (
        request?: ActivityChangeGetPagedListRequest
    ): Promise<ActivityChangeGetPagedListResponse> =>
        this._factory
            .
            .postAsync<ActivityChangeGetPagedListResponse>('/Activities/Changes/v1/GetPagedList', request)
}
