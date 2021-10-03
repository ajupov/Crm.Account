import IHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'
import ProductStatus from '../models/ProductStatus'
import ProductStatusGetPagedListRequest from '../models/ProductStatusGetPagedListRequest'
import ProductStatusGetPagedListResponse from '../models/ProductStatusGetPagedListResponse'

export default class ProductStatusesClient {
    private readonly httpClientFactory: IHttpClientFactory

    constructor(httpClientFactory: IHttpClientFactory) {
        this.httpClientFactory = httpClientFactory
    }

    public GetAsync = (id: string): Promise<ProductStatus> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .get<ProductStatus>('/Products/Statuses/v1/Get', { id })

    public GetListAsync = (values?: string[]): Promise<ProductStatus[]> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .post<ProductStatus[]>('/Products/Statuses/v1/GetList', values)

    public GetPagedListAsync = (
        request?: ProductStatusGetPagedListRequest
    ): Promise<ProductStatusGetPagedListResponse> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .post<ProductStatusGetPagedListResponse>('/Products/Statuses/v1/GetPagedList', request)

    public CreateAsync = (status?: ProductStatus): Promise<string> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .put<string>('/Products/Statuses/v1/Create', status)

    public UpdateAsync = (status?: ProductStatus): Promise<void> =>
        this.httpClientFactory.createClient(this.httpClientFactory.host).patch('/Products/Statuses/v1/Update', status)

    public DeleteAsync = (values?: string[]): Promise<void> =>
        this.httpClientFactory.createClient(this.httpClientFactory.host).patch('/Products/Statuses/v1/Delete', values)

    public RestoreAsync = (values?: string[]): Promise<void> =>
        this.httpClientFactory.createClient(this.httpClientFactory.host).patch('/Products/Statuses/v1/Restore', values)
}
