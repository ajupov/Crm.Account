import ActivityStatusChangeGetPagedListRequest from '../models/ActivityStatusChangeGetPagedListRequest'
import ActivityStatusChangeGetPagedListResponse from '../models/ActivityStatusChangeGetPagedListResponse'
import IJsonHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'

export default class ActivityStatusesChangesClient {
    private readonly _host: string
    private readonly _factory: IJsonHttpClientFactory

    constructor(host: string, factory: IJsonHttpClientFactory) {
                this._host = host
        this._factory = factory
    }

    public GetPagedListAsync = (
        request?: ActivityStatusChangeGetPagedListRequest
    ): Promise<ActivityStatusChangeGetPagedListResponse> =>
        this._factory
            .
            .postAsync<ActivityStatusChangeGetPagedListResponse>('/Activities/Statuses/Changes/v1/GetPagedList', request)
}
