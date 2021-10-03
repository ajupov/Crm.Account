import ActivityAttribute from '../models/ActivityAttribute'
import ActivityAttributeGetPagedListRequest from '../models/ActivityAttributeGetPagedListRequest'
import ActivityAttributeGetPagedListResponse from '../models/ActivityAttributeGetPagedListResponse'
import IHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'

export default class ActivityAttributesClient {
    private readonly httpClientFactory: IHttpClientFactory

    constructor(httpClientFactory: IHttpClientFactory) {
        this.httpClientFactory = httpClientFactory
    }

    public GetTypesAsync = (): Promise<object> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .get<object>('/Activities/Attributes/v1/GetTypes')

    public GetAsync = (id: string): Promise<ActivityAttribute> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .get<ActivityAttribute>('/Activities/Attributes/v1/Get', { id })

    public GetListAsync = (values?: string[]): Promise<ActivityAttribute[]> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .post<ActivityAttribute[]>('/Activities/Attributes/v1/GetList', values)

    public GetPagedListAsync = (
        request?: ActivityAttributeGetPagedListRequest
    ): Promise<ActivityAttributeGetPagedListResponse> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .post<ActivityAttributeGetPagedListResponse>('/Activities/Attributes/v1/GetPagedList', request)

    public CreateAsync = (attribute?: ActivityAttribute): Promise<string> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .put<string>('/Activities/Attributes/v1/Create', attribute)

    public UpdateAsync = (attribute?: ActivityAttribute): Promise<void> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .patch('/Activities/Attributes/v1/Update', attribute)

    public DeleteAsync = (values?: string[]): Promise<void> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .patch('/Activities/Attributes/v1/Delete', values)

    public RestoreAsync = (values?: string[]): Promise<void> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .patch('/Activities/Attributes/v1/Restore', values)
}
