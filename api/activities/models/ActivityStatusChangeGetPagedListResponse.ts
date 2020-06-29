import ActivityStatusChange from '../models/ActivityStatusChange'

export default interface ActivityStatusChangeGetPagedListResponse {
    totalCount: number
    changes?: ActivityStatusChange[]
}
