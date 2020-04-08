/* eslint-disable */

import ProductType from '../models/ProductType'
import ProductStatus from '../models/ProductStatus'
import ProductAttributeLink from '../models/ProductAttributeLink'
import ProductCategoryLink from '../models/ProductCategoryLink'

export default interface Product {
    id: string
    accountId: string
    parentProductId?: string
    type: ProductType
    statusId: string
    name?: string
    vendorCode?: string
    price: number
    image?: string
    isHidden: boolean
    isDeleted: boolean
    createDateTime: string
    modifyDateTime?: string
    status: ProductStatus
    attributeLinks?: ProductAttributeLink[]
    categoryLinks?: ProductCategoryLink[]
}
