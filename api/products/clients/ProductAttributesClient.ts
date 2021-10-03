import IHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'
import ProductAttribute from '../models/ProductAttribute'
import ProductAttributeGetPagedListRequest from '../models/ProductAttributeGetPagedListRequest'
import ProductAttributeGetPagedListResponse from '../models/ProductAttributeGetPagedListResponse'

export default class ProductAttributesClient {
    private readonly httpClientFactory: IHttpClientFactory

    constructor(httpClientFactory: IHttpClientFactory) {
        this.httpClientFactory = httpClientFactory
    }

    public GetTypesAsync = (): Promise<object> =>
        this.httpClientFactory.createClient(this.httpClientFactory.host).get<object>('/Products/Attributes/v1/GetTypes')

    public GetAsync = (id: string): Promise<ProductAttribute> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .get<ProductAttribute>('/Products/Attributes/v1/Get', { id })

    public GetListAsync = (values?: string[]): Promise<ProductAttribute[]> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .post<ProductAttribute[]>('/Products/Attributes/v1/GetList', values)

    public GetPagedListAsync = (
        request?: ProductAttributeGetPagedListRequest
    ): Promise<ProductAttributeGetPagedListResponse> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .post<ProductAttributeGetPagedListResponse>('/Products/Attributes/v1/GetPagedList', request)

    public CreateAsync = (attribute?: ProductAttribute): Promise<string> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .put<string>('/Products/Attributes/v1/Create', attribute)

    public UpdateAsync = (attribute?: ProductAttribute): Promise<void> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .patch('/Products/Attributes/v1/Update', attribute)

    public DeleteAsync = (values?: string[]): Promise<void> =>
        this.httpClientFactory.createClient(this.httpClientFactory.host).patch('/Products/Attributes/v1/Delete', values)

    public RestoreAsync = (values?: string[]): Promise<void> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .patch('/Products/Attributes/v1/Restore', values)
}
