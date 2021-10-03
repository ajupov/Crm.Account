import CustomerAttributeChange from './CustomerAttributeChange'

export default interface CustomerAttributeChangeGetPagedListResponse {
    totalCount: number
    changes?: CustomerAttributeChange[]
}
