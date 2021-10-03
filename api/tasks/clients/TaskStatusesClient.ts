import IJsonHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'
import TaskStatus from '../models/TaskStatus'
import TaskStatusGetPagedListRequest from '../models/TaskStatusGetPagedListRequest'
import TaskStatusGetPagedListResponse from '../models/TaskStatusGetPagedListResponse'

export default class TaskStatusesClient {
    private readonly _host: string
    private readonly _factory: IJsonHttpClientFactory

    constructor(host: string, factory: IJsonHttpClientFactory) {
        this._host = host
        this._factory = factory
    }

    public GetAsync = (id: string): Promise<TaskStatus> =>
        this._factory.getAsync<TaskStatus>(this._host + '/Tasks/Statuses/v1/Get', { id })

    public GetListAsync = (values?: string[]): Promise<TaskStatus[]> =>
        this._factory.postAsync<TaskStatus[]>(this._host + '/Tasks/Statuses/v1/GetList', void 0, values)

    public GetPagedListAsync = (request?: TaskStatusGetPagedListRequest): Promise<TaskStatusGetPagedListResponse> =>
        this._factory.postAsync<TaskStatusGetPagedListResponse>(
            this._host + '/Tasks/Statuses/v1/GetPagedList',
            void 0,
            request
        )

    public CreateAsync = (status?: TaskStatus): Promise<string> =>
        this._factory.postAsync<string>(this._host + '/Tasks/Statuses/v1/Create', void 0, status)

    public UpdateAsync = (status?: TaskStatus): Promise<void> =>
        this._factory.patchAsync(this._host + '/Tasks/Statuses/v1/Update', void 0, status)

    public DeleteAsync = (values?: string[]): Promise<void> =>
        this._factory.patchAsync(this._host + '/Tasks/Statuses/v1/Delete', void 0, values)

    public RestoreAsync = (values?: string[]): Promise<void> =>
        this._factory.patchAsync(this._host + '/Tasks/Statuses/v1/Restore', void 0, values)
}
