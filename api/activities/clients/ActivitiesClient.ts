/* eslint-disable */
import IHttpClientFactory from '../../IHttpClientFactory'
import Activity from '../models/Activity'
import ActivityGetPagedListRequest from '../models/ActivityGetPagedListRequest'
import ActivityGetPagedListResponse from '../models/ActivityGetPagedListResponse'

export default class ActivitiesClient {
    private readonly httpClientFactory: IHttpClientFactory

    constructor(httpClientFactory: IHttpClientFactory) {
        this.httpClientFactory = httpClientFactory
    }

    // prettier-ignore
    public GetAsync = (id: string): Promise<Activity> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .get<Activity>('/Activities/v1/Get', { id })

    // prettier-ignore
    public GetListAsync = (values?: string[]): Promise<Activity[]> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .post<Activity[]>('/Activities/v1/GetList', values)

    // prettier-ignore
    public GetPagedListAsync = (request?: ActivityGetPagedListRequest): Promise<ActivityGetPagedListResponse> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .post<ActivityGetPagedListResponse>('/Activities/v1/GetPagedList', request)

    // prettier-ignore
    public CreateAsync = (activity?: Activity): Promise<string> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .put<string>('/Activities/v1/Create', activity)

    // prettier-ignore
    public UpdateAsync = (activity?: Activity): Promise<void> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .patch('/Activities/v1/Update', activity)

    // prettier-ignore
    public DeleteAsync = (values?: string[]): Promise<void> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .patch('/Activities/v1/Delete', values)

    // prettier-ignore
    public RestoreAsync = (values?: string[]): Promise<void> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .patch('/Activities/v1/Restore', values)
}
