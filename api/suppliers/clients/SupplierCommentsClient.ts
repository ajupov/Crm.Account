import IJsonHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'
import SupplierComment from '../models/SupplierComment'
import SupplierCommentGetPagedListRequest from '../models/SupplierCommentGetPagedListRequest'
import SupplierCommentGetPagedListResponse from '../models/SupplierCommentGetPagedListResponse'

export default class SupplierCommentsClient {
    private readonly _host: string
    private readonly _factory: IJsonHttpClientFactory

    constructor(host: string, factory: IJsonHttpClientFactory) {
        this._host = host
        this._factory = factory
    }

    public GetPagedListAsync = (
        request?: SupplierCommentGetPagedListRequest
    ): Promise<SupplierCommentGetPagedListResponse> =>
        this._factory.postAsync<SupplierCommentGetPagedListResponse>(
            this._host + '/Suppliers/Comments/v1/GetPagedList',
            void 0,
            request
        )

    public CreateAsync = (comment?: SupplierComment): Promise<void> =>
        this._factory.postAsync(this._host + '/Suppliers/Comments/v1/Create', void 0, comment)
}
