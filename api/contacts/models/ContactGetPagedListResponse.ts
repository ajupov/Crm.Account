import Contact from '../models/Contact'

export default interface ContactGetPagedListResponse {
    totalCount: number
    lastModifyDateTime?: string
    contacts?: Contact[]
}
