import Contact from '../../../../../../api/contacts/models/Contact'
import ContactGetPagedListRequest from '../../../../../../api/contacts/models/ContactGetPagedListRequest'
import ContactGetPagedListResponse from '../../../../../../api/contacts/models/ContactGetPagedListResponse'

const DefaultLimit = 10
const DefaultSortBy = 'CreateDateTime'
const DefaultOrderBy = 'desc'

export default interface ContactsState {
    request: ContactGetPagedListRequest
    setRequest: (request: ContactGetPagedListRequest) => void
    isLoading: boolean
    contacts: Contact[]
    total: number
    lastModifyDateTime: string
    getPagedList: () => Promise<void>
    getAll: () => Promise<ContactGetPagedListResponse>
}

export const conactsInitialState: ContactsState = {
    request: {
        isDeleted: false,
        offset: 0,
        limit: DefaultLimit,
        sortBy: DefaultSortBy,
        orderBy: DefaultOrderBy
    },
    setRequest: (_: ContactGetPagedListRequest) => void 0,
    isLoading: false,
    contacts: [],
    total: 0,
    lastModifyDateTime: '',
    getPagedList: () => Promise.resolve(void 0),
    getAll: () => Promise.resolve({ totalCount: 0 })
}
