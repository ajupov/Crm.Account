import IJsonHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'
import TaskType from '../models/TaskType'
import TaskTypeGetPagedListRequest from '../models/TaskTypeGetPagedListRequest'
import TaskTypeGetPagedListResponse from '../models/TaskTypeGetPagedListResponse'

export default class TaskTypesClient {
    private readonly _host: string
    private readonly _factory: IJsonHttpClientFactory

    constructor(host: string, factory: IJsonHttpClientFactory) {
        this._host = host
        this._factory = factory
    }

    public GetAsync = (id: string): Promise<TaskType> =>
        this._factory.getAsync<TaskType>(this._host + '/Tasks/Types/v1/Get', { id })

    public GetListAsync = (values?: string[]): Promise<TaskType[]> =>
        this._factory.postAsync<TaskType[]>(this._host + '/Tasks/Types/v1/GetList', void 0, values)

    public GetPagedListAsync = (request?: TaskTypeGetPagedListRequest): Promise<TaskTypeGetPagedListResponse> =>
        this._factory.postAsync<TaskTypeGetPagedListResponse>(
            this._host + '/Tasks/Types/v1/GetPagedList',
            void 0,
            request
        )

    public CreateAsync = (type?: TaskType): Promise<string> =>
        this._factory.postAsync<string>(this._host + '/Tasks/Types/v1/Create', void 0, type)

    public UpdateAsync = (type?: TaskType): Promise<void> =>
        this._factory.patchAsync(this._host + '/Tasks/Types/v1/Update', void 0, type)

    public DeleteAsync = (values?: string[]): Promise<void> =>
        this._factory.patchAsync(this._host + '/Tasks/Types/v1/Delete', void 0, values)

    public RestoreAsync = (values?: string[]): Promise<void> =>
        this._factory.patchAsync(this._host + '/Tasks/Types/v1/Restore', void 0, values)
}
