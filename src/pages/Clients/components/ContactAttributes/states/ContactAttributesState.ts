import ContactAttribute from '../../../../../../api/contacts/models/ContactAttribute'
import ContactAttributeGetPagedListRequest from '../../../../../../api/contacts/models/ContactAttributeGetPagedListRequest'
import ContactAttributeGetPagedListResponse from '../../../../../../api/contacts/models/ContactAttributeGetPagedListResponse'

const DefaultLimit = 10
const DefaultSortBy = 'CreateDateTime'
const DefaultOrderBy = 'desc'

export default interface ContactAttributesState {
    request: ContactAttributeGetPagedListRequest
    setRequest: (request: ContactAttributeGetPagedListRequest) => void
    isLoading: boolean
    attributes: ContactAttribute[]
    total: number
    lastModifyDateTime: string
    getPagedList: () => Promise<void>
    getAll: () => Promise<ContactAttributeGetPagedListResponse>
}

export const contactAttributesInitialState: ContactAttributesState = {
    request: {
        isDeleted: false,
        offset: 0,
        limit: DefaultLimit,
        sortBy: DefaultSortBy,
        orderBy: DefaultOrderBy
    },
    setRequest: (_: ContactAttributeGetPagedListRequest) => void 0,
    isLoading: false,
    attributes: [],
    total: 0,
    lastModifyDateTime: '',
    getPagedList: () => Promise.resolve(void 0),
    getAll: () => Promise.resolve({ totalCount: 0 })
}
