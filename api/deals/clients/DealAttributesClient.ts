import DealAttribute from '../models/DealAttribute'
import DealAttributeGetPagedListRequest from '../models/DealAttributeGetPagedListRequest'
import DealAttributeGetPagedListResponse from '../models/DealAttributeGetPagedListResponse'
import IHttpClientFactory from '../../IHttpClientFactory'

export default class DealAttributesClient {
    private readonly httpClientFactory: IHttpClientFactory

    constructor(httpClientFactory: IHttpClientFactory) {
        this.httpClientFactory = httpClientFactory
    }

    // prettier-ignore
    public GetTypesAsync = (): Promise<object> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .get<object>('/Deals/Attributes/v1/GetTypes')

    // prettier-ignore
    public GetAsync = (id: string): Promise<DealAttribute> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .get<DealAttribute>('/Deals/Attributes/v1/Get', { id })

    // prettier-ignore
    public GetListAsync = (values?: string[]): Promise<DealAttribute[]> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .post<DealAttribute[]>('/Deals/Attributes/v1/GetList', values)

    // prettier-ignore
    public GetPagedListAsync = (request?: DealAttributeGetPagedListRequest): Promise<DealAttributeGetPagedListResponse> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .post<DealAttributeGetPagedListResponse>('/Deals/Attributes/v1/GetPagedList', request)

    // prettier-ignore
    public CreateAsync = (attribute?: DealAttribute): Promise<string> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .put<string>('/Deals/Attributes/v1/Create', attribute)

    // prettier-ignore
    public UpdateAsync = (attribute?: DealAttribute): Promise<void> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .patch('/Deals/Attributes/v1/Update', attribute)

    // prettier-ignore
    public DeleteAsync = (values?: string[]): Promise<void> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .patch('/Deals/Attributes/v1/Delete', values)

    // prettier-ignore
    public RestoreAsync = (values?: string[]): Promise<void> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .patch('/Deals/Attributes/v1/Restore', values)
}
