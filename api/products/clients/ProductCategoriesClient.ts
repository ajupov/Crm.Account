import IHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'
import ProductCategory from '../models/ProductCategory'
import ProductCategoryGetPagedListRequest from '../models/ProductCategoryGetPagedListRequest'
import ProductCategoryGetPagedListResponse from '../models/ProductCategoryGetPagedListResponse'

export default class ProductCategoriesClient {
    private readonly httpClientFactory: IHttpClientFactory

    constructor(httpClientFactory: IHttpClientFactory) {
        this.httpClientFactory = httpClientFactory
    }

    public GetAsync = (id: string): Promise<ProductCategory> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .get<ProductCategory>('/Products/Categories/v1/Get', { id })

    public GetListAsync = (values?: string[]): Promise<ProductCategory[]> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .post<ProductCategory[]>('/Products/Categories/v1/GetList', values)

    public GetPagedListAsync = (
        request?: ProductCategoryGetPagedListRequest
    ): Promise<ProductCategoryGetPagedListResponse> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .post<ProductCategoryGetPagedListResponse>('/Products/Categories/v1/GetPagedList', request)

    public CreateAsync = (category?: ProductCategory): Promise<string> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .put<string>('/Products/Categories/v1/Create', category)

    public UpdateAsync = (category?: ProductCategory): Promise<void> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .patch('/Products/Categories/v1/Update', category)

    public DeleteAsync = (values?: string[]): Promise<void> =>
        this.httpClientFactory.createClient(this.httpClientFactory.host).patch('/Products/Categories/v1/Delete', values)

    public RestoreAsync = (values?: string[]): Promise<void> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .patch('/Products/Categories/v1/Restore', values)
}
