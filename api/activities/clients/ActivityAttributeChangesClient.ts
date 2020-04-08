/* eslint-disable */
import IHttpClientFactory from '../../IHttpClientFactory'
import ActivityAttributeChangeGetPagedListRequest from '../models/ActivityAttributeChangeGetPagedListRequest'
import ActivityAttributeChangeGetPagedListResponse from '../models/ActivityAttributeChangeGetPagedListResponse'

export default class ActivityAttributeChangesClient {
    private readonly httpClientFactory: IHttpClientFactory

    constructor(httpClientFactory: IHttpClientFactory) {
        this.httpClientFactory = httpClientFactory
    }

    // prettier-ignore
    public GetPagedListAsync = (request?: ActivityAttributeChangeGetPagedListRequest): Promise<ActivityAttributeChangeGetPagedListResponse> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .post<ActivityAttributeChangeGetPagedListResponse>('/Activities/Attributes/Changes/v1/GetPagedList', request)
}
