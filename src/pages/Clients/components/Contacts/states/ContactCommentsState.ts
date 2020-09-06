import ContactComment from '../../../../../../api/contacts/models/ContactComment'
import ContactCommentGetPagedListRequest from '../../../../../../api/contacts/models/ContactCommentGetPagedListRequest'

const DefaultLimit = 10

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
        afterCreateDateTime: void 0,
        limit: DefaultLimit
    },
    setRequest: (_: ContactCommentGetPagedListRequest) => void 0,
    isLoading: false,
    comments: [],
    getPagedList: () => Promise.resolve(void 0)
}
