import { ProductType } from '../Models/ProductType'
import { Guid } from '../../../common/types/Guid'
import { IProduct } from '../Models/IProduct'

export interface IProductsClient {
    GetTypes(): Promise<ProductType[]>

    Get(id: Guid): Promise<IProduct>

    GetList(ids: Guid[]): Promise<IProduct>

    GetPagedList(
        types?: ProductType,
        statusIds?: Guid,
        name?: string,
        vendorCode?: string,
        minPrice?: number,
        maxPrice?: number,
        isHidden?: boolean,
        isDeleted?: boolean,
        minCreateDate?: Date,
        maxCreateDate?: Date,
        categoryIds?: Guid[],
        offset?: number,
        limit?: number,
        sortBy?: string,
        orderBy?: string
    ): Promise<IProduct[]>

    Create(product: IProduct): Promise<Guid>

    Update(product: IProduct): Promise<void>

    Hide(ids: Guid[]): Promise<void>

    Show(ids: Guid[]): Promise<void>

    Delete(ids: Guid[]): Promise<void>

    Restore(ids: Guid[]): Promise<void>
}
