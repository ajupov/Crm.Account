/* eslint-disable */
import IHttpClientFactory from '../../IHttpClientFactory'
import Company from '../models/Company'
import CompanyGetPagedListRequest from '../models/CompanyGetPagedListRequest'
import CompanyGetPagedListResponse from '../models/CompanyGetPagedListResponse'

export default class CompaniesClient {
    private readonly httpClientFactory: IHttpClientFactory

    constructor(httpClientFactory: IHttpClientFactory) {
        this.httpClientFactory = httpClientFactory
    }

    // prettier-ignore
    public GetTypesAsync = (): Promise<object> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .get<object>('/Companies/v1/GetTypes')

    // prettier-ignore
    public GetIndustryTypesAsync = (): Promise<object> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .get<object>('/Companies/v1/GetIndustryTypes')

    // prettier-ignore
    public GetAsync = (id: string): Promise<Company> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .get<Company>('/Companies/v1/Get', { id })

    // prettier-ignore
    public GetListAsync = (values?: string[]): Promise<Company[]> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .post<Company[]>('/Companies/v1/GetList', values)

    // prettier-ignore
    public GetPagedListAsync = (request?: CompanyGetPagedListRequest): Promise<CompanyGetPagedListResponse> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .post<CompanyGetPagedListResponse>('/Companies/v1/GetPagedList', request)

    // prettier-ignore
    public CreateAsync = (company?: Company): Promise<string> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .put<string>('/Companies/v1/Create', company)

    // prettier-ignore
    public UpdateAsync = (company?: Company): Promise<void> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .patch('/Companies/v1/Update', company)

    // prettier-ignore
    public DeleteAsync = (values?: string[]): Promise<void> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .patch('/Companies/v1/Delete', values)

    // prettier-ignore
    public RestoreAsync = (values?: string[]): Promise<void> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .patch('/Companies/v1/Restore', values)
}
