import IJsonHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'
import ProductStatus from '../models/ProductStatus'
import ProductStatusGetPagedListRequest from '../models/ProductStatusGetPagedListRequest'
import ProductStatusGetPagedListResponse from '../models/ProductStatusGetPagedListResponse'

export default class ProductStatusesClient {
    private readonly _host: string
    private readonly _factory: IJsonHttpClientFactory

    constructor(host: string, factory: IJsonHttpClientFactory) {
        this._host = host
        this._factory = factory
    }

    public GetAsync = (id: string): Promise<ProductStatus> =>
        this._factory.getAsync<ProductStatus>(this._host + '/Products/Statuses/v1/Get', { id })

    public GetListAsync = (values?: string[]): Promise<ProductStatus[]> =>
        this._factory.postAsync<ProductStatus[]>(this._host + '/Products/Statuses/v1/GetList', void 0, values)

    public GetPagedListAsync = (
        request?: ProductStatusGetPagedListRequest
    ): Promise<ProductStatusGetPagedListResponse> =>
        this._factory.postAsync<ProductStatusGetPagedListResponse>(
            this._host + '/Products/Statuses/v1/GetPagedList',
            void 0,
            request
        )

    public CreateAsync = (status?: ProductStatus): Promise<string> =>
        this._factory.postAsync<string>(this._host + '/Products/Statuses/v1/Create', void 0, status)

    public UpdateAsync = (status?: ProductStatus): Promise<void> =>
        this._factory.patchAsync(this._host + '/Products/Statuses/v1/Update', void 0, status)

    public DeleteAsync = (values?: string[]): Promise<void> =>
        this._factory.patchAsync(this._host + '/Products/Statuses/v1/Delete', void 0, values)

    public RestoreAsync = (values?: string[]): Promise<void> =>
        this._factory.patchAsync(this._host + '/Products/Statuses/v1/Restore', void 0, values)
}
