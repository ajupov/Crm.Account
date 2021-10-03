import IJsonHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'
import ProductStatus from '../models/ProductStatus'
import ProductStatusGetPagedListRequest from '../models/ProductStatusGetPagedListRequest'
import ProductStatusGetPagedListResponse from '../models/ProductStatusGetPagedListResponse'

export default class ProductStatusesClient {
    private readonly _host: string
    private readonly _factory: IJsonHttpClientFactory

    constructor(host: string, factory: IJsonHttpClientFactory) {
                this._host = host
        this._factory = factory
    }

    public GetAsync = (id: string): Promise<ProductStatus> =>
        this._factory
            .
            .getAsync<ProductStatus>('/Products/Statuses/v1/Get', { id })

    public GetListAsync = (values?: string[]): Promise<ProductStatus[]> =>
        this._factory
            .
            .postAsync<ProductStatus[]>('/Products/Statuses/v1/GetList', values)

    public GetPagedListAsync = (
        request?: ProductStatusGetPagedListRequest
    ): Promise<ProductStatusGetPagedListResponse> =>
        this._factory
            .
            .postAsync<ProductStatusGetPagedListResponse>('/Products/Statuses/v1/GetPagedList', request)

    public CreateAsync = (status?: ProductStatus): Promise<string> =>
        this._factory
            .
            .put<string>('/Products/Statuses/v1/Create', status)

    public UpdateAsync = (status?: ProductStatus): Promise<void> =>
        this._factory.patchAsync('/Products/Statuses/v1/Update', status)

    public DeleteAsync = (values?: string[]): Promise<void> =>
        this._factory.patchAsync('/Products/Statuses/v1/Delete', values)

    public RestoreAsync = (values?: string[]): Promise<void> =>
        this._factory.patchAsync('/Products/Statuses/v1/Restore', values)
}
