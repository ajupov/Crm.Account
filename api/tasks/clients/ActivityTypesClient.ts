import ActivityType from '../models/ActivityType'
import ActivityTypeGetPagedListRequest from '../models/ActivityTypeGetPagedListRequest'
import ActivityTypeGetPagedListResponse from '../models/ActivityTypeGetPagedListResponse'
import IJsonHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'

export default class ActivityTypesClient {
    private readonly _host: string
    private readonly _factory: IJsonHttpClientFactory

    constructor(host: string, factory: IJsonHttpClientFactory) {
                this._host = host
        this._factory = factory
    }

    public GetAsync = (id: string): Promise<ActivityType> =>
        this._factory
            .
            .getAsync<ActivityType>('/Activities/Types/v1/Get', { id })

    public GetListAsync = (values?: string[]): Promise<ActivityType[]> =>
        this._factory
            .
            .postAsync<ActivityType[]>('/Activities/Types/v1/GetList', values)

    public GetPagedListAsync = (request?: ActivityTypeGetPagedListRequest): Promise<ActivityTypeGetPagedListResponse> =>
        this._factory
            .
            .postAsync<ActivityTypeGetPagedListResponse>('/Activities/Types/v1/GetPagedList', request)

    public CreateAsync = (type?: ActivityType): Promise<string> =>
        this._factory
            .
            .put<string>('/Activities/Types/v1/Create', type)

    public UpdateAsync = (type?: ActivityType): Promise<void> =>
        this._factory.patchAsync('/Activities/Types/v1/Update', type)

    public DeleteAsync = (values?: string[]): Promise<void> =>
        this._factory.patchAsync('/Activities/Types/v1/Delete', values)

    public RestoreAsync = (values?: string[]): Promise<void> =>
        this._factory.patchAsync('/Activities/Types/v1/Restore', values)
}
