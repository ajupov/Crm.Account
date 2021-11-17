import SupplierComment from '../../../../../api/suppliers/models/SupplierComment'
import SupplierCommentGetPagedListRequest from '../../../../../api/suppliers/models/SupplierCommentGetPagedListRequest'

const DefaultLimit = 10
const DefaultSortBy = 'CreateDateTime'
const DefaultOrderBy = 'desc'

export default interface SupplierCommentsState {
    request: SupplierCommentGetPagedListRequest
    setRequest: (request: SupplierCommentGetPagedListRequest) => void
    isNeedLoadingBefore: boolean
    setIsNeedLoadingBefore: (value: boolean) => void
    isNeedLoadingAfter: boolean
    setIsNeedLoadingAfter: (value: boolean) => void
    isLoading: boolean
    comments: SupplierComment[]
    hasCommentsBefore: boolean
    getPagedList: () => Promise<void>
    getNext: () => Promise<void>
    getPrevious: () => Promise<void>
}

export const supplierCommentsInitialState: SupplierCommentsState = {
    request: {
        supplierId: '',
        beforeCreateDateTime: void 0,
        afterCreateDateTime: void 0,
        limit: DefaultLimit,
        sortBy: DefaultSortBy,
        orderBy: DefaultOrderBy
    },
    setRequest: (_: SupplierCommentGetPagedListRequest) => void 0,
    isNeedLoadingBefore: false,
    setIsNeedLoadingBefore: (_: boolean) => void 0,
    isNeedLoadingAfter: false,
    setIsNeedLoadingAfter: (_: boolean) => void 0,
    isLoading: false,
    comments: [],
    hasCommentsBefore: false,
    getPagedList: () => Promise.resolve(void 0),
    getNext: () => Promise.resolve(void 0),
    getPrevious: () => Promise.resolve(void 0)
}
