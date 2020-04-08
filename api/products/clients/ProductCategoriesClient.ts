/* eslint-disable */
import IHttpClientFactory from '../../IHttpClientFactory'
import ProductCategory from '../models/ProductCategory'
import ProductCategoryGetPagedListRequest from '../models/ProductCategoryGetPagedListRequest'
import ProductCategoryGetPagedListResponse from '../models/ProductCategoryGetPagedListResponse'

export default class ProductCategoriesClient {
    private readonly httpClientFactory: IHttpClientFactory

    constructor(httpClientFactory: IHttpClientFactory) {
        this.httpClientFactory = httpClientFactory
    }

    // prettier-ignore
    public GetAsync = (id: string): Promise<ProductCategory> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .get<ProductCategory>('/Products/Categories/v1/Get', { id })

    // prettier-ignore
    public GetListAsync = (values?: string[]): Promise<ProductCategory[]> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .post<ProductCategory[]>('/Products/Categories/v1/GetList', values)

    // prettier-ignore
    public GetPagedListAsync = (request?: ProductCategoryGetPagedListRequest): Promise<ProductCategoryGetPagedListResponse> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .post<ProductCategoryGetPagedListResponse>('/Products/Categories/v1/GetPagedList', request)

    // prettier-ignore
    public CreateAsync = (category?: ProductCategory): Promise<string> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .put<string>('/Products/Categories/v1/Create', category)

    // prettier-ignore
    public UpdateAsync = (category?: ProductCategory): Promise<void> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .patch('/Products/Categories/v1/Update', category)

    // prettier-ignore
    public DeleteAsync = (values?: string[]): Promise<void> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .patch('/Products/Categories/v1/Delete', values)

    // prettier-ignore
    public RestoreAsync = (values?: string[]): Promise<void> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .patch('/Products/Categories/v1/Restore', values)
}
