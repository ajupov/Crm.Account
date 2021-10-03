import CustomerChange from './CustomerChange'

export default interface CustomerChangeGetPagedListResponse {
    totalCount: number
    changes?: CustomerChange[]
}
