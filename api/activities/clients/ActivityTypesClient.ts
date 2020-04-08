/* eslint-disable */
import IHttpClientFactory from '../../IHttpClientFactory'
import ActivityType from '../models/ActivityType'
import ActivityTypeGetPagedListRequest from '../models/ActivityTypeGetPagedListRequest'
import ActivityTypeGetPagedListResponse from '../models/ActivityTypeGetPagedListResponse'

export default class ActivityTypesClient {
    private readonly httpClientFactory: IHttpClientFactory

    constructor(httpClientFactory: IHttpClientFactory) {
        this.httpClientFactory = httpClientFactory
    }

    // prettier-ignore
    public GetAsync = (id: string): Promise<ActivityType> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .get<ActivityType>('/Activities/Types/v1/Get', { id })

    // prettier-ignore
    public GetListAsync = (values?: string[]): Promise<ActivityType[]> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .post<ActivityType[]>('/Activities/Types/v1/GetList', values)

    // prettier-ignore
    public GetPagedListAsync = (request?: ActivityTypeGetPagedListRequest): Promise<ActivityTypeGetPagedListResponse> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .post<ActivityTypeGetPagedListResponse>('/Activities/Types/v1/GetPagedList', request)

    // prettier-ignore
    public CreateAsync = (type?: ActivityType): Promise<string> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .put<string>('/Activities/Types/v1/Create', type)

    // prettier-ignore
    public UpdateAsync = (type?: ActivityType): Promise<void> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .patch('/Activities/Types/v1/Update', type)

    // prettier-ignore
    public DeleteAsync = (values?: string[]): Promise<void> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .patch('/Activities/Types/v1/Delete', values)

    // prettier-ignore
    public RestoreAsync = (values?: string[]): Promise<void> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .patch('/Activities/Types/v1/Restore', values)
}
