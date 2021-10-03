import DealType from '../models/DealType'
import DealTypeGetPagedListRequest from '../models/DealTypeGetPagedListRequest'
import DealTypeGetPagedListResponse from '../models/DealTypeGetPagedListResponse'
import IHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'

export default class DealTypesClient {
    private readonly httpClientFactory: IHttpClientFactory

    constructor(httpClientFactory: IHttpClientFactory) {
        this.httpClientFactory = httpClientFactory
    }

    public GetAsync = (id: string): Promise<DealType> =>
        this.httpClientFactory.createClient(this.httpClientFactory.host).get<DealType>('/Deals/Types/v1/Get', { id })

    public GetListAsync = (values?: string[]): Promise<DealType[]> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .post<DealType[]>('/Deals/Types/v1/GetList', values)

    public GetPagedListAsync = (request?: DealTypeGetPagedListRequest): Promise<DealTypeGetPagedListResponse> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .post<DealTypeGetPagedListResponse>('/Deals/Types/v1/GetPagedList', request)

    public CreateAsync = (type?: DealType): Promise<string> =>
        this.httpClientFactory.createClient(this.httpClientFactory.host).put<string>('/Deals/Types/v1/Create', type)

    public UpdateAsync = (type?: DealType): Promise<void> =>
        this.httpClientFactory.createClient(this.httpClientFactory.host).patch('/Deals/Types/v1/Update', type)

    public DeleteAsync = (values?: string[]): Promise<void> =>
        this.httpClientFactory.createClient(this.httpClientFactory.host).patch('/Deals/Types/v1/Delete', values)

    public RestoreAsync = (values?: string[]): Promise<void> =>
        this.httpClientFactory.createClient(this.httpClientFactory.host).patch('/Deals/Types/v1/Restore', values)
}
