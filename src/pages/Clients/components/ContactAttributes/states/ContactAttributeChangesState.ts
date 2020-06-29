import ContactAttributeChange from '../../../../../../api/contacts/models/ContactAttributeChange'
import ContactAttributeChangeGetPagedListRequest from '../../../../../../api/contacts/models/ContactAttributeChangeGetPagedListRequest'
import ContactAttributeChangeGetPagedListResponse from '../../../../../../api/contacts/models/ContactAttributeChangeGetPagedListResponse'

const DefaultLimit = 10
const DefaultSortBy = 'CreateDateTime'
const DefaultOrderBy = 'desc'

export default interface ContactAttributeChangesState {
    request: ContactAttributeChangeGetPagedListRequest
    setRequest: (request: ContactAttributeChangeGetPagedListRequest) => void
    isLoading: boolean
    changes: ContactAttributeChange[]
    total: number
    getAll: () => Promise<ContactAttributeChangeGetPagedListResponse | undefined>
}

export const contactAttributeChangesInitialState: ContactAttributeChangesState = {
    request: {
        attributeId: '',
        minCreateDate: void 0,
        maxCreateDate: void 0,
        offset: 0,
        limit: DefaultLimit,
        sortBy: DefaultSortBy,
        orderBy: DefaultOrderBy
    },
    setRequest: (_: ContactAttributeChangeGetPagedListRequest) => void 0,
    isLoading: false,
    changes: [],
    total: 0,
    getAll: () => Promise.resolve({ totalCount: 0 })
}
