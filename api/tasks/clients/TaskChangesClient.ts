import IJsonHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'
import TaskChangeGetPagedListRequest from '../models/TaskChangeGetPagedListRequest'
import TaskChangeGetPagedListResponse from '../models/TaskChangeGetPagedListResponse'

export default class TaskChangesClient {
    private readonly _host: string
    private readonly _factory: IJsonHttpClientFactory

    constructor(host: string, factory: IJsonHttpClientFactory) {
        this._host = host
        this._factory = factory
    }

    public GetPagedListAsync = (request?: TaskChangeGetPagedListRequest): Promise<TaskChangeGetPagedListResponse> =>
        this._factory.postAsync<TaskChangeGetPagedListResponse>(this._host + '/Tasks/Changes/v1/GetPagedList', request)
}
