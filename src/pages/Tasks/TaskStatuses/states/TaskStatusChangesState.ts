import TaskStatusChange from '../../../../../api/tasks/models/TaskStatusChange'
import TaskStatusChangeGetPagedListRequest from '../../../../../api/tasks/models/TaskStatusChangeGetPagedListRequest'
import TaskStatusChangeGetPagedListResponse from '../../../../../api/tasks/models/TaskStatusChangeGetPagedListResponse'

const DefaultLimit = 10
const DefaultSortBy = 'CreateDateTime'
const DefaultTaskBy = 'desc'

export default interface TaskStatusChangesState {
    request: TaskStatusChangeGetPagedListRequest
    setRequest: (request: TaskStatusChangeGetPagedListRequest) => void
    isLoading: boolean
    changes: TaskStatusChange[]
    total: number
    getAll: () => Promise<TaskStatusChangeGetPagedListResponse | undefined>
}

export const taskStatusChangesInitialState: TaskStatusChangesState = {
    request: {
        statusId: '',
        minCreateDate: void 0,
        maxCreateDate: void 0,
        offset: 0,
        limit: DefaultLimit,
        sortBy: DefaultSortBy,
        orderBy: DefaultTaskBy
    },
    setRequest: (_: TaskStatusChangeGetPagedListRequest) => void 0,
    isLoading: false,
    changes: [],
    total: 0,
    getAll: () => Promise.resolve({ totalCount: 0 })
}
