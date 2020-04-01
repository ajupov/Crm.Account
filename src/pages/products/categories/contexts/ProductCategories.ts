import ProductCategory from '../../../../../api/products/models/ProductCategory'
import ProductCategoryGetPagedListRequest from '../../../../../api/products/models/ProductCategoryGetPagedListRequest'

export default interface ProductCategories {
    request: ProductCategoryGetPagedListRequest
    setRequest: (request: ProductCategoryGetPagedListRequest) => void
    isLoading: boolean
    categories: ProductCategory[]
    total: number
    lastModifyDateTime?: string
}
