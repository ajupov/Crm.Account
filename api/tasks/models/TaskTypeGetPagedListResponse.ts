import TaskType from './TaskType'

export default interface TaskTypeGetPagedListResponse {
    totalCount: number
    lastModifyDateTime?: string
    types?: TaskType[]
}
