import DealAttributeChange from '../../../../../api/deals/models/DealAttributeChange'
import DealAttributeChangeGetPagedListRequest from '../../../../../api/deals/models/DealAttributeChangeGetPagedListRequest'
import DealAttributeChangeGetPagedListResponse from '../../../../../api/deals/models/DealAttributeChangeGetPagedListResponse'

const DefaultLimit = 10
const DefaultSortBy = 'CreateDateTime'
const DefaultOrderBy = 'desc'

export default interface DealAttributeChangesState {
    request: DealAttributeChangeGetPagedListRequest
    setRequest: (request: DealAttributeChangeGetPagedListRequest) => void
    isLoading: boolean
    changes: DealAttributeChange[]
    total: number
    getAll: () => Promise<DealAttributeChangeGetPagedListResponse | undefined>
}

export const dealAttributeChangesInitialState: DealAttributeChangesState = {
    request: {
        attributeId: '',
        minCreateDate: void 0,
        maxCreateDate: void 0,
        offset: 0,
        limit: DefaultLimit,
        sortBy: DefaultSortBy,
        orderBy: DefaultOrderBy
    },
    setRequest: (_: DealAttributeChangeGetPagedListRequest) => void 0,
    isLoading: false,
    changes: [],
    total: 0,
    getAll: () => Promise.resolve({ totalCount: 0 })
}
