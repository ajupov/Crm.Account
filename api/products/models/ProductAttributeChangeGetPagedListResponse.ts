import ProductAttributeChange from '../models/ProductAttributeChange'

export default interface ProductAttributeChangeGetPagedListResponse {
    totalCount: number
    changes?: ProductAttributeChange[]
}
