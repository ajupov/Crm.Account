import Activity from '../models/Activity'
import ActivityGetPagedListRequest from '../models/ActivityGetPagedListRequest'
import ActivityGetPagedListResponse from '../models/ActivityGetPagedListResponse'
import IHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'

export default class ActivitiesClient {
    private readonly httpClientFactory: IHttpClientFactory

    constructor(httpClientFactory: IHttpClientFactory) {
        this.httpClientFactory = httpClientFactory
    }

    public GetAsync = (id: string): Promise<Activity> =>
        this.httpClientFactory.createClient(this.httpClientFactory.host).get<Activity>('/Activities/v1/Get', { id })

    public GetListAsync = (values?: string[]): Promise<Activity[]> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .post<Activity[]>('/Activities/v1/GetList', values)

    public GetPagedListAsync = (request?: ActivityGetPagedListRequest): Promise<ActivityGetPagedListResponse> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .post<ActivityGetPagedListResponse>('/Activities/v1/GetPagedList', request)

    public CreateAsync = (activity?: Activity): Promise<string> =>
        this.httpClientFactory.createClient(this.httpClientFactory.host).put<string>('/Activities/v1/Create', activity)

    public UpdateAsync = (activity?: Activity): Promise<void> =>
        this.httpClientFactory.createClient(this.httpClientFactory.host).patch('/Activities/v1/Update', activity)

    public DeleteAsync = (values?: string[]): Promise<void> =>
        this.httpClientFactory.createClient(this.httpClientFactory.host).patch('/Activities/v1/Delete', values)

    public RestoreAsync = (values?: string[]): Promise<void> =>
        this.httpClientFactory.createClient(this.httpClientFactory.host).patch('/Activities/v1/Restore', values)
}
