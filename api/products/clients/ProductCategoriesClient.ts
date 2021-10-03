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
        this._factory.getAsync<ProductCategory>(this._host + '/Products/Categories/v1/Get', { id })

    public GetListAsync = (values?: string[]): Promise<ProductCategory[]> =>
        this._factory.postAsync<ProductCategory[]>(this._host + '/Products/Categories/v1/GetList', void 0, values)

    public GetPagedListAsync = (
        request?: ProductCategoryGetPagedListRequest
    ): Promise<ProductCategoryGetPagedListResponse> =>
        this._factory.postAsync<ProductCategoryGetPagedListResponse>(
            this._host + '/Products/Categories/v1/GetPagedList',
            void 0,
            request
        )

    public CreateAsync = (category?: ProductCategory): Promise<string> =>
        this._factory.postAsync<string>(this._host + '/Products/Categories/v1/Create', void 0, category)

    public UpdateAsync = (category?: ProductCategory): Promise<void> =>
        this._factory.patchAsync(this._host + '/Products/Categories/v1/Update', void 0, category)

    public DeleteAsync = (values?: string[]): Promise<void> =>
        this._factory.patchAsync(this._host + '/Products/Categories/v1/Delete', void 0, values)

    public RestoreAsync = (values?: string[]): Promise<void> =>
        this._factory.patchAsync(this._host + '/Products/Categories/v1/Restore', void 0, values)
}
