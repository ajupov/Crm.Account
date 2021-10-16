import TaskStatus from '../../../../../api/tasks/models/TaskStatus'
import TaskStatusGetPagedListRequest from '../../../../../api/tasks/models/TaskStatusGetPagedListRequest'
import TaskStatusGetPagedListResponse from '../../../../../api/tasks/models/TaskStatusGetPagedListResponse'

const DefaultLimit = 10
const DefaultSortBy = 'CreateDateTime'
const DefaultTaskBy = 'desc'

export default interface TaskStatusesState {
    request: TaskStatusGetPagedListRequest
    setRequest: (request: TaskStatusGetPagedListRequest) => void
    isLoading: boolean
    statuses: TaskStatus[]
    total: number
    lastModifyDateTime: string
    getPagedList: () => Promise<void>
    getAll: () => Promise<TaskStatusGetPagedListResponse>
}

export const taskStatusesInitialState: TaskStatusesState = {
    request: {
        isDeleted: false,
        offset: 0,
        limit: DefaultLimit,
        sortBy: DefaultSortBy,
        orderBy: DefaultTaskBy
    },
    setRequest: (_: TaskStatusGetPagedListRequest) => void 0,
    isLoading: false,
    statuses: [],
    total: 0,
    lastModifyDateTime: '',
    getPagedList: () => Promise.resolve(void 0),
    getAll: () => Promise.resolve({ totalCount: 0 })
}
