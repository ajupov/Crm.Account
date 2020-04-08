/* eslint-disable */
import IHttpClientFactory from '../../IHttpClientFactory'
import ActivityStatusChangeGetPagedListRequest from '../models/ActivityStatusChangeGetPagedListRequest'
import ActivityStatusChangeGetPagedListResponse from '../models/ActivityStatusChangeGetPagedListResponse'

export default class ActivityStatusesChangesClient {
    private readonly httpClientFactory: IHttpClientFactory

    constructor(httpClientFactory: IHttpClientFactory) {
        this.httpClientFactory = httpClientFactory
    }

    // prettier-ignore
    public GetPagedListAsync = (request?: ActivityStatusChangeGetPagedListRequest): Promise<ActivityStatusChangeGetPagedListResponse> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .post<ActivityStatusChangeGetPagedListResponse>('/Activities/Statuses/Changes/v1/GetPagedList', request)
}
