import DealTypeChangeGetPagedListRequest from '../models/DealTypeChangeGetPagedListRequest'
import DealTypeChangeGetPagedListResponse from '../models/DealTypeChangeGetPagedListResponse'
import IHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'

export default class DealTypesChangesClient {
    private readonly httpClientFactory: IHttpClientFactory

    constructor(httpClientFactory: IHttpClientFactory) {
        this.httpClientFactory = httpClientFactory
    }

    public GetPagedListAsync = (
        request?: DealTypeChangeGetPagedListRequest
    ): Promise<DealTypeChangeGetPagedListResponse> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .post<DealTypeChangeGetPagedListResponse>('/Deals/Types/Changes/v1/GetPagedList', request)
}
