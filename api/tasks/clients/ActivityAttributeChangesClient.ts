import ActivityAttributeChangeGetPagedListRequest from '../models/ActivityAttributeChangeGetPagedListRequest'
import ActivityAttributeChangeGetPagedListResponse from '../models/ActivityAttributeChangeGetPagedListResponse'
import IJsonHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'

export default class ActivityAttributeChangesClient {
    private readonly _host: string
    private readonly _factory: IJsonHttpClientFactory

    constructor(host: string, factory: IJsonHttpClientFactory) {
                this._host = host
        this._factory = factory
    }

    public GetPagedListAsync = (
        request?: ActivityAttributeChangeGetPagedListRequest
    ): Promise<ActivityAttributeChangeGetPagedListResponse> =>
        this._factory
            .
            .postAsync<ActivityAttributeChangeGetPagedListResponse>(
                '/Activities/Attributes/Changes/v1/GetPagedList',
                request
            )
}
