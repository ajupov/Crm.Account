import TaskStatus from './TaskStatus'

export default interface TaskStatusGetPagedListResponse {
    totalCount: number
    lastModifyDateTime?: string
    statuses?: TaskStatus[]
}
