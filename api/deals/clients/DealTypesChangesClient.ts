import DealTypeChangeGetPagedListRequest from '../models/DealTypeChangeGetPagedListRequest'
import DealTypeChangeGetPagedListResponse from '../models/DealTypeChangeGetPagedListResponse'
import IHttpClientFactory from '../../IHttpClientFactory'

export default class DealTypesChangesClient {
    private readonly httpClientFactory: IHttpClientFactory

    constructor(httpClientFactory: IHttpClientFactory) {
        this.httpClientFactory = httpClientFactory
    }

    // prettier-ignore
    public GetPagedListAsync = (request?: DealTypeChangeGetPagedListRequest): Promise<DealTypeChangeGetPagedListResponse> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .post<DealTypeChangeGetPagedListResponse>('/Deals/Types/Changes/v1/GetPagedList', request)
}
