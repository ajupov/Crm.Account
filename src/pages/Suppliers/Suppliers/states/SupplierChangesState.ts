import SupplierChange from '../../../../../api/suppliers/models/SupplierChange'
import SupplierChangeGetPagedListRequest from '../../../../../api/suppliers/models/SupplierChangeGetPagedListRequest'
import SupplierChangeGetPagedListResponse from '../../../../../api/suppliers/models/SupplierChangeGetPagedListResponse'

const DefaultLimit = 10
const DefaultSortBy = 'CreateDateTime'
const DefaultOrderBy = 'desc'

export default interface SupplierChangesState {
    request: SupplierChangeGetPagedListRequest
    setRequest: (request: SupplierChangeGetPagedListRequest) => void
    isLoading: boolean
    changes: SupplierChange[]
    total: number
    getAll: () => Promise<SupplierChangeGetPagedListResponse | undefined>
}

export const supplierChangesInitialState: SupplierChangesState = {
    request: {
        supplierId: '',
        minCreateDate: void 0,
        maxCreateDate: void 0,
        offset: 0,
        limit: DefaultLimit,
        sortBy: DefaultSortBy,
        orderBy: DefaultOrderBy
    },
    setRequest: (_: SupplierChangeGetPagedListRequest) => void 0,
    isLoading: false,
    changes: [],
    total: 0,
    getAll: () => Promise.resolve({ totalCount: 0 })
}
