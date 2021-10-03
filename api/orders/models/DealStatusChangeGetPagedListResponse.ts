import DealStatusChange from './DealStatusChange'

export default interface DealStatusChangeGetPagedListResponse {
    totalCount: number
    changes?: DealStatusChange[]
}
