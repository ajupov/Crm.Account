import TaskTypeChange from '../../../../../api/tasks/models/TaskTypeChange'
import TaskTypeChangeGetPagedListRequest from '../../../../../api/tasks/models/TaskTypeChangeGetPagedListRequest'
import TaskTypeChangeGetPagedListResponse from '../../../../../api/tasks/models/TaskTypeChangeGetPagedListResponse'

const DefaultLimit = 10
const DefaultSortBy = 'CreateDateTime'
const DefaultTaskBy = 'desc'

export default interface TaskTypeChangesState {
    request: TaskTypeChangeGetPagedListRequest
    setRequest: (request: TaskTypeChangeGetPagedListRequest) => void
    isLoading: boolean
    changes: TaskTypeChange[]
    total: number
    getAll: () => Promise<TaskTypeChangeGetPagedListResponse | undefined>
}

export const taskTypeChangesInitialState: TaskTypeChangesState = {
    request: {
        typeId: '',
        minCreateDate: void 0,
        maxCreateDate: void 0,
        offset: 0,
        limit: DefaultLimit,
        sortBy: DefaultSortBy,
        orderBy: DefaultTaskBy
    },
    setRequest: (_: TaskTypeChangeGetPagedListRequest) => void 0,
    isLoading: false,
    changes: [],
    total: 0,
    getAll: () => Promise.resolve({ totalCount: 0 })
}
