import ContactComment from '../../../../../../api/contacts/models/ContactComment'
import ContactCommentGetPagedListRequest from '../../../../../../api/contacts/models/ContactCommentGetPagedListRequest'

const DefaultLimit = 10
const DefaultSortBy = 'CreateDateTime'
const DefaultOrderBy = 'desc'

export default interface ContactCommentsState {
    request: ContactCommentGetPagedListRequest
    setRequest: (request: ContactCommentGetPagedListRequest) => void
    isNeedLoadingBefore: boolean
    setIsNeedLoadingBefore: (value: boolean) => void
    isNeedLoadingAfter: boolean
    setIsNeedLoadingAfter: (value: boolean) => void
    isLoading: boolean
    comments: ContactComment[]
    hasCommentsBefore: boolean
    getPagedList: () => Promise<void>
    getNext: () => Promise<void>
    getPrevious: () => Promise<void>
}

export const contactCommentsInitialState: ContactCommentsState = {
    request: {
        contactId: '',
        beforeCreateDateTime: void 0,
        afterCreateDateTime: void 0,
        limit: DefaultLimit,
        sortBy: DefaultSortBy,
        orderBy: DefaultOrderBy
    },
    setRequest: (_: ContactCommentGetPagedListRequest) => void 0,
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
