import DealChange from '../models/DealChange'

export default interface DealChangeGetPagedListResponse {
    totalCount: number
    changes?: DealChange[]
}
