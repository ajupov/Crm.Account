import DealType from '../models/DealType'
import DealTypeGetPagedListRequest from '../models/DealTypeGetPagedListRequest'
import DealTypeGetPagedListResponse from '../models/DealTypeGetPagedListResponse'
import IJsonHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'

export default class DealTypesClient {
    private readonly _host: string
    private readonly _factory: IJsonHttpClientFactory

    constructor(host: string, factory: IJsonHttpClientFactory) {
        this._host = host
        this._factory = factory
    }

    public GetAsync = (id: string): Promise<DealType> =>
        this._factory.getAsync<DealType>('/Deals/Types/v1/Get', { id })

    public GetListAsync = (values?: string[]): Promise<DealType[]> =>
        this._factory
            .
            .postAsync<DealType[]>('/Deals/Types/v1/GetList', values)

    public GetPagedListAsync = (request?: DealTypeGetPagedListRequest): Promise<DealTypeGetPagedListResponse> =>
        this._factory
            .
            .postAsync<DealTypeGetPagedListResponse>('/Deals/Types/v1/GetPagedList', request)

    public CreateAsync = (type?: DealType): Promise<string> =>
        this._factory.putAsync<string>('/Deals/Types/v1/Create', type)

    public UpdateAsync = (type?: DealType): Promise<void> =>
        this._factory.patchAsync('/Deals/Types/v1/Update', type)

    public DeleteAsync = (values?: string[]): Promise<void> =>
        this._factory.patchAsync('/Deals/Types/v1/Delete', values)

    public RestoreAsync = (values?: string[]): Promise<void> =>
        this._factory.patchAsync('/Deals/Types/v1/Restore', values)
}
