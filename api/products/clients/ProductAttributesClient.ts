import IHttpClientFactory from '../../IHttpClientFactory'
import ProductAttribute from '../models/ProductAttribute'
import ProductAttributeGetPagedListRequest from '../models/ProductAttributeGetPagedListRequest'
import ProductAttributeGetPagedListResponse from '../models/ProductAttributeGetPagedListResponse'

export default class ProductAttributesClient {
    private readonly httpClientFactory: IHttpClientFactory

    constructor(httpClientFactory: IHttpClientFactory) {
        this.httpClientFactory = httpClientFactory
    }

    // prettier-ignore
    public GetTypesAsync = (): Promise<object> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .get<object>('/Products/Attributes/v1/GetTypes')

    // prettier-ignore
    public GetAsync = (id: string): Promise<ProductAttribute> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .get<ProductAttribute>('/Products/Attributes/v1/Get', { id })

    // prettier-ignore
    public GetListAsync = (values?: string[]): Promise<ProductAttribute[]> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .post<ProductAttribute[]>('/Products/Attributes/v1/GetList', values)

    // prettier-ignore
    public GetPagedListAsync = (request?: ProductAttributeGetPagedListRequest): Promise<ProductAttributeGetPagedListResponse> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .post<ProductAttributeGetPagedListResponse>('/Products/Attributes/v1/GetPagedList', request)

    // prettier-ignore
    public CreateAsync = (attribute?: ProductAttribute): Promise<string> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .put<string>('/Products/Attributes/v1/Create', attribute)

    // prettier-ignore
    public UpdateAsync = (attribute?: ProductAttribute): Promise<void> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .patch('/Products/Attributes/v1/Update', attribute)

    // prettier-ignore
    public DeleteAsync = (values?: string[]): Promise<void> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .patch('/Products/Attributes/v1/Delete', values)

    // prettier-ignore
    public RestoreAsync = (values?: string[]): Promise<void> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .patch('/Products/Attributes/v1/Restore', values)
}
