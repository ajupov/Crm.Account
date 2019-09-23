import { IProductsClient } from './IProductsClient'
import { ProductType } from '../Models/ProductType'
import { IProduct } from '../Models/IProduct'
import { UriCombine } from './../../../utils/UriBuilder'
import { HttpClient } from './../../../utils/HttpClient'
import { Guid } from '../../../common/types/Guid'

export class ProductsClient implements IProductsClient {
    private host = 'http://localhost:5000'

    private readonly uri: string
    private readonly httpClient: HttpClient

    constructor() {
        this.uri = UriCombine(this.host, 'Api/Products')
        this.httpClient = new HttpClient()
    }

    async GetTypes(): Promise<ProductType[]> {
        return (await this.httpClient.get(this.uri + 'GetTypes')) as ProductType[]
    }

    async Get(id: string): Promise<IProduct> {
        return await this.httpClient.get(this.uri + 'Get', { id })
    }

    async GetList(ids: string[]): Promise<IProduct> {
        return await this.httpClient.get(this.uri + 'GetList', ids)
    }

    async GetPagedList(
        types?: ProductType,
        statusIds?: string,
        name?: string,
        vendorCode?: string,
        minPrice?: number,
        maxPrice?: number,
        isHidden?: boolean,
        isDeleted?: boolean,
        minCreateDate?: Date,
        maxCreateDate?: Date,
        categoryIds?: string[],
        offset?: number,
        limit?: number,
        sortBy?: string,
        orderBy?: string
    ): Promise<IProduct[]> {
        return await this.httpClient.get(this.uri + 'GetPagedList', {
            types,
            statusIds,
            name,
            vendorCode,
            minPrice,
            maxPrice,
            isHidden,
            isDeleted,
            minCreateDate,
            maxCreateDate,
            categoryIds,
            offset,
            limit,
            sortBy,
            orderBy
        })
    }

    async Create(product: IProduct): Promise<Guid> {
        return await this.httpClient.post(this.uri + 'Create', product)
    }

    async Update(product: IProduct): Promise<void> {
        return await this.httpClient.post(this.uri + 'Update', product)
    }

    async Hide(ids: string[]): Promise<void> {
        return await this.httpClient.post(this.uri + 'Hide', ids)
    }

    async Show(ids: string[]): Promise<void> {
        return await this.httpClient.post(this.uri + 'Show', ids)
    }

    async Delete(ids: string[]): Promise<void> {
        return await this.httpClient.post(this.uri + 'Delete', ids)
    }

    async Restore(ids: string[]): Promise<void> {
        return await this.httpClient.post(this.uri + 'Restore', ids)
    }
}
