import ProductStatusChange from '../models/ProductStatusChange'

export default interface ProductStatusChangeGetPagedListResponse {
    totalCount: number
    changes?: ProductStatusChange[]
}
