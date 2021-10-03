import Activity from '../models/Activity'
import ActivityGetPagedListRequest from '../models/ActivityGetPagedListRequest'
import ActivityGetPagedListResponse from '../models/ActivityGetPagedListResponse'
import IJsonHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'

export default class ActivitiesClient {
    private readonly _host: string
    private readonly _factory: IJsonHttpClientFactory

    constructor(host: string, factory: IJsonHttpClientFactory) {
                this._host = host
        this._factory = factory
    }

    public GetAsync = (id: string): Promise<Activity> =>
        this._factory.getAsync<Activity>('/Activities/v1/Get', { id })

    public GetListAsync = (values?: string[]): Promise<Activity[]> =>
        this._factory
            .
            .postAsync<Activity[]>('/Activities/v1/GetList', values)

    public GetPagedListAsync = (request?: ActivityGetPagedListRequest): Promise<ActivityGetPagedListResponse> =>
        this._factory
            .
            .postAsync<ActivityGetPagedListResponse>('/Activities/v1/GetPagedList', request)

    public CreateAsync = (activity?: Activity): Promise<string> =>
        this._factory.putAsync<string>('/Activities/v1/Create', activity)

    public UpdateAsync = (activity?: Activity): Promise<void> =>
        this._factory.patchAsync('/Activities/v1/Update', activity)

    public DeleteAsync = (values?: string[]): Promise<void> =>
        this._factory.patchAsync('/Activities/v1/Delete', values)

    public RestoreAsync = (values?: string[]): Promise<void> =>
        this._factory.patchAsync('/Activities/v1/Restore', values)
}
