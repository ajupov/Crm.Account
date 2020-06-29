import IHttpClientFactory from '../../IHttpClientFactory'
import Product from '../models/Product'
import ProductGetPagedListRequest from '../models/ProductGetPagedListRequest'
import ProductGetPagedListResponse from '../models/ProductGetPagedListResponse'

export default class ProductsClient {
    private readonly httpClientFactory: IHttpClientFactory

    constructor(httpClientFactory: IHttpClientFactory) {
        this.httpClientFactory = httpClientFactory
    }

    // prettier-ignore
    public GetTypesAsync = (): Promise<object> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .get<object>('/Products/v1/GetTypes')

    // prettier-ignore
    public GetAsync = (id: string): Promise<Product> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .get<Product>('/Products/v1/Get', { id })

    // prettier-ignore
    public GetListAsync = (values?: string[]): Promise<Product[]> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .post<Product[]>('/Products/v1/GetList', values)

    // prettier-ignore
    public GetPagedListAsync = (request?: ProductGetPagedListRequest): Promise<ProductGetPagedListResponse> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .post<ProductGetPagedListResponse>('/Products/v1/GetPagedList', request)

    // prettier-ignore
    public CreateAsync = (product?: Product): Promise<string> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .put<string>('/Products/v1/Create', product)

    // prettier-ignore
    public UpdateAsync = (product?: Product): Promise<void> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .patch('/Products/v1/Update', product)

    // prettier-ignore
    public HideAsync = (values?: string[]): Promise<void> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .post('/Products/v1/Hide', values)

    // prettier-ignore
    public ShowAsync = (values?: string[]): Promise<void> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .post('/Products/v1/Show', values)

    // prettier-ignore
    public DeleteAsync = (values?: string[]): Promise<void> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .patch('/Products/v1/Delete', values)

    // prettier-ignore
    public RestoreAsync = (values?: string[]): Promise<void> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .patch('/Products/v1/Restore', values)
}
