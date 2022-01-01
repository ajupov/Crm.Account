import IJsonHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'
import StockRoomChangeGetPagedListRequest from '../models/StockRoomChangeGetPagedListRequest'
import StockRoomChangeGetPagedListResponse from '../models/StockRoomChangeGetPagedListResponse'

export default class StockRoomChangesClient {
    private readonly _host: string
    private readonly _factory: IJsonHttpClientFactory

    constructor(host: string, factory: IJsonHttpClientFactory) {
        this._host = host
        this._factory = factory
    }

    public GetPagedListAsync = (
        request?: StockRoomChangeGetPagedListRequest
    ): Promise<StockRoomChangeGetPagedListResponse> =>
        this._factory.postAsync<StockRoomChangeGetPagedListResponse>(
            this._host + '/Stock/Rooms/Changes/v1/GetPagedList',
            void 0,
            request
        )
}
