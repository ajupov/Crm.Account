import DealAttribute from '../../../../../api/orders/models/DealAttribute'
import DealAttributeGetPagedListRequest from '../../../../../api/orders/models/DealAttributeGetPagedListRequest'
import DealAttributeGetPagedListResponse from '../../../../../api/orders/models/DealAttributeGetPagedListResponse'

const DefaultLimit = 10
const DefaultSortBy = 'CreateDateTime'
const DefaultOrderBy = 'desc'

export default interface DealAttributesState {
    request: DealAttributeGetPagedListRequest
    setRequest: (request: DealAttributeGetPagedListRequest) => void
    isLoading: boolean
    attributes: DealAttribute[]
    total: number
    lastModifyDateTime: string
    getPagedList: () => Promise<void>
    getAll: () => Promise<DealAttributeGetPagedListResponse>
}

export const dealAttributesInitialState: DealAttributesState = {
    request: {
        isDeleted: false,
        offset: 0,
        limit: DefaultLimit,
        sortBy: DefaultSortBy,
        orderBy: DefaultOrderBy
    },
    setRequest: (_: DealAttributeGetPagedListRequest) => void 0,
    isLoading: false,
    attributes: [],
    total: 0,
    lastModifyDateTime: '',
    getPagedList: () => Promise.resolve(void 0),
    getAll: () => Promise.resolve({ totalCount: 0 })
}
