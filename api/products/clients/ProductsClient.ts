import IJsonHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'
import Product from '../models/Product'
import ProductGetPagedListRequest from '../models/ProductGetPagedListRequest'
import ProductGetPagedListResponse from '../models/ProductGetPagedListResponse'

export default class ProductsClient {
    private readonly _host: string
    private readonly _factory: IJsonHttpClientFactory

    constructor(host: string, factory: IJsonHttpClientFactory) {
        this._host = host
        this._factory = factory
    }

    public GetAsync = (id: string): Promise<Product> =>
        this._factory.getAsync<Product>(this._host + '/Products/v1/Get', { id })

    public GetListAsync = (values?: string[]): Promise<Product[]> =>
        this._factory.postAsync<Product[]>(this._host + '/Products/v1/GetList', void 0, values)

    public GetPagedListAsync = (request?: ProductGetPagedListRequest): Promise<ProductGetPagedListResponse> =>
        this._factory.postAsync<ProductGetPagedListResponse>(this._host + '/Products/v1/GetPagedList', void 0, request)

    public CreateAsync = (product?: Product): Promise<string> =>
        this._factory.postAsync<string>(this._host + '/Products/v1/Create', void 0, product)

    public UpdateAsync = (product?: Product): Promise<void> =>
        this._factory.patchAsyncAsync(this._host + '/Products/v1/Update', void 0, product)

    public HideAsync = (values?: string[]): Promise<void> =>
        this._factory.patchAsyncAsync(this._host + '/Products/v1/Hide', void 0, values)

    public ShowAsync = (values?: string[]): Promise<void> =>
        this._factory.patchAsyncAsync(this._host + '/Products/v1/Show', void 0, values)

    public DeleteAsync = (values?: string[]): Promise<void> =>
        this._factory.patchAsyncAsync(this._host + '/Products/v1/Delete', void 0, values)

    public RestoreAsync = (values?: string[]): Promise<void> =>
        this._factory.patchAsyncAsync(this._host + '/Products/v1/Restore', void 0, values)
}
