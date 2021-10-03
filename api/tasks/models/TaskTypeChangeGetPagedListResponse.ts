import TaskTypeChange from './TaskTypeChange'

export default interface TaskTypeChangeGetPagedListResponse {
    totalCount: number
    changes?: TaskTypeChange[]
}
