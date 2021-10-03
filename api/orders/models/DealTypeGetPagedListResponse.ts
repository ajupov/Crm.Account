import DealType from './DealType'

export default interface DealTypeGetPagedListResponse {
    totalCount: number
    lastModifyDateTime?: string
    types?: DealType[]
}
