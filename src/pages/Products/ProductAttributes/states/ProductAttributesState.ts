import ProductAttribute from '../../../../../api/products/models/ProductAttribute'
import ProductAttributeGetPagedListRequest from '../../../../../api/products/models/ProductAttributeGetPagedListRequest'
import ProductAttributeGetPagedListResponse from '../../../../../api/products/models/ProductAttributeGetPagedListResponse'

const DefaultLimit = 10
const DefaultSortBy = 'CreateDateTime'
const DefaultOrderBy = 'desc'

export default interface ProductAttributesState {
    request: ProductAttributeGetPagedListRequest
    setRequest: (request: ProductAttributeGetPagedListRequest) => void
    isLoading: boolean
    attributes: ProductAttribute[]
    total: number
    lastModifyDateTime: string
    getPagedList: () => Promise<void>
    getAll: () => Promise<ProductAttributeGetPagedListResponse>
}

export const productAttributesInitialState: ProductAttributesState = {
    request: {
        isDeleted: false,
        offset: 0,
        limit: DefaultLimit,
        sortBy: DefaultSortBy,
        orderBy: DefaultOrderBy
    },
    setRequest: (_: ProductAttributeGetPagedListRequest) => void 0,
    isLoading: false,
    attributes: [],
    total: 0,
    lastModifyDateTime: '',
    getPagedList: () => Promise.resolve(void 0),
    getAll: () => Promise.resolve({ totalCount: 0 })
}
