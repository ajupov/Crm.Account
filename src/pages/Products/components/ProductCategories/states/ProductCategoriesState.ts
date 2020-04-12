import ProductCategory from '../../../../../../api/products/models/ProductCategory'
import ProductCategoryGetPagedListRequest from '../../../../../../api/products/models/ProductCategoryGetPagedListRequest'

export default interface ProductCategoriesState {
    request: ProductCategoryGetPagedListRequest
    setRequest: (request: ProductCategoryGetPagedListRequest) => void
    isLoading: boolean
    categories: ProductCategory[]
    total: number
    lastModifyDateTime: string
    setIds: (ids: string[]) => void
    isDeleting: boolean
    delete: () => Promise<void>
    setIsDeleting: (state: boolean) => void
    isRestoring: boolean
    setIsRestoring: (state: boolean) => void
    restore: () => Promise<void>
}

const DefaultLimit = 10
const DefaultSortBy = 'CreateDateTime'
const DefaultOrderBy = 'desc'

export const productCategoriesInitialState = {
    request: {
        isDeleted: false,
        offset: 0,
        limit: DefaultLimit,
        sortBy: DefaultSortBy,
        orderBy: DefaultOrderBy
    },
    setRequest: (_: ProductCategoryGetPagedListRequest) => void 0,
    isLoading: false,
    categories: [],
    total: 0,
    lastModifyDateTime: '',
    setIds: (_: string[]) => void 0,
    isDeleting: false,
    setIsDeleting: (_: boolean) => void 0,
    delete: () => Promise.resolve(void 0),
    isRestoring: false,
    setIsRestoring: (_: boolean) => void 0,
    restore: () => Promise.resolve(void 0)
}
