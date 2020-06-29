import ActivityTypeChangeGetPagedListRequest from '../models/ActivityTypeChangeGetPagedListRequest'
import ActivityTypeChangeGetPagedListResponse from '../models/ActivityTypeChangeGetPagedListResponse'
import IHttpClientFactory from '../../IHttpClientFactory'

export default class ActivityTypesChangesClient {
    private readonly httpClientFactory: IHttpClientFactory

    constructor(httpClientFactory: IHttpClientFactory) {
        this.httpClientFactory = httpClientFactory
    }

    // prettier-ignore
    public GetPagedListAsync = (request?: ActivityTypeChangeGetPagedListRequest): Promise<ActivityTypeChangeGetPagedListResponse> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .post<ActivityTypeChangeGetPagedListResponse>('/Activities/Types/Changes/v1/GetPagedList', request)
}
