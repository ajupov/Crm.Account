/* eslint-disable */
import IHttpClientFactory from '../../IHttpClientFactory'
import ActivityTypeChangeGetPagedListRequest from '../models/ActivityTypeChangeGetPagedListRequest'
import ActivityTypeChangeGetPagedListResponse from '../models/ActivityTypeChangeGetPagedListResponse'

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
