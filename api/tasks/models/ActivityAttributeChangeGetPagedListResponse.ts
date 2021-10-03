import ActivityAttributeChange from './ActivityAttributeChange'

export default interface ActivityAttributeChangeGetPagedListResponse {
    totalCount: number
    changes?: ActivityAttributeChange[]
}
