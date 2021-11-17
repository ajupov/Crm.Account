import SupplierAttribute from '../../../../../api/suppliers/models/SupplierAttribute'
import SupplierAttributeGetPagedListRequest from '../../../../../api/suppliers/models/SupplierAttributeGetPagedListRequest'
import SupplierAttributeGetPagedListResponse from '../../../../../api/suppliers/models/SupplierAttributeGetPagedListResponse'

const DefaultLimit = 10
const DefaultSortBy = 'CreateDateTime'
const DefaultOrderBy = 'desc'

export default interface SupplierAttributesState {
    request: SupplierAttributeGetPagedListRequest
    setRequest: (request: SupplierAttributeGetPagedListRequest) => void
    isLoading: boolean
    attributes: SupplierAttribute[]
    total: number
    lastModifyDateTime: string
    getPagedList: () => Promise<void>
    getAll: () => Promise<SupplierAttributeGetPagedListResponse>
}

export const supplierAttributesInitialState: SupplierAttributesState = {
    request: {
        isDeleted: false,
        offset: 0,
        limit: DefaultLimit,
        sortBy: DefaultSortBy,
        orderBy: DefaultOrderBy
    },
    setRequest: (_: SupplierAttributeGetPagedListRequest) => void 0,
    isLoading: false,
    attributes: [],
    total: 0,
    lastModifyDateTime: '',
    getPagedList: () => Promise.resolve(void 0),
    getAll: () => Promise.resolve({ totalCount: 0 })
}
