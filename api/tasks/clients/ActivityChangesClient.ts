import ActivityChangeGetPagedListRequest from '../models/ActivityChangeGetPagedListRequest'
import ActivityChangeGetPagedListResponse from '../models/ActivityChangeGetPagedListResponse'
import IHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'

export default class ActivityChangesClient {
    private readonly httpClientFactory: IHttpClientFactory

    constructor(httpClientFactory: IHttpClientFactory) {
        this.httpClientFactory = httpClientFactory
    }

    public GetPagedListAsync = (
        request?: ActivityChangeGetPagedListRequest
    ): Promise<ActivityChangeGetPagedListResponse> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .post<ActivityChangeGetPagedListResponse>('/Activities/Changes/v1/GetPagedList', request)
}
