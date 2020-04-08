/* eslint-disable */
import IHttpClientFactory from '../../IHttpClientFactory'
import ActivityAttribute from '../models/ActivityAttribute'
import ActivityAttributeGetPagedListRequest from '../models/ActivityAttributeGetPagedListRequest'
import ActivityAttributeGetPagedListResponse from '../models/ActivityAttributeGetPagedListResponse'

export default class ActivityAttributesClient {
    private readonly httpClientFactory: IHttpClientFactory

    constructor(httpClientFactory: IHttpClientFactory) {
        this.httpClientFactory = httpClientFactory
    }

    // prettier-ignore
    public GetTypesAsync = (): Promise<object> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .get<object>('/Activities/Attributes/v1/GetTypes')

    // prettier-ignore
    public GetAsync = (id: string): Promise<ActivityAttribute> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .get<ActivityAttribute>('/Activities/Attributes/v1/Get', { id })

    // prettier-ignore
    public GetListAsync = (values?: string[]): Promise<ActivityAttribute[]> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .post<ActivityAttribute[]>('/Activities/Attributes/v1/GetList', values)

    // prettier-ignore
    public GetPagedListAsync = (request?: ActivityAttributeGetPagedListRequest): Promise<ActivityAttributeGetPagedListResponse> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .post<ActivityAttributeGetPagedListResponse>('/Activities/Attributes/v1/GetPagedList', request)

    // prettier-ignore
    public CreateAsync = (attribute?: ActivityAttribute): Promise<string> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .put<string>('/Activities/Attributes/v1/Create', attribute)

    // prettier-ignore
    public UpdateAsync = (attribute?: ActivityAttribute): Promise<void> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .patch('/Activities/Attributes/v1/Update', attribute)

    // prettier-ignore
    public DeleteAsync = (values?: string[]): Promise<void> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .patch('/Activities/Attributes/v1/Delete', values)

    // prettier-ignore
    public RestoreAsync = (values?: string[]): Promise<void> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .patch('/Activities/Attributes/v1/Restore', values)
}
