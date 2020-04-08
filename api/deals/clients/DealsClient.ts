/* eslint-disable */
import IHttpClientFactory from '../../IHttpClientFactory'
import Deal from '../models/Deal'
import DealGetPagedListRequest from '../models/DealGetPagedListRequest'
import DealGetPagedListResponse from '../models/DealGetPagedListResponse'

export default class DealsClient {
    private readonly httpClientFactory: IHttpClientFactory

    constructor(httpClientFactory: IHttpClientFactory) {
        this.httpClientFactory = httpClientFactory
    }

    // prettier-ignore
    public GetAsync = (id: string): Promise<Deal> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .get<Deal>('/Deals/v1/Get', { id })

    // prettier-ignore
    public GetListAsync = (values?: string[]): Promise<Deal[]> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .post<Deal[]>('/Deals/v1/GetList', values)

    // prettier-ignore
    public GetPagedListAsync = (request?: DealGetPagedListRequest): Promise<DealGetPagedListResponse> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .post<DealGetPagedListResponse>('/Deals/v1/GetPagedList', request)

    // prettier-ignore
    public CreateAsync = (deal?: Deal): Promise<string> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .put<string>('/Deals/v1/Create', deal)

    // prettier-ignore
    public UpdateAsync = (deal?: Deal): Promise<void> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .patch('/Deals/v1/Update', deal)

    // prettier-ignore
    public DeleteAsync = (values?: string[]): Promise<void> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .patch('/Deals/v1/Delete', values)

    // prettier-ignore
    public RestoreAsync = (values?: string[]): Promise<void> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .patch('/Deals/v1/Restore', values)
}
