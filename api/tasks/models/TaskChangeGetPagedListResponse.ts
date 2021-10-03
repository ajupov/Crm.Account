import TaskChange from './TaskChange'

export default interface TaskChangeGetPagedListResponse {
    totalCount: number
    changes?: TaskChange[]
}
