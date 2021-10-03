import ActivityStatus from '../models/ActivityStatus'
import ActivityStatusGetPagedListRequest from '../models/ActivityStatusGetPagedListRequest'
import ActivityStatusGetPagedListResponse from '../models/ActivityStatusGetPagedListResponse'
import IJsonHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'

export default class ActivityStatusesClient {
    private readonly _host: string
    private readonly _factory: IJsonHttpClientFactory

    constructor(host: string, factory: IJsonHttpClientFactory) {
                this._host = host
        this._factory = factory
    }

    public GetAsync = (id: string): Promise<ActivityStatus> =>
        this._factory
            .
            .getAsync<ActivityStatus>('/Activities/Statuses/v1/Get', { id })

    public GetListAsync = (values?: string[]): Promise<ActivityStatus[]> =>
        this._factory
            .
            .postAsync<ActivityStatus[]>('/Activities/Statuses/v1/GetList', values)

    public GetPagedListAsync = (
        request?: ActivityStatusGetPagedListRequest
    ): Promise<ActivityStatusGetPagedListResponse> =>
        this._factory
            .
            .postAsync<ActivityStatusGetPagedListResponse>('/Activities/Statuses/v1/GetPagedList', request)

    public CreateAsync = (status?: ActivityStatus): Promise<string> =>
        this._factory
            .
            .put<string>('/Activities/Statuses/v1/Create', status)

    public UpdateAsync = (status?: ActivityStatus): Promise<void> =>
        this._factory.patchAsync('/Activities/Statuses/v1/Update', status)

    public DeleteAsync = (values?: string[]): Promise<void> =>
        this._factory.patchAsync('/Activities/Statuses/v1/Delete', values)

    public RestoreAsync = (values?: string[]): Promise<void> =>
        this._factory
            .
            .patch('/Activities/Statuses/v1/Restore', values)
}
