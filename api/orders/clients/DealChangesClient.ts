import DealChangeGetPagedListRequest from '../models/DealChangeGetPagedListRequest'
import DealChangeGetPagedListResponse from '../models/DealChangeGetPagedListResponse'
import IHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'

export default class DealChangesClient {
    private readonly httpClientFactory: IHttpClientFactory

    constructor(httpClientFactory: IHttpClientFactory) {
        this.httpClientFactory = httpClientFactory
    }

    public GetPagedListAsync = (request?: DealChangeGetPagedListRequest): Promise<DealChangeGetPagedListResponse> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .post<DealChangeGetPagedListResponse>('/Deals/Changes/v1/GetPagedList', request)
}
