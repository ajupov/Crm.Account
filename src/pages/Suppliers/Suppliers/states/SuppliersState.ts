import Supplier from '../../../../../api/suppliers/models/Supplier'
import SupplierGetPagedListRequest from '../../../../../api/suppliers/models/SupplierGetPagedListRequest'
import SupplierGetPagedListResponse from '../../../../../api/suppliers/models/SupplierGetPagedListResponse'

const DefaultLimit = 10
const DefaultSortBy = 'CreateDateTime'
const DefaultOrderBy = 'desc'

export default interface SuppliersState {
    request: SupplierGetPagedListRequest
    setRequest: (request: SupplierGetPagedListRequest) => void
    isLoading: boolean
    suppliers: Supplier[]
    total: number
    lastModifyDateTime: string
    getPagedList: () => Promise<void>
    getAll: () => Promise<SupplierGetPagedListResponse>
}

export const suppliersInitialState: SuppliersState = {
    request: {
        isDeleted: false,
        offset: 0,
        limit: DefaultLimit,
        sortBy: DefaultSortBy,
        orderBy: DefaultOrderBy
    },
    setRequest: (_: SupplierGetPagedListRequest) => void 0,
    isLoading: false,
    suppliers: [],
    total: 0,
    lastModifyDateTime: '',
    getPagedList: () => Promise.resolve(void 0),
    getAll: () => Promise.resolve({ totalCount: 0 })
}
