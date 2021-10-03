import ActivityAttributeChangeGetPagedListRequest from '../models/ActivityAttributeChangeGetPagedListRequest'
import ActivityAttributeChangeGetPagedListResponse from '../models/ActivityAttributeChangeGetPagedListResponse'
import IHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'

export default class ActivityAttributeChangesClient {
    private readonly httpClientFactory: IHttpClientFactory

    constructor(httpClientFactory: IHttpClientFactory) {
        this.httpClientFactory = httpClientFactory
    }

    public GetPagedListAsync = (
        request?: ActivityAttributeChangeGetPagedListRequest
    ): Promise<ActivityAttributeChangeGetPagedListResponse> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .post<ActivityAttributeChangeGetPagedListResponse>(
                '/Activities/Attributes/Changes/v1/GetPagedList',
                request
            )
}
