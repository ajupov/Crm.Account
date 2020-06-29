import ContactAttributeChange from '../models/ContactAttributeChange'

export default interface ContactAttributeChangeGetPagedListResponse {
    totalCount: number
    changes?: ContactAttributeChange[]
}
