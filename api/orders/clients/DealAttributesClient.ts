import DealAttribute from '../models/DealAttribute'
import DealAttributeGetPagedListRequest from '../models/DealAttributeGetPagedListRequest'
import DealAttributeGetPagedListResponse from '../models/DealAttributeGetPagedListResponse'
import IJsonHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'

export default class DealAttributesClient {
    private readonly _host: string
    private readonly _factory: IJsonHttpClientFactory

    constructor(host: string, factory: IJsonHttpClientFactory) {
        this._host = host
        this._factory = factory
    }

    public GetTypesAsync = (): Promise<object> =>
        this._factory.getAsync<object>('/Deals/Attributes/v1/GetTypes')

    public GetAsync = (id: string): Promise<DealAttribute> =>
        this._factory
            .
            .getAsync<DealAttribute>('/Deals/Attributes/v1/Get', { id })

    public GetListAsync = (values?: string[]): Promise<DealAttribute[]> =>
        this._factory
            .
            .postAsync<DealAttribute[]>('/Deals/Attributes/v1/GetList', values)

    public GetPagedListAsync = (
        request?: DealAttributeGetPagedListRequest
    ): Promise<DealAttributeGetPagedListResponse> =>
        this._factory
            .
            .postAsync<DealAttributeGetPagedListResponse>('/Deals/Attributes/v1/GetPagedList', request)

    public CreateAsync = (attribute?: DealAttribute): Promise<string> =>
        this._factory
            .
            .put<string>('/Deals/Attributes/v1/Create', attribute)

    public UpdateAsync = (attribute?: DealAttribute): Promise<void> =>
        this._factory.patchAsync('/Deals/Attributes/v1/Update', attribute)

    public DeleteAsync = (values?: string[]): Promise<void> =>
        this._factory.patchAsync('/Deals/Attributes/v1/Delete', values)

    public RestoreAsync = (values?: string[]): Promise<void> =>
        this._factory.patchAsync('/Deals/Attributes/v1/Restore', values)
}
