import IHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'
import ProductStatusChangeGetPagedListRequest from '../models/ProductStatusChangeGetPagedListRequest'
import ProductStatusChangeGetPagedListResponse from '../models/ProductStatusChangeGetPagedListResponse'

export default class ProductStatusesChangesClient {
    private readonly httpClientFactory: IHttpClientFactory

    constructor(httpClientFactory: IHttpClientFactory) {
        this.httpClientFactory = httpClientFactory
    }

    public GetPagedListAsync = (
        request?: ProductStatusChangeGetPagedListRequest
    ): Promise<ProductStatusChangeGetPagedListResponse> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .post<ProductStatusChangeGetPagedListResponse>('/Products/Statuses/Changes/v1/GetPagedList', request)
}
