import ContactComment from '../../../../../../api/contacts/models/ContactComment'
import ContactCommentGetPagedListRequest from '../../../../../../api/contacts/models/ContactCommentGetPagedListRequest'

const DefaultLimit = 10
const DefaultSortBy = 'CreateDateTime'
const DefaultOrderBy = 'desc'

export default interface ContactCommentsState {
    request: ContactCommentGetPagedListRequest
    setRequest: (request: ContactCommentGetPagedListRequest) => void
    isLoading: boolean
    comments: ContactComment[]
    getPagedList: () => Promise<void>
}

export const conactCommentsInitialState: ContactCommentsState = {
    request: {
        contactId: '',
        offset: 0,
        limit: DefaultLimit,
        sortBy: DefaultSortBy,
        orderBy: DefaultOrderBy
    },
    setRequest: (_: ContactCommentGetPagedListRequest) => void 0,
    isLoading: false,
    comments: [],
    getPagedList: () => Promise.resolve(void 0)
}
