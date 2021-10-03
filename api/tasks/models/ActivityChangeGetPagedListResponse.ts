import ActivityChange from './ActivityChange'

export default interface ActivityChangeGetPagedListResponse {
    totalCount: number
    changes?: ActivityChange[]
}
