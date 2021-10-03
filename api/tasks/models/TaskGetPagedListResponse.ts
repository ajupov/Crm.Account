import Task from './Task'

export default interface TaskGetPagedListResponse {
    totalCount: number
    lastModifyDateTime?: string
    tasks?: Task[]
}
