import IJsonHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'
import StockRoom from '../models/StockRoom'
import StockRoomGetPagedListRequest from '../models/StockRoomGetPagedListRequest'
import StockRoomGetPagedListResponse from '../models/StockRoomGetPagedListResponse'

export default class StockRoomsClient {
    private readonly _host: string
    private readonly _factory: IJsonHttpClientFactory

    constructor(host: string, factory: IJsonHttpClientFactory) {
        this._host = host
        this._factory = factory
    }

    public GetAsync = (id: string): Promise<StockRoom> =>
        this._factory.getAsync<StockRoom>(this._host + '/Stock/Rooms/v1/Get', { id })

    public GetListAsync = (values?: string[]): Promise<StockRoom[]> =>
        this._factory.postAsync<StockRoom[]>(this._host + '/Stock/Rooms/v1/GetList', void 0, values)

    public GetPagedListAsync = (request?: StockRoomGetPagedListRequest): Promise<StockRoomGetPagedListResponse> =>
        this._factory.postAsync<StockRoomGetPagedListResponse>(
            this._host + '/Stock/Rooms/v1/GetPagedList',
            void 0,
            request
        )

    public CreateAsync = (room?: StockRoom): Promise<string> =>
        this._factory.postAsync<string>(this._host + '/Stock/Rooms/v1/Create', void 0, room)

    public UpdateAsync = (room?: StockRoom): Promise<void> =>
        this._factory.patchAsync(this._host + '/Stock/Rooms/v1/Update', void 0, room)

    public DeleteAsync = (values?: string[]): Promise<void> =>
        this._factory.patchAsync(this._host + '/Stock/Rooms/v1/Delete', void 0, values)

    public RestoreAsync = (values?: string[]): Promise<void> =>
        this._factory.patchAsync(this._host + '/Stock/Rooms/v1/Restore', void 0, values)
}
