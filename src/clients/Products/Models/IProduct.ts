import { Guid } from '../../../common/types/Guid'
import { ProductType } from './ProductType'
import { IProductStatus } from './IProductStatus'
import { IProductAttributeLink } from './IProductAttributeLink'
import { IProductCategoryLink } from './IProductCategoryLink'

export interface IProduct {
    id: Guid
    parrentProductId?: Guid
    type: ProductType
    statusId: Guid
    name: string
    vendorCode: string
    price: number
    image: string
    isHidden: boolean
    isDeleted: boolean
    createDateTime: Date
    modifyDateTime: Date
    status: IProductStatus
    attributeLinks: IProductAttributeLink[]
    categoryLinks: IProductCategoryLink[]
}
