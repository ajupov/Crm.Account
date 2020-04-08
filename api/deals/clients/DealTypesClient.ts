/* eslint-disable */
import IHttpClientFactory from '../../IHttpClientFactory'
import DealType from '../models/DealType'
import DealTypeGetPagedListRequest from '../models/DealTypeGetPagedListRequest'
import DealTypeGetPagedListResponse from '../models/DealTypeGetPagedListResponse'

export default class DealTypesClient {
    private readonly httpClientFactory: IHttpClientFactory

    constructor(httpClientFactory: IHttpClientFactory) {
        this.httpClientFactory = httpClientFactory
    }

    // prettier-ignore
    public GetAsync = (id: string): Promise<DealType> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .get<DealType>('/Deals/Types/v1/Get', { id })

    // prettier-ignore
    public GetListAsync = (values?: string[]): Promise<DealType[]> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .post<DealType[]>('/Deals/Types/v1/GetList', values)

    // prettier-ignore
    public GetPagedListAsync = (request?: DealTypeGetPagedListRequest): Promise<DealTypeGetPagedListResponse> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .post<DealTypeGetPagedListResponse>('/Deals/Types/v1/GetPagedList', request)

    // prettier-ignore
    public CreateAsync = (type?: DealType): Promise<string> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .put<string>('/Deals/Types/v1/Create', type)

    // prettier-ignore
    public UpdateAsync = (type?: DealType): Promise<void> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .patch('/Deals/Types/v1/Update', type)

    // prettier-ignore
    public DeleteAsync = (values?: string[]): Promise<void> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .patch('/Deals/Types/v1/Delete', values)

    // prettier-ignore
    public RestoreAsync = (values?: string[]): Promise<void> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .patch('/Deals/Types/v1/Restore', values)
}
