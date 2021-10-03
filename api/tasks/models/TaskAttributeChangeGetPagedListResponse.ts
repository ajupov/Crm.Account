import TaskAttributeChange from './TaskAttributeChange'

export default interface TaskAttributeChangeGetPagedListResponse {
    totalCount: number
    changes?: TaskAttributeChange[]
}
