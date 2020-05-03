import ProductAttributeChange from '../../../../../../api/products/models/ProductAttributeChange'
import ProductAttributeChangeGetPagedListRequest from '../../../../../../api/products/models/ProductAttributeChangeGetPagedListRequest'
import ProductAttributeChangeGetPagedListResponse from '../../../../../../api/products/models/ProductAttributeChangeGetPagedListResponse'

const DefaultLimit = 10
const DefaultSortBy = 'CreateDateTime'
const DefaultOrderBy = 'desc'

export default interface ProductAttributeChangesState {
    request: ProductAttributeChangeGetPagedListRequest
    setRequest: (request: ProductAttributeChangeGetPagedListRequest) => void
    isLoading: boolean
    changes: ProductAttributeChange[]
    total: number
    getAll: () => Promise<ProductAttributeChangeGetPagedListResponse | undefined>
}

export const productAttributeChangesInitialState: ProductAttributeChangesState = {
    request: {
        attributeId: '',
        minCreateDate: void 0,
        maxCreateDate: void 0,
        offset: 0,
        limit: DefaultLimit,
        sortBy: DefaultSortBy,
        orderBy: DefaultOrderBy
    },
    setRequest: (_: ProductAttributeChangeGetPagedListRequest) => void 0,
    isLoading: false,
    changes: [],
    total: 0,
    getAll: () => Promise.resolve({ totalCount: 0 })
}
