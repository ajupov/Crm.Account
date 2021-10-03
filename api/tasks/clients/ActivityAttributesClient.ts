import ActivityAttribute from '../models/ActivityAttribute'
import ActivityAttributeGetPagedListRequest from '../models/ActivityAttributeGetPagedListRequest'
import ActivityAttributeGetPagedListResponse from '../models/ActivityAttributeGetPagedListResponse'
import IJsonHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'

export default class ActivityAttributesClient {
    private readonly _host: string
    private readonly _factory: IJsonHttpClientFactory

    constructor(host: string, factory: IJsonHttpClientFactory) {
                this._host = host
        this._factory = factory
    }

    public GetTypesAsync = (): Promise<object> =>
        this._factory
            .
            .getAsync<object>('/Activities/Attributes/v1/GetTypes')

    public GetAsync = (id: string): Promise<ActivityAttribute> =>
        this._factory
            .
            .getAsync<ActivityAttribute>('/Activities/Attributes/v1/Get', { id })

    public GetListAsync = (values?: string[]): Promise<ActivityAttribute[]> =>
        this._factory
            .
            .postAsync<ActivityAttribute[]>('/Activities/Attributes/v1/GetList', values)

    public GetPagedListAsync = (
        request?: ActivityAttributeGetPagedListRequest
    ): Promise<ActivityAttributeGetPagedListResponse> =>
        this._factory
            .
            .postAsync<ActivityAttributeGetPagedListResponse>('/Activities/Attributes/v1/GetPagedList', request)

    public CreateAsync = (attribute?: ActivityAttribute): Promise<string> =>
        this._factory
            .
            .put<string>('/Activities/Attributes/v1/Create', attribute)

    public UpdateAsync = (attribute?: ActivityAttribute): Promise<void> =>
        this._factory
            .
            .patch('/Activities/Attributes/v1/Update', attribute)

    public DeleteAsync = (values?: string[]): Promise<void> =>
        this._factory
            .
            .patch('/Activities/Attributes/v1/Delete', values)

    public RestoreAsync = (values?: string[]): Promise<void> =>
        this._factory
            .
            .patch('/Activities/Attributes/v1/Restore', values)
}
