import ActivityTypeChangeGetPagedListRequest from '../models/ActivityTypeChangeGetPagedListRequest'
import ActivityTypeChangeGetPagedListResponse from '../models/ActivityTypeChangeGetPagedListResponse'
import IJsonHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'

export default class ActivityTypesChangesClient {
    private readonly _host: string
    private readonly _factory: IJsonHttpClientFactory

    constructor(host: string, factory: IJsonHttpClientFactory) {
                this._host = host
        this._factory = factory
    }

    public GetPagedListAsync = (
        request?: ActivityTypeChangeGetPagedListRequest
    ): Promise<ActivityTypeChangeGetPagedListResponse> =>
        this._factory
            .
            .postAsync<ActivityTypeChangeGetPagedListResponse>('/Activities/Types/Changes/v1/GetPagedList', request)
}
