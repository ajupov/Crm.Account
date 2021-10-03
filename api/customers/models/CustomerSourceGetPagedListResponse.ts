import CustomerSource from './CustomerSource'

export default interface CustomerSourceGetPagedListResponse {
    totalCount: number
    lastModifyDateTime?: string
    sources?: CustomerSource[]
}
