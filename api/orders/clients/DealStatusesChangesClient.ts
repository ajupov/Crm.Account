import DealStatusChangeGetPagedListRequest from '../models/DealStatusChangeGetPagedListRequest'
import DealStatusChangeGetPagedListResponse from '../models/DealStatusChangeGetPagedListResponse'
import IHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'

export default class DealStatusesChangesClient {
    private readonly httpClientFactory: IHttpClientFactory

    constructor(httpClientFactory: IHttpClientFactory) {
        this.httpClientFactory = httpClientFactory
    }

    public GetPagedListAsync = (
        request?: DealStatusChangeGetPagedListRequest
    ): Promise<DealStatusChangeGetPagedListResponse> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .post<DealStatusChangeGetPagedListResponse>('/Deals/Statuses/Changes/v1/GetPagedList', request)
}
