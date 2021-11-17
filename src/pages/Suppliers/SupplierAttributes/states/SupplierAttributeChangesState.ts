import SupplierAttributeChange from '../../../../../api/suppliers/models/SupplierAttributeChange'
import SupplierAttributeChangeGetPagedListRequest from '../../../../../api/suppliers/models/SupplierAttributeChangeGetPagedListRequest'
import SupplierAttributeChangeGetPagedListResponse from '../../../../../api/suppliers/models/SupplierAttributeChangeGetPagedListResponse'

const DefaultLimit = 10
const DefaultSortBy = 'CreateDateTime'
const DefaultOrderBy = 'desc'

export default interface SupplierAttributeChangesState {
    request: SupplierAttributeChangeGetPagedListRequest
    setRequest: (request: SupplierAttributeChangeGetPagedListRequest) => void
    isLoading: boolean
    changes: SupplierAttributeChange[]
    total: number
    getAll: () => Promise<SupplierAttributeChangeGetPagedListResponse | undefined>
}

export const supplierAttributeChangesInitialState: SupplierAttributeChangesState = {
    request: {
        attributeId: '',
        minCreateDate: void 0,
        maxCreateDate: void 0,
        offset: 0,
        limit: DefaultLimit,
        sortBy: DefaultSortBy,
        orderBy: DefaultOrderBy
    },
    setRequest: (_: SupplierAttributeChangeGetPagedListRequest) => void 0,
    isLoading: false,
    changes: [],
    total: 0,
    getAll: () => Promise.resolve({ totalCount: 0 })
}
