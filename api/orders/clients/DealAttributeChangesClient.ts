import DealAttributeChangeGetPagedListRequest from '../models/DealAttributeChangeGetPagedListRequest'
import DealAttributeChangeGetPagedListResponse from '../models/DealAttributeChangeGetPagedListResponse'
import IJsonHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'

export default class DealAttributeChangesClient {
    private readonly _host: string
    private readonly _factory: IJsonHttpClientFactory

    constructor(host: string, factory: IJsonHttpClientFactory) {
        this._host = host
        this._factory = factory
    }

    public GetPagedListAsync = (
        request?: DealAttributeChangeGetPagedListRequest
    ): Promise<DealAttributeChangeGetPagedListResponse> =>
        this._factory
            .
            .postAsync<DealAttributeChangeGetPagedListResponse>('/Deals/Attributes/Changes/v1/GetPagedList', request)
}
