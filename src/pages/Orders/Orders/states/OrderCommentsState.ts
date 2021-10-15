import OrderComment from '../../../../../api/orders/models/OrderComment'
import OrderCommentGetPagedListRequest from '../../../../../api/orders/models/OrderCommentGetPagedListRequest'

const DefaultLimit = 10
const DefaultSortBy = 'CreateDateTime'
const DefaultOrderBy = 'desc'

export default interface OrderCommentsState {
    request: OrderCommentGetPagedListRequest
    setRequest: (request: OrderCommentGetPagedListRequest) => void
    isNeedLoadingBefore: boolean
    setIsNeedLoadingBefore: (value: boolean) => void
    isNeedLoadingAfter: boolean
    setIsNeedLoadingAfter: (value: boolean) => void
    isLoading: boolean
    comments: OrderComment[]
    hasCommentsBefore: boolean
    getPagedList: () => Promise<void>
    getNext: () => Promise<void>
    getPrevious: () => Promise<void>
}

export const orderCommentsInitialState: OrderCommentsState = {
    request: {
        orderId: '',
        beforeCreateDateTime: void 0,
        afterCreateDateTime: void 0,
        limit: DefaultLimit,
        sortBy: DefaultSortBy,
        orderBy: DefaultOrderBy
    },
    setRequest: (_: OrderCommentGetPagedListRequest) => void 0,
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
