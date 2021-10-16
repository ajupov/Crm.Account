import TaskAttribute from '../../../../../api/tasks/models/TaskAttribute'
import TaskAttributeGetPagedListRequest from '../../../../../api/tasks/models/TaskAttributeGetPagedListRequest'
import TaskAttributeGetPagedListResponse from '../../../../../api/tasks/models/TaskAttributeGetPagedListResponse'

const DefaultLimit = 10
const DefaultSortBy = 'CreateDateTime'
const DefaultTaskBy = 'desc'

export default interface TaskAttributesState {
    request: TaskAttributeGetPagedListRequest
    setRequest: (request: TaskAttributeGetPagedListRequest) => void
    isLoading: boolean
    attributes: TaskAttribute[]
    total: number
    lastModifyDateTime: string
    getPagedList: () => Promise<void>
    getAll: () => Promise<TaskAttributeGetPagedListResponse>
}

export const taskAttributesInitialState: TaskAttributesState = {
    request: {
        isDeleted: false,
        offset: 0,
        limit: DefaultLimit,
        sortBy: DefaultSortBy,
        orderBy: DefaultTaskBy
    },
    setRequest: (_: TaskAttributeGetPagedListRequest) => void 0,
    isLoading: false,
    attributes: [],
    total: 0,
    lastModifyDateTime: '',
    getPagedList: () => Promise.resolve(void 0),
    getAll: () => Promise.resolve({ totalCount: 0 })
}
