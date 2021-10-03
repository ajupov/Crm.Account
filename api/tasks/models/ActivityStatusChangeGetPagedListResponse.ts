import ActivityStatusChange from './ActivityStatusChange'

export default interface ActivityStatusChangeGetPagedListResponse {
    totalCount: number
    changes?: ActivityStatusChange[]
}
