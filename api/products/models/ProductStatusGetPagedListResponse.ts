/* eslint-disable */

import ProductStatus from '../models/ProductStatus'

export default interface ProductStatusGetPagedListResponse {
    totalCount: number
    lastModifyDateTime?: string
    statuses?: ProductStatus[]
}
