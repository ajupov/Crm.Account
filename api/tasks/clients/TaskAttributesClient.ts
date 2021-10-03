import IJsonHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'
import TaskAttribute from '../models/TaskAttribute'
import TaskAttributeGetPagedListRequest from '../models/TaskAttributeGetPagedListRequest'
import TaskAttributeGetPagedListResponse from '../models/TaskAttributeGetPagedListResponse'

export default class TaskAttributesClient {
    private readonly _host: string
    private readonly _factory: IJsonHttpClientFactory

    constructor(host: string, factory: IJsonHttpClientFactory) {
        this._host = host
        this._factory = factory
    }

    public GetAsync = (id: string): Promise<TaskAttribute> =>
        this._factory.getAsync<TaskAttribute>(this._host + '/Tasks/Attributes/v1/Get', { id })

    public GetListAsync = (values?: string[]): Promise<TaskAttribute[]> =>
        this._factory.postAsync<TaskAttribute[]>(this._host + '/Tasks/Attributes/v1/GetList', void 0, values)

    public GetPagedListAsync = (
        request?: TaskAttributeGetPagedListRequest
    ): Promise<TaskAttributeGetPagedListResponse> =>
        this._factory.postAsync<TaskAttributeGetPagedListResponse>(
            this._host + '/Tasks/Attributes/v1/GetPagedList',
            void 0,
            request
        )

    public CreateAsync = (attribute?: TaskAttribute): Promise<string> =>
        this._factory.postAsync<string>(this._host + '/Tasks/Attributes/v1/Create', void 0, attribute)

    public UpdateAsync = (attribute?: TaskAttribute): Promise<void> =>
        this._factory.patchAsync(this._host + '/Tasks/Attributes/v1/Update', void 0, attribute)

    public DeleteAsync = (values?: string[]): Promise<void> =>
        this._factory.patchAsync(this._host + '/Tasks/Attributes/v1/Delete', void 0, values)

    public RestoreAsync = (values?: string[]): Promise<void> =>
        this._factory.patchAsync(this._host + '/Tasks/Attributes/v1/Restore', void 0, values)
}
