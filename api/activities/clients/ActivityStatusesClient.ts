/* eslint-disable */
import IHttpClientFactory from '../../IHttpClientFactory'
import ActivityStatus from '../models/ActivityStatus'
import ActivityStatusGetPagedListRequest from '../models/ActivityStatusGetPagedListRequest'
import ActivityStatusGetPagedListResponse from '../models/ActivityStatusGetPagedListResponse'

export default class ActivityStatusesClient {
    private readonly httpClientFactory: IHttpClientFactory

    constructor(httpClientFactory: IHttpClientFactory) {
        this.httpClientFactory = httpClientFactory
    }

    // prettier-ignore
    public GetAsync = (id: string): Promise<ActivityStatus> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .get<ActivityStatus>('/Activities/Statuses/v1/Get', { id })

    // prettier-ignore
    public GetListAsync = (values?: string[]): Promise<ActivityStatus[]> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .post<ActivityStatus[]>('/Activities/Statuses/v1/GetList', values)

    // prettier-ignore
    public GetPagedListAsync = (request?: ActivityStatusGetPagedListRequest): Promise<ActivityStatusGetPagedListResponse> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .post<ActivityStatusGetPagedListResponse>('/Activities/Statuses/v1/GetPagedList', request)

    // prettier-ignore
    public CreateAsync = (status?: ActivityStatus): Promise<string> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .put<string>('/Activities/Statuses/v1/Create', status)

    // prettier-ignore
    public UpdateAsync = (status?: ActivityStatus): Promise<void> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .patch('/Activities/Statuses/v1/Update', status)

    // prettier-ignore
    public DeleteAsync = (values?: string[]): Promise<void> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .patch('/Activities/Statuses/v1/Delete', values)

    // prettier-ignore
    public RestoreAsync = (values?: string[]): Promise<void> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .patch('/Activities/Statuses/v1/Restore', values)
}
