import TaskAttribute from './TaskAttribute'

export default interface TaskAttributeGetPagedListResponse {
    totalCount: number
    lastModifyDateTime?: string
    attributes?: TaskAttribute[]
}
