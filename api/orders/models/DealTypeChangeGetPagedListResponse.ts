import DealTypeChange from './DealTypeChange'

export default interface DealTypeChangeGetPagedListResponse {
    totalCount: number
    changes?: DealTypeChange[]
}
