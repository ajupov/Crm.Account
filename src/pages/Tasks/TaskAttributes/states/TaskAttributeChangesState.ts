import TaskAttributeChange from '../../../../../api/tasks/models/TaskAttributeChange'
import TaskAttributeChangeGetPagedListRequest from '../../../../../api/tasks/models/TaskAttributeChangeGetPagedListRequest'
import TaskAttributeChangeGetPagedListResponse from '../../../../../api/tasks/models/TaskAttributeChangeGetPagedListResponse'

const DefaultLimit = 10
const DefaultSortBy = 'CreateDateTime'
const DefaultTaskBy = 'desc'

export default interface TaskAttributeChangesState {
    request: TaskAttributeChangeGetPagedListRequest
    setRequest: (request: TaskAttributeChangeGetPagedListRequest) => void
    isLoading: boolean
    changes: TaskAttributeChange[]
    total: number
    getAll: () => Promise<TaskAttributeChangeGetPagedListResponse | undefined>
}

export const taskAttributeChangesInitialState: TaskAttributeChangesState = {
    request: {
        attributeId: '',
        minCreateDate: void 0,
        maxCreateDate: void 0,
        offset: 0,
        limit: DefaultLimit,
        sortBy: DefaultSortBy,
        orderBy: DefaultTaskBy
    },
    setRequest: (_: TaskAttributeChangeGetPagedListRequest) => void 0,
    isLoading: false,
    changes: [],
    total: 0,
    getAll: () => Promise.resolve({ totalCount: 0 })
}
