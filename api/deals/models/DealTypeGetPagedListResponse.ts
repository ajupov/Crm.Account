import DealType from '../models/DealType'

export default interface DealTypeGetPagedListResponse {
    totalCount: number
    lastModifyDateTime?: string
    types?: DealType[]
}
