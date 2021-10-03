import IJsonHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'
import TaskStatusChangeGetPagedListRequest from '../models/TaskStatusChangeGetPagedListRequest'
import TaskStatusChangeGetPagedListResponse from '../models/TaskStatusChangeGetPagedListResponse'

export default class TaskStatusesChangesClient {
    private readonly _host: string
    private readonly _factory: IJsonHttpClientFactory

    constructor(host: string, factory: IJsonHttpClientFactory) {
        this._host = host
        this._factory = factory
    }

    public GetPagedListAsync = (
        request?: TaskStatusChangeGetPagedListRequest
    ): Promise<TaskStatusChangeGetPagedListResponse> =>
        this._factory.postAsync<TaskStatusChangeGetPagedListResponse>(
            this._host + '/Tasks/Statuses/Changes/v1/GetPagedList',
            void 0,
            request
        )
}
