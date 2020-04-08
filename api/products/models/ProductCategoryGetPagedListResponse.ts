/* eslint-disable */

import ProductCategory from '../models/ProductCategory'

export default interface ProductCategoryGetPagedListResponse {
    totalCount: number
    lastModifyDateTime?: string
    categories?: ProductCategory[]
}
