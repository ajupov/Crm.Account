import IJsonHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'
import TaskComment from '../models/TaskComment'
import TaskCommentGetPagedListRequest from '../models/TaskCommentGetPagedListRequest'
import TaskCommentGetPagedListResponse from '../models/TaskCommentGetPagedListResponse'

export default class TaskCommentsClient {
    private readonly _host: string
    private readonly _factory: IJsonHttpClientFactory

    constructor(host: string, factory: IJsonHttpClientFactory) {
        this._host = host
        this._factory = factory
    }

    public GetPagedListAsync = (request?: TaskCommentGetPagedListRequest): Promise<TaskCommentGetPagedListResponse> =>
        this._factory.postAsync<TaskCommentGetPagedListResponse>(
            this._host + '/Tasks/Comments/v1/GetPagedList',
            void 0,
            request
        )

    public CreateAsync = (comment?: TaskComment): Promise<void> =>
        this._factory.postAsync(this._host + '/Tasks/Comments/v1/Create', void 0, comment)
}
