import CompanyAttribute from '../models/CompanyAttribute'
import CompanyAttributeGetPagedListRequest from '../models/CompanyAttributeGetPagedListRequest'
import CompanyAttributeGetPagedListResponse from '../models/CompanyAttributeGetPagedListResponse'
import IHttpClientFactory from '../../IHttpClientFactory'

export default class CompanyAttributesClient {
    private readonly httpClientFactory: IHttpClientFactory

    constructor(httpClientFactory: IHttpClientFactory) {
        this.httpClientFactory = httpClientFactory
    }

    // prettier-ignore
    public GetTypesAsync = (): Promise<object> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .get<object>('/Companies/Attributes/v1/GetTypes')

    // prettier-ignore
    public GetAsync = (id: string): Promise<CompanyAttribute> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .get<CompanyAttribute>('/Companies/Attributes/v1/Get', { id })

    // prettier-ignore
    public GetListAsync = (values?: string[]): Promise<CompanyAttribute[]> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .post<CompanyAttribute[]>('/Companies/Attributes/v1/GetList', values)

    // prettier-ignore
    public GetPagedListAsync = (request?: CompanyAttributeGetPagedListRequest): Promise<CompanyAttributeGetPagedListResponse> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .post<CompanyAttributeGetPagedListResponse>('/Companies/Attributes/v1/GetPagedList', request)

    // prettier-ignore
    public CreateAsync = (attribute?: CompanyAttribute): Promise<string> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .put<string>('/Companies/Attributes/v1/Create', attribute)

    // prettier-ignore
    public UpdateAsync = (attribute?: CompanyAttribute): Promise<void> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .patch('/Companies/Attributes/v1/Update', attribute)

    // prettier-ignore
    public DeleteAsync = (values?: string[]): Promise<void> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .patch('/Companies/Attributes/v1/Delete', values)

    // prettier-ignore
    public RestoreAsync = (values?: string[]): Promise<void> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .patch('/Companies/Attributes/v1/Restore', values)
}
