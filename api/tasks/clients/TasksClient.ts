import IJsonHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'
import Task from '../models/Task'
import TaskGetPagedListRequest from '../models/TaskGetPagedListRequest'
import TaskGetPagedListResponse from '../models/TaskGetPagedListResponse'

export default class TasksClient {
    private readonly _host: string
    private readonly _factory: IJsonHttpClientFactory

    constructor(host: string, factory: IJsonHttpClientFactory) {
        this._host = host
        this._factory = factory
    }

    public GetAsync = (id: string): Promise<Task> => this._factory.getAsync<Task>(this._host + '/Tasks/v1/Get', { id })

    public GetListAsync = (values?: string[]): Promise<Task[]> =>
        this._factory.postAsync<Task[]>(this._host + '/Tasks/v1/GetList', void 0, values)

    public GetPagedListAsync = (request?: TaskGetPagedListRequest): Promise<TaskGetPagedListResponse> =>
        this._factory.postAsync<TaskGetPagedListResponse>(this._host + '/Tasks/v1/GetPagedList', void 0, request)

    public CreateAsync = (task?: Task): Promise<string> =>
        this._factory.postAsync<string>(this._host + '/Tasks/v1/Create', void 0, task)

    public UpdateAsync = (task?: Task): Promise<void> =>
        this._factory.patchAsync(this._host + '/Tasks/v1/Update', void 0, task)

    public DeleteAsync = (values?: string[]): Promise<void> =>
        this._factory.patchAsync(this._host + '/Tasks/v1/Delete', void 0, values)

    public RestoreAsync = (values?: string[]): Promise<void> =>
        this._factory.patchAsync(this._host + '/Tasks/v1/Restore', void 0, values)
}
