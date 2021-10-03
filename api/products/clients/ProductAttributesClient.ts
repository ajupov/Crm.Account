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

    public GetTypesAsync = (): Promise<object> =>
        this._factory.getAsync<object>('/Products/Attributes/v1/GetTypes')

    public GetAsync = (id: string): Promise<ProductAttribute> =>
        this._factory
            .
            .getAsync<ProductAttribute>('/Products/Attributes/v1/Get', { id })

    public GetListAsync = (values?: string[]): Promise<ProductAttribute[]> =>
        this._factory
            .
            .postAsync<ProductAttribute[]>('/Products/Attributes/v1/GetList', values)

    public GetPagedListAsync = (
        request?: ProductAttributeGetPagedListRequest
    ): Promise<ProductAttributeGetPagedListResponse> =>
        this._factory
            .
            .postAsync<ProductAttributeGetPagedListResponse>('/Products/Attributes/v1/GetPagedList', request)

    public CreateAsync = (attribute?: ProductAttribute): Promise<string> =>
        this._factory
            .
            .put<string>('/Products/Attributes/v1/Create', attribute)

    public UpdateAsync = (attribute?: ProductAttribute): Promise<void> =>
        this._factory
            .
            .patch('/Products/Attributes/v1/Update', attribute)

    public DeleteAsync = (values?: string[]): Promise<void> =>
        this._factory.patchAsync('/Products/Attributes/v1/Delete', values)

    public RestoreAsync = (values?: string[]): Promise<void> =>
        this._factory
            .
            .patch('/Products/Attributes/v1/Restore', values)
}
