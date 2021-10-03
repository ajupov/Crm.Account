import ActivityStatus from './ActivityStatus'

export default interface ActivityStatusGetPagedListResponse {
    totalCount: number
    lastModifyDateTime?: string
    statuses?: ActivityStatus[]
}
