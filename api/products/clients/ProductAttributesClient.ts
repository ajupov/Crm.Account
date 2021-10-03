import IJsonHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'
import ProductAttribute from '../models/ProductAttribute'
import ProductAttributeGetPagedListRequest from '../models/ProductAttributeGetPagedListRequest'
import ProductAttributeGetPagedListResponse from '../models/ProductAttributeGetPagedListResponse'

export default class ProductAttributesClient {
    private readonly _host: string
    private readonly _factory: IJsonHttpClientFactory

    constructor(host: string, factory: IJsonHttpClientFactory) {
        this._host = host
        this._factory = factory
    }

    public GetAsync = (id: string): Promise<ProductAttribute> =>
        this._factory.getAsync<ProductAttribute>(this._host + '/Products/Attributes/v1/Get', { id })

    public GetListAsync = (values?: string[]): Promise<ProductAttribute[]> =>
        this._factory.postAsync<ProductAttribute[]>(this._host + '/Products/Attributes/v1/GetList', void 0, values)

    public GetPagedListAsync = (
        request?: ProductAttributeGetPagedListRequest
    ): Promise<ProductAttributeGetPagedListResponse> =>
        this._factory.postAsync<ProductAttributeGetPagedListResponse>(
            this._host + '/Products/Attributes/v1/GetPagedList',
            void 0,
            request
        )

    public CreateAsync = (attribute?: ProductAttribute): Promise<string> =>
        this._factory.postAsync<string>(this._host + '/Products/Attributes/v1/Create', void 0, attribute)

    public UpdateAsync = (attribute?: ProductAttribute): Promise<void> =>
        this._factory.patchAsync(this._host + '/Products/Attributes/v1/Update', void 0, attribute)

    public DeleteAsync = (values?: string[]): Promise<void> =>
        this._factory.patchAsync(this._host + '/Products/Attributes/v1/Delete', void 0, values)

    public RestoreAsync = (values?: string[]): Promise<void> =>
        this._factory.patchAsync(this._host + '/Products/Attributes/v1/Restore', void 0, values)
}
