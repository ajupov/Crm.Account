import ActivityType from '../models/ActivityType'

export default interface ActivityTypeGetPagedListResponse {
    totalCount: number
    lastModifyDateTime?: string
    types?: ActivityType[]
}
