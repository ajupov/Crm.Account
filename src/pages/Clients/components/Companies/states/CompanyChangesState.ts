import ContactChange from '../../../../../../api/contacts/models/ContactChange'
import ContactChangeGetPagedListRequest from '../../../../../../api/contacts/models/ContactChangeGetPagedListRequest'
import ContactChangeGetPagedListResponse from '../../../../../../api/contacts/models/ContactChangeGetPagedListResponse'

const DefaultLimit = 10
const DefaultSortBy = 'CreateDateTime'
const DefaultOrderBy = 'desc'

export default interface ContactChangesState {
    request: ContactChangeGetPagedListRequest
    setRequest: (request: ContactChangeGetPagedListRequest) => void
    isLoading: boolean
    changes: ContactChange[]
    total: number
    getAll: () => Promise<ContactChangeGetPagedListResponse | undefined>
}

export const contactChangesInitialState: ContactChangesState = {
    request: {
        contactId: '',
        minCreateDate: void 0,
        maxCreateDate: void 0,
        offset: 0,
        limit: DefaultLimit,
        sortBy: DefaultSortBy,
        orderBy: DefaultOrderBy
    },
    setRequest: (_: ContactChangeGetPagedListRequest) => void 0,
    isLoading: false,
    changes: [],
    total: 0,
    getAll: () => Promise.resolve({ totalCount: 0 })
}
