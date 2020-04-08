/* eslint-disable */
import IHttpClientFactory from '../../IHttpClientFactory'
import DealStatus from '../models/DealStatus'
import DealStatusGetPagedListRequest from '../models/DealStatusGetPagedListRequest'
import DealStatusGetPagedListResponse from '../models/DealStatusGetPagedListResponse'

export default class DealStatusesClient {
    private readonly httpClientFactory: IHttpClientFactory

    constructor(httpClientFactory: IHttpClientFactory) {
        this.httpClientFactory = httpClientFactory
    }

    // prettier-ignore
    public GetAsync = (id: string): Promise<DealStatus> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .get<DealStatus>('/Deals/Statuses/v1/Get', { id })

    // prettier-ignore
    public GetListAsync = (values?: string[]): Promise<DealStatus[]> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .post<DealStatus[]>('/Deals/Statuses/v1/GetList', values)

    // prettier-ignore
    public GetPagedListAsync = (request?: DealStatusGetPagedListRequest): Promise<DealStatusGetPagedListResponse> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .post<DealStatusGetPagedListResponse>('/Deals/Statuses/v1/GetPagedList', request)

    // prettier-ignore
    public CreateAsync = (status?: DealStatus): Promise<string> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .put<string>('/Deals/Statuses/v1/Create', status)

    // prettier-ignore
    public UpdateAsync = (status?: DealStatus): Promise<void> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .patch('/Deals/Statuses/v1/Update', status)

    // prettier-ignore
    public DeleteAsync = (values?: string[]): Promise<void> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .patch('/Deals/Statuses/v1/Delete', values)

    // prettier-ignore
    public RestoreAsync = (values?: string[]): Promise<void> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .patch('/Deals/Statuses/v1/Restore', values)
}
