import CustomerSourceChange from './CustomerSourceChange'

export default interface CustomerSourceChangeGetPagedListResponse {
    totalCount: number
    changes?: CustomerSourceChange[]
}
