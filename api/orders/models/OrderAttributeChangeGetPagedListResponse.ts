import OrderAttributeChange from './OrderAttributeChange'

export default interface OrderAttributeChangeGetPagedListResponse {
    totalCount: number
    changes?: OrderAttributeChange[]
}
