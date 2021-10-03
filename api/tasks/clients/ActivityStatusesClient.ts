import ActivityStatus from '../models/ActivityStatus'
import ActivityStatusGetPagedListRequest from '../models/ActivityStatusGetPagedListRequest'
import ActivityStatusGetPagedListResponse from '../models/ActivityStatusGetPagedListResponse'
import IHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'

export default class ActivityStatusesClient {
    private readonly httpClientFactory: IHttpClientFactory

    constructor(httpClientFactory: IHttpClientFactory) {
        this.httpClientFactory = httpClientFactory
    }

    public GetAsync = (id: string): Promise<ActivityStatus> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .get<ActivityStatus>('/Activities/Statuses/v1/Get', { id })

    public GetListAsync = (values?: string[]): Promise<ActivityStatus[]> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .post<ActivityStatus[]>('/Activities/Statuses/v1/GetList', values)

    public GetPagedListAsync = (
        request?: ActivityStatusGetPagedListRequest
    ): Promise<ActivityStatusGetPagedListResponse> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .post<ActivityStatusGetPagedListResponse>('/Activities/Statuses/v1/GetPagedList', request)

    public CreateAsync = (status?: ActivityStatus): Promise<string> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .put<string>('/Activities/Statuses/v1/Create', status)

    public UpdateAsync = (status?: ActivityStatus): Promise<void> =>
        this.httpClientFactory.createClient(this.httpClientFactory.host).patch('/Activities/Statuses/v1/Update', status)

    public DeleteAsync = (values?: string[]): Promise<void> =>
        this.httpClientFactory.createClient(this.httpClientFactory.host).patch('/Activities/Statuses/v1/Delete', values)

    public RestoreAsync = (values?: string[]): Promise<void> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .patch('/Activities/Statuses/v1/Restore', values)
}
