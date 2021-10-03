import DealChange from './DealChange'

export default interface DealChangeGetPagedListResponse {
    totalCount: number
    changes?: DealChange[]
}
