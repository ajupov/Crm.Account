/* eslint-disable */

import ProductChange from '../models/ProductChange'

export default interface ProductChangeGetPagedListResponse {
    totalCount: number
    changes?: ProductChange[]
}
