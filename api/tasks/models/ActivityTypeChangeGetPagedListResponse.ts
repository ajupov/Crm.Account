import ActivityTypeChange from './ActivityTypeChange'

export default interface ActivityTypeChangeGetPagedListResponse {
    totalCount: number
    changes?: ActivityTypeChange[]
}
