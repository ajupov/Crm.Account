import ActivityType from './ActivityType'

export default interface ActivityTypeGetPagedListResponse {
    totalCount: number
    lastModifyDateTime?: string
    types?: ActivityType[]
}
