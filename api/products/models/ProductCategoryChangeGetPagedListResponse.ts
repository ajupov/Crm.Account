/* eslint-disable */

import ProductCategoryChange from '../models/ProductCategoryChange'

export default interface ProductCategoryChangeGetPagedListResponse {
    totalCount: number
    changes?: ProductCategoryChange[]
}
