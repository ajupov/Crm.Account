import IJsonHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'
import TaskAttributeChangeGetPagedListRequest from '../models/TaskAttributeChangeGetPagedListRequest'
import TaskAttributeChangeGetPagedListResponse from '../models/TaskAttributeChangeGetPagedListResponse'

export default class TaskAttributeChangesClient {
    private readonly _host: string
    private readonly _factory: IJsonHttpClientFactory

    constructor(host: string, factory: IJsonHttpClientFactory) {
        this._host = host
        this._factory = factory
    }

    public GetPagedListAsync = (
        request?: TaskAttributeChangeGetPagedListRequest
    ): Promise<TaskAttributeChangeGetPagedListResponse> =>
        this._factory.postAsync<TaskAttributeChangeGetPagedListResponse>(
            this._host + '/Tasks/Attributes/Changes/v1/GetPagedList',
            void 0,
            request
        )
}
