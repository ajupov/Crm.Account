/* eslint-disable */

import ProductAttribute from '../models/ProductAttribute'

export default interface ProductAttributeGetPagedListResponse {
    totalCount: number
    lastModifyDateTime?: string
    attributes?: ProductAttribute[]
}
