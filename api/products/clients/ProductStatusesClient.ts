import IHttpClientFactory from '../../IHttpClientFactory'
import ProductStatus from '../models/ProductStatus'
import ProductStatusGetPagedListRequest from '../models/ProductStatusGetPagedListRequest'
import ProductStatusGetPagedListResponse from '../models/ProductStatusGetPagedListResponse'

export default class ProductStatusesClient {
    private readonly httpClientFactory: IHttpClientFactory

    constructor(httpClientFactory: IHttpClientFactory) {
        this.httpClientFactory = httpClientFactory
    }

    // prettier-ignore
    public GetAsync = (id: string): Promise<ProductStatus> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .get<ProductStatus>('/Products/Statuses/v1/Get', { id })

    // prettier-ignore
    public GetListAsync = (values?: string[]): Promise<ProductStatus[]> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .post<ProductStatus[]>('/Products/Statuses/v1/GetList', values)

    // prettier-ignore
    public GetPagedListAsync = (request?: ProductStatusGetPagedListRequest): Promise<ProductStatusGetPagedListResponse> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .post<ProductStatusGetPagedListResponse>('/Products/Statuses/v1/GetPagedList', request)

    // prettier-ignore
    public CreateAsync = (status?: ProductStatus): Promise<string> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .put<string>('/Products/Statuses/v1/Create', status)

    // prettier-ignore
    public UpdateAsync = (status?: ProductStatus): Promise<void> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .patch('/Products/Statuses/v1/Update', status)

    // prettier-ignore
    public DeleteAsync = (values?: string[]): Promise<void> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .patch('/Products/Statuses/v1/Delete', values)

    // prettier-ignore
    public RestoreAsync = (values?: string[]): Promise<void> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .patch('/Products/Statuses/v1/Restore', values)
}
