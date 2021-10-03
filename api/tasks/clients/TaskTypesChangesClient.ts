import IJsonHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'
import TaskTypeChangeGetPagedListRequest from '../models/TaskTypeChangeGetPagedListRequest'
import TaskTypeChangeGetPagedListResponse from '../models/TaskTypeChangeGetPagedListResponse'

export default class TaskTypesChangesClient {
    private readonly _host: string
    private readonly _factory: IJsonHttpClientFactory

    constructor(host: string, factory: IJsonHttpClientFactory) {
        this._host = host
        this._factory = factory
    }

    public GetPagedListAsync = (
        request?: TaskTypeChangeGetPagedListRequest
    ): Promise<TaskTypeChangeGetPagedListResponse> =>
        this._factory.postAsync<TaskTypeChangeGetPagedListResponse>(
            this._host + '/Tasks/Types/Changes/v1/GetPagedList',
            void 0,
            request
        )
}
