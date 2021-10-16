import TaskType from '../../../../../api/tasks/models/TaskType'
import TaskTypeGetPagedListRequest from '../../../../../api/tasks/models/TaskTypeGetPagedListRequest'
import TaskTypeGetPagedListResponse from '../../../../../api/tasks/models/TaskTypeGetPagedListResponse'

const DefaultLimit = 10
const DefaultSortBy = 'CreateDateTime'
const DefaultTaskBy = 'desc'

export default interface TaskTypesState {
    request: TaskTypeGetPagedListRequest
    setRequest: (request: TaskTypeGetPagedListRequest) => void
    isLoading: boolean
    types: TaskType[]
    total: number
    lastModifyDateTime: string
    getPagedList: () => Promise<void>
    getAll: () => Promise<TaskTypeGetPagedListResponse>
}

export const taskTypesInitialState: TaskTypesState = {
    request: {
        isDeleted: false,
        offset: 0,
        limit: DefaultLimit,
        sortBy: DefaultSortBy,
        orderBy: DefaultTaskBy
    },
    setRequest: (_: TaskTypeGetPagedListRequest) => void 0,
    isLoading: false,
    types: [],
    total: 0,
    lastModifyDateTime: '',
    getPagedList: () => Promise.resolve(void 0),
    getAll: () => Promise.resolve({ totalCount: 0 })
}
