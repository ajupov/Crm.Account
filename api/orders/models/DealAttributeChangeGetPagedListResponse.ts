import DealAttributeChange from './DealAttributeChange'

export default interface DealAttributeChangeGetPagedListResponse {
    totalCount: number
    changes?: DealAttributeChange[]
}
