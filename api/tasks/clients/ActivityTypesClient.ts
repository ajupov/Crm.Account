import ActivityType from '../models/ActivityType'
import ActivityTypeGetPagedListRequest from '../models/ActivityTypeGetPagedListRequest'
import ActivityTypeGetPagedListResponse from '../models/ActivityTypeGetPagedListResponse'
import IHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'

export default class ActivityTypesClient {
    private readonly httpClientFactory: IHttpClientFactory

    constructor(httpClientFactory: IHttpClientFactory) {
        this.httpClientFactory = httpClientFactory
    }

    public GetAsync = (id: string): Promise<ActivityType> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .get<ActivityType>('/Activities/Types/v1/Get', { id })

    public GetListAsync = (values?: string[]): Promise<ActivityType[]> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .post<ActivityType[]>('/Activities/Types/v1/GetList', values)

    public GetPagedListAsync = (request?: ActivityTypeGetPagedListRequest): Promise<ActivityTypeGetPagedListResponse> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .post<ActivityTypeGetPagedListResponse>('/Activities/Types/v1/GetPagedList', request)

    public CreateAsync = (type?: ActivityType): Promise<string> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .put<string>('/Activities/Types/v1/Create', type)

    public UpdateAsync = (type?: ActivityType): Promise<void> =>
        this.httpClientFactory.createClient(this.httpClientFactory.host).patch('/Activities/Types/v1/Update', type)

    public DeleteAsync = (values?: string[]): Promise<void> =>
        this.httpClientFactory.createClient(this.httpClientFactory.host).patch('/Activities/Types/v1/Delete', values)

    public RestoreAsync = (values?: string[]): Promise<void> =>
        this.httpClientFactory.createClient(this.httpClientFactory.host).patch('/Activities/Types/v1/Restore', values)
}
