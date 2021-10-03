import CustomerComment from '../../../../../../api/customers/models/CustomerComment'
import CustomerCommentGetPagedListRequest from '../../../../../../api/customers/models/CustomerCommentGetPagedListRequest'

const DefaultLimit = 10
const DefaultSortBy = 'CreateDateTime'
const DefaultOrderBy = 'desc'

export default interface CustomerCommentsState {
    request: CustomerCommentGetPagedListRequest
    setRequest: (request: CustomerCommentGetPagedListRequest) => void
    isNeedLoadingBefore: boolean
    setIsNeedLoadingBefore: (value: boolean) => void
    isNeedLoadingAfter: boolean
    setIsNeedLoadingAfter: (value: boolean) => void
    isLoading: boolean
    comments: CustomerComment[]
    hasCommentsBefore: boolean
    getPagedList: () => Promise<void>
    getNext: () => Promise<void>
    getPrevious: () => Promise<void>
}

export const customerCommentsInitialState: CustomerCommentsState = {
    request: {
        customerId: '',
        beforeCreateDateTime: void 0,
        afterCreateDateTime: void 0,
        limit: DefaultLimit,
        sortBy: DefaultSortBy,
        orderBy: DefaultOrderBy
    },
    setRequest: (_: CustomerCommentGetPagedListRequest) => void 0,
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
