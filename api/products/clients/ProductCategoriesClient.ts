import IJsonHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'
import ProductCategory from '../models/ProductCategory'
import ProductCategoryGetPagedListRequest from '../models/ProductCategoryGetPagedListRequest'
import ProductCategoryGetPagedListResponse from '../models/ProductCategoryGetPagedListResponse'

export default class ProductCategoriesClient {
    private readonly _host: string
    private readonly _factory: IJsonHttpClientFactory

    constructor(host: string, factory: IJsonHttpClientFactory) {
                this._host = host
        this._factory = factory
    }

    public GetAsync = (id: string): Promise<ProductCategory> =>
        this._factory
            .
            .getAsync<ProductCategory>('/Products/Categories/v1/Get', { id })

    public GetListAsync = (values?: string[]): Promise<ProductCategory[]> =>
        this._factory
            .
            .postAsync<ProductCategory[]>('/Products/Categories/v1/GetList', values)

    public GetPagedListAsync = (
        request?: ProductCategoryGetPagedListRequest
    ): Promise<ProductCategoryGetPagedListResponse> =>
        this._factory
            .
            .postAsync<ProductCategoryGetPagedListResponse>('/Products/Categories/v1/GetPagedList', request)

    public CreateAsync = (category?: ProductCategory): Promise<string> =>
        this._factory
            .
            .put<string>('/Products/Categories/v1/Create', category)

    public UpdateAsync = (category?: ProductCategory): Promise<void> =>
        this._factory
            .
            .patch('/Products/Categories/v1/Update', category)

    public DeleteAsync = (values?: string[]): Promise<void> =>
        this._factory.patchAsync('/Products/Categories/v1/Delete', values)

    public RestoreAsync = (values?: string[]): Promise<void> =>
        this._factory
            .
            .patch('/Products/Categories/v1/Restore', values)
}
