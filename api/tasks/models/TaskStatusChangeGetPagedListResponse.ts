import TaskStatusChange from './TaskStatusChange'

export default interface TaskStatusChangeGetPagedListResponse {
    totalCount: number
    changes?: TaskStatusChange[]
}
